var ev_gaybabyjail = new BSM.Event("gaybabyjail");


ev_gaybabyjail.Random = true;
ev_gaybabyjail.Chance = 1;

ev_gaybabyjail.OnOpen = function(){
	ev_gaybabyjail.LastBirthday++;
	main.Clear();
	base.SetMessage("<h3>gay baby jail</h3>"
		+"<p>Uh oh! Your baby has been sent to <strong>gay baby jail</strong> which is a super strong <strong>jail</strong> for <strong>gay babies</strong>.</p>"
		+"<p>You can either bail "+baby.HimHer()+" out or you can let "+baby.HimHer()+" sit there for the weekend."
		+"<p>Do you pay the <strong>$250</strong> bail?</p>");
	base.SetMessageType(base.MessageType.ACCEPTDENY);
	base.SetMainCallback(function(){
		if(player.Money >= 250)
			ev_gaybabyjail.PostBail();
		else
			ev_gaybabyjail.NoMoney();
	});
	base.SetAltCallback(function(){
		ev_gaybabyjail.Jail();
	});
	base.ShowMessage();
};

ev_gaybabyjail.PostBail = function(){
	base.HideMessage();
	base.SetMessage("<h3>Saved!</h3>"
		+"<p>You posted the bail for "+baby.Name+" and "+baby.HeShe()+" did not have to spend the weekend in <strong>gay baby jail.</strong></p>");
	player.SpendMoney(250);
	baby.AddKarma(1);
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(function(){
		base.SetEvent("main");
	});
	base.ShowMessage();
};

ev_gaybabyjail.NoMoney = function(){
	base.HideMessage();
	base.SetMessage("<h3>Not enough money!</h3>"
		+"<p>As much as you'd like to bail "+baby.Name+", you just don't have the cash. Unfortunately "+baby.HeShe()+" spends the weekend in <strong>gay baby jail.</strong></p>"
		+"<p>At least "+baby.HeShe()+" gained some <strong>street cred</strong>");
	baby.AddKarma(-1);
	baby.AddState("street_cred");
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(function(){
		base.SetEvent("main");
	});
	base.ShowMessage();
};

ev_gaybabyjail.Jail = function(){
	base.HideMessage();
	base.SetMessage("<h3>A quiet weekend!</h3>"
		+"<p>Since you didn't post "+baby.Name+"'s bail you enjoy a quiet weekend as "+baby.HeShe()+" spends the weekend in <strong>gay baby jail.</strong></p>"
		+"<p>At least "+baby.Name+" gained some <strong>street cred</strong>");
	baby.AddKarma(-1);
	baby.AddState("street_cred");
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(function(){
		base.SetEvent("main");
	});
	base.ShowMessage();
};

ev_gaybabyjail.OnClose = function(){
	base.HideMessage();
};

ev_gaybabyjail.Register();