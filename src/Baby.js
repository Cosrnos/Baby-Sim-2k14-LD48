var Baby = function(pName) {
	var that = {};
	var gender = 0;

	that.Name = pName;

	that.SetGender = function(pGender){
		if(pGender == 0 || pGender == 1)
			gender = pGender;
		else
			return false;
	};

	that.GetGender = function(){
		if(gender == 0)
			return "girl";
		else
			return "boy";
	};

	that.GetRGender = function(){
		return gender;
	};

	that.HisHers = function(){
		if(gender == 0)
			return "hers";
		else
			return "his";
	};

	that.HimHer = function(){
		if(gender == 0)
			return "her";
		else
			return "him";
	};

	that.HeShe = function(){
		if(gender == 0)
			return "she";
		else
			return "he";		
	};

	return that;
};