// fs = require 'fs-plus'
//
// module.exports =
//   syntaxerrorjkdfsaljficonb!!jfdsa9
//
//   activate: ->
//     @init()
//     atom.commands.add '.tree-view', "custom-files:icon", => @icon
//     atom.commands.add '.tree-view', "custom-files:background", => @background
//     atom.commands.add '.tree-view', "custom-files:text", => @text
//     atom.commands.add '.tree-view', "custom-files:highlight", => @highlight
//     atom.commands.add '.tree-view', "custom-files:alias", => @alias
//
//   init: ->
//     @configPath = path.join(atom.getConfigDirPath(), 'custom-files')
//
//   icon: ->
//     console.log 'changedFile'
//
//   background: ->
//
//
//   text: ->
//
//
//   highlight: ->
//
//
//   alias: ->
//
//
//   pathChanged: ->
//
//
//   beforeUnload: ->


(function() {
  var path;


  path = require('path');

  module.exports = {
    activate: function(state) {
      return this.disposables.add(atom.commands.add('atom-workspace', {
        'custom-files': (function(_this) {
          return function() {
          }
        })
        // 'tree-view:show': (function(_this) {
        //   return function() {
        //     return _this.createView().show();
        //   };
        // })(this),
        // 'tree-view:toggle': (function(_this) {
        //   return function() {
        //     return _this.createView().toggle();
        //   };
        // })(this),
        // 'tree-view:toggle-focus': (function(_this) {
        //   return function() {
        //     return _this.createView().toggleFocus();
        //   };
        // })(this),
        // 'tree-view:reveal-active-file': (function(_this) {
        //   return function() {
        //     return _this.createView().revealActiveFile();
        //   };
        // })(this),
        // 'tree-view:toggle-side': (function(_this) {
        //   return function() {
        //     return _this.createView().toggleSide();
        //   };
        // })(this),
        // 'tree-view:add-file': (function(_this) {
        //   return function() {
        //     return _this.createView().add(true);
        //   };
        // })(this),
        // 'tree-view:add-folder': (function(_this) {
        //   return function() {
        //     return _this.createView().add(false);
        //   };
        // })(this),
        // 'tree-view:duplicate': (function(_this) {
        //   return function() {
        //     return _this.createView().copySelectedEntry();
        //   };
        // })(this),
        // 'tree-view:remove': (function(_this) {
        //   return function() {
        //     return _this.createView().removeSelectedEntries();
        //   };
        // })(this),
        // 'tree-view:rename': (function(_this) {
        //   return function() {
        //     return _this.createView().moveSelectedEntry();
        //   };
        })(this)
      }));
    },
    deactivate: function() {
      var _ref;
      this.disposables.dispose();
      if ((_ref = this.treeView) != null) {
        _ref.deactivate();
      }
      return this.treeView = null;
    },
  };

}).call(this);
