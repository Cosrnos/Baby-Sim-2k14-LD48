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
		main.SetTip("<h3>The Grocery Store</h3>"
			+"<p>You enter the grocery store and grab a cart. What are you going to buy for your child today?</p>");

		if(baby.GetYears() < 1){
			//Milk
			main.AddButton("purchase_milk","Milk - 4 weeks - $200",function(){
				main.Clear();

				main.SetTip("<h3>Got Milk!</h3>"
					+"<p>You've purchased 4 weeks worth of milk!</p>");
				player.SpendMoney(200);
				baby.FoodLeft += 4;
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
		}else if(baby.GetYears() < 2){
			//Soft Foods
			main.AddButton("purchase_peas","Mushed Peas - 4 weeks - $200",function(){
				main.Clear();

				main.SetTip("<h3>You got Peas!</h3>"
					+"<p>You've purchased 4 weeks worth of peas!</p>");
				player.SpendMoney(200);
				baby.FoodLeft += 4;
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
			main.AddButton("purchase_carrots","Soft Carrots - 6 weeks - $290",function(){
				main.Clear();

				main.SetTip("<h3>Baby Carrots!</h3>"
					+"<p>You've purchased 6 weeks worth of carrots!</p>");
				player.SpendMoney(290);
				baby.FoodLeft += 6;
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
		}else{
			//Everything else.
			main.AddButton("purchase_dgfood","Dog Food - 4 weeks - $250",function(){
				main.Clear();

				main.SetTip("<h3>Got Milk!</h3>"
					+"<p>You've purchased 4 weeks worth of Dog Food!</p>");
				player.SpendMoney(250);
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
		main.SetTip("<h3>The Toy Store</h3>"
			+"<p>"+baby.Name+" tries to sprint through the toystore as soon as you enter it, but is quickly pulled back. Thank god for that leash you bought "+baby.HimHer()+", or "+baby.HeShe()+" would be long gone by now!</p>");

		if(baby.GetYears() < 1){
			//Rattle
			main.AddButton("purchase_rattle","Rattle - $50",function(){
				main.Clear();

				main.SetTip("<h3>Oh sweet headache...</h3>"
					+"<p>"+baby.Name+" seems to be delighted with "+baby.HisHer()+" new rattle!</p>");
				player.SpendMoney(50);
				baby.AddHappiness(5);
				baby.AddStr(1);
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
			main.AddButton("purchase_binkie","Pacifier - $50",function(){
				main.Clear();

				main.SetTip("<h3>This baby sucks!</h3>"
					+"<p>"+baby.Name+" stares up ahead in quiet contemplation as "+baby.HeShe()+" sucks on +"+baby.HisHer()+" new pacifier.</p>");
				player.SpendMoney(50);
				baby.AddHappiness(5);
				baby.AddInt(1);
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});			
		}else if(baby.GetYears() < 2){
			main.AddButton("purchase_necro","Baby's First Necronomicon - $100",function(){
				main.Clear();

				main.SetTip("<h3>Raising the dead</h3>"
					+"<p>It's never too early to introduce your child to the dark arts!</p>");
				player.SpendMoney(100);
				//TODO: Set affinity
				baby.AddInt(1);
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
			main.AddButton("purchase_bible","The Baby Bible - $100",function(){
				main.Clear();

				main.SetTip("<h3>Oh Lordy!</h3>"
					+"<p>And the lord said 'Let there be light' and then little "+baby.Name+" shit "+baby.HisHer()+" pants.</p>");
				player.SpendMoney(100);
				//TODO: Set Affinity
				baby.AddInt(1);
				main.AddButton("leave_store","Leave Store",function(){
					ac_go_shopping.OnLoad();
				});

				main.ShowMenu();
			});
		}else{
			//Everything else.
			main.AddButton("purchase_soccer","Soccer Ball - $250",function(){
				main.Clear();

				main.SetTip("<h3>Goal!</h3>"
					+"<p>Getting grass stains out of those pants is going to be difficult but isn't it all worth it?</p>");
				player.SpendMoney(250);
				baby.AddSpeed(1);
				baby.AddStr(1);
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
			+"<p>\"Unfortunately we're closed at the moment. Sorry!</p>\"</p>");
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