# Tweets Deleter

This application was developed using Twitter's latest `Version 2 API` to delete multiple tweets in a single run. **API call limits** and **Tweets fetching limits** were handled properly. Create your own `API KEYS` and use the application for your own without any suspicious third-party access. In order to delete tweets, you must create your own credentials with `read-write` access.

## Table Of Contents

- [Features](#features)
- [Get Started](#get-started)
- [Authentication](#authentication)
- [Deleting Tweets](#deleting-tweets)
- [Schedule Delete](#schedule-delete)
- [Delete All Tweets](#delete-all-tweets)
- [Logs](#logs)
- [License](#license)
- [Contribute](#contribute)

## Features

:heart: **Developed with the latest Twitter API (Version 2)!**<br />
:heart: **Fully Authenticated with OAuth!**<br />
:heart: **Runs based on Twitter API Call Limits!**<br />
:heart: **Promise based!**<br />
:heart: **ES6 and above standard javascript!**<br />

## Get Started

Head over to [Twitter developer portal](https://developer.twitter.com/en) and sign-in with an account that you wants to delete tweets. Follow the steps and request for developer account access. Once you get the access create a project in that, Then apply for **read-write** access.

**Note :** Keep in mind you can delete tweets only for the account that you got developer access

## Authentication

After downloading the application code from **GitHub** you need to create a `.env` file in the root folder with the following credentials.

**Note :** Provide username without *@* character. **Ex :** username is `@Twitter` then provide it as `Twitter`.

```javascript
API_KEY="<YOUR_API_KEY>"
API_KEY_SECRET="<YOUR_API_KEY_SECRET>"
ACCESS_TOKEN="<YOUR_ACCESS_TOKEN>"
ACCESS_TOKEN_SECRET="<YOUR_ACCESS_TOKEN_SECRET>"
TWITTER_USER_NAME="<YOUR_TWITTER_USER_NAME>"
```
## Deleting Tweets

After creating the `.env`, try to run following script in the root folder of the application.

```console
npm install
```

All set! Now you're ready to delete tweets. Now run the following script and it will start deleting your tweets in a specific time interval.

```console
npm run start
```

## Schedule Delete

This application includes the `Cron Job` facility. Scheduled for every **1** hour. Just by calling this URL, you can schedule your tweet to delete without any extra effort.

```console
GET {{baseURL}}/schedule-delete
```

**Note :** Twitter will allow you to perform **50** API calls per **15 Minutes**. So the application will delete tweets in a particular time interval to incorporate the limits provided by twitter. Twitter will return the most recent **3200** tweets only that matches given parameters for each cycle.

## Delete All Tweets

Yes! This application can delete all your tweets. To delete all your tweets you must request your archived data from Twitter. [How to download your Twitter archive?](https://help.twitter.com/en/managing-your-account/accessing-your-twitter-data)

After downloading your archive, extract it. Then inside the `data` folder, you can find a file called `tweet.js`. Open `tweet.js` file, remove the default array name something starts like `window...` and leave the `array` untouched. Now use the same file and call the API with the key name called `file` with the `tweet.js` file from any API client. Now the deleting process is initiated.

```console
POST {{baseURL}}/delete-all
```

**Note :** Based on the tweet count deleting can take days or weeks. Because we follow all the limits to delete all the things for free.

## Logs

In some cases, you may have to delete thousands or even lakhs of tweets. In any factor interrupting the delete all process, Don't worry we got you covered. Restart the server again it will start to delete where we left the process with the help of logs that were created while deleting.

```console
GET {{baseURL}}/show-logs
```

## License

This project is licensed under the [MIT License](https://github.com/rameshrrl/tweets-deleter/blob/main/LICENSE)

## Contribute

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.