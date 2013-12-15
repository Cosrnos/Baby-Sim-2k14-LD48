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
			var outcomes = ["You spend a good 10 seconds holding "+baby.Name+". That should be enough!",
				"After looking up instructions on the internet, you attempt to hold your child. "+baby.HeShe()+" seems to be a bit concerned with your methods, however.",
				"You look into your child's eyes and are overcome with happiness for all the beauty in the world. You can't help but--wait, this isn't your child. Where did little "+baby.Name+" go?!",
				"You've spent a lot of quality time with "+baby.Name+"! "+baby.HeShe()+" gains 1 Intelligence!",
				"You finally realize why your child stinks so much. Apparently these things don't come box trained..."];
			var seed = Math.floor(Math.random()*outcomes.length);
			var theThing = outcomes[seed];
			main.SetTip("<h3>Hold On</h3>"
				+"<p>"+theThing+"</p>");
			baby.AddHappiness(5);
			if(seed == 3){
				baby.AddInt(1);
				baby.AddKarma(1);
			}
			main.AddButton("next_turn","Next",function(){
				main.Clear();
				baby.NextTurn();
				ev_main.Route();
			});
			main.ShowMenu();
		});
		main.AddButton("sing_baby","Sing to Baby",function(){
			main.Clear();
			var outcomes = ["You rack your brain for things to sing to "+baby.Name+" but the only song that comes to mind is <strong>Big Pimpin'</strong>.<br/>Oh well, here goes...",
				"You sing "+baby.Name+" to sleep with the smooth sounds of the new Beyonce album!",
				"<em>Hoop there it i~s,<br/>Hoop there it is.<br/>Boom shaka-laka-shaka-laka...</em>",
				"<em>Hush little baby don't say a word,<br/>You've been crying all day and you smell like a turd.</em>"];
			var seed = Math.floor(Math.random()*outcomes.length);
			if(seed == 0)
				baby.AddKarma(-1);
			var theThing = outcomes[seed];
			main.SetTip("<h3>Hush, little baby...</h3>"
				+"<p>"+theThing+"</p>");
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
			var outcomes = ["You try to play a game of peekaboo with "+baby.Name+" but as soon as you uncover your eyes "+baby.HeShe()+" is nowhere to be found. Uhh...",
				"You've become so good at this game that you can actually turn yourself invisible on command! Your baby is thrilled by your commitment to the game!",
				"You don't know how, but your baby keeps disappearing and reappearing randomly. Your friends say "+baby.HeShe()+" is just covering "+baby.HisHer()+" eyes but you're pretty sure your baby is a witch.<br/>You spend the next few days awaiting "+baby.HisHer()+" hogwarts acceptance letter.",
				"It was another peaceful day at your home as you spent the day with your kid.",
				"You attempt to play a rousing game of peekaboo with your child, but your sudden disappearance has scarred "+baby.HimHer()+" for life.<br/>"+baby.Name+" now has <strong>abandonment issues</strong>"];
			var seed = Math.floor(Math.random()*outcomes.length);
			var theThing = outcomes[seed];
			var happy = 10;
			if(seed == 1){
				happy += 5;
				baby.AddKarma(1);
			}
			if(seed == 4){
				baby.AddState("abandonment_issues");
				baby.AddKarma(-1);
			}

			main.SetTip("<h3>I see you!</h3>"
				+"<p>"+theThing+"</p>");
			baby.AddHappiness(happy);
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
			var outcomes = ["Your child is convinced that "+baby.HeShe()+" is drinking the finest tea from London but "+baby.HisHer()+" cup is clearly empty. You contemplate signing "+baby.HimHer()+" up for therapy.",
				"You pretend to be the mad hatter but the reference is lost on your infant child. You keep forgetting that babies are fucking dumb.",
				"While having a teaparty, your child begins reciting shakesperian poetry. As soon as "+baby.HeShe()+" is finished "+baby.HeShe()+" goes back to being extremely unintelligent.<br/>("+baby.Name+" has gained 1 Intelligence!)",
				"You try to have a discussion with your child about the social implications of a higher minimum wage but "+baby.HeShe()+" seems disinterested."];
			var seed = Math.floor(Math.random()*outcomes.length);
			var theThing = outcomes[seed];
			var happy = 6;
			if(seed == 2){
				baby.AddInt(1);
				baby.AddKarma(1);
			}

			main.SetTip("<h3>A Par-Tea!</h3>"
				+"<p>"+theThing+"</p>");
			baby.AddHappiness(happy);
			main.AddButton("next_turn","Next",function(){
				main.Clear();
				baby.NextTurn();
				ev_main.Route();
			});
			main.ShowMenu();
		});
		main.AddButton("didney","Watch Sidney Movies",function(){
			main.Clear();
			var outcomes = ["You spend your day watching <strong>The Walrus Prince.</strong> "+baby.Name+" thought the part where the Penguins crushed Bimba to death was a bit scary.",
				"You decide to watch <strong>The Tiny Werewolf</strong> with "+baby.Name+" and learn the valuable lesson that hoarders are disgusting, even if they're half man half wolf.",
				"You were going to watch the film cinderella but decided that your child already had enough false hope for "+baby.HisHer()+" future. Instead you watch <strong>Friday the 13th</strong> together."];
			var seed = Math.floor(Math.random()*outcomes.length);
			var theThing = outcomes[seed];
			var happy = 10;

			main.SetTip("<h3>Magical Movie Time!</h3>"
				+"<p>"+theThing+"</p>");
			baby.AddHappiness(happy);
			main.AddButton("next_turn","Next",function(){
				main.Clear();
				baby.NextTurn();
				ev_main.Route();
			});
			main.ShowMenu();
		});
		main.AddButton("stories","Tell Stories",function(){
			main.Clear();
			var outcomes = ["You tell "+baby.Name+" the story of how Harry met Sally. "+baby.HeShe()+" thinks it was pretty mediocre too.",
				"You tell your child the story of Humpty Dumpty and "+baby.HeShe()+" now has a <strong>fear of heights</strong>!",
				"<em>\"Jack and Jill went up the hill<br/>to fetch a pail of water.</br>Jack fell down<br/>And broke his crown,<br/>And Jill forever lived with survivor's guilt.\"</em>",
				"Instead of a story, you decide to show little "+baby.Name+" the photos you took on your last vacation. Nothing has made that child fall asleep faster...",
				"After telling the story of the tortoise and the hare, your child is convinced "+baby.HeShe()+" is going to be a world class runner.<br/>("+baby.Name+" has gained 1 Speed!)"];
			var seed = Math.floor(Math.random()*outcomes.length);
			var theThing = outcomes[seed];
			var happy = 6;
			if(seed == 1){
				baby.AddState("fear_of_heights");
				baby.AddKarma(-1);
			}
			if(seed == 4){
				baby.AddSpeed(1);
				baby.AddKarma(1);
			}

			main.SetTip("<h3>Storytime</h3>"
				+"<p>"+theThing+"</p>");
			baby.AddHappiness(happy);
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
			var outcomes = ["While playing patty-cake with "+baby.Name+", you accidentally hit "+baby.HimHer()+" in the face, leaving a bruise you'll have to explain later. However, the pain from someone "+baby.HeShe()+" thought could be trusted has prepared "+baby.Name+" for the world and has only made "+baby.HimHer()+" stronger.<br/>(Your baby gains 1 Strength)",
				"You go for the world record for longest time spent patty-caking but end up cramping up and break the chain. "+baby.Name+" is disappointed in your lack of determination.",
				"All this clapping and slapping is bringing you back to your college days where you made money as a big league stripper. Oh, the memories...",
				"You play patty cake with your ugly kid."];
			var seed = Math.floor(Math.random()*outcomes.length);
			var theThing = outcomes[seed];
			var happy = 10;
			if(seed == 0){
				baby.AddStr(1);
				baby.AddKarma(-1);
			}

			main.SetTip("<h3>Baker's Man!</h3>"
				+"<p>"+theThing+"</p>");
			baby.AddHappiness(happy);
				main.AddButton("next_turn","Next",function(){
					main.Clear();
					baby.NextTurn();
					ev_main.Route();
				});
				main.ShowMenu();
			});
			main.AddButton("playground","Go to the Playground",function(){
				main.Clear();
			var outcomes = ["You're a bit nervous as you enter the playground since the last time you were here some lady called you a pedophile. Thankfully you have a child with you this time so nobody thought you were weird.",
				"While playing on the swingset, "+baby.Name+" broke the sound barrier. That's some great swingin'<br/>(Your child gains 1 Speed!)",
				baby.Name+" fell off the monkeybars and had to go to the hospital to get some stitches. Your health insurance pays for it and your baby gets a scar, earning "+baby.HimHer()+" <strong>street cred</strong>!",
				"Your child tries to climb a tree and makes it up a foot before falling down. This action is repeated for the next 4 hours before you finally head home.",
				"It seems that "+baby.Name+" has made a new friend at the park! Unfortunately the friend is imaginary, causing you to add another dollar to the therapy jar when you get home."];
			var seed = Math.floor(Math.random()*outcomes.length);
			var theThing = outcomes[seed];
			var happy = 10;
			if(seed == 1){
				baby.AddSpeed(1);
				baby.AddKarma(1);
			}
			if(seed == 2)
				baby.AddState("street_cred");

			main.SetTip("<h3>A day at the park!</h3>"
				+"<p>"+theThing+"</p>");
			baby.AddHappiness(happy);
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
