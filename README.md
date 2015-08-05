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

The  [Jade Engine](http://jade-lang.com/)  is one of the most powerful templating engines we have nowadays and its use is intended to make the app templates' code more beautiful and **easier to maintain**. It also aims to solve some problems such as missing or mal-matched closing tags.

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

1. Make sure you have the main dependencies to run this boilerplate:

  - [NodeJS](http://nodejs.org/)
  - [GulpJS](http://gulpjs.com/)
  - [Livescript](http://livescript.net/)

2. Clone this repository:

  ```sh
  $ git clone https://github.com/mabrasil/lumberpack.git my_project
  ```

3. Install all dependencies:

  ```sh
  $ cd my_project
  $ npm install
  ```

4. Run the default gulp task:

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

Now let's find out what each one of those files and folders mean.

P.S.: Some very commom files - or less important - are shown here, such as the `.md` ones - *README*, *LICENSE* *CONTRIBUTING* -, the CIs tracking files like `.codeclimate.yml` or `.travis.yml` and others.

##### [`gulp/`](/gulp/)

Contains the module with all the *gulp tasks*.

##### [`src/images/`](/src/images/)

Contains the the *images* that will be used in your project.

##### [`src/scripts/`](/src/scripts/)

Contains the *scripts* - written in *Livescript* - that will be used in your project.

##### [`src/styles/`](/src/styles/)

Contains the *styles* - written in *Stylus* - that will be used in your project.

##### [`src/templates/`](/src/templates/)

Contains the *tamplates* - written in *Jade* - that will be used in your project.

##### [`src/config.json`](/src/config.json)

Contains some of basic info from your site that will be rendered in the templates.

##### www/

This is where the generated files are stored, once the tasks are finished. However, this directory is unnecessary in versioning, so it's [ignored](.gitignore).

##### [`.stylintrc`](.stylintrc)

It defines some options available to stylint.

##### [`gulpfile.js`](gulpfile.js)

Calls the gulp tasks.

##### [`package.json`](package.json)

Contains many metadata relevant to the project.

#### Understand the Gulp Tasks

All the Gulp tasks are in the [`tasks/`](gulp/tasks) folder. Each one consists of a module with a function which is required into tasks defined in the [`gulpfile`](https://github.com/mabrasil/lumberpack/blob/master/gulpfile.js).

|     Command         |                Description                |
|---------------------|-------------------------------------------|
| `gulp`              | Initialize watch for changes and a server |
| `gulp ls`           | Compile Livescript files                  |
| `gulp jade`         | Compile Jade files                        |
| `gulp stylus`       | Compile Stylus files                      |
| `gulp imagemin`     | Compress image files                      |
| `gulp watch`        | Call to watch files                       |
| `gulp deploy-rsync` | Deploy via rsync                          |
| `gulp -p`           | Minify all files for production           |
| `gulp build -p`     | Minify files and deploy via rsync         |

#### Setup the project's basic info

Some of basic info from your site will be rendered from a [`config.json`](/src/config.json) file. This is done to make it easier
to change some general data - like the site *name* or *descrption*. The `config.json` initial structure is:

```json
{
   "about":{
      "name": "",
      "description": "",
      "color": "",
      "favicon": ""
   },
   "social":{
      "facebook":{
        "admins":"",
        "url": "",
        "type": "",
        "name": "",
        "title": "",
        "description": "",
        "image": ""
      },
      "twitter":{
         "card": "",
         "site": "",
         "title": "",
         "description": "",
         "image": ""
      },
      "plus":{
         "name": "",
         "description": "",
         "image": ""
      }
   },
   "deploy":{
      "rsync":{
        "username":"",
        "hostname": "",
        "dest": ""
      }
   }
}

```

These are the data given by `config.json`:

##### About

- `name`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<title></title>`

- `description`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta name="description" content="">`

- `color`:

  **Type**: `string` *(#HEX)*

  **Default**: `""`

  **Equivalent**: `<meta name="theme-color" content="">`

- `favicon`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<link rel="icon" type="image/png" href="">`

##### Social

###### Facebook

- `admins`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta property="fb:admins" content="">`

- `url`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta property="og:url" content="">`

- `type`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta property="og:type" content="">`

- `name`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta property="og:site_name" content="">`

- `title`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta property="og:title" content="">`

- `description`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta property="og:description" content="">`

- `image`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta property="og:image" content="">`

###### Twitter

- `card`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta name="twitter:card" content="">`

- `site`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta name="twitter:site" content="">`

- `title`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta name="twitter:title" content="">`

- `description`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta name="twitter:description" content="">`

- `image`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta property="twitter:image:src" content="">`

###### Google Plus

- `name`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta itemprop="name" content="">`

- `description`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta itemprop="description" content="">`

- `image`:

  **Type**: `string`

  **Default**: `""`

  **Equivalent**: `<meta itemprop="image" content="">`

##### Deploy

###### Rsync

- `username`:

  **Type**: `string`

  **Default**: `""`

  **Description**: Your username at the remote server.

- `hostname`:

  **Type**: `string`

  **Default**: `""`

  **Description**: Your server domain (URL).

- `dest`:

  **Type**: `string`

  **Default**: `""`

  **Description**: Path on the server that will receive the files.

##### Example

Here's an example on how to fill your `config.json` file. Try it (:

```json
{
   "about":{
      "name": "Lumberpack",
      "description": "Lumberpack is a simple boilerplate to easily bootstrap projects with a bunch of cool technologies.",
      "color": "#c0392b",
      "favicon": "img/favicon.png"
   },
   "social":{
      "facebook":{
        "admins":"",
        "url": "https://github.com/mabrasil/lumberpack",
        "type": "website",
        "name": "Lumberpack",
        "title": "Lumberpack",
        "description": "Lumberpack is a simple boilerplate to easily bootstrap projects with a bunch of cool technologies.",
        "image": "img/logo.png"
      },
      "twitter":{
         "card": "summary_large_image",
         "site": "@mabrasil_io",
         "title": "Lumberpack",
         "description": "Lumberpack is a simple boilerplate to easily bootstrap projects with a bunch of cool technologies.",
         "image": "img/logo.png"
      },
      "plus":{
         "name": "Lumberpack",
         "description": "Lumberpack is a simple boilerplate to easily bootstrap projects with a bunch of cool technologies.",
         "image": "img/logo.png"
      }
   },
   "deploy":{
      "rsync":{
        "username":"mabrasil",
        "hostname": "mabrasil.rocks",
        "dest": "/path/to/www"
      }
   }
}
```

If everything happens okay, you must see something like this:

![Screenshot](/screenshot.png)

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
