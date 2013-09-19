# css
  
  Simple CSS manipulation.

## Installation

    $ component install ianstormtaylor/css

## Example

```js
var css = require('css');
var div = document.getElementById('header');

// get
css(div, 'position'); // "relative"

// set one at a time
css(div, 'position', 'fixed');

// set many at a time
css(div, {
  position: 'fixed',
  top: '24px'
});
```

## API

### css(el, property)
  
  Get the current value of a CSS `property` of an `el`.

### css(el, property, value)

  Set the `value` of a CSS `property` on an `el`.

### css(el, properties)

  Set the value of a dictionary of `properties` on an `el`.

## License

  MIT
