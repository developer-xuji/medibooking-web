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

**5. Booking System:** Patients can make an appointment with a doctor, a datetime and notes.

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

#### Development mode

To run the app in the in development mode, use
```
npm run-script dev
```
Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Run the client 

Produces a static React build by running:
```
npm run-script build
```
Then start the server by
```
npm start
```
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.


## Testing
Unit Testing on some of the components are ready, use
```
npm test
```
to run the tests


