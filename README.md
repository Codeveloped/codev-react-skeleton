# React skeleton build on: Ant Design, Redux & Redux form #

A skeleton for rapid development of admin-environments

## Environment running ##

1. Set your NODE_ENV to the desired environment (development)
    `export NODE_ENV=development`

### TODO! ###
2. Run the dockers (if any)
        For OSX: `eval $(docker-machine env default)`
        `docker-compose up --build`

    > OSX: See nginx folder, or copy docker/nginx-development/sites-enabled/proxy.conf to nginx conf or [set a proxy to the nginx docker](https://forums.docker.com/t/using-localhost-for-to-access-running-container/3148/6) Don't forget to update your host file.

## React ##
Folder: web/react

1. Installing node modules
    `yarn install`

2. Running React
    `yarn run start`

3. Building WIDGET
    `yarn run build`
    > the generated code ends up in the web/react/build folder

## Server ##
### Not applicable yet!! ###
Folder: web/server

1. Installing node modules
    `yarn install`

2. Running Server
    `NODE_ENV=development node index.js`

# Notes #
React will open a browser window with URL localhost:3000. Change the port to 8000, so you're using React through Nginx. If you used a set-up like the examples folder your project will be available at http://ah.local 