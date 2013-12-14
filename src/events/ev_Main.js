var ev_main = new BSM.Event("main");

ev_main.OnOpen = function(){
	base.SetMessage("<h3>That's it!</h3><p>This is just a short preview of Baby Sim 2k14 and by the end of the day, there'll be a lot more to play!</p>"
+"<p>Chances are this was sent to you by <strong>Cosrnos</strong>. Why not let him know what you think of it so far, and whether or not you found any bugs!</p>");
	base.SetMessageType(base.MessageType.NONE);
	base.ShowMessage();
};

ev_main.Register();