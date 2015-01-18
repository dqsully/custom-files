
module.exports = CustomFiles =
    activate: ->
        atom.commands.add 'atom-workspace', "custom-files:icon", => @icon()
        atom.commands.add 'atom-workspace', "custom-files:background", => @background()
        atom.commands.add 'atom-workspace', "custom-files:text", => @text()
        atom.commands.add 'atom-workspace', "custom-files:highlight", => @highlight()
        atom.commands.add 'atom-workspace', "custom-files:alias", => @alias()

    icon: ->


    background: ->


    text: ->


    highlight: ->


    alias: ->
