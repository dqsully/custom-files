(function() {
  var CompositeDisposable, path;

  CompositeDisposable = require('atom').CompositeDisposable;

  fs = require('fs-plus');

  path = require('path');

  treeView = require('tree-view');

  module.exports = {
    activate: function(state) {
      this.disposables = new CompositeDisposable();
      return this.disposables.add(atom.commands.add('atom-workspace', {
        'custom-files:iconcolor': (function(_this) {
          return function() {
            console.log(fs.getHomeDirectory());
          };
        })(this),
        'custom-files:backgroundcolor': (function(_this) {
          return function() {

          };
        })(this),
        'custom-files:textcolor': (function(_this) {
          return function() {

          };
        })(this),
        'custom-files:highlightcolor': (function(_this) {
          return function() {

          };
        })(this),
        'custom-files:removehighlight': (function(_this) {
          return function() {

          };
        })(this),
        'custom-files:alias': (function(_this) {
          return function() {

          };
        })(this),
        'custom-files:removepath': (function(_this) {
          return function() {

          };
        })(this),

        // 'tree-view:rename': (function(_this) {
        //   return function() {
        //     return _this.createView().moveSelectedEntry();
        //   };
        // })(this)
      }));
    },
    deactivate: function() {
    },
    addpath: function() {

    },

  };

}).call(this);
