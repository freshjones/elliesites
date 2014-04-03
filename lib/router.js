Router.configure ({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
});

Router.map(function() { 
	
	this.route('home', {
		path: '/',
		title:"Home",
		fastRender: true
	});
	
});

Router.onAfterAction(function(){
    document.title = this.lookupProperty('title') + ' - Ellie Sites';
});