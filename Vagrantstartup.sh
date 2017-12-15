apt-get -qqy update
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g webpack
cd /vagrant
npm install --no-bin-links
npm run build
curl https://bootstrap.pypa.io/get-pip.py | sudo python3
sudo apt-get -qqy install build-essential libssl-dev libffi-dev python3-dev
pip install -r requirements.txt
