var ac_find_job = new BSM.Action("find_job","Find a Job");

ac_find_job.OnLoad = function(){
	//Randomly give them a job and save the variable.
	main.Clear();
	//Generate random job...
	player.NewJob();
	base.SetMessage("<p>Congratulations! You've found a new job as a <strong>"+player.Job.Title+"</strong>!</p>"
		+"<p>You are now making <strong>$"+player.Job.Pay+"</strong> per month.</p>"
		+"<p>Your next promotion will advance you to <strong>"+player.Job.NextPromotion+"</strong>!</p>");
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(ac_find_job.OnUnload);
	base.ShowMessage();
};

ac_find_job.OnUnload = function(){
	main.MakeUnavailable("find_job");
	base.HideMessage();
	baby.NextTurn();
	ev_main.Route();
};

ac_find_job.Register();