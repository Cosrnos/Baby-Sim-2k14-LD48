var ev_roo = new BSM.Event("bonnaroo");

ev_roo.Scheduled = true;
ev_roo.CheckSchedule = function(){
	if (baby.Years() == 1 && baby.Months() == 3 && typeof player.Roo == 'undefined'){
		return true;
	}
	return false;
};

ev_roo.OnOpen = function(){
	player.Roo = true;
	main.Clear();
	base.SetMessage("<img src='assets/bonnaroo.png' /><h3 class='bonnaroo'>Bonnaroo!</h3>"
		+"<p class='bonnaroo'>Your friend <strong>Beth</strong> has an extra ticket to the <a href='http://bonnaroo.com/' target='_blank'>Bonnaroo Music Festival</a> in <strong>Manchester, TN</strong> and wants to know if you'd like to come with! Apparently there's a <a href='bonus/roolineup.html' target='_blank'>pretty good lineup</a> this year and all your friends are going to be there!</p>"
		+"<p class='bonnaroo'>If you decide to go, your baby will spend the month with a baby sitter and you'll be able to take a break from the difficult world of parenting!</p>"
		+"<p class='bonnaroo'>It will cost <strong>$600</strong>! Do you want to go with?</p>");
	base.SetMessageType(base.MessageType.ACCEPTDENY);
	base.SetMainCallback(function(){
		if(player.Money >= 600)
			ev_roo.DayOne();
		else
			ev_roo.NoMoney();
	});
	base.SetAltCallback(function(){
		base.SetEvent("main");
	});
	base.ShowMessage();
};

ev_roo.OnClose = function(){
	base.HideMessage();
};

ev_roo.DayOne = function(){
	player.SpendMoney(600);
	player.Roo = "Day1";
	main.Clear();
	main.SetTip("<img src='assets/bonnaroo.png' /><h3 class='bonnaroo'>Bonnaroo: Day One!</h3>"
		+"<p class='bonnaroo'>You wake up bright and early at your campsite. You've already become friends with your neighbors, <strong>Brian</strong>, <strong>Chris</strong>, <strong>Shosha</strong> and <strong>Anthony</strong> and you're ready for your first day at bonnaroo!</p>"
		+"<p class='bonnaroo'>You make your way to Center-roo and fill up water on the way. It's going to be a hot day and you want to be as prepared as possible!</p>"
		+"<p class='bonnaroo'>Before going through the arch, you get hundreds of hi-fives from all of the other festival goers! Everyone here is happy just to be alive and you can't even begin to describe how much love surrounds you!</p>"
		+"<p class='bonnaroo'>The friendly gatekeepers check your belongings and let you in!<br/>(In this demo you are only able to lie in the grass!)</p>");
	main.MakeAvailable("roo_lay");
	main.MakeAvailable("roo_food");
	main.MakeAvailable("roo_friend");
	main.MakeAvailable("roo_shop");
	main.MakeAvailable("roo_show");
	base.HideMessage();
	main.ShowMenu();
};

ev_roo.DayTwo = function(){
	player.Roo = "Day2";
	main.Clear();
	main.SetTip("<img src='assets/bonnaroo.png' /><h3 class='bonnaroo'>Bonnaroo: Day Two!</h3>"
		+"<p class='bonnaroo'>As you have your breakfast and your morning salad, you can't help but feel at peace. This place is more than just a party, that much is apparent. There's something different about it...</p>"
		+"<p class='bonnaroo'>You make your way to center-roo again and are once again lost in the middle of everything.</p>");
	main.MakeAvailable("roo_lay");
	main.MakeAvailable("roo_food");
	main.MakeAvailable("roo_friend");
	main.MakeAvailable("roo_shop");
	main.MakeAvailable("roo_show");
	base.HideMessage();
	main.ShowMenu();
};

ev_roo.DayThree = function(){
	player.Roo = "Day3";
	main.Clear();
	main.SetTip("<img src='assets/bonnaroo.png' /><h3 class='bonnaroo'>Bonnaroo: Day Three!</h3>"
		+"<p class='bonnaroo'>Waking up to the Tennesee heat is proving tiresome, but you're fine with it as long as you're waking up here. You feel in sync with everything around you and have adjusted to living <strong>in here</strong>.</p>"
		+"<p class='bonnaroo'>On your way to center-roo, you start singing a song just because you feel like it, and half the camp joins in with you.</p>");
	main.MakeAvailable("roo_lay");
	main.MakeAvailable("roo_food");
	main.MakeAvailable("roo_friend");
	main.MakeAvailable("roo_shop");
	main.MakeAvailable("roo_show");
	base.HideMessage();
	main.ShowMenu();
};

ev_roo.DayFour = function(){
	player.Roo = "Day4";
	main.Clear();
	main.SetTip("<img src='assets/bonnaroo.png' /><h3 class='bonnaroo'>Bonnaroo: Day Four!</h3>"
		+"<p class='bonnaroo'>It's your last day on the farm before you must head home and you're ready to make the most of it. You skip taking a shower for the fourth day in a row and opt instead to spend your time saying hello to the people around you. You've embraced the bonnaroo lifestyle and aren't afraid to simply exist.</p>"
		+"<p class='bonnaroo'>You decide to take a taxi around camp before heading to center-roo and wave to everyone around you. You can hear the shouts of \"Bonnaroooooo!\" as they echo across the camp. You are home.</p>");
	main.MakeAvailable("roo_lay");
	main.MakeAvailable("roo_food");
	main.MakeAvailable("roo_shop");
	main.MakeAvailable("roo_show");
	base.HideMessage();
	main.ShowMenu();
};

ev_roo.Ending = function(){
	player.Roo = true;
	main.Clear();
	base.SetMessage("<img src='assets/bonnaroo.png' /><h3 class='bonnaroo'>See you on the farm!</h3>"
		+"<p class='bonnaroo'>You had an amazing time at <strong>Bonnaroo</strong> and made many friends. You leave the farm with a new sense of wonder for the world and a lifetime of memories. You have never been happier.</p>"
		+"<p class='bonnaroo'>All good things must come to an end, however, and it's time to get back to taking care of "+baby.Name+"!");
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(function(){
		baby.NextTurn();
		base.SetEvent("main");
	});
	base.ShowMessage();
}

ev_roo.NoMoney = function(){
	base.HideMessage();
	base.SetMessage("<h3>No Money!</h3>"
		+"<p>You'd love to go but you don't have enough money. Too bad...</p>");
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(function(){
		base.SetEvent("main");
	});
	base.ShowMessage();
}

ev_roo.NextDay = function(){
	if(player.Roo == "Day4")
		ev_roo.Ending();
	if(player.Roo == "Day3")
		ev_roo.DayFour();
	if(player.Roo == "Day2")
		ev_roo.DayThree();
	if(player.Roo == "Day1")
		ev_roo.DayTwo();
};

ev_roo.Register();
