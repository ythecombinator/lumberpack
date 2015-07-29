[ ![Codeship Status for mabrasil/lumberpack](https://codeship.com/projects/e5c0fd40-146c-0133-f7df-26b4121038d9/status?branch=master)](https://codeship.com/projects/93079)
[![Build Status](https://travis-ci.org/mabrasil/lumberpack.svg?branch=master)](https://travis-ci.org/mabrasil/lumberpack)
[![Code Climate](https://codeclimate.com/github/mabrasil/lumberpack/badges/gpa.svg)](https://codeclimate.com/github/mabrasil/lumberpack)
[![Dependency Status](https://david-dm.org/mabrasil/lumberpack.png)](https://david-dm.org/mabrasil/lumberpack)
[![devDependency Status](https://david-dm.org/mabrasil/lumberpack/dev-status.svg)](https://david-dm.org/mabrasil/lumberpack#info=devDependencies)

# The 21st Century's Lumberjack's Boilerplate

![The tooling kit for modern lumbers](src/images/logo.png)

> A simple boilerplate to easily bootstrap projects with a bunch of cool technologies.

##Table of Contents

- [What's inside?](#whats-inside)
- [Using](#using)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

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
with one task per file. You can check out the [tasks directory](gulp/tasks) to see how it works.

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

```
|-- gulp/
|-- src/
|   |-- images/
|   |-- scripts/
|   |-- styles/
|   |-- templates/
|   |-- config.json
|-- www/
|   |-- css/
|       |-- main.css
|   |-- img/
|   |-- js/
|       |-- main.js
|   |-- index.html
|-- .editorconfig
|-- .stylintrc
|-- gulpfile.js
|-- package.json
```

#### Understand the Gulp Tasks

All the Gulp tasks are in the [`tasks/`](gulp/tasks) folder. Each one consists of a module with a function which is required into tasks defined in the [`gulpfile`](https://github.com/mabrasil/lumberpack/blob/master/gulpfile.js).

- `gulp`: Initialize watch for changes and a server
- `gulp ls`: Compile Livescript files
- `gulp jade`: Compile Jade files
- `gulp stylus`: Compile Stylus files
- `gulp imagemin`:Compress image files
- `gulp watch`: Call to watch files
- `gulp -p`: Minify all files for production
- `gulp build -p`: Minify files and deploy via rsync

#### Setup the project's basic info

Some of basic info from your site will be rendered from a [`config.json`](/src/config.json) file. This is done to make it easier
to change some general data - like the site *name* or *descrption*. The `config.json` initial structure is:

```json
{
  "name": "",
  "description": "",
  "image": "",
  "favicon": "",
  "url": "",
  "facebookType": "",
  "twitterType": ""
}
```

These are the data given by `config.json`:

- `name`: Indicates the *name* that will be used in the following *metatags*: `title`, `og:title`, `og:site_name` and `twitter:title`.
- `description`: Indicates the *description* that will be used in the following *metatags*: `description`, `og:description`, and `twitter:description`.
- `image`: Indicates the **URL** of the *image* that will be used in the following *metatags*: `og:image` and `twitter:image:src`.
- `favicon`: Indicates the **URL** of the *image* that will be used as your *favicon*.
- `url`: Indicates the *url* that will be used in the following *metatags*: `og:url` and `twitter:url`.
- `facebookType`: Indicates what will be used in the `og:type` *metatag*. You can check more info about it [here](http://ogp.me/#types).
- `twitterType`: Indicates what will be used in the `twitter:card` *metatag*. You can check more info about it [here](https://dev.twitter.com/cards/types).

For example:

```json
{
  "name": "Lumberpack",
  "description": "Lumberpack is a simple boilerplate to easily bootstrap projects with a bunch of cool technologies.",
  "image": "img/logo.png",
  "favicon": "img/favicon.png",
  "url": "https://github.com/mabrasil/lumberpack",
  "facebookType": "article",
  "twitterType": "summary_large_image"
}
```

## Contributing

### Versioning

It is intended to maintain this project under the [Semantic Versioning] (http://semver.org/) guidelines. Releases will
be numbered with the following format:

`<major>.<minor>.<patch>`

### Reporting a bug

1. Look for any related issues [here](https://github.com/mabrasil/lumberpack/issues).
2. If you find an issue that seems related, please comment there instead of creating a new issue. If it is determined to be a unique bug, we will let you know that a new issue can be created.
3. If you find no related issue, create a new issue by clicking [here](https://github.com/mabrasil/lumberpack/issues/new).
If we find an issue that's related, we will reference it and close your issue, showing you where to follow the bug.
4. Tell us important details like what operating system you are using.
5. Include any errors that may be displayed (see [Chrome Console instructions](https://developer.chrome.com/devtools/docs/console#opening_the_console) for how to do that).
6. Update us if you have any new info, or if the problem resolves itself!

### The 5 magic steps

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :)

##License

[Lumberpack](https://github.com/mabrasil/lumberpack) is distributed under the
MIT License, available in this repository. All contributions are assumed to be also licensed under
the MIT License.

## Credits

- All styles were taken from [Dave Gamache](https://github.com/dhg)'s [Skeleton](https://github.com/dhg/Skeleton).

- Part of this project's original structure - some tasks and directories organization - was tasks taken
from [Willian Justen](https://github.com/willianjusten)'s [Fast Boilerplate](https://github.com/willianjusten/Fast) -
maybe now the two projects look very different.

- Font used in logo: [Pinewood](http://www.fontspace.com/rick-mueller/pinewood) by [Rick Mueller](http://moorstation.org/typoasis/designers/mueller/).
