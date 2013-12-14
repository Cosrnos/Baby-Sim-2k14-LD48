var ac_grocery_store_tut = new BSM.Action("grocery_store_tut","Go to the Grocery Store");

ac_grocery_store_tut.Action = "start";
ac_grocery_store_tut.OnLoad = function(){
	main.Clear();
	switch(ac_grocery_store_tut.Action){
	case "start":
		main.MakeUnavailable("grocery_store_tut");
		main.SetTip("<p>Until your baby is 1 year old, "+baby.HeShe()+" is only going to be able to drink milk! Purchase some formula so you'll be able to feed "+baby.HimHer()+"!</p>"
			+"<p>The Grocery store owner is feeling rather sorry for you and agreed to give you one month's worth of milk for free!</p>");
		main.GetAction("grocery_store_tut").BtnText = "Get Free Milk";
		ac_grocery_store_tut.Action = "get_free_milk";
		main.MakeAvailable("grocery_store_tut");
		main.ShowMenu();
	break;
	case "get_free_milk":
		main.MakeUnavailable("grocery_store_tut");
		base.SetMessage("<h3>Food for Thought</h3>"
			+"<p>Now that you have some milk, your baby's hunger is automatically restored and "+baby.HeShe()+" won't begin to get hungry until "+baby.HeShe()+" runs out of food!</p>"
			+"<p>The most important thing to remember is to keep your baby well fed. If you don't, your baby may die of hunger or turn into a gremlin. We're not sure which, but neither of those things sound very good...</p>");
		base.SetMessageType(base.MessageType.CONTINUE);
		base.SetMainCallback(function(){
			ev_start.Tutorial_Three();
			base.HideMessage();
		});
		base.ShowMessage();
	break;
	}
};

ac_grocery_store_tut.OnUnload = function(){
	main.MakeUnavailable("grocery_store_tut");
};

ac_grocery_store_tut.Register();