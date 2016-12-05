var BSM = BSM || {};

BSM.Main = (function(){
	var that = {};

	var div = -1;

	var actions = [];

	var availableActions = [];

	var tip = "";

	that.Bind = function(pDiv){
		div = document.getElementById(pDiv);
		div.innerHTML += "Successfully bound!";
	};

	that.Action = function(pMethod){
		if(typeof availableActions[pMethod] == 'undefined')
			return false;

		availableActions[pMethod].OnLoad();
	};

	that.RegisterAction = function(pName,pAction){
		if(typeof actions[pName] != 'undefined')
			return false;

		actions[pName] = pAction;
		return true;
	};

	that.MakeAvailable = function(pName){
		if(typeof actions[pName] == 'undefined'){
			console.log("WARNING: Could not make action '"+pName+"' available as it is undefined.");
			return false;
		}

		availableActions[pName] = actions[pName];
	};

	that.AddButton = function(pName,pButtonText,pCallback){
		var button = new BSM.Action(pName,pButtonText);
		button.OnLoad = pCallback;
		availableActions[pName] = button;
	};

	that.MakeUnavailable = function(pName){
		if(typeof availableActions[pName] == 'undefined')
			return false;

		delete availableActions[pName];
	};

	that.SetTip = function(pTip){
		tip = pTip;
	};

	that.ShowMenu = function(){
		var btnHtml = "<div id='tip'>"+tip+"</div>";
		for(var key in availableActions){
			console.log("Added button "+key);
			btnHtml += '<button id="'+key+'" onclick="main.Action(this.id);">'+availableActions[key].BtnText+'</button>';
		}
		div.innerHTML = "<div id='mainMenu'>";
		div.innerHTML += btnHtml;
		div.innerHTML += "</div>";
	};

	that.GetAction = function(pRef){
		if(typeof actions[pRef] == 'undefined')
			return false;

		return actions[pRef];
	};

	that.Clear = function(){
		div.innerHTML = "";
		availableActions = [];
	};


	return that;
})();

var main = BSM.Main;
Number.prototype.toCommaString = function() {
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
