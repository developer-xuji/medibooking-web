#  Medibooking System Frontend

 Medibooking System is an online appointment booking app, this is the front end client of the app  
For backend of this app, please view 
[https://github.com/chrislx96/medibooking-auth-service-server.git](Authentication Service)
[https://github.com/chrislx96/medibooking-booking-service-server.git](Booking Service)

## Deployment
Deployment has already been set up on AWS. This app is running on:

[http://medibooking-web-loadbalancer-1366501173.ap-southeast-2.elb.amazonaws.com]

## Features

**1. User System:** Allow users sign up their patient accounts, and sign in as both doctor and patient roles

**2. Personal/Account Information:**  Users can modify their personal/account information including their names, age, gender, emails and passwords.

**3. Doctor Introduction:** Users can view all doctors' information and select any one of them for booking an appointment

**4. Manage Booking:** Users can view, search, sort or cancel their appointments.

**5. Booking System:** Patients can make an appointment with a doctor, on a selected datetime and notes.

## Local Installation

These intructions will help you get a copy of the project up and running for development and testing. The frontend of this project is built on React. You will need `npm` installed to start.

### Client: React

First start by installing the dependencies in the root directory
```
npm install
```

#### Backend setup

The backend of this app is deployed on AWS, which has link [http://medibooking-web-loadbalancer-1366501173.ap-southeast-2.elb.amazonaws.com]
The app is interacting with its backend deployed on AWS by default, if you want to deploy the backend locally, you can update src/env.js with your local urls.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



