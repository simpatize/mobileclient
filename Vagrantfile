VAGRANTFILE_API_VERSION = "2"
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.network "forwarded_port", guest: 8100, host: 8100
  config.vm.network "forwarded_port", guest: 35729, host: 35729
  config.vm.network "forwarded_port", guest: 3000, host: 3000

  config.vm.synced_folder ".", "/home/vagrant/mobileclient"

  config.vm.provision 'ansible' do |ansible|
    ansible.playbook = "provisioning/playbook.yml"
    ansible.raw_arguments = ['-v']
  end

  config.vm.provider "virtualbox" do |vb|
    vb.customize ["modifyvm", :id, "--vram", "128"]
    vb.customize ["modifyvm", :id, "--usb", "on"]
    vb.customize ["usbfilter", "add", "0", "--target", :id, "--name", "android", "--vendorid", "0x22b8"]
    vb.name = "IonicBox"
    vb.memory = 2048
    vb.cpus = 2
  end
end
