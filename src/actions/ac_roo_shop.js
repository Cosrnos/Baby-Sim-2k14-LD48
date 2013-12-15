var ac_roo_shop = new BSM.Action("roo_shop","Look at the shops");

ac_roo_shop.OnLoad = function(){
	main.Clear();

	player.Roo_shop = true;
	
	main.SetTip("<h3>Hippie Garb</h3>"
		+"<p>As you walk around centerroo, you stumble upon a small shop selling the finest tapestries, statues and incense. Your friend told you she'd buy you something to take home to"+baby.Name+" since you've been working so hard to take care of "+baby.HimHer()+"."
		+"<p>If you go with the tapestry, "+baby.Name+" will gain 1 Intelligence.<br/>If you go with the statue, "+baby.Name+" will gain 1 Strength.<br/>If you go with the incense, "+baby.Name+" will gain 1 Speed.</p>");
	main.AddButton("tapestry","Get the Tapestry",function(){
		baby.AddInt(1);
		ac_roo_shop.Finish("You decided to go with the tapestry. "+baby.Name+" is going to love this!<br/>("+baby.Name+" gains 1 Intelligence!)");
	});
	main.AddButton("statue","Get the Statue",function(){
		baby.AddStr(1);
		ac_roo_shop.Finish("You decided to go with the statue. "+baby.Name+" is going to love this!<br/>("+baby.Name+" gains 1 Strength!)");
	});
	main.AddButton("incense","Get the Incense",function(){
		baby.AddSpeed(1);
		ac_roo_shop.Finish("You decided to go with the incense. "+baby.Name+" is going to love this!<br/>("+baby.Name+" gains 1 Speed!)");
	});

	main.ShowMenu();
};

ac_roo_shop.Finish = function(pTip){
		main.Clear();

		main.SetTip(pTip);
		main.AddButton("Leave","Leave Shop",function(){
			ev_roo.NextDay();
		});
		main.ShowMenu();

	};

ac_roo_shop.OnUnload = function(){

};

ac_roo_shop.Register();