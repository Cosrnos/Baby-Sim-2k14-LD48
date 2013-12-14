var ac_find_job = new BSM.Action("find_job","Find a Job");

ac_find_job.OnLoad = function(){
	//Randomly give them a job and save the variable.
	main.Clear();
	var jobTitle = "Server";
	base.SetMessage("<p>Congratulations! You've gotten your first job as a <strong>"+jobTitle+"</strong>!</p>"
		+"<p>This is a very important step in your budding career as a professional baby raiser and you will forever remember this moment until you forget it.</p>"
		+"<p>Now that you have a job, let's feed "+baby.Name+"!</p>");
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(ac_find_job.OnUnload);
	base.ShowMessage();
};

ac_find_job.OnUnload = function(){
	main.MakeUnavailable("find_job");
	base.HideMessage();
	ev_start.Tutorial_Two();
};

ac_find_job.Register();