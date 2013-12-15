var ac_go_work = new BSM.Action("go_work","Go to Work");

ac_go_work.stage = 0;

ac_go_work.OnLoad = function(){
	//TODO: Give a chance for random events!
	main.Clear();
	main.MakeUnavailable("go_work");
	switch(ac_go_work.stage){
		case 0:
			if((Math.floor(Math.random()*100)+1) <= 5){
				main.SetTip("<h3>Fired!?</h3>"
					+"<p>Apparently showing up to work drunk and naked is a bad thing. You've been fired from your job as a "+player.Job.Title+" and didn't get paid this month.");
				player.Job.Title = "Unemployed";
				player.Job.Pay = "0";				
			}else if((Math.floor(Math.random()*100)+1) <= 15){
				player.Job.OnPromotion();
				main.SetTip("<h3>A Promotion!</h3>"
					+"<p>You've been doing a great job at work lately and your old boss got fired for saying sexual things to the secretary. You have now been promoted to <strong>"+player.Job.Title+"!</strong></p>"
					+"<p>Additionally, you are now making <strong>$"+player.Job.Pay+"</strong>!</p>"
					+"<p>Your next promotion will be <strong>"+player.Job.NextPromotion+"</strong></p>");
				player.GetPaid();
			}else{
				main.SetTip("<h3>Another day at work...</h3>"
					+"Nothing exciting happened, but you did make <strong>$"+player.Job.Pay+"</strong>!<br/>");
				player.GetPaid();
			}
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
