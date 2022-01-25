# **_Lambda function with s3 bucket trigger_**

Lambda is a compute service that lets you run code without provisioning or managing servers. Lambda runs your code on a high-availability compute infrastructure and performs all of the administration of the compute resources, including server and operating system maintenance, capacity provisioning and automatic scaling, code monitoring and logging. With Lambda, you can run code for virtually any type of application or backend service.

How it works:

- [x] WHEN MULTIMEDIA DATA IS UPLOADED (_S3:OBJECTCREATED_) THE LAMBDA FUNCTION IS TRIGGERED
- [x] TRIGGER FIRES WHEN UPLOADED TO THE _UPLOADS_ DIRECTORY
- [x] THE LAMBDA FUNCTION RESIZES AND REDUCES THE SIZE TO 50% OF THE FILE
- [x] THE RESULTING FILE IS STORED IN THE _COMPROSSED_ DIRECTORY
