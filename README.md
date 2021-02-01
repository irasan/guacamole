# Guacamole game 

This is an interpretation of the famous Whack-a-mole game. Players are invited to smash avocadoes that appear
on the screen and earn as many points as they possibly can under 45 seconds (3 rounds, 15 seconds each). 
This game helps to boost player's concentration and response speed. If the end score is high enough (200 or more), the player 
will be rewarded with a nice guacamole recipe. The best score of the player is stored and shown during the game. 
This is a HTML game and it should run on any browser and device.

## UX
### Project Goals
The primary goal of this project is to create a simple interactive game that will run in any browser. 

### User's Goals
The main audience of this game will be kids and young adults who like to play games or want a short break.
The game promotes quick decision making and concentration so it also can be used by older people.

Player's goals are:
* to play a fun game;
* to see the best score and try to beat it;
* to score at least 200 points and see the guacamole recipe;
* to be able to mute and unmute the music.

### User Stories
As a first time player, I want:
* to understand the rules or be able to find them;
* to be able to navigate the game easily;
* to be able to turn the music off if necessary.

As a return player, I want:
* to see my previous score;
* to be able to increase the complexity of the game.

### Wireframes
After thorough consideration of users' and developer's goals, the following [wireframes](assets/wireframes) were created. 

### Developer's Goals
This is a learning project and the main purpose of it's creating is to learn JavaScript 
and interactive design implementation. Another very improtant goal is to build a game 
that will be added to the portfolio. 

### Design Choices
The overall feel of the game is fun, simple and relaxed. Even though the game itself is intense,
the following design choices were made to implement the cheerful feeling:

#### Fonts
Varela Round was chosen as the main font for this website. It is soft, playfull, easy to read, and works great 
at any size.

#### Icons
All icons were chosen for their obvious meaning so that they can be easily understood by everyone. 
Icons were implemented using [Font Awesome](https://fontawesome.com/).

#### Colors and Styling
Simple animation images were chosen for implementation of the game. They are not either overwhelming or disctucting. 
Dark green color that reminds of avocadoes is used for icons and buttons. 
Overall feel of the game is cheerful, bright, and playful.

## Features
This website features 4 pages: Home, Rules, Game, and Recipe. Home page features a fun image of avocadoes and a button 
with invitation to play. An incouraging message "Smash them all!" appears at the top. Home screen also contains two other 
buttons: one for muting/unmuting music and the other for visiting Rules page.

Rules page contains a short description of how to play the game, an image of yummy guacamole, and a return button.

Game page features a yellow game field with a button to start the game. When clicked, the game will start showing a countdown 
timer of 3 seconds for the player to get ready. The same timer will appear before each round. 
The game consists of 3 rounds and the player has to score enough points to move to the next level. If he doesn't succeed, the game will be over.
Each level displays different veggies with increased speed. If a player manages to smash a veg, he'll see a different image of a smash.
Game page also contains two button: one for muting/unmuting music and the other for closing the game.

If the player scores 200 points or more, he'll see a Recipe page. It contains a congratulation message together with a super secret guacamole 
recipe. It also features an image of how the end product, eg guacamole with tortilla chips, should look like.

### Existing Features
* The game is fully functioning and fun to play;
* Call for action buttons - helps users to take control over when to start playing and navigate the site;
* Toggle button for turning music on and off.

### Features Left To implement
* There is no pause button when the game is on.
* At the moment the player only sees one kind of veg on each round. Displaying of different veggies with different value, as 
well as some bombs or knives that shouldn't be clicked, were left for future development.

## Technologies used
During completion of this project mainly HTML, CSS and JavaScript were used. To implement some more advanced components, 
like grid of the game, gameover modal, and buttons, the developer made use of Bootstrap 4. To create the project, in particular 
write the code itself and store it, GitPod and GitHub were used. Deployment of the website was supported by GitHub pages.

## Testing
### Testing Using Validators
The website was continuously tested on emulated large and small screens when writing the code. 
Upon completion of the writing process, developer used W3C Css Validation Service and W3C MarkUp Validation Service 
to check the validity of the code. 

### Client Stories Testing
Most common path through the website: Home -> (Rules) -> Game -> Recipe.
On the Home and Game pages there's a play button right in the center. To visit rules, the player might want to
click on info icon.

### Testing client stories from UX section in README.md
As a first time player, I want to understand the rules of the game or to be able to find them:
* info icon on the home screen will lead to the Rules page.

As a first time player, I want to be able to navigate the game easily:
* play buttons are displayed in the center of the screen. All icons are easy to understand.

As a first time player, I want to be able to turn the music off if necessary:
* there's a button with widely recognized volume icon that toggles game music. The icon also changes when toggled.

As a return player, I want to see my previous score:
* the highest score is stored in browser memory and is displayed during the game;

As a return player, I want to be able to increase the complexity of the game:
* this feature was left for future development.

### Testing on Different Browsers and Devices
The website was tested on different browsers and proved to be issue-free on the following browsers:
* Chrome;
* Safari;
* Edge;
* Firefox.
The website was also tested on an IOS (Iphone 10) and Android (Pixel 4) platforms. At first the game wasn't displaying properly 
on IOS, but this issue was fixed by reorganizing the classes in the Game.html and proper implementation of Bootstrap.

### Testing on Potential Website Visitors


## How To Run This Project Locally
To clone this project into GitHub, you will need:

A GitHub account. 
* Create your GitHub account [here](https://github.com/join?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) 
* Use the Chrome browser.

Then follow these steps:

1. Install the GitPod browser [extentions for Chrome](https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki).
1. Restart the browser.
1. Log into [GitPod](https://gitpod.io/workspaces/) using your GitHub account.
1. Navigate to the project GitHub repository.
1. Click the green "GitPod" button in the top right corner.
1. This will trigger a new GitPod workspace to be created from the code in GitHub where you can work locally.

To work on the project code within the local IDE:

1. Navigate to the project GitHub repository.
1. Click "Clone or Download".
1. Copy Clone's URL for the repository.
1. Open the terminal in your local IDE.
1. Change the current working directory to the location where you want the clone directory to be made.
1. Type "git clone" and then paste the URK from the step 3.
1. Press Enter and your local clone will be created.

## Credits
### Images
Images for the game were downloaded from [PNGTree](https://pngtree.com/)
### Sounds
Smashing sounds were taken from [here](https://freesound.org/people/LittleRobotSoundFactory/sounds/290443/)
Music for game for taken from [here](https://freesound.org/people/code_box/sounds/520931/)
### Recipe
Recipe of guacamole was borrowed [here](https://www.onceuponachef.com/recipes/roasted-garlic-guacamole.html)
### Borrowed Code
The overall logic of the game was inspired by [this](https://github.com/JS-Beginners/whack-a-mole-project). Code for Bootstrap components, 
such as buttons, game layout, and modals was taken from [Bootstrap documentation](https://getbootstrap.com/docs).
Code for setting up a timer was borrowed from [here](https://tonnygaric.com/blog/create-a-seconds-countdown-in-6-lines-of-javascript).
[Stack Overflow website](https://stackoverflow.com/), [W3School tutorials](https://www.w3schools.com/), 
[Slack](https://code-institute-room.slack.com/ssb/redirect?entry_point=homepage_nav) forum, and tutor support
were used when dealing with some specific issues. 
