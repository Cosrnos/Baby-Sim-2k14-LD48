var ev_birthday = new BSM.Event("birthday");

ev_birthday.LastBirthday = 0;

ev_birthday.Scheduled = true;
ev_birthday.CheckSchedule = function(){
	if ((baby.Years() == 1 || baby.Years() == 2) && baby.Months() == 0){
		if(ev_birthday.LastBirthday == 0 && baby.Years() == 1)
			return true;
		if(ev_birthday.LastBirthday == 1 && baby.Years() == 2)
			return true;
	}
	return false;
};

ev_birthday.OnOpen = function(){
	ev_birthday.LastBirthday++;
	main.Clear();
	base.SetMessage("<h3>Birthdays!</h3>"
		+"<p>Your baby turns <strong>"+ev_birthday.LastBirthday+"</strong> this month! Do you want to commemorate this moment and throw "+baby.HimHer()+" a birthday party? It will cost a total of <strong>$300</strong> to throw a party, but isn't the lifetime of memories worth it all?</p>"
		+"<p>Do you want to throw "+baby.Name+" a birthday party?");
	base.SetMessageType(base.MessageType.ACCEPTDENY);
	base.SetMainCallback(function(){
		if(player.Money >= 300)
			ev_birthday.HaveParty();
		else
			ev_birthday.NoMoney();
	});
	base.SetAltCallback(function(){
		ev_birthday.NoParty();
	});
	base.ShowMessage();
};

ev_birthday.HaveParty = function(){
	base.HideMessage();
	base.SetMessage("<h3>Yay Birthdays!</h3>"
		+"<p>You throw a party for "+baby.Name+"! "+baby.HisHer()+" happiness is off the charts and you managed to save enough cake to last you a full month!</p>");
	baby.FoodLeft += 1;
	baby.AddHappiness(50); //Refilling would be too much but this is a good level yea
	baby.AddKarma(1);
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(function(){
		base.SetEvent("main");
	});
	base.ShowMessage();
}

ev_birthday.NoParty = function(){
	base.HideMessage();
	base.SetMessage("<h3>So you just hate birthdays?</h3>"
		+"<p>You decide not to throw a party for "+baby.Name+". What did that little brat ever do for you?<br/>(Your baby loses 10 happiness and will never forget this moment!)</p>");
	baby.AddHappiness(-10);
	baby.AddKarma(-5);
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(function(){
		base.SetEvent("main");
	});
	base.ShowMessage();	
}

ev_birthday.NoMoney = function(){
	base.HideMessage();
	base.SetMessage("<h3>No Money!</h3>"
		+"<p>As much as you'd like to throw "+baby.Name+" a birthday party, you just don't have the money. Oh well, there's always next year...<br/>(Your baby loses 10 happiness and will never forget this moment!)</p>");
	baby.AddHappiness(-10);
	baby.AddKarma(-5);
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(function(){
		base.SetEvent("main");
	});
	base.ShowMessage();	
}

ev_birthday.OnClose = function(){
	base.HideMessage();
};

ev_birthday.Register();