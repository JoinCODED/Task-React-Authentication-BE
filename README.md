# TASK-NAME

Authentication chat backend.

## Instructions

```js
Endpoints:

Signin:
Endpoint: https://coded-task-authentication-be.herokuapp.com/signin
POST
Data required: username,password

Signup:
Endpoint: https://coded-task-authentication-be.herokuapp.com/signup
POST
Data required: username,password

Fetch all rooms:
Endpoint: https://coded-task-authentication-be.herokuapp.com/rooms
GET

Create a room:
Endpoint: https://coded-task-authentication-be.herokuapp.com/rooms
Method: POST
Data required: title,image,description

Update a room:
Endpoint: https://coded-task-authentication-be.herokuapp.com/rooms/${roomId}
Method: PUT
Data required: title,image,description

Delete a room:
Endpoint: https://coded-task-authentication-be.herokuapp.com/rooms/${roomId}
Method: Delete

Create a msg:
Endpoint: https://coded-task-authentication-be.herokuapp.com/rooms/msg/${roomId}
Method: POST
Data required: msg


```
