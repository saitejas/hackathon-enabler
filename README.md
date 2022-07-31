# Hack ideas

This app enables the employees of an organization to manage hackathons in an easy manner.

# Functionalities

- Employee login
- Employee, adding a challenge
- Employee can view all the challenges posted in the organization
- Employee, upvoting a challenge
- Employee, sorting the challenge based on creation date and vote count

# Prerequisites
- Install angular 14 -> https://angular.io/guide/setup-local

## Optional
- Install docker desktop (Mac) -> https://docs.docker.com/desktop/install/mac-install/
- Install docker desktop (Windows) -> https://docs.docker.com/desktop/install/windows-install/

# Setting up and running the project

## Native angular setup 
- npm install
- ng serve (will be listening at http://localhost:4200/)

## Native docker setup (angular runs inside docker)
- To build the image, run this command `docker build -t hackathon-enabler .`
- To run the server, run this command `docker run -p 80:80 hackathon-enabler` (will be listening at http://localhost:80/)

#Running unit tests

- To trigger the unit test, run this command `ng-test` (Karma test server will open automatically in the browser)
- To view code coverage results, run this command `ng test --no-watch --code-coverage` (Code coverage results will be shown in the terminal)
