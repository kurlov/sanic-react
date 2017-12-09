# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.provision "shell", path: "Vagrantstartup.sh"
  config.vm.box = "generic/ubuntu1604"
  config.vm.network "forwarded_port", guest: 5000, host: 5000
  # You might want to comment this line unless you use hyper V as a provider with SMB
  config.vm.synced_folder ".", "/vagrant", type: "smb"
end
