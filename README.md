# Auth0 AngularJS Calling an API

This sample demonstrates how to make secure calls to an API after authenticating a user with Auth0. The sample get its dependencies from npm and a small Node.js server is provided to run the application.

1. Register users
2. Login users
3. Users can navigate in the app with unverified email
4. An API is done and protected
5. User can only access this API with verified email and proper Access token
6. I can make User info call for user profile
7. I have a test API set up which can call Auth0 Management API for accessing IDP token.
8. I was in a process to use that token to make Google call for contacts ( which unfortunately I can not)


## Getting Started

If you haven't already done so, [sign up](https://auth0.com) for your free Auth0 account and create a new client in the [dashboard](https://manage.auth0.com). Find the **domain** and **client ID** from the settings area and add the URL for your application to the **Allowed Callback URLs** box. If you are using the server provided in this sample, that URL is `http://localhost:3000/callback`.

Clone the repo or download it from the AngularJS quickstart page in Auth0's documentation. Install the dependencies for the app.

```bash
cd 03-Calling-an-API
npm install
```

## Set the Client ID and Domain, and API URL

If you download the sample from the quickstart page, it will come pre-populated with the **client ID** and **domain** for your application. If you clone the repo directly from Github, rename the `auth0-variables.js.example` file to `auth0-variables.js` and provide the **client ID** and **domain** there.

You should also provide the identifier for the API you create in the Auth0 dashboard as your `apiUrl`.

## Set Up the `.env` File

In addition to the above-mentioned `auth0-variables.js` file, a `.env` file is provided at the root of the application. This file provides your application's credentials to the small Node server located in `server.js`.

This file has two values, `AUTH0_AUDIENCE` and `AUTH0_DOMAIN`. If you download this sample from the quickstart page, the value for `AUTH0_DOMAIN` will be populated automatically, but you will still need to populate `AUTH0_AUDIENCE` manually. The value for `AUTH0_AUDIENCE` is the identifier used for an API that you create in the Auth0 dashboard.

## Run the Application

A small express server is used to serve the application.

```bash
npm start
```

The application will be served at `http://localhost:3000`.
