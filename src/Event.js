var BSM = BSM || {};

BSM.Event = function(pName){
	var that = {};

	that.Random = false;
	that.Chance = 0;
	that.Scheduled = false;

	that.CheckSchedule = function(){ return false; };

	that.Name = pName;

	that.OnOpen = function(){
		document.getElementById("msg_btn").onclick = function(){
			base.HideMessage();
		};
		console.log("TEST");
	};

	that.OnClose = function(){

	};

	that.OnPause = function(){

	};

	that.OnResume = function(){

	};

	that.Register = function(){
			base.RegisterEvent(this);
	};

	return that;
};