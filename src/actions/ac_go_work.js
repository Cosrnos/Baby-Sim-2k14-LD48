var ac_go_work = new BSM.Action("go_work","Go to Work");

ac_go_work.stage = 0;

ac_go_work.OnLoad = function(){
	//TODO: Give a chance for random events!
	main.Clear();
	main.MakeUnavailable("go_work");
	switch(ac_go_work.stage){
		case 0:
			main.SetTip("<h3>Another day at work...</h3>"
				+"Nothing exciting happened, but you did make <strong>$"+player.Job.Pay+"</strong>!<br/>");
			player.GetPaid();
			ac_go_work.stage = 1;
			this.BtnText = "Next"
			main.MakeAvailable("go_work");
			main.ShowMenu();
		break;
		case 1:
			baby.NextTurn();
			this.BtnText = "Go to Work";
			ac_go_work.stage = 0;
			ev_main.Route();
		break;
	}
};

ac_go_work.OnUnload = function(){

};

ac_go_work.Register();