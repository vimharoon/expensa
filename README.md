[![Build Status](http://178.62.206.17/buildStatus/icon?job=expensa%2Fmaster)](http://178.62.206.17/job/expensa/job/master/)
# expensa

<p align="center">
  <img src="./backend-nodejs/public/favicon.ico" width="100" height="100">
</p>
Hi! **EXPENSA** is a budget management application. The purpose of the application is to simplify the controle of your expenses and make Your life easy.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
What things you need to install the software and how to install them
```
Vue.js: npm install -g @vue/cli
Node.js: https://nodejs.org/en/download/
```

### Installing
A step by step series of examples that tell you how to get a development env running

1. Clone repo with this command (make sur you have git installed on your machine)
```
git clone https://github.com/MrWOLFF24/expensa.git
```
2. Install dependencies
```
cd expensa && npm install
```
3. Run project
```
npm start
```

## Running the tests
The unit test are written with **chai** and **mocha**, all tests must be in tests folder

Run tests
```
npm run test
```

## Deployment
In develepment mode the commande ``` npm start ``` is used to run server width **nodemon**
In production mode please use ``` npm run production ``` to run the project with **pm2** process manager, be sur to install **pm2** in global

## Built With
- [Travis-ci](https://travis-ci.com/) - Continuous Integration Tool
- [NPM](https://www.npmjs.com/) - Dependency Management
- [Node.js](https://nodejs.org/en/) - Server side Javascript
- [Vue.js](https://cli.vuejs.org) - Front-end framework
- [Bulma.io](https://bulma.io/) - CSS framework

## Contributing
Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/MrWOLFF24/expensa/tags).

## Authors
- **Haroon MOHAMMAD** - _Initial work_ - [MrWOLFF24](https://github.com/MrWOLFF24)
See also the list of [contributors](https://github.com/MrWOLFF24/expensa/contributors) who participated in this project.

## License
This project is licensed under the [MIT](https://opensource.org/licenses/mit-license.php) License - see the [LICENSE.md](LICENSE.md) file for details
