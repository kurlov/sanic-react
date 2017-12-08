apt-get -qqy update
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
apt-get -qqy install -y nodejs
sudo npm install -g webpack
cd /vagrant
npm install --no-bin-links
npm run build
