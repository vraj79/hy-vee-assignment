Name-Based Age, Gender, and Nationality Predictor
This project is a Next.js application that takes a name as an input and uses three different public APIs to predict the age, gender, and nationality associated with the given name. The application demonstrates how to integrate multiple API endpoints, manage asynchronous data fetching, and display the results in a user-friendly interface. This implementation is done in TypeScript to ensure type safety and improve code quality.

Features
Name Input Form: Users can enter a name into a form to get predictions.
API Integration: Fetches data from Agify, Genderize, and Nationalize APIs.
Data Display: Shows the predicted age, gender, and possible nationalities based on the input name.
TypeScript: Utilizes TypeScript for better type checking and error prevention.


Sure, here's a comprehensive README file for your Next.js application:

Name-Based Age, Gender, and Nationality Predictor
This project is a Next.js application that takes a name as an input and uses three different public APIs to predict the age, gender, and nationality associated with the given name. The application demonstrates how to integrate multiple API endpoints, manage asynchronous data fetching, and display the results in a user-friendly interface. This implementation is done in TypeScript to ensure type safety and improve code quality.

Features
Name Input Form: Users can enter a name into a form to get predictions.
API Integration: Fetches data from Agify, Genderize, and Nationalize APIs.
Data Display: Shows the predicted age, gender, and possible nationalities based on the input name.
TypeScript: Utilizes TypeScript for better type checking and error prevention.
APIs Used

Agify: Predicts the age based on the given name.
Endpoint: https://api.agify.io?name={name}

Genderize: Predicts the gender based on the given name.
Endpoint: https://api.genderize.io?name={name}

Nationalize: Predicts the nationality based on the given name.
Endpoint: https://api.nationalize.io?name={name}

Installation
To set up and run this project locally, follow these steps:

Clone the repository:
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Install the necessary dependencies:
npm install

Start the development server:
npm run dev

Open the application in your browser:
Navigate to http://localhost:3000 to see the app in action.