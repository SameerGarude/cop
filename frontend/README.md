Catch the Criminal Game
This is a web application that simulates a game where three cops independently choose a city to investigate in order to capture a fugitive who may be hiding in one of the neighboring cities.

Technologies Used
Frontend: React
Backend: Node.js
Additional packages: Express, body-parser, cors
Gameplay
City Selection
Each cop independently chooses one city to investigate from a list of neighboring cities.
Vehicle Selection
Based on the chosen city's distance, each cop selects an electric vehicle considering its range and availability.
Result
The system determines if any cop successfully found the fugitive (simulated). If found, it displays the name of the cop who made the successful capture.
Technical Details
Backend
The backend is built using Node.js with Express to handle HTTP requests.
CRUD operations are implemented for managing city names, distances, and vehicle properties.
The fugitive's location is simulated randomly among the available cities.
Logic is implemented to determine if any cop successfully captured the fugitive based on their choices and the simulated fugitive's location.
Frontend
The frontend is built using React to provide an interactive user interface.
Screens are developed for city selection, vehicle selection, and result display.
Each cop's selection is sent to the backend for processing, and the result is displayed to the user.
Setup Instructions
Clone the repository to your local machine.
Navigate to the project directory.
Install dependencies using npm install.
Start the backend server using npm start.
Start the frontend development server using npm start in the client directory.
Access the application in your web browser at http://localhost:3000.

Unique City Selection: The assumption could be that each cop must select a unique city to investigate. This ensures that multiple cops don't investigate the same city simultaneously.

Fugitive's Presence: It could be assumed that the fugitive is present in one of the neighboring cities provided in the list. If the fugitive could be anywhere in the world, the game dynamics would change significantly.

Vehicle Availability: The assumption might be made that all selected vehicles are available for use by the cops. If there are limitations or constraints on vehicle availability, such as a limited number of vehicles or specific conditions for their use, those would need to be explicitly defined.

Determining Success: Success in capturing the fugitive might be determined solely based on whether the selected city matches the location of the fugitive. Additional factors such as time taken to reach the city, vehicle condition, or other game dynamics could affect the determination of success, but these are not specified in the requirements.

Game Rounds: The game could be assumed to consist of a single round where each cop makes their selection and the results are determined. There could be variations such as multiple rounds or turns for each cop, but the requirements do not specify this.

Backend Setup:
Clone the Repository:

bash
Copy code
git clone <repository-url>
Navigate to the Backend Directory:

cd backend
Install Dependencies:

npm install
Start the Backend Server:

npm start
The backend server will start running on port 5000 by default.

Frontend Setup:
Navigate to the Frontend Directory:

cd frontend
Install Dependencies:

npm install
Start the Frontend Development Server:

npm start
The frontend development server will start running on port 3000 by default and open the application in your default web browser.

Accessing the Application:
Once both the backend server and frontend development server are running, you can access the application by navigating to http://localhost:3000 in your web browser.

Deployment:
To deploy the application, you can follow the steps outlined in the README file to set up GitHub Pages for deployment. Make sure to update the homepage field in the package.json file with the correct URL for your GitHub Pages deployment.

After deploying to GitHub Pages, users can access the deployed application using the URL provided by GitHub Pages

Author
[SAMEER GARUDE]
