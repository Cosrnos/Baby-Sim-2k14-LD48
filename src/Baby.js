var Baby = function(pName) {
	var that = {};

	if(pName == "")
		pName = "Gary Busey";

	that.Name = pName;

	var years = 0;
	var months = 0;
	var weeks = 0;
	var gender = 0;
	var str = 0;
	var speed = 0;
	var intelligence = 0;
	var hunger = 0;
	var health = 100;
	var happiness = 50;
	var karma = 0; //If positive: give good life events
	var states = [];

	that.AddState = function(pState){
		if(typeof states[pState] == 'undefined')
			states[pState] = 1;
		else
			states[pState] = states[pState] + 1;
	};

	that.GetLargestState = function(){
		var largest = "none";
		var lAmt = 0;
		for(var i in states){
			if(states[i] < lAmt)
				continue;
			largest = i;
			lAmt = states[i];
		}
		return largest;
	};

	that.AddKarma = function(pAmount){
		karma += pAmount;
	};

	that.GoodBad = function(){
		if(karma >= 0)
			return "good";
		else
			return "bad";
	}

	that.GetKarma = function(){
		return karma;
	};

	that.InSchool = false;

	that.FoodLeft = 0;

	that.GetHappiness = function(){
		return happiness;
	};

	that.GetYears = function(){
		return years;
	};

	that.Years = function(){
		return this.GetYears();
	};

	that.GetMonths = function(){
		return months;
	};

	that.Months = function(){
		return this.GetMonths();
	};

	that.UpdateStats = function(){
		document.getElementById("name").innerHTML = this.Name;
		document.getElementById("age").innerHTML = years+" years and "+months+" months";
		document.getElementById("health").innerHTML = health;
		document.getElementById("happiness").innerHTML = happiness;
		document.getElementById("hunger").innerHTML = this.GetHunger();
		document.getElementById("int").innerHTML = this.GetInt();
		document.getElementById("str").innerHTML = this.GetStr();
		document.getElementById("speed").innerHTML = this.GetSpeed();
	}

	that.AddHappiness = function(pAmount){
		happiness += pAmount;
		if(happiness > 100)
			happiness = 100;
		this.UpdateStats();
	};

	that.GetHunger = function(){
		if(hunger < 10){
			return "Stuffed";
		}
		if(hunger < 20){
			return "Full";
		}
		if(hunger < 30){
			return "Snackish";
		}
		if(hunger < 60){
			return "Hungry";
		}
		if(hunger < 70){
			return "Famished";
		}
		if(hunger < 80){
			return "Starved";
		}
		if(hunger < 90){
			return "Desperate";
		}
		return "Brink of Death";
	};

	that.GetRHunger = function(){
		return hunger;
	};

	that.AddSpeed = function(pAmount){
		speed += pAmount;
		this.UpdateStats();
	};

	that.GetSpeed = function(){
		if(str < 5){
			return "Below Average";
		}
		if(str < 10){
			return "Average";
		}
		if(str < 15){
			return "Above Average";
		}
		if(str < 20){
			return "Cheetah";
		}
		return "Faster than sound!"		
	};

	that.GetRSpeed = function(){
		return speed;
	};

	that.GetInt = function(){
		if(str < 5){
			return "Below Average";
		}
		if(str < 10){
			return "Average";
		}
		if(str < 15){
			return "Above Average";
		}
		if(str < 20){
			return "Super Smart";
		}
		return "Genius"		
	};

	that.GetCareer = function(){
		if(str > 30 && str > speed && str > intelligence){
			return "a Professional Bodybuilder"
		}
		if(intelligence > 30 && intelligence > speed && intelligence > str){
			return "a Scientist who cures all disease"
		}
		if(speed > 30 && speed > str && speed > intelligence){
			return "an Olympic runner";
		}
		if(speed > 20 && str > 20 && intelligence > 20){
			if(karma >= 0)
				return "the next Jesus";
			else
				return "the Anti-christ";
		}
		if( intelligence > 15 && speed < 10 && str < 10)
			return "a Brony";
		if(speed > 15 && str > 15)
			return "a Gym Teacher";
		if(intelligence > 15){
			if(karma >= 0)
				return "a School Teacher";
			else
				return "a Lawyer";
		}
		if(this.GetLargestState() == "abandonment_issues" && karma <= 0 && intelligence < 15)
			return "a future recovering alcoholic!";

		return "a freeloader";
	};

	that.GetRInt = function(){
		return intelligence;
	};

	that.AddInt = function(pAmount){
		intelligence += pAmount;
		this.UpdateStats();
	};

	that.AddStr = function(pAmount){
		str += pAmount;
		this.UpdateStats();
	};

	that.GetStr = function(){
		if(str < 5){
			return "Below Average";
		}
		if(str < 10){
			return "Average";
		}
		if(str < 15){
			return "Above Average";
		}
		if(str < 20){
			return "Super Strength";
		}
		return "Bodybuilder"
	};

	that.GetRStr = function(){
		return str;
	};

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

	that.HisHer = function(){
		if(gender == 0)
			return "her"
		else
			return "his"
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

	that.NextTurn = function(){
		months += 1;
		if(months >= 12){
			years += 1;
			months = 0;
		}
		if(years >= 3)
			base.EndGame();

		if(this.FoodLeft <= 0){
			this.FoodLeft = 0;
			hunger += 10;
			happiness -= 5;
		}else{
			hunger -= 10;
			this.FoodLeft -= 1;
		}

		if(player.BabysitterCost > 0 && !this.InSchool){
			if(player.Money >= player.BabysitterCost)
				player.Money -= player.BabysitterCost;
			else
				baby.happiness -= 10;
		}

		if(player.BabysitterCost == 0 && !this.InSchool){
			happiness -= 10;
		}else{
			happiness -= 4;
		}

		if(hunger >= 100)
			base.GameOver("You let your child starve! This is the most irresponsible thing you could do! You wanna try again? Too bad! I'm pretty sure you're going to jail you monster!");
		if(happiness <= 0)
			base.GameOver("Your child is so depressed that it died of a broken heart. Yes that's a thing! What kind of horrible person just neglects their child to the point it dies of being sad? My god you're bad at this.");

		this.UpdateStats();
		player.UpdateStats();
	};

	that.UpdateStats();

	return that;
};
