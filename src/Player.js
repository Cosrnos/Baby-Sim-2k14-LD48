var BSM = BSM || {};

BSM.Player = function(){
	var that = {};

	that.Money = 200;
	
	that.Job = {
		Title: "Unemployed",
		Pay: 0,
		NextPromotion: 0,
		OnPromotion: function(){}
	};

	that.Score = 0;

	that.InTutorial = true;

	that.BabysitterCost = 0;	//if 0 we assume no babysitter

	that.NewJob = function(){
		var jobs = [];

		if(this.InTutorial){
			//Give a bad job to start
			jobs = [{
				Title: "Server",
				Pay: 300,
				NextPromotion: "Manager",
				OnPromotion: function(){
					this.Title = "Manager";
					this.Pay = 500;
					this.NextPromotion = "District Manager";
					this.OnPromotion = function(){
						this.Title = "District Manager";
						this.Pay = 600;
						this.NextPromotion = "Restaurant Director";
						this.OnPromotion = function(){
							this.Title = "Restaurant Director";
							this.Pay = 750;
							this.NextPromotion = "Restaurant Director";
							this.OnPromotion = function(){
								this.Pay += 250;
							};
						};
					};
				}
			},
			{
				Title: "Cashier",
				Pay: 300,
				NextPromotion: "Supervisor",
				OnPromotion: function(){
					this.Title = "Supervisor";
					this.Pay = 500;
					this.NextPromotion = "Department Manager";
					this.OnPromotion = function(){
						this.Title = "Department Manager";
						this.Pay = 600;
						this.NextPromotion = "Store Owner";
						this.OnPromotion = function(){
							this.Title = "Store Owner";
							this.Pay = 750;
							this.NextPromotion = "Store Owner";
							this.OnPromotion = function(){
								this.Pay += 250;
							};
						};
					};
				}
			},
			{
				Title: "Legal Assistant",
				Pay: 350,
				NextPromotion: "Lawyer",
				OnPromotion: function(){
					this.Title = "Lawyer";
					this.Pay = 600;
					this.NextPromotion = "Partner";
					this.OnPromotion = function(){
						this.Title = "Partner";
						this.Pay = 750;
						this.NextPromotion = "Firm Owner";
						this.OnPromotion = function(){
							this.Title = "Firm Owner";
							this.Pay = 1000;
							this.NextPromotion = "Firm Owner";
							this.OnPromotion = function(){
								this.Pay += 350;
							};
						};
					};
				}
			}];
		}else{
			jobs = [{
				Title: "Server",
				Pay: 300,
				NextPromotion: "Manager",
				OnPromotion: function(){
					this.Title = "Manager";
					this.Pay = 400;
					this.NextPromotion = "District Manager";
					this.OnPromotion = function(){
						this.Title = "District Manager";
						this.Pay = 500;
						this.NextPromotion = "Restaurant Director";
						this.OnPromotion = function(){
							this.Title = "Restaurant Director";
							this.Pay = 750;
							this.NextPromotion = "Restaurant Director";
							this.OnPromotion = function(){
								this.Pay += 250;
							};
						};
					};
				}
			},
			{
				Title: "Cashier",
				Pay: 300,
				NextPromotion: "Supervisor",
				OnPromotion: function(){
					this.Title = "Supervisor";
					this.Pay = 400;
					this.NextPromotion = "Department Manager";
					this.OnPromotion = function(){
						this.Title = "Department Manager";
						this.Pay = 500;
						this.NextPromotion = "Store Owner";
						this.OnPromotion = function(){
							this.Title = "Store Owner";
							this.Pay = 750;
							this.NextPromotion = "Store Owner";
							this.OnPromotion = function(){
								this.Pay += 250;
							};
						};
					};
				}
			},
			{
				Title: "Legal Assistant",
				Pay: 350,
				NextPromotion: "Lawyer",
				OnPromotion: function(){
					this.Title = "Lawyer";
					this.Pay = 600;
					this.NextPromotion = "Partner";
					this.OnPromotion = function(){
						this.Title = "Partner";
						this.Pay = 1000;
						this.NextPromotion = "Firm Owner";
						this.OnPromotion = function(){
							this.Title = "Firm Owner";
							this.Pay = 1250;
							this.NextPromotion = "Firm Owner";
							this.OnPromotion = function(){
								this.Pay += 350;
							};
						};
					};
				}
			},
			{
				Title: "Janitor",
				Pay: 250,
				NextPromotion: "Head Janitor",
				OnPromotion: function(){
					this.Title = "Head Janitor";
					this.Pay = 350;
					this.NextPromotion = "Cleaning Specialist";
					this.OnPromotion = function(){
						this.Title = "Cleaning Specialist";
						this.Pay = 450;
						this.NextPromotion = "God of Cleaning Supplies";
						this.OnPromotion = function(){
							this.Title = "God of Cleaning Supplies";
							this.Pay = 600;
							this.NextPromotion = "God of Cleaning Supplies";
							this.OnPromotion = function(){
								this.Pay += 150;
							};
						};
					};
				}
			}];
		}
		var key = Math.floor(Math.random()*jobs.length);

		this.Job = jobs[key];
		this.UpdateStats();
	};

	that.UpdateStats = function(){
		document.getElementById("cash").innerHTML = "$"+this.Money.toCommaString();
		document.getElementById("job").innerHTML = this.Job.Title+" ($"+this.Job.Pay.toCommaString()+"/mo)";
	};

	that.GetPaid = function(pPay){
		if(typeof pPay == 'undefined')
			pPay == this.Job.Pay;
		
		this.AddMoney(pPay);
	};

	that.AddMoney = function(pAmount){
		this.Money += pAmount;
		this.UpdateStats();
	}

	that.SpendMoney = function(pAmount){
		this.Money -= pAmount;
		this.UpdateStats();
	}

	return that;
}
