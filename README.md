## Blackswan Assessment:

By James Barnes

A simple NodeJS restful application that manages users and tasks for those users.

### N.B.
* Make a .env and a database.json file with the appropriate DB connection details.
* Run ```npm install```
* Run ```db-migrate up```

#### Starting point
http://www.c-sharpcorner.com/article/creating-web-api-using-node-js-and-mysql/

This was my foundation, which I learn't from and adapted to the needs of the assessment. The similarities between Express and Laravel in terms of some basic structure made it easier to learn.

#### Overall thoughts
I enjoyed the assessment, definitly could have improved it but it works well enough (so far as I tested)
Ways it could have been improved:
* Typescript (For learning)
* Tests
* Check if sanitization happens or not, if not implement a solution to avoid code injection etc.
* The idea of how to convert users into a fully fledged authentication system came to mind so research into how to create one for fun
*  API queries to view pending and/or done tasks

---

#### Create user
```sh
curl -i -H "Content-Type: application/json" -X POST -d '{"username":"jsmith","first_name" : "John", "last_name" : "Smith"}' http://hostname/api/users
```

#### Update user
```
curl -i -H "Content-Type: application/json" -X PUT -d '{"first_name" : "John", "last_name" : "Doe"}' http://hostname/api/users/{id}
```

#### List all users
```sh
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://hostname/api/users
```

#### Get User info
```sh
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://hostname/api/users/{id}
```

#### Create Task
```sh
curl -i -H "Content-Type: application/json" -X POST -d '{"name":"My task","description" : "Description of task", "date_time" : "2016-05-25 14:25:00"}' http://hostname/api/users/{user_id}/tasks
```

#### Update Task
```sh
curl -i -H "Content-Type: application/json" -X PUT -d '{"name":"My updated task"}' http://hostname/api/users/{user_id}/tasks/{task_id}
```

#### Delete Task
```sh
curl -i -H "Content-Type: application/json" -X DELETE http://hostname/api/users/{user_id}/tasks/{task_id}
```

#### Get Task Info
```sh
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://hostname/api/users/{user_id}/tasks/{task_id}
```

#### List all tasks for a user

```sh
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://hostname/api/users/{user_id}/tasks
```
