
var computed = require('computed-style')
  , type = require('type');


/**
 * Expose `css`.
 */

module.exports = css;


/**
 * Get or set CSS properties of an `el`.
 *
 * @param {Element} el
 * @param {String|Object} prop
 * @param {String} value (optional)
 */

function css (el, prop, value) {
  if (type(prop) == 'object') {
    for (var key in prop) set(el, key, prop[key]);
    return;
  }

  return arguments.length == 3
    ? set(el, prop, value)
    : get(el, prop);
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
  el.style[prop] = value;
}