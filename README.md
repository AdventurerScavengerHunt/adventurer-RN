# AdventurAR

AdventurAR is an augmented reality scavenger hunt experience available on Android, that brings exciting new exploration opportunities to daily life.

<img src="https://i.imgur.com/O7QcdYA.png" height=500>

## How to Play

You can start a new game and choose the scavenger hunt that best fits the area you want to explore. Check out the riddle at the bottom of the game screen to figure out where you need to go to get your point! You can toggle between the AR camera view and map view to help you figure out where to go. If you see a treasure chest appear before your eyes, you're almost there! Once the chest glows, tap it to get that point. Collect them all to win!

<img src="https://i.imgur.com/HSNwjam.png" height=500>

## How did we build it?

Our front end code was built with React-Native, Redux, and ViroMedia. To operate, AdventurAR utilizes the device camera and geolocation. The gaming interface also offers easy access to a basic Google map view.

## Game Setup

To play AdventurAR, clone this repo to your machine. Then, install the packages:

`npm install`

You may also need to run the following commands if it doesn't build, depending on your system set up:

`npm run postinstall`
`npx jetify`

To start the game, plug your Android into your computer and run the following command:

`react-native run-android`

Once the game is on your phone, you can get outside and get to "scavenger"-ing!
