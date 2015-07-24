# The 21st Century's Lumberjack's Boilerplate

<img alt="The tooling kit for modern lumbers" src="src/images/logo.png">

> A simple boilerplate to easily bootstrap projects with a bunch of cool technologies.

## What's inside?

Well, a modern lumberjack has many modern needings and it is only fair that (s)he uses some of the coolest
technologies we have today, so this boilerplate includes:

### Livescript

[LiveScript](http://livescript.net/) is a JavaScript preprocessor which has a pretty *beautiful syntax* and
supports functional programming with lovable features like *currying*, *function composition*, *pattern matching* and
many other ones borrowed from languages like [Haskell](https://www.haskell.org/).

### Jade

The  [Jade Engine](http://jade-lang.com/)  is one of the most powerful template engines we have nowadays and its use is intended to make the app templates' code more beautiful and **easier to maintain**. It also aims to solve some problems such as missing or mal-matched closing tags.

### Stylus

[Stylus](https://learnboost.github.io/stylus/) has everything that modern *CSS preprocessors* should have: *variables*,
*mixins*, *nesting*, *extending* and many other cool things. And it's writen in Javascript and runs in *NodeJS*.

#### Stylint

Personally, I do think that one of the points considered as favorable to Stylus may not be that good: a more permissive syntax. But we can use a [linter](https://github.com/rossPatton/stylint) to make things more strict and enjoy the benefits of a *full JS-based stack*.

#### Skeleton

[Skeleton](http://getskeleton.com/) which is an amazingly simple and responsive boilerplate for Mobile-Friendly
development.

All styles used here were taken from *Skeleton*'s original styles and ported to *Stylus*.

### Gulp

*Stream-based build system*, *code over configuration*, *idiomatic Node modules*, a *simple and elegant API*...
There are many reasons why [Gulp](http://gulpjs.com/) can be a good bet on task runners.

Here we have many cool plugins like `Browser Sync` - which allows you to sync all your devices and even make
livereloading -, `Jade`, `Stylus`, `Imagemin` and many other good ones.

In this project, we also prevent your `gulpfile.js` from growing too large by splitting it into multiple files,
with one task per file. You can check out the [tasks directory](/tasks) to see how it works.

## Using

### Getting Started

Make sure you have the main dependencies to run this boilerplate:

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)
- [Livescript](http://livescript.net/)

Clone this repository:

```sh
$ git clone https://github.com/mabrasil/lumberpack.git my_project
```

Install all dependencies:

```sh
$ cd my_project
$ npm install
```

Run the default gulp task:

```sh
$ gulp
```

### Next Steps

#### Understand the Folders and Files structure

If everything from the [Getting Started](#getting-started) section goes well, you should have this:

```sh
my_project -
  /build -
    /css
      main.css
    /img
    /js
      main.js
    .index.html
  /src -
    /images
    /scripts
    /styles
    /templates
    .editorconfig
    gulpfile.js
    package.json
  /tasks -
    /...
```
#### Understand the Gulp Tasks

- `gulp`: Initialize watch for changes and a server
- `gulp ls`: Compile Livescript files
- `gulp jade`: Compile Jade files
- `gulp stylus`: Compile Stylus files
- `gulp imagemin`:Compress image files
- `gulp watch`: Call to watch files
- `gulp -p`: Minify all files for production
- `gulp build -p`: Minify files and deploy via rsync

## Credits

- All styles were taken from [Dave Gamache](https://github.com/dhg)'s [Skeleton](https://github.com/dhg/Skeleton)

- Part of this project's original structure - some tasks and directories organization - was tasks taken
from [Willian Justen](https://github.com/willianjusten)'s [Fast Boilerplate](https://github.com/willianjusten/Fast) -
maybe now the two projects look very different.

- Font used in logo: [Pinewood](http://www.fontspace.com/rick-mueller/pinewood) by [Rick Mueller](http://moorstation.org/typoasis/designers/mueller/).
