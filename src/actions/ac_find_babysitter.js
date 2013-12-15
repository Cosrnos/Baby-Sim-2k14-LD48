var ac_find_babysitter = new BSM.Action("find_babysitter","Find a Babysitter<br/>(-$150/month)");

ac_find_babysitter.stage = 0;

ac_find_babysitter.OnLoad = function(){
	//TODO: Give a chance for random events!
	main.Clear();
	main.MakeUnavailable("find_babysitter");
	switch(ac_find_babysitter.stage){
		case 0:
			main.SetTip("<h3>Find a Babysitter</h3>"
				+"<p>After searching for a month, you finally found a babysitter to get that <strike>little shit</strike> <em>little angel</em> off your hands! "+baby.Name+"'s happiness will no longer decrease as much every week.</p>"
				+"<p>You still feel a little nervous leaving your child with the old woman who runs the daycare, as her home has a distinct scent of ammonia and paint thinner. You shrug it off and leave "+baby.Name+" to play with the other kids.</p>");
			ac_find_babysitter.stage = 1;
			player.BabysitterCost = 150;
			this.BtnText = "Next";
			main.MakeAvailable("find_babysitter");
			main.ShowMenu();
		break;
		case 1:
			baby.NextTurn();
			ac_find_babysitter.stage = 0;
			ev_main.Route();
		break;
	}
};

ac_find_babysitter.OnUnload = function(){

};

ac_find_babysitter.Register();
