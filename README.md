# challenge-simulation

**Requirements**
* Create a page that the trainee should only view the simulations that their client has access to and assign simulations to the clients.

**Tech Stack**
* Frontend: React
* Design UI: Material UI
* Protocol: RESTAPI (https://d9u7x85vp9.execute-api.us-east-2.amazonaws.com/production/api-docs/#/)

**API Constraints**
* Cannot verify existing emails, creating a new auth token for every requests
* Only 3x3 tic-tac-toe

**Architecture**
![image](https://user-images.githubusercontent.com/25089799/110226788-f0477400-7ebf-11eb-89eb-8242f661aa97.png)

**Setup Instructions**
* Cloning git repository
	* Clone URL: https://github.com/FoxeyesJK/challenge-tic-tac-toe.git
	* npm install: Installing installed packages
	* "npm run start-dev"(start-local, start-prod): run the application with local/development/production

**Requirements**
* Signup
  * Email Validation: Instead of creating input type as email, server will validate the email and shows Snackbar error message for the better user experience
  * Token Storage: Stored generated token in the localstorage
* Game Screen
  * Mouse hover: hovered box rows and columns are highlighted
  * API Request Disabled: Showed (...loading) for the signup request, user can't click other blocks during engine request. Decided not to use spinner due to a bad user experience
  * API Requests with Auth Token: Used Auth token from the localstorage 
  * Game Result: Geneated popup with the result and allow a new game to start

**UI**

<p align="center">Login</p>
![image](https://user-images.githubusercontent.com/25089799/110226806-13722380-7ec0-11eb-9773-452406907b82.png)

<p align="center">Login Fail</p>
![image](https://user-images.githubusercontent.com/25089799/110226844-65b34480-7ec0-11eb-879e-080844f68ad5.png)

<p align="center">Box Hover</p>
![image](https://user-images.githubusercontent.com/25089799/110226826-3ef50e00-7ec0-11eb-92a2-2a002bde07c5.png)

<p align="center">Game Result</p>
![image](https://user-images.githubusercontent.com/25089799/110226820-2edd2e80-7ec0-11eb-8b8b-fe4d614afdf5.png)
	
**Implementation Idea**
* Implementing suggest move algorithm
* Showing "X" when hovers the box
* Appying fully responsive design depedning on all devices. Currenlty width of 500px is set
