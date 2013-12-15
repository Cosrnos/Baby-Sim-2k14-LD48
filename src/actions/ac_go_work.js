var ac_go_work = new BSM.Action("go_work","Go to Work");

ac_go_work.stage = 0;

ac_go_work.OnLoad = function(){
	//TODO: Give a chance for random events!
	main.Clear();
	main.MakeUnavailable("go_work");
	switch(ac_go_work.stage){
		case 0:
			if((Math.floor(Math.random()*100)+1) <= 2){
				main.SetTip("<h3>Fired!?</h3>"
					+"<p>Apparently showing up to work drunk and naked is a bad thing. You've been fired from your job as a "+player.Job.Title+" and didn't get paid this month.");
				player.Job.Title = "Unemployed";
				player.Job.Pay = 0;				
			}else if((Math.floor(Math.random()*100)+1) <= 12){
				player.Job.OnPromotion();
				main.SetTip("<h3>A Promotion!</h3>"
					+"<p>You've been doing a great job at work lately and your old boss got fired for saying sexual things to the secretary. You have now been promoted to <strong>"+player.Job.Title+"!</strong></p>"
					+"<p>Additionally, you are now making <strong>$"+player.Job.Pay+"</strong>!</p>"
					+"<p>Your next promotion will be <strong>"+player.Job.NextPromotion+"</strong></p>");
				player.GetPaid(player.Job.Pay);
			}else{
				var outcomes = ["Today you found out exactly what a complete mental breakdown looks like as one of your co-workers was escorted from the building.",
				"You spend your day dreaming of burning this place to the ground.",
				"You work exceptionally hard and everyone should be proud to work with someone like you. Actually you just kind of sat around all day...",
				"You put in your best effort and your boss didn't even care. Oh well...",
				"You found a twenty dollar bill in the parking lot today. However, as you went to pick it up, a seagull attacked you as another one stole the money. Organized crime is getting way too out of hand.",
				"Much like our government, you got paid to stand around all day!",
				"You worked so hard not even your boss could ignore it! You receive a <strong>$300</strong> bonus for your great work!",
				"You go to work and get paid. What more do you want to know?",
				"One of your co-workers had a birthday and brought in a cake! Unfortunately nobody invited you to the party so you spent your day crying in the bathroom.",
				"Things are coming along pretty nicely at your job!",
				"Today you answered the age old question of how many licks it takes to get to the center of a tootsie roll tootsie pop. Or you would have if that bitch donna had given you one of the suckers she brought in. You hit her dog with your car one time and suddenly <em>you're</em> the bad guy...",
				"You were so lazy today that your boss docked your pay!",
				"While you were getting ready to go to work, you almost kicked "+baby.Name+" in the face again. You have to remember to get that thing a bell...",
				"Your co-workers heard you were trying to raise a child on your own. Rather than be compassionate, they've decided to silently judge you without knowing your background.",
				"You had such a bad day at work that you come home and begin drinking. Poor "+baby.Name+" has to witness this and has been scarred for life."];
				var seed = Math.floor(Math.random()*outcomes.length);
				if(seed == 6)
					thePay += 300;
				if(seed == 11)
					thePay -= 50;
				if(seed == 14)
					baby.AddKarma(-1);

				var TheHappen = outcomes[seed];
				var thePay = player.Job.Pay;
				main.SetTip("<h3>Another day at work...</h3>"
					+"<p>"+TheHappen+"</p><p>You made <strong>$"+thePay+"</strong></p>");
				player.GetPaid(thePay);
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
