var ev_start = new BSM.Event("start");

ev_start.OnOpen = function(){
	base.SetMessage("<h3>Welcome!</h3><p>Welcome to Baby Simulator 2014! A game brought to you by <a href=\"http://cosrnos.com/\" target=\"_blank\">Cosrnos</a>.</p>"
+"<p>You have just given birth to a beautiful child and it's up to you to make sure it grows up to be successful! Be careful though, because <strong>you only get one!</strong></p>"
+"<p>Don't do anything that might cause it to fail in life or resent you or you'll end up in a horrible retirment home where the staff burns you with cigarettes and steals your things! Do you have what it takes to be a parent?<br/><em>[This game contains mature content]</em><p>");
	base.SetMessageType(base.MessageType.CONTINUE);
	base.ShowMessage();
	base.SetMainCallback(function(){
		ev_start.PromptName();
	});
};

ev_start.PromptName = function(){
	base.HideMessage();
	base.SetMessage('<h3>Naming your hellspawn</h3>'
			+"<p>Studies show that most children these days are given names, and that the happiness level of children with names is 50% higher than children without names. For this reason, we require that you name your little spawn before beginning.</p>"
			+ '<p>What is the name of this little friend?</p><input type="text" placeholder="Enter Name" id="pmt_babyName" />');
	base.SetMessageType(base.MessageType.INPUT);
	base.ShowMessage();
	base.SetMainCallback(function(){
		ev_start.AfterName();
	});
};

ev_start.AfterName = function(){
	var name = document.getElementById("pmt_babyName").value;
	base.Var.Baby = new Baby(name);
	base.HideMessage();
	baby = base.Var.Baby;
	base.SetMessage(
			"<h3>Does it have a penis?</h3>"
			+"<p>Congratulations! "+baby.Name+" is completely healthy and has 99% of its appendages! However we're still not sure what the gender of the child is (we're horrible doctors!)</p>"
			+"<p>Could you take a look? Is your baby a boy or a girl?</p>"
			+'<div class="inline-group">'
			+'<label class="sx" for="sx_boy"><input id="sx_boy" checked="true" type="radio" name="sex" value="1"></input><img src="assets/boy.png" width="64" height="64" />Boy</label>'
			+'<label class="sx" for="sx_girl"><input id="sx_girl" type="radio" name="sex" value="0"></input><img src="assets/girl.png" width="64" height="64" />Girl</label>'
			+"</div>");
	base.SetMainCallback(function(){
		ev_start.AfterGender();
	});
	base.ShowMessage();
};

ev_start.AfterGender = function(){
	var gender = 0;
	if(document.getElementById("sx_boy").checked)
		gender = 1;
	
	base.HideMessage();

	baby.SetGender(gender);
	base.SetMessage("<h3>It's a...</h3><p>Excellent! "+baby.Name+" is a "+baby.GetGender()+"!</p>"
		+"<p>Parenting can be a lot of hard work and it's up to you to make sure this baby doesn't turn into something horrible like a cannibal or a Washington Politician.</p>"
		+"<p>Before we begin, let's learn the basics of parenting!</p>");
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(ev_start.Tutorial_One);
	base.ShowMessage();
};

ev_start.Tutorial_One = function(){
	base.HideMessage();
	main.SetTip("<p>In order to support a child, you often require a form of currency to purchase things such as food, diapers and toys. This currency, or <strong>\"Money\"</strong> is often obtained through slave labor and dehumanizing work often referred to as <strong>\"Jobs.\"</strong></p>"
		+"<p>These <strong>\"Jobs\"</strong> are obtained through many different methods and you are usually able to pick one you would not hate your existence in. However, since you made the irresponsible decision of obtaining a child when you didn't have a job, you're going to have to take the first one that you can find to avoid starving your child.</p>"
		+"<p>Let's find one right now!</p>");
	main.MakeAvailable("find_job_tut");
	main.ShowMenu();
};

ev_start.Tutorial_Two = function(){
	main.SetTip("<p>In the olden days, you would have to hunt or gather food for your baby. Fortunately thanks to advancements in modern technology, you can now purchase food in special markets, or <strong>Grocery Stores</strong>.</p>"
		+"To visit a grocery store, you must first go shopping. Let's do that thing I just said right now!</p>");
	main.MakeAvailable("go_shopping_tut");
	main.ShowMenu();
};

ev_start.Tutorial_Three = function(){
	baby.FoodLeft = 4;
	main.SetTip("<p>It looks like "+baby.Name+" is doing pretty well and you're already a better parent than the last three people who tried this! One key thing that babies love, however, is <strong>interaction.</strong> Apparently the little tykes can't get enough of it!</p>"
		+"<p>Interacting with a baby may seem scary at first, but it's actually almost as easy as <strong>clicking a button!</strong> Let's interact with our baby right now!");
	main.MakeAvailable("interact_baby_tut");
	main.ShowMenu();
};

ev_start.Finish_Tutorial = function(){
	base.SetMessage("<h3>Certified Baby Technician!</h3>"
		+"<p>Congratulations! You have completed the tutorial and are now a registered <strong>Certified Baby Technician</strong>! You are now qualified to make any decision you'd like for your baby's future.</p>"
		+"<p>However, being a CBT doesn't automatically make you a great parent. There's still a lot that can go wrong! Make good decisions, and remember: <strong>You only get one!</strong>");
	base.SetMessageType(base.MessageType.OK);
	base.SetMainCallback(function(){
		base.HideMessage();
		base.SetEvent("main");
	});
	base.ShowMessage();
}

ev_start.Register();
