var fs = require('fs');
var template = fs.readFileSync(__dirname + '/index.html', 'utf8');

var domify = require('domify');
var emitter = require('component-emitter');
var showable = require('segmentio-showable');
var classes = require('classes');

/**
 * Initialize a new `Overlay`.
 *
 * @param {Element} target The element to attach the overlay to
 * @api public
 */
function Overlay(target) {
  if(!(this instanceof Overlay)) return new Overlay(target);

  this.target = target || document.body;
  this.el = domify(template);
  this.el.addEventListener('click', this.handleClick.bind(this));

  var el = this.el;
  var parent = this.target;

  this.on('showing', function(){
    parent.appendChild(el);
  });

  this.on('hide', function(){
    parent.removeChild(el);
  });
}

/**
 * When the overlay is click, emit an event so that the view that is using this
 * overlay can choose to close the overlay if they want.
 *
 * @param {Event} e
 */
Overlay.prototype.handleClick = function(e){
  this.emit('click', e);
};

emitter(Overlay.prototype);
showable(Overlay.prototype);
classes(Overlay.prototype);

module.exports = Overlay;