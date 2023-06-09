![CSS](https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-EF3939?style=for-the-badge&logo=Prisma&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-005571?style=for-the-badge&logo=fastapi)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

### This is an online delivery application like Glovo, which allows you to order and arrange delivery of products to the specified address.
### The technologies used are React.js, Redux.js, Nest.js, Prisma, PostgreSQL.

### Implemented in the project:
#### - google maps - specifying the address with a marker, displaying the store icon on the map at the address of the store, calculating the distance and time depending on the method of delivery on foot or by car, setting the delivery address via input, depending on the method of delivery on foot or by car;
#### - captcha;
#### - placing orders and saving order's data in DB;
#### - History of orders;
#### - ordering goods only in one store;
#### - DB seeding;
#### - deploy Back End part on Heroku and Front End part on Netlify.

___

`🎨` Design ideas for this project were taken from https://dribbble.com

### To launch the app you should:

### Install npm modules on the Client and the Server`☕`
```bash
$ cd client
$ npm install

$ cd server
$ npm install
```
___

### Setup environment on the Client and the Server`🔧`
```bash

1. Create inside client/server dir file .env
2. Copy content from .env.dist to .env
3. Change the data in the .env file to required

```
___

### Run the app on the Client`🚀`
```bash

# development mode
$ npm run dev

# production mode
$ npm run start
```
______

### Run the app on the Server`🏃`
```bash

# development mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
___

### Seed the DB`🌱`
```bash

# development mode
$ npm run seed
```
___
### Create and run migration in the DB`🐪`
```bash

# development mode
$  npx prisma migrate dev --name shopAddressAndIcon
```
# Heroku deploy mode
$  npx prisma migrate deploy
```
___