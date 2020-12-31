// this isn't transpiled, so it has to use CommonJs and ES5

// transpile our code before our tests run
require("@babel/register")();

// disable webpack features that mocha doesn't understand
