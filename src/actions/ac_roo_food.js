var ac_roo_food = new BSM.Action("roo_food","Check out the food vendors");

ac_roo_food.OnLoad = function(){
	main.Clear();

	player.Roo_food = true;
	main.SetTip("<h3>Thank food jesus</h3>"
		+"<p>You make your way to <strong>food truck oasis</strong> and thank the food truck gods for the feats you're about to participate in. There's so much food available and so many different types to choose from. You can't decide if you want the deep fried s'mores or the giant pitas...<br/>(You gain 4 months of food!)</p>");
	baby.AddFood(4);
	main.AddButton("next","Next",function(){
		ev_roo.NextDay();
	});

	main.ShowMenu();
};

ac_roo_food.OnUnload = function(){

};

ac_roo_food.Register();