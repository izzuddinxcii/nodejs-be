
# CRUD Using Node.JS
Creating simple CRUD to create and manage user. Deployed on AWS Elastic Beanstalk and using MongoDB.

Deployed using AWS CodePipeline to Release on Production.
## API Reference

#### Base URL

http```
  http://etiqa.ap-southeast-1.elasticbeanstalk.com
```

#### Get all Users

`
  GET /users
`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get a User

`
  GET /user/${username}
`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`| `string` | **Required**. Username of user    |

#### Search User

`
  GET /users/${query}
`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `query`   | `string` | **Required**. Any keyword to query|

#### Check Username is Exist

`
  GET /username/${username}
`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`| `string` | **Required**. Username to check   |

#### Create a New User

`
  POST /user/
`

| Parameter  | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| `username` | `string` | **Required, Unique**. Username of user|
| `email`    | `string` | **Required, Unique**. Email of user   |
| `password` | `string` | **Required**. User password           |
| `phone`    | `string` | **Required**. User phone number       |
| `skillSets`| `array`  | **Required**. List of Skill Sets      |
| `hobby`    | `array`  | **Required**. List of Hobby           |

#### Update a New User

`
  PUT /user/${username}
`

| Parameter  | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| `username` | `string` | **Required, Unique**. Username of user|
| `email`    | `string` | **Required, Unique**. Email of user   |
| `password` | `string` | **Required**. User password           |
| `phone`    | `string` | **Required**. User phone number       |
| `skillSets`| `array`  | **Required**. List of Skill Sets      |
| `hobby`    | `array`  | **Required**. List of Hobby           |

`
  DELETE /user/${username}
`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`| `string` | **Required**. Username of user    |



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URL`

## Roadmap

- Add Authentication to validate User Password

- Using JWT Based Authentication

- Create a Swagger
