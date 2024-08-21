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

# Install Docker on Ubuntu

sudo apt-get install apt-transport-https ca-certificates curl software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

sudo apt-get install docker-ce

service docker status

# Install Nginx on Ubuntu

apt install nginx -y

service nginx status

# Add Reverse Proxy Configuration:

Go to nginx.conf file:- vim /etc/nginx/nginx.conf and reverse proxy configuration

----------------------------------------------------------------------
server {
                listen 80;
                server_name 15.207.100.222;
                location / {
                        proxy_pass http://172.17.0.2:80;
                }

        }
-----------------------------------------------------------------------
