var BSM = BSM || {};

BSM.Base = (function(){
	var that = {};

	var currentEvent = -1;

	that.Var = {};	//Global variable store

	that.Var.MessageType = 0;

	that.Var.Message = ""; //Current message in html.

	that.Var.GameState = "LOADING"; //Current state of the game...

	that.Var.Baby = {};

	that.Var.Player = {};

	that.Scenarios = [];

	that.Assets = {};

	that.LoadQueue = 0;

	that.onLoad = function(){};

	that.SetEvent = function(pScenarioName){
		pScenario = that.Scenarios[pScenarioName];

		if(typeof pScenario == 'undefined'){
			console.log("FATAL ERROR: Event with name "+pScenarioName+" could not be found! Aborting...");
			return false;
		}

		if(currentEvent != -1)
			currentEvent.OnClose();

		currentEvent = pScenario;
		currentEvent.OnOpen();
	};

	that.RegisterEvent = function(pEvent){
		if(typeof that.Scenarios[pEvent.Name] != 'undefined'){
			console.log("WARNING: Event with name "+pEvent.Name+" has already been registered. Skipping...");
			return false;
		}

		that.Scenarios[pEvent.Name] = pEvent;
		that.LoadQueue = that.LoadQueue - 1;
		if(that.LoadQueue == 0)
			that.OnReady();
	};

	that.RegisterAction = function(pAction){
		main.RegisterAction(pAction.Name,pAction);
		
		that.LoadQueue = that.LoadQueue - 1;

		if(that.LoadQueue == 0)
			that.OnReady();
	};

	that.SetMessage = function(pMessage){
		that.Var.Message = pMessage;
	};

	that.SetMessageType = function(pType){
		that.Var.MessageType = pType;
	};

	that.ShowMessage = function(){
		//TODO: Influence the html yall
	};

	that.MessageType = {
		CONTINUE: 0,
		OK: 1,
		NEXT: 2,
		NEXTPREV: 3,
		PREV: 4,
		OKCANCEL: 5,
		INPUT: 6,
		ACCEPTDENY: 7
	};

	that.LoadEvent = function(pEventName){
		that.LoadQueue++;

		var js = document.createElement("script");
		js.type = "text/javascript";
		js.src = "src/events/ev_"+pEventName+".js";

		document.body.appendChild(js);
	};

	that.LoadAction = function(pActionName){
		that.LoadQueue++;

		var js = document.createElement("script");
		js.type = "text/javascript";
		js.src = "src/actions/ac_"+pActionName+".js";

		document.body.appendChild(js);
	};

	that.OnReady = function(){

	};

	that.HideMessage = function(){
		document.getElementById("message").style.visibility="hidden";
		document.getElementById("dimmer").style.visibility="hidden";
	};

	that.ShowMessage = function(){
		document.getElementById("msg_content").innerHTML = that.Var.Message;
		var btnHtml = "";
		switch(that.Var.MessageType){
			case that.MessageType.CONTINUE:
				btnHtml = "<button class=\"single\" id='msg_btn'>Continue</button>";
			break;
			case that.MessageType.OK:
				btnHtml = "<button class=\"single\" id='msg_btn'>OK</button>";
			break;
			case that.MessageType.NEXT:
				btnHtml = "<button class=\"single\" id='msg_btn'>Next</button>";
			break;
			case that.MessageType.NEXTPREV:
				btnHtml = "<button class=\"double\" id='msg_btn'>Previous</button>";
				btnHtml += "<button class=\"double\" id='msg_btn_B'>Next</button>";
			break;
			case that.MessageType.PREV:
				btnHtml = "<button class=\"single\" id='msg_btn'>Previous</button>";
			break;
			case that.MessageType.OKCANCEL:
				btnHtml = "<button class=\"double\" id='msg_btn'>Cancel</button>";
				btnHtml += "<button class=\"double\" id='msg_btn_B'>OK</button>";
			break;
			case that.MessageType.INPUT:
				btnHtml = "<button class=\"single\" id=\"msg_btn\">Submit</button>";
			break;
			case that.MessageType.ACCEPTDENY:
				btnHtml = "<button class=\"double\" id='msg_btn'>Accept</button>";
				btnHtml += "<button class=\"double\" id='msg_btn_B'>Deny</button>";
			break;
		}
		document.getElementById("msg_end").innerHTML = btnHtml;
		if(that.Var.MessageType != that.MessageType.NONE){
			document.getElementById("msg_btn").onclick = function(){
				nextCb();
			};
		}
		if(that.Var.MessageType == that.MessageType.OKCANCEL || that.Var.MessageType == that.MessageType.NEXTPREV || that.Var.MessageType == that.MessageType.ACCEPTDENY){
			document.getElementById(msg_btn_B).onclick = function(){
				prevCb();
			};
		}
		document.getElementById("message").style.visibility="visible";
		document.getElementById("dimmer").style.visibility="visible";
	};
	
	var nextCb = function(){};

	that.SetMainCallback = function(pNextCb){
		if(typeof pNextCb == 'undefined'){
			console.log("WARNING: Could not set next callback as the callback is undefined. Aborting.");
			return;
		}

		nextCb = pNextCb;
	};

	var prevCb = function(){};

	that.GameOver = function(pMessage){
		//Called when Failed
		main.Clear();

		this.SetMessage("<h3>Game Over!</h3>"
			+"<p>"+pMessage+"</p>"
			+"<hr/>"
			+"<p>Thanks for testing out the first version of <strong>Baby Simulator 2k14!</strong> I'm glad to have your support in this development process. If you wouldn't mind <a href='https://docs.google.com/forms/d/13rSg37PvrCxnT_PskYbf8hBSvt4SQaAP1oogHh21Fp8/viewform' target='_blank'>taking a brief survey for me,</a> that would mean the world to me! I'm always looking to improve my games and my own programming, so let me know what you liked, what you didn't, and if you found any bugs!</p>"
			+"<p>Happy Holidays, and Thanks for Playing!</p>"
			+"<h4>-<a href='http://cosrnos.com/'>Cosrnos</a></h4>");
		this.SetMessageType(this.MessageType.NONE);

		this.ShowMessage();
	};

	that.EndGame = function(){
		//Called when Failed
		main.Clear();

		this.SetMessage("<h3>There "+baby.HeShe()+" goes!</h3>"
			+"<p>It's come to the point where "+baby.Name+" is all grown up! Since this is just a demo of the game, it's assumed that "+baby.HeShe()+" has become very successful and loves you quite a bit!</p>"
			+"<hr/>"
			+"<p>Thanks for testing out the first version of <strong>Baby Simulator 2k14!</strong> I'm glad to have your support in this development process. If you wouldn't mind <a href='https://docs.google.com/forms/d/13rSg37PvrCxnT_PskYbf8hBSvt4SQaAP1oogHh21Fp8/viewform' target='_blank'>taking a brief survey for me,</a> that would mean the world to me! I'm always looking to improve my games and my own programming, so let me know what you liked, what you didn't, and if you found any bugs!</p>"
			+"<p>Happy Holidays, and Thanks for Playing!</p>"
			+"<h4>-<a href='http://cosrnos.com/'>Cosrnos</a></h4>");
		this.SetMessageType(this.MessageType.NONE);

		this.ShowMessage();
	};

	that.SetAltCallback = function(pPrevCb){
		prevCb = pPrevCb;
	};

	return that;
})();

var base = BSM.Base;