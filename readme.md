# MOLE GAME
This is a game made with ionic. 
The game is a simple game where you have to hit the mole as many times as possible in 30 seconds.
The game is made with ionic and angular.


## Start the project
The project is started with the regular ionic commands.

1. Run `npm install` to install all dependencies.
2. Run `ionic serve` to start the development environment.
3. To build the project run `ionic build android` or `ionic build ios`. In order for you to build an iOS app, you need to run on MacOS.

An alternative is to emulate the app on a device or upload it to the ionic cloud. From here you can download the ionic view app and use the app on all devices.

### src directory
```
.
   ├── ...
   ├── src                       
   │   ├── app                    # This folder contains global modules and styling
           ├── pages                  # Contains all the individual pages (home, game, score-list)
           ├── components             # Contains the components 
   |       ├── services               # Contains the item-api service that retrieves data from the JSON file
   │   ├── assets                 # This folder contains images and the *data.json*
   |   ├── theme                  # The global SCSS variables to use throughout the app
   |   ├── index.html             # The root index app file - This launches the app
   
```

## Demo
You can see a demo of the application [here](https://mole-git-master-enrikegonzalolegarra.vercel.app/home)





