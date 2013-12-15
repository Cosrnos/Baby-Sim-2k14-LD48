var BSM = BSM || {};

BSM.Action = function(pName,pButtonText){
	var that = {};

	that.Name = pName;
	that.BtnText = pButtonText;

	that.OnLoad = function(){};

	that.OnUnload = function(){};

	that.Register = function(){
		base.RegisterAction(this);
	};

	return that;
};
