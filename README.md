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

# Bulk Rendering to PNG instructions

Run `eval $(phantomjs command.js checkmate_puzzles_60.txt)` to generate all the PNG images.

## Details

The `command.js` file generates the commands to turn the FEN strings into raster images. Each command is a call to `phantomjs rasterize.js` with the appropriate args. The solution is really odd, but it works. Eval just evaulates each command.
