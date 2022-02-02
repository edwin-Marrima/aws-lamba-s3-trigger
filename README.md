# **_Lambda function with s3 bucket trigger_**

Lambda is a compute service that lets you run code without provisioning or managing servers. Lambda runs your code on a high-availability compute infrastructure and performs all of the administration of the compute resources, including server and operating system maintenance, capacity provisioning and automatic scaling, code monitoring and logging. With Lambda, you can run code for virtually any type of application or backend service.

How it works:

- [x] WHEN MULTIMEDIA DATA IS UPLOADED (_S3:OBJECTCREATED_) THE LAMBDA FUNCTION IS TRIGGERED
- [x] TRIGGER FIRES WHEN UPLOADED TO THE _UPLOADS_ DIRECTORY
- [x] THE LAMBDA FUNCTION RESIZES AND REDUCES THE SIZE TO 50% OF THE FILE
- [x] THE RESULTING FILE IS STORED IN THE _COMPROSSED_ DIRECTORY

## Instalation

**_Use the javascript package manager npm_**

```bash
npm install
```

Lambda functions run on **LINUX** instances on aws servers. Therefore, it is necessary that the installation of the packages be done in such a way that it is compatible with the **LINUX** operating system. The command, **rmdir /Q /S node_modules && npm install --platform=linux --arch=x64 sharp** delete node_modules files installed on Windows OS and install for x64 architecture and **LINUX** OS
