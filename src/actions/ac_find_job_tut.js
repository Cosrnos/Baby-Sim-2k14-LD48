var ac_find_job_tut = new BSM.Action("find_job_tut","Find a Job");

ac_find_job_tut.OnLoad = function(){
	//Randomly give them a job and save the variable.
	main.Clear();
	//Generate random job...
	player.NewJob();
	base.SetMessage("<p>Congratulations! You've gotten your first job as a <strong>"+player.Job.Title+"</strong>!</p>"
		+"<p>This is a very important step in your budding career as a professional baby raiser and you will forever remember this moment until you forget it.</p>"
		+"<p>Now that you have a job, let's feed "+baby.Name+"!</p>");
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(ac_find_job_tut.OnUnload);
	base.ShowMessage();
};

ac_find_job_tut.OnUnload = function(){
	main.MakeUnavailable("find_job_tut");
	base.HideMessage();
	ev_start.Tutorial_Two();
};

ac_find_job_tut.Register();