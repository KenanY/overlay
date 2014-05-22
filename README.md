# overlay

A simple overlay UI component.

Rewrite of [segmentio/overlay](https://github.com/segmentio/overlay) for
npm+browserify support.

## Example

``` javascript
var overlay = require('overlay');

overlay().closeable();
```

## Installation

``` bash
$ npm install KenanY/overlay
```

## API

``` javascript
var overlay = require('overlay');
```

### var ovrly = overlay(target)

Show an overlay on a given `target` element, defaulting to `document.body`.

### ovrly.show(fn)

Show the overlay, optionally calling a callback `fn`. Emits `showing` and
`show`.

### ovrly.hide(fn)

Hide the overlay, optionally calling a callback `fn`. Emits `hiding` and `hide`.

### ovrly.remove(fn)

Remove the overlay from the DOM optionally calling a callback `fn`. If the
overlay isn't hidden yet, hide it first. Emits `removing` and `remove`.

### ovrly.closeable()

Make the overlay closeable by clicking on it, or hitting the `ESC` key.

Alias: `ovrly.closable()`

### ovrly.temporary()

Make the overlay remove itself after it's been hidden. This is useful for
one-off overlays where you don't want to have to manage removing it from the
DOM.

### ovrly.emitter

[component-emitter](https://github.com/component/emitter) is mixed in.

### ovrly.classes

[KenanY/classes](https://github.com/KenanY/classes) is mixed in.