# Example pulumi docker repository to reproduce issue with dynamic arguments

see https://github.com/pulumi/pulumi-docker/issues/620

```shell
% pulumi preview
Please choose a stack, or create a new one: skunkteam/dev
Previewing update (skunkteam/dev)

View in Browser (Ctrl+O): https://app.pulumi.com/skunkteam/docker/dev/previews/46693a0c-b2ef-4a8f-9c0c-09b5a245c64d

     Type                        Name        Plan       Info
     pulumi:pulumi:Stack         docker-dev             
 +   ├─ random:index:RandomUuid  guid        create     
     └─ docker:index:Image       image                  1 error


Diagnostics:
  docker:index:Image (image):
    error: could not open dockerfile at relative path Dockerfile: stat Dockerfile: no such file or directory
```


```shell
% pulumi about
CLI          
Version      3.65.1
Go Version   go1.20.3
Go Compiler  gc

Plugins
NAME    VERSION
docker  4.2.0
nodejs  unknown
random  4.13.0

Host     
OS       darwin
Version  13.3.1
Arch     arm64

This project is written in nodejs: executable='/Users/*****/.nvm/versions/node/v16.17.1/bin/node' version='v16.17.1'

Backend        
Name           pulumi.com
URL            https://app.pulumi.com/*****
User           *****
Organizations  *****, *****

Dependencies:
NAME            VERSION
@pulumi/docker  4.2.0
@pulumi/pulumi  3.65.1
@pulumi/random  4.13.0
@types/node     16.18.25

Pulumi locates its logs in /var/folders/16/6r7yw0gd7593qv1z1zsp6xbh0000gn/T/ by default
warning: Failed to get information about the current stack: No current stack
```
