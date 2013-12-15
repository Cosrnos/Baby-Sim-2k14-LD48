var ac_interact_baby_tut = new BSM.Action("interact_baby_tut","Interact with Baby");

ac_interact_baby_tut.Action = "start";
ac_interact_baby_tut.OnLoad = function(){
	main.Clear();
	switch(ac_interact_baby_tut.Action){
	case "start":
		main.MakeUnavailable("interact_baby_tut");
		main.SetTip("<p>As your child grows older, different options will be available when interacting with "+baby.HimHer()+". Your interaction with your baby will help shape what kind of person "+baby.HeShe()+" grows up to be!</p>"
			+"<p>Unfortunately, you can't really do anything cool with a baby this young. Sure, you could try to <strong>Play Catch</strong> or <strong>Have a Teaparty</strong> with it, but <strong>child services</strong> has deemed those actions inappropriate until a baby can move on its own.</p>"
			+"<p>We also tried turning a baby into a puppet once but that didn't work out too well.<br/>Science with babies can be very complicated.</p>");
		main.GetAction("interact_baby_tut").BtnText = "Hold Baby";
		ac_interact_baby_tut.Action = "hold_baby";
		main.MakeAvailable("interact_baby_tut");
		main.ShowMenu();
	break;
	case "hold_baby":
		baby.AddHappiness(40);
		baby.AddStr(1);
		base.SetMessage("<h3>No longer lonely!</h3>"
			+"<p>Wow! You're doing great holding that baby! Most people don't even know how to do that. You would think it'd be common knowledge but you'd be surprised how many people mess that up.</p>"
			+"<p>With this knowledge of interacting with babies, you are now equipped to help shape the future of the little grease monkey! Any interaction will impact the child. For instance, holding it has increased it's happiness by 40 and we've also given it a growth hormone to make it a little bit stronger!</p>");
		base.SetMessageType(base.MessageType.CONTINUE);
		base.SetMainCallback(function(){
			ev_start.Finish_Tutorial();
			main.MakeUnavailable("interact_baby_tut");
		});
		base.ShowMessage();
	break;
	}
};

ac_interact_baby_tut.OnUnload = function(){
	main.MakeUnavailable("interact_baby_tut");
};

ac_interact_baby_tut.Register();