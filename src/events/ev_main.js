var ev_main = new BSM.Event("main");

ev_main.OnOpen = function(){
	base.HideMessage();
	ev_main.Route();
};

ev_main.Route = function(){
	//Check Events
	if(base.CheckEvents())
		return;	//Event is taking over!
	var tipText = "<h3>What would you like to do?</h3><p>";

	if(player.InTutorial){
		tipText += "Now that you've completed the tutorial you're on your own! Every action you complete will advance you one month forward. Normally, once "+baby.Name+" is 18 years old, "+baby.HeShe()+" would choose "+baby.HisHer()+" profession and you'd find out how you did as a parent! However, since this is the <strong>Super Special Ludum Dare Edition</strong>, we're going to stop you at 3 years and let you know how you did!</p><p>";
		player.InTutorial = false;
	}

	if(player.BabysitterCost == 0 && !baby.InSchool){
		tipText += "You don't have a babysitter right now! Your Baby's happiness will decrease drastically every turn until you find one!<br/>";
		main.MakeAvailable("find_babysitter");
	}
	if(player.BabysitterCost > 0 && player.Money <= 200)
		tipText += "You're running low on money and you won't be able to pay your babysitter next month! Why not go to work?</br>";
	
	if(player.Job.Title != 'Unemployed')
		main.MakeAvailable("go_work");
	else
		main.MakeAvailable("find_job");

	tipText += "You have enough food for <strong>"+baby.FoodLeft+"</strong> month(s).<br/>";	
	if(baby.FoodLeft <= 2)
		tipText += "Maybe you should go buy some more.<br/>";
	tipText += "</br>";

	if(baby.GetHappiness <= 40)
		tipText += baby.Name+" seems to be getting depressed... maybe you should spend some time with "+baby.HimHer()+"?<br/><br/>";

	main.MakeAvailable("go_shopping");
	main.MakeAvailable("interact_baby");

	tipText += "</p>";
	main.SetTip(tipText);
	main.ShowMenu();
};

ev_main.OnUnload = function(){
	main.Clear();
};

ev_main.Register();
