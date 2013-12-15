var ac_roo_lay = new BSM.Action("roo_lay","Lay in the Grass");

ac_roo_lay.OnLoad = function(){
	//TODO: Give a chance for random events!
	main.Clear();

	bands = "<strong>Passion Pit</strong>, <strong>Crystal Castles</strong>, <strong>Sleigh Bells</strong> and <strong>The Knife</strong>";
	if(player.Roo == "Day2")
		bands = "<strong>Madonna</strong>, <strong>Mumford & Sons</strong>, <strong>M.I.A</strong> and <strong>Griz</strong>";
	if(player.Roo== "Day3")
		bands = "<strong>Xxyyxx</strong>, <strong>Diplo</strong>, <strong>CocoRosie</strong>, <strong>Amanda Palmer</strong> and <strong>Gorillaz</strong>";
	if(player.Roo == "Day4")
		bands = "<strong>Justice</strong>, <strong>Sigur Ros</strong>, <strong>Regina Spektor</strong> and <strong>LCD Soundsystem</strong>";
	main.SetTip("<h3>A world away...</h3>"
		+"<p>You decide to spend the day just laying in the grass, appreciating the fact you are alive. This place is so magical, not even the game creator's jokes can be found.</p>"
		+"<p>You lay back and let the sounds of "+bands+" wash over you.");
	main.AddButton("nextDay","Next",function(){
		ev_roo.NextDay();
	});

	main.ShowMenu();
};

ac_roo_lay.OnUnload = function(){

};

ac_roo_lay.Register();
