var model = {
	currentcat: null,
	cats: [
		{
			"name" : "1stcat",
			"clicks" : 0,
			"imgsrc" : "images/cat0.png",
		},
		{
			"name" : "2ndcat",
			"clicks" : 0,
			"imgsrc" : "images/cat1.png",
		},
		{
			"name" : "3rdcat",
			"clicks" : 0,
			"imgsrc" : "images/cat2.png",
		},
		{
			"name" : "4thcat",
			"clicks" : 0,
			"imgsrc" : "images/cat3.png",
		}
	]
};

var octopus = {
	init: function() {
		model.currentcat = model.cats[0];
		viewlist.init();
		viewPicture.init();
	},
	getCat: function() {
		model.cats;
	},
	getCurrentCat: function() {
		return model.currentcat;
	},
    setCurrentCat: function(cat) {
		model.currentcat = cat;
	},
    clickCounter: function() {
	},
};

var viewlist = {
	init : function() {
        this.catListElem = document.getElementById('list');
        this.render();
	},
	render : function() {
		cats = model.cats;
		for (i=0; i<model.cats.length; i++) {
			var cat = cats[i];
			console.log(i);

		elem = document.createElement('li');
		elem.textContent = cat.name;
		this.catListElem.appendChild(elem);
		};
	}
};

var viewPicture = {
	init : function() {
		this.catPicture = document.getElementById('catimage');
		this.clicks = document.getElementById('clicks');
		this.catName = document.getElementById('name');
		this.render();
	},
	render : function() {
		var currentcat = octopus.getCurrentCat();
		console.log(currentcat);
		this.catPicture.src = currentcat.imgsrc;
		this.clicks.textContent = currentcat.clicks;
		this.catName.textContent = currentcat.name;
	}
};
octopus.init();