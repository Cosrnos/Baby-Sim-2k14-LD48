var ac_roo_show = new BSM.Action("roo_show","Go see a show!");

var stages = ["What Stage", "Which Stage", "This Tent", "That Tent", "The Other Tent"];
var bands = ["Justin Timberlake","Pretty Lights","Justice","Mumford & Sons","Jack Johnson","Knife Party"];

ac_roo_show.OnLoad = function(){
	var rnd = Math.floor(Math.random()*stages.length);

	var theStage = stages[rnd];

	rnd = Math.floor(Math.random()*bands.length);

	var band = bands[rnd];

	main.Clear();
	baby.AddStr(1);
	baby.AddSpeed(1);
	main.SetTip("<h3>"+band+"</h3>"
		+"<p>You make your way over to <strong>"+theStage+"</strong> to get ready for the next show. As you're waiting for <strong>"+band+"</strong> to go on, you sip your water patiently and talk to the people around you. Everyone is so friendly that they automatically look at you as a friend rather than a stranger.</p>"
		+"<p>Soon, <strong>"+band+"</strong> is playing and you and your new friends are taken over by the music! By the time you leave, you're almost dehydrated. Good thing you have enough water with you!<br/>(Your baby gains 1 strength & speed by proxy!)</p>");
	main.AddButton("next","Next",function(){
		ev_roo.NextDay();
	});
	main.ShowMenu();
};

ac_roo_show.OnUnload = function(){

};

ac_roo_show.Register();