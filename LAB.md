## Submission Instructions
* Set up Travis CI on your forked repo **if you are writing tests**
* Open a pull request to your master branch.
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

#### Server Module
The start and stop methods should each return a promise that resolves on success and rejects on error.

###### GET /cowsay?text={message}
When a client makes a GET request to /cowsay?text={message} the server should parse the querystring for a text key. 
It should then send a rendered HTML page with a cowsay cow speaking the value of the text query. 
If their is no text query the cow message should be a random string taken from the `Faker` package. 
Don't know how to use the `Faker` package? Be a resourceful developer and figure it out [here](https://www.npmjs.com/package/faker).
``` html
<!DOCTYPE html>
<html>
  <head>
    <title> cowsay </title>
  </head>
  <body>
    <h1> Welcome to Cowsay! </h1>
    <pre>
      <!-- cowsay.say({text: req.query.text}) -->
    </pre>
  </body>
</html>
```

###### GET /api/cowsay?text={message}
When a client makes a GET request to /api/cowsay it should send JSON that includes `{"text": "<message>"}`. 
The server should respond with a JSON body `{"content": "<cowsay cow saying the message in the query string>"}`.

A response for a valid Requests should have a status code of **200** and the JSON body
``` json
{
  "content": "<cowsay cow saying the message in the query string>"
}
```

A response for a invalid Requests should have a status code of **400** and the JSON body...
```
{
  "error": "invalid request: text query required"
}
```

###### POST /api/cowsay
When a client makes a POST request to /api/cowsay it should send JSON that includes `{"text": "<message>"}`. 
The server should respond with a JSON body `{"content": "<cowsay cow saying the posted message>"}`.

| Request | Response Status Code | Response Type | Response Body |
| -- | -- | -- | -- |
| With out a body | 400 | JSON | `{"error": "invalid request: body required"}` |
| With out text property on the body | 400 | JSON | `{"error": "invalid request: text query required"}` |
| With text query | 200 | JSON | `{"content": "<cowsay cow text>"}` |

## Tests (up to 3 bonus points)
* Write tests for your `POST /api/cowsay route`, `GET /api/cowsay?text={message} route`, and one more route of your choice. Write at least **two** test assertions for each route. 
* Your `POST /api/cowsay route` and your `GET /api/cowsay?text={message} route` should include tests that check for 400 errors on a bad request. 

## HTTPie commands
* `http GET :3000/pathname text=="judy vue"`
* `http GET :3000/pathname?text=hello`
* `http :3000/pathname?text=hello **defaults to a GET request when no verb is put in**`
* `http POST :3000/pathname name=vincio`

## Documentation
Add your Travis badge to to the top of your README.md **if you are writing tests**. 
Tell a user how to use your API. List out the routes you have registered and explain the RESTful verbs a user must use to get a valid response. 
Explain what is received when a valid request is made and what is received when an invalid request is made. 
