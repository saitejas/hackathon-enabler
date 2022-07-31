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

## Credentials for signing in into the system

- Employee ID - 2K220001 (or) 2K220002
- Password - qwerty

# Running unit tests

- To trigger the unit test, run this command `ng-test` (Karma test server will open automatically in the browser)
- To view code coverage results, run this command `ng test --no-watch --code-coverage` (Code coverage results will be shown in the terminal)

# Screenshots of the solution

- Login page

<img width="1438" alt="Screenshot 2022-07-31 at 10 18 09 PM" src="https://user-images.githubusercontent.com/21233636/182036864-b720763e-56bd-4959-955f-94031f90d2f4.png">

- Hackathons page when there are no hackathons

<img width="1440" alt="Screenshot 2022-07-31 at 7 52 29 PM" src="https://user-images.githubusercontent.com/21233636/182036880-d72e842d-87dd-49e2-a5b6-289597097a65.png">

- Hackathons page when there are hackathons posted and available

<img width="1440" alt="Screenshot 2022-07-31 at 9 41 36 PM" src="https://user-images.githubusercontent.com/21233636/182036909-3e6400c8-d66d-40bd-b26c-112522a3dc9a.png">

- Hackathons page while adding a challenge

<img width="1438" alt="Screenshot 2022-07-31 at 9 41 50 PM" src="https://user-images.githubusercontent.com/21233636/182036927-a3ed6fd9-1db5-49e9-9ab9-050fd5f3100a.png">
