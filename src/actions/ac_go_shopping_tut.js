var ac_go_shopping_tut = new BSM.Action("go_shopping_tut","Go Shopping");

ac_go_shopping_tut.OnLoad = function(){
	//Randomly give them a job and save the variable.
	main.Clear();
	main.MakeUnavailable("go_shopping_tut");
	main.SetTip("<p>Normally, you would be able to go to a number of different stores. However, "+baby.Name+" is looking rather sickly and if "+baby.HeShe()+" isn't fed soon the evil forces of <strong>child services</strong> will take "+baby.HimHer()+" into custody.</p>"
		+"<p>Let's <strong>Go to the Grocery Store</strong> right away!</p>");
	main.MakeAvailable("grocery_store_tut");
	main.ShowMenu();
};

ac_go_shopping_tut.OnUnload = function(){
	main.MakeUnavailable("grocery_store_tut");
};

ac_go_shopping_tut.Register();