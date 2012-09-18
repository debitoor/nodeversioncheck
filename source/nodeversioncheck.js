"use strict";
var semver = require("semver");
var fs = require("fs");
var format = require("util").format;
var path = require("path");

var nodeVersionRequired = require(path.resolve("package.json")).engines.node;
var actualNodeVersion = process.versions.node;
if (semver.satisfies(actualNodeVersion, nodeVersionRequired)) {
	console.log("Running correct node V%s. (according to package.json we need V%s)", actualNodeVersion, nodeVersionRequired);
} else {
	//writeSync so output is printed before exit.
	fs.writeSync(
		process.stderr.fd,
		format("Running WRONG node V%s. (according to package.json we need V%s)\n",
			actualNodeVersion,
			nodeVersionRequired
		)
	);
	process.exit(1);
}
