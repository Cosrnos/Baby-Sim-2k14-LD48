var ac_go_shopping = new BSM.Action("go_shopping","Go Shopping");

ac_go_shopping.OnLoad = function(){
	//TODO: Give a chance for random events!
	main.Clear();
	main.MakeUnavailable("go_shopping");

	main.SetTip("<h3>The Mall</h3>"
		+"<p>The familiar stench of body odor and great deals wafts through your nostrils as you enter the cesspool that is the city mall. Thankfully, you've armerd yourself with enough disinfectant to kill a small child (not that you would).</p>"
		+"<p>There don't seem to be any sales going on at the moment...</p>");
	
	main.AddButton("store_grocery","Grocery Store",function(){
		main.Clear();
		//Grocery store stuff here.
		additional = "";
		if((baby.Years() == 0 && player.Money < 400) || (baby.Years() == 1 && player.Money < 400) || (baby.Years() == 2 && player.Money < 450))
			additional = "<p><em>You don't have enough money to shop here!</em></p>";
		main.SetTip("<h3>The Grocery Store</h3>"
			+"<p>You enter the grocery store and grab a cart. What are you going to buy for your child today?</p>"
			+additional);




		if(baby.GetYears() < 1){
			//Milk
			if(player.Money >= 400)
				main.AddButton("purchase_milk","Milk - 4 Months - $400",function(){
					main.Clear();

					main.SetTip("<h3>Got Milk!</h3>"
						+"<p>You've purchased 4 Months worth of milk!</p>");
					player.SpendMoney(400);
					baby.FoodLeft += 4;
					main.AddButton("leave_store","Leave Store",function(){
						ac_go_shopping.OnLoad();
					});

					main.ShowMenu();
				});
		}else if(baby.GetYears() < 2){
			//Soft Foods
			if(player.Money >= 400)
			main.AddButton("purchase_peas","Mushed Peas - 4 Months - $400",function(){
				main.Clear();

				main.SetTip("<h3>You got Peas!</h3>"
					+"<p>You've purchased 4 Months worth of peas!</p>");
				player.SpendMoney(400);
				baby.FoodLeft += 4;
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
		if(player.Money >= 590)
			main.AddButton("purchase_carrots","Soft Carrots - 6 Months - $590",function(){
				main.Clear();

				main.SetTip("<h3>Baby Carrots!</h3>"
					+"<p>You've purchased 6 Months worth of carrots!</p>");
				player.SpendMoney(590);
				baby.FoodLeft += 6;
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
		}else{
			//Everything else.
			if(player.Money >= 450)
			main.AddButton("purchase_dgfood","Dog Food - 4 Months - $450",function(){
				main.Clear();

				main.SetTip("<h3>Kibble & Bits!</h3>"
					+"<p>You've purchased 4 months worth of Dog Food!</p>");
				player.SpendMoney(450);
				baby.FoodLeft += 4;
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
			if(player.Money >= 650)
			main.AddButton("purchase_cereal","Cereal - 6 Months - $650",function(){
				main.Clear();

				main.SetTip("<h3>Captain Coco!</h3>"
					+"<p>You've purchased 6 months worth of Cereal!</p>");
				player.SpendMoney(650);
				baby.FoodLeft += 4;
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
			if(player.Money >= 750)
			main.AddButton("purchase_sketti","Spaghetti - 8 Months - $750",function(){
				main.Clear();

				main.SetTip("<h3>Mama-Mia!</h3>"
					+"<p>You've purchased 8 months worth of Spaghetti!</p>");
				player.SpendMoney(450);
				baby.FoodLeft += 4;
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});				
		}

		main.AddButton("leave_store","Leave Store",function(){
			ac_go_shopping.OnLoad();
		});

		main.ShowMenu();
	});

	main.AddButton("store_toys","Toy Store",function(){
		main.Clear();
		//Toy store stuff here.
		additional = "";
		if((baby.Years() == 0 && player.Money < 50) || (baby.Years() == 1 && player.Money < 100) || (baby.Years() == 2 && player.Money < 250))
			additional = "<p><em>You don't have enough money to shop here!</em></p>";
		main.SetTip("<h3>The Toy Store</h3>"
			+"<p>"+baby.Name+" tries to sprint through the toystore as soon as you enter it, but is quickly pulled back. Thank god for that leash you bought "+baby.HimHer()+", or "+baby.HeShe()+" would be long gone by now!</p>"
			+additional);

		if(baby.GetYears() < 1){
			//Rattle
			if(player.Money >= 50)
			main.AddButton("purchase_rattle","Rattle - $50",function(){
				main.Clear();

				main.SetTip("<h3>Oh sweet headache...</h3>"
					+"<p>"+baby.Name+" seems to be delighted with "+baby.HisHer()+" new rattle!<br/>(Your baby has gained 1 Strength!)</p>");
				player.SpendMoney(50);
				baby.AddHappiness(10);
				baby.AddStr(1);
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
			if(player.Money >= 50)
			main.AddButton("purchase_binkie","Pacifier - $50",function(){
				main.Clear();

				main.SetTip("<h3>This baby sucks!</h3>"
					+"<p>"+baby.Name+" stares up ahead in quiet contemplation as "+baby.HeShe()+" sucks on "+baby.HisHer()+" new pacifier.<br/>(Your baby has gained 1 Intelligence!)</p>");
				player.SpendMoney(50);
				baby.AddHappiness(10);
				baby.AddInt(1);
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});			
		}else if(baby.GetYears() < 2){
			if(player.Money >= 100)
			main.AddButton("purchase_necro","Baby's First Necronomicon - $100",function(){
				main.Clear();

				main.SetTip("<h3>Raising the dead</h3>"
					+"<p>It's never too early to introduce your child to the dark arts!</p><br/>(Your baby has gained 1 Intelligence!)");
				player.SpendMoney(100);
				baby.AddKarma(-1);
				//TODO: Set affinity
				baby.AddInt(1);
				baby.AddHappiness(10);
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
		if(player.Money >= 100)
			main.AddButton("purchase_bible","The Baby Bible - $100",function(){
				main.Clear();

				main.SetTip("<h3>Oh Lordy!</h3>"
					+"<p>And the lord said 'Let there be light' and then little "+baby.Name+" shit "+baby.HisHer()+" pants.<br/>(Your baby has gained 1 Intelligence!)</p>");
				player.SpendMoney(100);
				baby.AddHappiness(10);
				//TODO: Set Affinity
				baby.AddInt(1);
				baby.AddKarma(1);
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
		}else{
			//Everything else.
			if(player.Money >= 250)
			main.AddButton("purchase_soccer","Soccer Ball - $250",function(){
				main.Clear();

				main.SetTip("<h3>Goal!</h3>"
					+"<p>Getting grass stains out of those pants is going to be difficult but isn't it all worth it?<br/>(Your baby has gained 1 Strength and 1 Speed!)</p>");
				player.SpendMoney(250);
				baby.AddSpeed(1);
				baby.AddStr(1);
				baby.AddHappiness(20);
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
		if(player.Money >= 300)
			main.AddButton("purchase_chess","Chess Set - $300",function(){
				main.Clear();

				main.SetTip("<h3>Checkmate!</h3>"
					+"<p>Learning to play chess can be one of the most beneficial things you can do for a child while also securing it's future status as a nerd.<br/>(Your baby has gained 2 Intelligence!)</p>");
				player.SpendMoney(300);
				baby.AddInt(2);
				baby.AddHappiness(20);
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
		if(player.Money >= 500)
			main.AddButton("purchase_videoGame","Video Game - $500",function(){
				main.Clear();

				main.SetTip("<h3>This isn't meta at all!</h3>"
					+"<p>"+baby.Name+"'s hand-eye coordination has improved greatly but its sex appeal has taken a sharp drop!<br/>(Alternative Joke: <strong>Call of Doodie</strong>)<br/>(Your baby has gained 2 Speed!)</p>");
				player.SpendMoney(500);
				baby.AddSpeed(2);
				baby.AddHappiness(20);
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
		}
		
		main.AddButton("leave_store","Leave Store",function(){
			ac_go_shopping.OnLoad();
		});

		main.ShowMenu();
	});

	main.AddButton("store_clothing","Fancy Pants Clothing Store",function(){
		main.Clear();

		//Clothing store stuff here
		main.SetTip("<h3>Fancy Pants</h3>"
			+"<p>\"Welcome to Fancy Pants! I'm chloe, the manager of this store!\"</p>"
			+"<p>\"Unfortunately we're closed at the moment. Sorry!\"</p>");
		main.AddButton("leave_store","Leave Store",function(){
			ac_go_shopping.OnLoad();
		});

		main.ShowMenu();
	});

	main.AddButton("store_leave","Leave the Mall",function(){
		main.Clear();
		ev_main.Route();
	});

	main.ShowMenu();
};

ac_go_shopping.OnUnload = function(){

};

ac_go_shopping.Register();
