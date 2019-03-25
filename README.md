# Cleaner Jokes

Cleaner jokes is a full stack app for finding and favoriting jokes in PG rated categories :) 

![](/image/2019-03-23-17-18-27.png)


**Created with:** Javascript, React, Mysql, knex, Express, Sass

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Install [MySQL on Homebrew](https://gist.github.com/nrollr/3f57fc15ded7dddddcc4e82fe137b58e)
- *these are instructions for MacOS*
- *don't forget to create a password*
### Installing
Install all node module dependencies
```
npm install
```
Run MySQL server on localhost with Homebrew
```
brew services run mysql
```
create database with table
```
mysql -u root -p < server/schema.sql
```
seed mysql
```
npm run seed:mysql
```
build webpack to transpile ES6 + JSX to ES5
```
npm run build
```
start server
```
npm run start
```
Navigate to
```
http://localhost:3000
```
