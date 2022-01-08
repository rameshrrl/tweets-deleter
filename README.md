# Tweets Deleter

This application was developed using Twitter's latest `Version 2 API` to delete multiple tweets in a single run. **API call limits** and **Tweets fetching limits** were handled properly. Create your own `API KEYS` and use the application for your own without any suspicious third-party access. In order to delete tweets, you must create your own credentials with `read-write` access.

## Table Of Contents

- [Features](#features)
- [Get Started](#get-started)
- [Authentication](#authentication)
- [Deleting Tweets](#deleting-tweets)
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

**Note :** Twitter will allow you to perform **50** API calls per **15 Minutes**. So the application will delete tweets in a particular time interval to incorporate the limits provided by twitter. Also restart the server once the message shows `Tweests deleted successfully!`.

## License

This project is licensed under the [MIT License](https://github.com/rameshrrl/tweets-deleter/blob/main/LICENSE)

## Contribute

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.