var BSM = BSM || {};

BSM.Base = (function(){
	var that = {};

	var currentEvent = -1;

	that.Var = {};	//Global variable store

	that.Var.MessageType = 0;

	that.Var.Message = ""; //Current message in html.

	that.Var.GameState = "LOADING"; //Current state of the game...

	that.Var.Baby = {};

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

		console.log("Registered event "+pEvent.Name);
	};

	that.RegisterAction = function(pAction){
		if(main.RegisterAction(pAction.Name,pAction))
			console.log("Registered action "+pAction.Name);
		
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

	that.SetAltCallback = function(pPrevCb){
		prevCb = pPrevCb;
	};

	return that;
})();

var base = BSM.Base;