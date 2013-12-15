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

	that.CheckEvents = function(){
		if(player.InTutorial)
			return false;
		
		for(var i in this.Scenarios){
			var e = this.Scenarios[i];
			if(!e.Random && !e.Scheduled)
				continue;

			if(e.Scheduled){
				if(e.CheckSchedule()){
					this.SetEvent(e.Name);
					return true;
				}
				continue;
			}

			var rnd = Math.floor(Math.random()*100)+1;
			if(rnd >= e.Chance)
				continue;
			this.SetEvent(e.Name);
			return true;
		}
		return false;
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
			document.getElementById("msg_btn_B").onclick = function(){
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
			+"<p>If you think I should turn this into a full game, let me know in the survey or on twitter!</p>"
			+"<p>Happy Holidays, and Thanks for Playing!</p>"
			+"<h4>-<a href='http://cosrnos.com/'>Cosrnos</a></h4>");
		this.SetMessageType(this.MessageType.NONE);

		this.ShowMessage();
	};

	that.EndGame = function(){
		//Called when Failed
		main.Clear();
		var override = "";
		if(baby.Name == "Kim Kardashian")
			override = "Kim Kardashian will grow up to be <strong>extremely famous</strong> as a <strong>super-model</strong>. Unfortunately, most people will simply remember her as a <strong>low-end reality tv star</strong> and for her philanthropic work in the <strong>sex tape industry.</strong> Nevertheless, Kim will be a <strong>Good Person</strong> and will go on to make you a very proud parent. A very proud parent that always gets <strong>10%</strong> of all "+baby.HisHer()+" earnings!";
		if(baby.Name == "Cosrnos" || baby.Name == "Alex Roth" || baby.Name == "cosmos")
			override = "Not much is known about what cosrnos will grow up to be. One thing is for sure: he will participate in a <strong>game jam</strong> and develop a game that simulates the growth of <strong>babies</strong> with a lot of <strong>bad jokes</strong> in it.";
		if(baby.Name == "Charlie Sheen")
			override = "Charlie Sheen will grow up to do a lot of <strong>Cocaine</strong> and hook up with a lot of <strong>Strippers</strong>. He will always be <strong>#Winning</strong> in life!";
		if(baby.Name == "Skrillex")
			override = "Skrillex will grow up to be a <strong>music producer</strong> of great fame. However, he will be even more famous for his <strong>long black hair</strong> and <strong>thick rimmed glasses.</strong> He will also drop <strong>many a bass</strong>.";
		if(baby.Name == "Doctor Who" || baby.Name == "Superwholockian")
			override = "Your child has been tainted with <strong>the fandom</strong> and will grow up to spend most of its time on a blogging website filled with <strong>angsty teenagers</strong> and people pushing for <strong>social justice</strong>.";
		if(baby.Name == "Andrew Hussie")
			override = "Andrew Hussie will grow up to be a <strong>webcomic artist</strong> with a large following, though most people won't know what the comic is about. He will also grow up to have an <strong>intense love for horses</strong> and a <strong>strong appetite for cake</strong>.";
		if(baby.Name == "Notch")
			override = "Notch will grow up to create one of the best selling <strong>indie games</strong> of all time! He will have a <strong>glorious beard</strong> and will take a strong interest in <strong>mining</strong>. It is said that he will <strong>craft</strong> many games in his lifetime and that he will also participate in a challenge called <strong>The Ludum Dare</strong>";

		var career = baby.GetCareer();

		var mainState = baby.GetLargestState();
		var text = "For instance, your actions have already taught your child how to function in society. On this path, your child is probably going to turn out to be a <strong>"+baby.GoodBad()+" person!</strong>. ";
		text += "Based on its upbringing, your child is going to grow up to be <strong>"+career+"</strong>!<br/>";
		if(mainState != "none"){
			var wording = "";
			switch(mainState){
				case "street_cred":
					wording = "a lot of <strong>Street Cred</strong>";
				break;
				case "abandonment_issues":
					wording = "quite a few <strong>Abandonment Issues</strong>";
				break;
				case "fear_of_heights":
					wording = "a debilitating <strong>Fear of Heights</strong>";
				break;
			}
			text += "It looks like you've also caused your child to have "+wording;
		}

			if(override != "")
				text = override;

		this.SetMessage("<h3>There "+baby.HeShe()+" goes!</h3>"
			+"<p>It's come to the point where "+baby.Name+" is three years old! Since this is a demo, the game stops here! However, we can already tell a lot about your baby!</p>"
			+"<p>"+text+"</p>"
			+"<hr/>"
			+"<p>Thanks for testing out the first version of <strong>Baby Simulator 2k14!</strong> I'm glad to have your support in this development process. If you wouldn't mind <a href='https://docs.google.com/forms/d/13rSg37PvrCxnT_PskYbf8hBSvt4SQaAP1oogHh21Fp8/viewform' target='_blank'>taking a brief survey for me,</a> that would mean the world to me! I'm always looking to improve my games and my own programming, so let me know what you liked, what you didn't, and if you found any bugs!</p>"
			+"<p>If you think I should turn this into a full game, let me know in the survey or on twitter!</p>"
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
