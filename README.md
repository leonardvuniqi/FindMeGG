# FindMeGG
 A website used to look up a users profile and their recent matches for League of Legends. Created as a learning experience with Node.js


# How to use
- Install Node.js from https://nodejs.org/en/

- Create an account/login at https://developer.riotgames.com/
 
- Generate an API key from their website
 
- **Rename the config.sample.js file to config.js** and paste your API key from the website into the API_KEY field

```
var config = {
    API_KEY : 'RGAPI-api-key-here',
    PORT    : process.env.port || 3000
};
```
 
- Bring up your command line and type:
 
```
npm install
```
 
- This will install all necessary packages needed in order to run the application

- Than to run the server type:

```
npm start
```
