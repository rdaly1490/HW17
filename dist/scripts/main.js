$(document).ready(function() {

$("#load").hide();
$("#intro").hide();

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
			$("#menu").delay(4500).fadeIn();
			$("#play-game").hide();
			$("#leaderboards").hide();
			$("#set").hide();
			$("#intro").show();
			$("#intro").css("marginTop", "200px");
			$("#menu").css("backgroundColor", "#6e2929");

		},

		foo: function() {
			console.log("Play");
			$(".page").hide();
			$("#intro").hide();
			$("#play-game").show();
			$("#menu").css("backgroundColor", "#6e2929");
		},

		bar: function() {
			console.log("Leaderboards");
			$(".page").hide();
			$("#intro").hide();
			$("#leaderboards").show();
			$("#menu").css("backgroundColor", "#6e2929");
		},

		baz: function() {
			console.log("settings");
			$(".page").hide();
			$("#intro").hide();
			$("#set").show();
			$("#menu").css("backgroundColor", "#6e2929");
		},

		dne: function() {
			$("#menu").hide();
			$("#into p").innerHTML("404");
			$("#into p p").innerHTML("Page Not Found");
			$("#intro").show();
		}

	});

	var myRouter = new Router();
	Backbone.history.start();


});