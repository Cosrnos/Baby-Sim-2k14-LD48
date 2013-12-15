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

	that.InSchool = false;

	that.FoodLeft = 0;

	that.GetHappiness = function(){
		return happiness;
	};

	that.GetYears = function(){
		return years;
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
		if(str < 10){
			return "Below Average";
		}
		if(str < 20){
			return "Average";
		}
		if(str < 30){
			return "Above Average";
		}
		if(str < 40){
			return "Cheetah";
		}
		return "Faster than sound!"		
	};

	that.GetRSpeed = function(){
		return speed;
	};

	that.GetInt = function(){
		if(str < 10){
			return "Below Average";
		}
		if(str < 20){
			return "Average";
		}
		if(str < 30){
			return "Above Average";
		}
		if(str < 40){
			return "Super Smart";
		}
		return "Genius"		
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
		if(str < 10){
			return "Below Average";
		}
		if(str < 20){
			return "Average";
		}
		if(str < 30){
			return "Above Average";
		}
		if(str < 40){
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
		weeks += 1;
		if(weeks >= 4){
			months += 1;
			weeks = 0;
			if(months >= 12)
				years += 1;
		}
		if(years >= 18)
			base.EndGame();

		if(this.FoodLeft <= 0){
			this.FoodLeft = 0;
			hunger += 10;
			happiness -= 5;
		}else{
			hunger -= 10;
			this.FoodLeft -= 1;
		}

		if(player.BabysitterCost > 0 && !this.InSchool)
			player.Money -= player.BabysitterCost;

		if(player.BabysitterCost == 0 && !this.InSchool){
			happiness -= 10;
		}else{
			happiness -= 2;
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