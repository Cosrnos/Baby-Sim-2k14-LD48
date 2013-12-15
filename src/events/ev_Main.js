var ev_main = new BSM.Event("main");

ev_main.OnOpen = function(){
	ev_main.Route();
};

ev_main.Route = function(){
	var tipText = "<p>";

	if(player.InTutorial){
		tipText += "Now that you've completed the tutorial you're on your own! Every action you complete will advance you one week forward. Once "+baby.Name+" is 18 years old, "+baby.HeShe()+" will choose "+baby.HisHer+" profession and you'll find out how you did as a parent!</p><p>";
		player.InTutorial = false;
	}

	if(player.BabysitterCost == 0 && !baby.InSchool){
		tipText += "You don't have a babysitter right now! Your Baby's happiness will decrease drastically every turn until you find one!<br/>";
		main.MakeAvailable("find_babysitter");
	}
	
	if(player.Job.Title != 'Unemployed')
		main.MakeAvailable("go_work");
	else
		main.MakeAvailable("find_job");

	tipText += "You have enough food for <strong>"+baby.FoodLeft+"</strong> week(s).<br/>";	
	if(baby.FoodLeft <= 2)
		tipText += "Maybe you should go buys some more.<br/>";
	tipText += "</br>";

	if(baby.GetHappiness <= 40)
		tipText += baby.Name+" seems to be getting depressed... maybe you should spend some time with "+baby.HimHer()+"?<br/><br/>";

	main.MakeAvailable("go_shopping");
	main.MakeAvailable("interact_baby");

	tipText += "</p>";
	main.SetTip(tipText);
	main.ShowMenu();
};

ev_main.Register();