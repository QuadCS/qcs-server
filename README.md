# Quadcopter Communication System

## React Web-Client

#### Run locally to develop

	$ cd app && webpack-dev-server
	
Server will run on `http://localhost:4567` as written in `webpack.config.js`.

#### Build

	$ cd app && webpack

Builds into `server/static` folder

####### Issues

1. Comment: In `app/index.html` the line

	```html
	<script src="static/bundle.js"></script>
	```
	
	has to this way although in `webpack.config.js` the path to `bundle.js` is `/../server/static`. 

2. After building and running 

#### Tools used

* Material UI
* **CSS Modules**: Set up as in [these instructions](http://javascriptplayground.com/blog/2016/07/css-modules-webpack-react/) belonging to [this project](https://github.com/jackfranklin/react-css-modules-webpack)


## Flask Server

This minimal Flask Server listens to incoming POST requests from the [QCS React Native mobile App](https://github.com/QuadCS/qcs-app) and has a TCP socket connection to a raspberry PI.

#### Run

	$ python server/main.js
	
Server will be accessible on `http://localhost:5000/`

#### Comments

* `index.html` has to be in folder called `templates` in same hierarchy as `main.py` file.
* Any static files (e.g. javascript or CSS) have to be in the `static` folder. Therefore `webpack` builds into this folder.