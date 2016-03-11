# Mobile Client


[![Stories in Ready](https://badge.waffle.io/simpatize/mobileclient.svg?label=ready&title=Board(Ready to Dev))](http://waffle.io/simpatize/simpatize.github.io)

## Development setup in Vagrant
First you must install the required Ansible roles using **ansible-galaxy**:

```
ansible-galaxy install martinmicunda.common nodesource.node laggyluke.direnv --force
```

Run 'vagrant up' inside the repository folder and wait for it to complete.
After that, execute 

```
vagrant ssh
```

to log into the resultant virtual machine and run 

```
npm start
```

to start the server.
If this last command complains about multiple available addresses, **do not** choose *localhost*, otherwise you won't be able to open the application in a browser outside the virtual machine.
After having started the server, open a browser in your host machine and go to [http://localhost:8100](http://localhost:8100).
