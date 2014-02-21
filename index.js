
var camel = require('to-camel-case')
  , computed = require('computed-style')
  , type = require('type');


/**
 * Expose `css`.
 */

module.exports = css;

/**
 * Don't append `px`.
 */

var ignore = {
  columnCount: true,
  fillOpacity: true,
  fontWeight: true,
  lineHeight: true,
  opacity: true,
  orphans: true,
  widows: true,
  zIndex: true,
  zoom: true
};

/**
 * Get or set CSS properties of an `el`.
 *
 * @param {Element} el
 * @param {String|Object} prop
 * @param {String} value (optional)
 */

function css (el, prop, value) {
  if (1 == arguments.length) return wrapped(el);

  if (type(prop) == 'object') {
    for (var key in prop) set(el, key, prop[key]);
    return;
  }

  return arguments.length == 3
    ? set(el, prop, value)
    : get(el, prop);
}

/**
 * Wrap the given `el`.
 *
 * @param {Element} el
 */

function wrapped (el) {
  return function(){
    var args = [].slice.call(arguments);
    return css.apply(null, [el].concat(args));
  };
}


/**
 * Get the current CSS `prop` value of an `el`.
 *
 * @param {Element} el
 * @param {String} prop
 */

function get (el, prop) {
  return computed(el)[prop];
}


/**
 * Set a CSS `prop` to `value` on an `element`.
 *
 * @param {Element} element
 * @param {String} prop
 * @param {String} value
 */

function set (el, prop, value) {
  prop = camel(prop);
  if ('number' == typeof value && !ignore[prop]) value += 'px';
  el.style[prop] = value;
}
