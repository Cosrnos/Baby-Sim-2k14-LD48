var ev_findmoney = new BSM.Event("income");


ev_findmoney.Random = true;
ev_findmoney.Chance = 5;
ev_findmoney.OnOpen = function(){
	ev_findmoney.LastBirthday++;
	main.Clear();
	var amount = Math.floor(Math.random()*500)+100;
	base.SetMessage("<h3>Hey!</h3>"
		+"<p>You found someone's wallet on the street with <strong>$"+amount+"</strong> in it!</strong> Sweet!</p>");
	player.Money += amount;
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(function(){
		base.SetEvent("main");
	});
	base.ShowMessage();
};

ev_findmoney.OnClose = function(){
	base.HideMessage();
};

ev_findmoney.Register();