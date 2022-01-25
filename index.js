'use strict';
const AWS = require('aws-sdk');
const sharp = require('sharp');
const { basename, extname } = require('path');
const S3 = new AWS.S3();

const optimazedImage = async (oldImage) => {
  const image = await sharp(oldImage.Body)
    .resize(1280, 720, {
      fit: 'inside',
      withoutEnlargement: true,
    })
    .toFormat('jpeg', { progressive: true, quality: 50 })
    .toBuffer();
  return image;
};

module.exports.handle = async (event) => {
  const { Records: records } = event;
  try {
    await Promise.all(
      records.map(async (record) => {
        console.log(record);
        const { key } = record.s3.object;
        const image = await S3.getObject({
          Bucket: process.env.bucket,
          Key: key,
        }).promise();

        const newImage = await optimazedImage(image);
        var params = {
          Body: newImage,
          Bucket: process.env.bucket,
          // ContentType: 'image/jpeg',
          Key: `compressed/${basename(key, extname(key))}.jpg`,
        };
        await S3.putObject(params).promise();
      })
    );

    return {
      status: 201,
      body: {},
    };
  } catch (error) {
    return error;
  }
};
