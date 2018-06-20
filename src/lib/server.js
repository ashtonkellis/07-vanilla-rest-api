'use strict';

const http = require('http');
const cowsay = require('cowsay');
const bodyParser = require('./body-parser.js');
const faker = require('faker');

const server = module.exports = {};

const cowsayLandingPage = `
<!DOCTYPE html>
<html>
  <head>
    <title> cowsay </title>
  </head>
  <body>
   <header>
     <nav>
       <ul>
         <li><a href="/api/cowsayPage?text=Moo!">What does the cow say?</a></li>
       </ul>
     </nav>
   <header>
   <main>
     <p>Welcome to this awesome cowsay page.</p>
     <p>It's udderly unbeefievably good!</p>
   </main>
  </body>
</html>
`;

const app = http.createServer((req, res) => {
  bodyParser(req)
    .then((parsedRequest) => {
      if (parsedRequest.method === 'GET' && parsedRequest.url.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(cowsayLandingPage);
        res.end();
        return undefined;
      }
      
      if (parsedRequest.method === 'GET' && parsedRequest.url.pathname === '/api/time') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({
          date: new Date(),
        }));
        res.end();
        return undefined;
      }

      if (parsedRequest.method === 'GET' && parsedRequest.url.pathname === '/api/cowsay') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const cowsayText = cowsay.say({
          text: parsedRequest.url.query.text || faker.company.catchPhrase(),
        });
        res.write(JSON.stringify({
          content: cowsayText,
        }));
        res.end();
        return undefined;
      }

      if (parsedRequest.method === 'GET' && parsedRequest.url.pathname === '/api/cowsayPage') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const cowsayText = cowsay.say({
          text: parsedRequest.url.query.text || faker.company.catchPhrase(),
        });
        res.write(`<section><h3><a href="time">Click here for current time</a></h3><pre>${cowsayText}</pre></section>`);
        res.end();
        return undefined;
      }

      if (parsedRequest.method === 'POST' && parsedRequest.url.pathname === '/api/echo') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(parsedRequest.body));
        res.end();
        return undefined;
      }

      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('NOT FOUND');
      res.end();
      return undefined;
    })
    .catch((err) => {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      console.error(err);
      res.write('NO MILK FOR YOU!!!');
      res.end();
      return undefined;
    });
});

server.start = (port, callback) => {
  return new Promise((resolve, reject) => {
    try {
      app.listen(port);
      return resolve(callback());
    } catch (err) {
      return reject(err);
    }
  });
};

server.stop = (callback) => {
  return new Promise((resolve, reject) => {
    try {
      app.close();
      return resolve(callback());
    } catch (err) {
      return reject(err);
    }
  });
};
