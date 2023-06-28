# Netflix Clone

This is a Netflix clone application built using Vite and React. It replicates the functionalities of the popular streaming platform Netflix, allowing users to browse and stream movies and TV shows and subscribe to to either basic, standard or premium packages.

## Features

- User authentication: Users can sign up, log in, and log out of their accounts using Firebase authentication.

- Browse content: Users can explore a vast collection of movies and TV shows fetched from the TMDB API.

- Subscription payments: Users can subscribe to monthly plans using Stripe API for payment processing.

- Firestore database: User and subscription data is stored in Firebase Firestore.

## Technologies Used

- Vite: Fast and lightweight build tool for modern web applications.
- React: JavaScript library for building user interfaces.
- React Router: Library for handling routing within a React application.
- Firebase: Backend-as-a-Service (BaaS) platform for user authentication and Firestore database.
- Stripe: Payment processing API for handling subscription payments.
- TMDB API: The Movie Database API used to fetch movie and TV show data.
- Axios: Promise-based HTTP client for making API requests.
- CSS: Styling and layout of the application.

## ScreenShot

![Home Page](/src/assets/home.png)

![Log In / Sign Up Page ](/src/assets/login.png)

![Subscription](/src/assets/subscription.png)

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A TMDB API key. You can obtain it by creating an account on the TMDB website.
- Firebase project with Firestore enabled. Obtain the Firebase configuration details.
- A Stripe account to use the stripe API

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mash14/Netflix-Clone.git
   ```

2. Navigate to the project directory:

   ```
   cd Netflix-Clone
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a .env file in the project root directory and add the following environment variables:

   VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY
   VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
   VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
   VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
   VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
   VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
   VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
   VITE_STRIPE_PUBLIC_KEY=YOUR_STRIPE_PUBLIC_KEY

5. Start the development server:

   ```
   npm run dev
   ```

6. Open the app in your browser at http://localhost:3000.

## Developer's Details

The author of this project was Alan Macharia

## Contact information

You can reach the developer by:

- Email: mashalonzo741@gmail.com
- Tel: 0704485919

## Known Bugs

There are no known bugs

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License and Copyright information

The license information can be found here: [MIT-License](https://opensource.org/licenses/MIT)

Copyright (c)_28/06/2023\_\_Alan Macharia_
