# The 21st Century's Lumberjack's Boilerplate

<img alt="The tooling kit for modern lumbers" src="http://i.imgur.com/gS3KlP8.png" width="400">

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

[Stylus](https://learnboost.github.io/stylus/) ...


#### Stylint

Personally, I do think that one of the points considered as favorable to Stylus may not be that good: a more permissive syntax. But we can use a [linter](https://github.com/rossPatton/stylint) to make things more strict and enjoy the benefits of a *full JS-based stack*.

#### Skeleton

[Skeleton](http://getskeleton.com/) which is an amazingly simple and responsive boilerplate for Mobile-Friendly
development.

### Gulp

*Stream-based build system*, *code over configuration*, *idiomatic Node modules*, a *simple and elegant API*...
There are many reasons why [Gulp](http://gulpjs.com/) can be a good bet on task runners.

Here we have many cool plugins like `Browser Sync` - which allows you to sync all your devices and even make
livereloading -, `Jade`, `Stylus`, `Uglify`, `Concat`, `Imagemin` and many other good ones.

In this project, we also prevent your `gulpfile.js` from growing too large by splitting it into multiple files,
with one task per file. You can check out the [tasks directory](/tasks) to see how it works.

## Credits

- Some Gulp tasks taken from [Willian Justen](https://github.com/willianjusten)'s [Fast Boilerplate](https://github.com/willianjusten/Fast)

- All styles taken from [Dave Gamache](https://github.com/dhg)'s [Skeleton](https://github.com/dhg/Skeleton)
