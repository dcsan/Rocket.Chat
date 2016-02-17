Template.registerHelper 'log', ->
    console.log('hi')
	console.log.apply console, arguments
