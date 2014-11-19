# Reading List

This README outlines the details of collaborating on this Ember application.

This is the in-progress new frontend for the [Reading list](http://readinglist.pgengler.net) app.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone https://github.com/pgengler/reading-list-frontend.git`
* `cd reading-list-frontend`
* `npm install`
* `bower install`

### For the dummy API server
* `cd dummy-api`
* `bundle install`

## Running / Development

### Starting the dummy API server
* `cd dummy-api`
* `rackup`
The dummy API server should now be running on port 9292.

### Serving the Ember frontend
* `ember server --proxy http://localhost:9292`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

