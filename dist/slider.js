(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
var PARENT_STYLES = {
  display: 'flex',
  maxWidth: '100%'
};

var Slider = function () {
  function Slider(parent) {
    var args = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Slider);

    this.slides = [];

    this.args = Object.assign(Slider.defaults, args);
    this.parent = document.querySelector(parent);
    this.slides = Array.from(parent.childNodes);
    this.applyParentStyles();
    this.slides.forEach(function (slide) {
      return applySlideStyles(slide);
    });
  }

  _createClass(Slider, [{
    key: 'applyParentStyles',
    value: function applyParentStyles() {
      var parent = arguments.length <= 0 || arguments[0] === undefined ? this.parent : arguments[0];

      Object.assign(parent, {
        display: 'flex',
        maxWidth: '100%'
      });

      return parent;
    }
  }, {
    key: 'applySlideStyles',
    value: function applySlideStyles(slide) {
      if (!(slide instanceof Node)) {
        return el;
      }
      // Apply SLIDE_STYLES to slide
      Object.assign(slide.style, {
        minWidth: slideWidthMin,
        maxWidth: slideWidthMax,
        flex: '1 1 auto'
      });
      return slide;
    }
  }, {
    key: 'next',
    value: function next() {}
  }, {
    key: 'prev',
    value: function prev() {}
  }]);

  return Slider;
}();

Slider.defaults = {
  transitionDuration: 1000,
  transitionDelay: 8000,
  slideWidthMin: '480px',
  slideWidthMax: '640px'
};
exports.default = Slider;

},{}]},{},[1]);
