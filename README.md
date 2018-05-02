# <img src="http://res.cloudinary.com/oaugusto/image/upload/v1525272222/icon.png" width="35px"> Connect UFPa
![Version](https://img.shields.io/badge/version-1.0-green.svg) 
[![MIT](https://img.shields.io/dub/l/vibe-d.svg)]() 

## What is it?

The Connect' project has as main objective be a helper mobile tool for the UFPa community in general. Providing route and informations for places, showing events happening in the university and much more.

## How to use

Clone the repository to a folder of your choice, redirect to the folder and install the libs dependencies using the command:

```javascript
npm install
```

After that, be sure you have Android SDK and Java JDK installed, have an Android Emulator Machine running or a Android device plugged in your computer. Executes the command to install the app in your device:

```javascript
react-native run-android
```

## Structure

The project is organized as follows:

- android
- assets
- src
  - actions     
  - components
    - commons
  - config
  - data
  - helpers
  - reducers
  - App.js
  - Router.js
  - Styles.js

## Libs

Below are all the libraries used in the system so far. As well as their respective functionalities.

Name | Function 
|:---:| :-----:|
lodash | The Lodash library exported as Node.js modules.
firebase | Provides the tools and infrastructure you need to develop.
redux | Status container.
redux-thunk | Middleware for asynchronous actions.
react-redux | Linking React to Redux.
react-navigation | Routing and navigation.
react-native-maps | MapView Component.
react-native-elements | UI & Icons Components.
react-native-orientation | Listen to device orientation changes.
react-native-linear-gradient | Linear Gradient Component .
react-native-maps-directions | Directions for Maps.

## Developed by

Ailson Freire

Hugo Bragança

Otavio Augusto 

## Problems

Create a Issues in the repository. Soon a developer will answer to solve the problem.

## License

MIT © 2018