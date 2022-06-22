# Post-CMS

## General info

This project is content management system.

## Technologies

- Next.js / React
- Typescript

## Setup

To run this project, install it locally using npm:

##### Setup for backend

```SH
$ cd backend
$ npm install
$ npm start
```

##### Setup for client

```SH
$ cd client
$ npm install
$ npm run dev
```

##### Secrets / Enviroment Variables

these variables should be defined in .env file in root directory (parent folder of the `src`)

```
@required
MONGO_URI: url to mongodb cluster (mongodb://localhost:27017)

@required
JWT_KEY: JWT secret to sign tokens (any string is accepted)

@required
AWS_S3_ACCESS_KEY_ID: Programmatic access key ID for AWS S3

@required
AWS_S3_SECRET_ACCESS_KEY: Programmatic secret access key for AWS S3

@required
AWS_S3_BUCKET_NAME: Bucket name for AWS S3
```
