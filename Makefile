
build: build-component

build-component: components index.js
	@component build --dev

build-browserify: node_modules index.js
	mkdir -p build
	@browserify --require assert --require ./index.js:css --outfile build/build.js


components: component.json
	@component install --dev

clean:
	rm -fr build components node_modules

test: build
	open test/index.html

node_modules: package.json
	npm install

.PHONY: clean test build build-component build-browserify
