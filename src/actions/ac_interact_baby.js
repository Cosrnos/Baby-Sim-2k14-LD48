var ac_interact_baby = new BSM.Action("interact_baby","Bond with Baby");

ac_interact_baby.OnLoad = function(){
	//TODO: Give a chance for random events!
	main.Clear();
	main.MakeUnavailable("interact_baby");

	main.SetTip("<h3>Bonding with your Baby</h3>"
		+"<p>It's come time for you to sit down with baby and bond. Some families choose to do this through activities like <strong>board games</strong> or <strong>subtle abuse</strong>. We're not quite sure which one works better, but it's been scientifically proven that spending any amount of time with your child can have positive effects.</p>");

	if(baby.Years() < 1){
		main.AddButton("cuddle_baby","Hold Baby",function(){
			main.Clear();
			main.SetTip("<h3>Hold On</h3><p>You spend a good 10 seconds holding "+baby.Name+". That oughtta do it!</p>");
			baby.AddHappiness(6);
			main.AddButton("next_turn","Next",function(){
				main.Clear();
				baby.NextTurn();
				ev_main.Route();
			});
			main.ShowMenu();
		});
		main.AddButton("sing_baby","Sing to Baby",function(){
			main.Clear();
			main.SetTip("<h3>All the single ladies</h3><p>After singing the latest beyonce album to "+baby.Name+", "+baby.HeShe()+" quickly falls asleep!</p>");
			baby.AddHappiness(6);
			main.AddButton("next_turn","Next",function(){
				main.Clear();
				baby.NextTurn();
				ev_main.Route();
			});
			main.ShowMenu();
		});
		main.AddButton("play_peekaboo","Play Peekaboo",function(){
			main.Clear();
			main.SetTip("<h3>WHERE'D YOU GO?</h3><p>You attempt to play a rousing game of peekaboo with "+baby.Name+" but the sudden shock of your disapparance and reappearance has given your child <strong>Abandonment Issues</strong>.</p>");
			baby.AddHappiness(20);
			//TODO: Add abandonment issues
			main.AddButton("next_turn","Next",function(){
				main.Clear();
				baby.NextTurn();
				ev_main.Route();
			});
			main.ShowMenu();
		});
	}
	if(baby.Years() >= 1){
		main.AddButton("teaparty","Have a Teaparty",function(){
			main.Clear();
			main.SetTip("<h3>It's a mad world!</h3><p>Your child is convinced that "+baby.HeShe()+" is drinking the finest tea in london, though "+baby.HisHer()+"cup is clearly empty. You contemplate signing your child up for therapy...</p>");
			baby.AddHappiness(6);
			main.AddButton("next_turn","Next",function(){
				main.Clear();
				baby.NextTurn();
				ev_main.Route();
			});
			main.ShowMenu();
		});
		main.AddButton("didney","Watch Sidney Movies",function(){
			main.Clear();
			main.SetTip("<h3>The Walrus Prince!</h3><p>You spend the day watching Sidney movies with little "+baby.Name+" but you seemed to be enjoying it more than "+baby.HeShe()+" was.</p>");
			baby.AddHappiness(10);
			main.AddButton("next_turn","Next",function(){
				main.Clear();
				baby.NextTurn();
				ev_main.Route();
			});
			main.ShowMenu();
		});
		main.AddButton("stories","Tell Stories",function(){
			main.Clear();
			main.SetTip("<h3>Once upon a time...</h3><p>After getting relatively stoned, you decide to make up a story to tell your child. "+baby.Name+" seems very happy to know that dudebro ended up living hapily ever after when he escaped the local county jail.</p>");
			baby.AddHappiness(10);
			main.AddButton("next_turn","Next",function(){
				main.Clear();
				baby.NextTurn();
				ev_main.Route();
			});
			main.ShowMenu();
		});
	}
	if(baby.Years() >= 2){
			main.AddButton("pattycake","Patty Cake",function(){
				main.Clear();
				main.SetTip("<h3>Baker's Man!</h3><p>You attempt to play patty cake with "+baby.Name+" but you missed and ended up giving "+baby.HimHer()+" a bruise. Thankfully you can just say "+baby.HeShe()+" fell off the swingset...</p>");
				baby.AddHappiness(10);
				main.AddButton("next_turn","Next",function(){
					main.Clear();
					baby.NextTurn();
					ev_main.Route();
				});
				main.ShowMenu();
			});
			main.AddButton("playground","Go to the Playground",function(){
				main.Clear();
				main.SetTip("<h3>Want some candy?</h3><p>You decide to take "+baby.Name+" to the park! Fortunately this time you don't look like a pedophile since you have a child with you this time...</p>");
				baby.AddHappiness(10);
				main.AddButton("next_turn","Next",function(){
					main.Clear();
					baby.NextTurn();
					ev_main.Route();
				});
				main.ShowMenu();
			});
	}
	main.AddButton("leave","Cancel",function(){
		main.Clear();
		ev_main.Route();
	});

	main.ShowMenu();
};

ac_interact_baby.OnUnload = function(){

};

ac_interact_baby.Register();
