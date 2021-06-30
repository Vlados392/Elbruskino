# Elbrus Сlimber 🗻

Now, you've reached week 3, completed your solo project, and can smell the sweet, sweet victory over phase 0. The time has come to conquer YOUR mini Elbrus. In this assignment, you will write a game. The sky's the limit in terms of gameplay 😉. 

You can make the game as complicated as your heart desires.

The goal of this assignment is to practice working with DOM and to enjoy coding.

![screenshot](readme-assets/elbrus-climber.gif)

## Release 0
#### Basic layout

Prepare and connect `html`, `css`, and `js` files.

No backgrounds, only layout - only hardcore👹🤘


Now, in this release, you need to create:

    ⭕ a playing field with an image of a mountain

    ⭕ a track for our mountaineer. Usually, when climbing, mountaineers follow a pre-marked trail. You'll need to recreate this trail, marking a travel path for your climber.  

    ⭕ place your climber at the start of the trail

Since we agreed not to use a `background-image`, you'll need to tinker with `div`, `position: realtive`, and `position: absolute`. The pictures are in the `img` folder.


## Release 1
#### Event listener

Great, now try catching button clicks by hanging an event listener on the document. For this, you'll need the good old `eventListner` and [keydown](https://developer.mozilla.org/docs/Web/API/Element/keydown_event). Let's start with two buttons: `z` and `x` so that your climber can move up and down the path. 

Now that you have caught the button clicks: let's add movement; when clicking on the `x` and `z`, the climber should, respectively, move up and down a mark.

Most likely, all your labels have some commonalities, allowing you to create an array-like structure and navigate it via an index.

[appendChild](https://developer.mozilla.org/docs/Web/API/Node/appendChild) may help you navigate the labels.

## Release 2
#### Victory conditions

Now that you've reached a peak, you have to place a flag on top. The flag image is in the `img` folder.

## Release 3
#### Ideas for implementation and further development

Congratulations, you've made it to the top. Now try to improve the game as much as your imagination allows and your heart desires. 

This release is optional, but we hope you find it entertaining. How about recording points and a player's name? What about obstacles: falling stones? 
