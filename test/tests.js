describe('css', function () {

  var assert = require('assert');
  var css = require('css');

  beforeEach(function () {
    this.div = document.createElement('div');
    document.body.appendChild(this.div);
  });

  afterEach(function () {
    this.div.parentNode.removeChild(this.div);
  });

  it('should get a property\'s value', function () {
    this.div.style.fontSize = '12px';
    assert('12px' == css(this.div, 'fontSize'));
  });

  it('should set a property\'s value', function () {
    css(this.div, 'fontSize', '16px');
    assert('16px' == css(this.div, 'fontSize'));
  });

  it('should set multiple properties at once', function () {
    css(this.div, {
      position: 'fixed',
      lineHeight: '10px'
    });
    assert('fixed' == css(this.div, 'position'));
    assert('10px' == css(this.div, 'lineHeight'));
  });

  it('should work with dashed case', function(){
    css(this.div, 'font-size', '16px');
    assert('16px' == css(this.div, 'font-size'));
  });

  it('should append `px` when needed', function(){
    var obj = { style: {} };
    css(obj, 'font-size', 16);
    assert('16px' == obj.style.fontSize);
  });

  it('should not append `px` when not needed', function(){
    var obj = { style: {} };
    css(obj, 'opacity', 1);
    assert(1 == obj.style.opacity);
  });

});
