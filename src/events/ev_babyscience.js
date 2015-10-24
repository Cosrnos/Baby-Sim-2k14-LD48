var ev_babyscience = new BSM.Event("babyscience");

ev_babyscience.Random = true;
ev_babyscience.Chance = 3;

ev_babyscience.OnOpen = function(){
	main.Clear();
	base.SetMessage("<h3>Science with Babies!</h3>"
		+"<p>You recieve a letter in the mail with a strange symbol on it. After you determine that there is absolutely no possibility of the envelope exploding once opened, you take a look inside...</p>"
		+"<p><em>Dear Mr. or Mrs. Sir:<br/>It has come to our attention that you are in the posession of what we believe to be a BABY. You may not know this, but we are the leading innovators in baby science and we would like to perform a few experiments on your child.</em></p>"
		+"<p><em>We have attatched <strong>32 Postal Stamps</strong> with this letter. If you are willing to let us experiment on your child please attatch the postal stamps directly to his/her forehead and drop directly in the mail. We will compensate you with <strong>$1000.</strong><br/>Best Regards,<br/>-Baby Science Co.</em></p>"
		+"<p>Do you let them experiment on "+baby.Name+"?");
	base.SetMessageType(base.MessageType.ACCEPTDENY);
	base.SetMainCallback(function(){
			ev_babyscience.AllowExperiment();
	});
	base.SetAltCallback(function(){
		ev_babyscience.DenyExperiment();
	});
	base.ShowMessage();
};

ev_babyscience.AllowExperiment = function(){
	base.HideMessage();
	var strMod = Math.floor(Math.random()*5);
	var spdMod = Math.floor(Math.random()*5);
	var intMod = Math.floor(Math.random()*5);
	var karmaMod = Math.floor(Math.random()*5);

	base.SetMessage("<h3>Results</h3>"
		+"<p>You decide to send "+baby.Name+" to the company. They seemed to be pretty reputable from what you could read in that letter.</p>"
		+"<p>A couple days later, "+baby.Name+" shows up in your mailbox. It seems "+baby.HeShe()+" was affected by the experiments!"
		+"<p>(Your baby has gained "+strMod+" strength!)<br/>(Your baby has gained "+spdMod+" speed!)<br/>(Your baby has gained "+intMod+" intelligence!)</p>"
		+"<p>(Your baby seems to be slightly more evil than you remembered... oh well...)</p>");
	baby.AddHappiness(-1);
	baby.AddKarma(-karmaMod);
	baby.AddInt(intMod);
	baby.AddSpd(spdMod);
	baby.AddStr(strMod);
	player.AddMoney(1000);
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(function(){
		base.SetEvent("main");
	});
	base.ShowMessage();
}

ev_babyscience.DenyExperiment = function(){
	base.HideMessage();
	base.SetMessage("<h3>Not My Baby!</h3>"
		+"<p>What kind of monster would let a strange company experiment on their child for $1000? You shred the letter and continue about your day.</p>");
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(function(){
		base.SetEvent("main");
	});
	base.ShowMessage();	
}

ev_babyscience.OnClose = function(){
	base.HideMessage();
};

ev_babyscience.Register();