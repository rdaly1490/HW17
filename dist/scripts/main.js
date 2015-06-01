$(document).ready(function() {

$("#load").hide();
$("#intro").hide();

	var Router = Backbone.Router.extend({
		routes: {
			"": "menu",
			"play": "foo",
			"leader": "bar",
			"settings": "baz",
			"*notfound": "dne"
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
		},

		foo: function() {
			$(".page").hide();
			$("#intro").hide();
			$("#play-game").show();
		},

		bar: function() {
			$(".page").hide();
			$("#intro").hide();
			$("#leaderboards").show();
		},

		baz: function() {
			$(".page").hide();
			$("#intro").hide();
			$("#set").show();
		},

		dne: function() {
			$(".page").hide();
			$("#intro #top").html("404 Page Not Found");
			$("#intro #bottom").html("");
			$("#intro").css("marginTop", "200px");
			$("#intro").show();
		}

	});

	var myRouter = new Router();
	Backbone.history.start();


});