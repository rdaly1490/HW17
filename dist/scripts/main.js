$(document).ready(function() {

$("#load").hide()


	var Router = Backbone.Router.extend({
		routes: {
			"": "menu",
			"play": "foo",
			"leader": "bar",
			"settings": "baz",
			"*not-found": "dne"
		},

		menu: function() {
			$("#menu").hide();
			$("#load").show();
			$("#load").delay(4000).fadeOut();
			$("#menu").delay(4000).fadeIn();

		},

		foo: function() {
			console.log("Play");
			$(".page").hide();
			$("#play-game").show();
			$("#menu").css("backgroundColor", "#6e2929");
		},

		bar: function() {
			console.log("Leaderboards");
			$(".page").hide();
			$("#leaderboards").show();
			$("#menu").css("backgroundColor", "#6e2929");
		},

		baz: function() {
			console.log("settings");
			$(".page").hide();
			$("#set").show();
			$("#menu").css("backgroundColor", "#6e2929");
		}

	});

	var myRouter = new Router();
	Backbone.history.start();


});