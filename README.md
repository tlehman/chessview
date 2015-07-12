# Installation instructions

First, install [node.js](https://nodejs.org/download/) and [PhantomJS](http://phantomjs.org/). Clone this repository, `cd` to it, and then run

(to install dependencies)

```
npm install
npm install -g gulp
npm install -g http-server
```

and to build the js dependencies for the html files:

```
gulp
```

Get a web server started so that phantom can request it and make screenshots:

```
http-server
```

Now that you have an http server running locally, you can run `phantomjs render_FEN_as_PNG.js` to make a png image of the website it renders.
