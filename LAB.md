## Submission Instructions
* Set up Travis CI on your forked repo **if you are writing tests**
* Open a pull request to your master branch.
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Tests (up to 3 bonus points)
* Write tests for your `POST /api/cowsay route`, `GET /api/cowsay?text={message} route`, and one more route of your choice. Write at least **two** test assertions for each route. 
* Your `POST /api/cowsay route` and your `GET /api/cowsay?text={message} route` should include tests that check for 400 errors on a bad request. 

## HTTPie commands
* `http GET :3000/pathname?text=hello`
* `http POST :3000/pathname name=vincio`

## Documentation
Add your Travis badge to to the top of your README.md **if you are writing tests**. 
Tell a user how to use your API. List out the routes you have registered and explain the RESTful verbs a user must use to get a valid response. 
Explain what is received when a valid request is made and what is received when an invalid request is made. 
