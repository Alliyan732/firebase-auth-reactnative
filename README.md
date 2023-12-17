## React Native Firebase Authentication

This React Native project demonstrates Firebase Authentication using the Firebase Web SDK. The app includes features such as user signup, signin, signout, and email/password recovery.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)
- [Support](#support)

## Features

- User Signup: Allowing users to create a new account.
- User Signin: Authenticating users with their email and password.
- Signout: Providing users with the ability to sign out.
- Email/Password Recovery: Implementing a mechanism for users to recover their accounts.

### Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Alliyan732/firebase-auth-reactnative
   ```
2. Navigate to the project directory:
   ```bash
   cd < Project Folder >
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
## Configuration

Before running the app, you need to configure Firebase:

1. Create a Firebase project on the Firebase Console.
2. Add a new web app to your project.
3. Copy the Firebase configuration (apiKey, authDomain, projectId, etc.) from the Firebase Console.
3. Open src/services/firebase.config.js and replace the placeholder values with your Firebase configuration.

## Usage
   ```bash
   npx react-native run-android
   ```
   or
   ```bash
   npx react-native run-ios
   ```
## Folder Structure
├── src/
│   ├── components/
│   ├── screens/
│   ├── services/
│   ├── App.js
│   └── ...
├── .gitignore
├── README.md
├── package.json
└── ...

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
Aalliyan Alvi

## Support
If you encounter any issues or have any questions or suggestions, please feel free to open an issue. We appreciate your feedback and contributions to the project.

Email: alliyan732@gmail.com

LinkedIn: https://www.linkedin.com/in/alliyan-alvi/

Happy Coding!
