## Setup Nginx Reverse Proxy with Docker Containers (Host machine linux and ubuntu) ##
Setup nginx web server as a reverse proxy with docker containers and deploy simple node.js application.

# 1. Host Machine Linux

yum install nginx -y

systemctl start nginx

systemctl enable nginx

git clone https://github.com/iimrankhan98/nodejs-on-ec2.git

docker build -t web-app:v1 .

docker run -dit --name web-app  web-app:v1

Go to nginx.conf file:- vim /etc/nginx/nginx.conf and Add docker url " http://172.17.0.2:8081; "

systemctl restart nginx

nginx -t



# 2. Host Machine Ubuntu

apt install nginx -y

service nginx status

Go to nginx.conf file:- vim /etc/nginx/nginx.conf and Add docker url " http://172.17.0.2:8081; "

