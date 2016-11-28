//set up model
var	model = {

	currentCat: null,
	adminVis: null,

	cats: [

	{
		name: 'Mimi',
		count: 0,
		image: 'image/cat-1.jpg',
		imgURL: 'image/cat-1.jpg'
	},

	{
		name: 'Lily',
		count: 0,
		image: 'image/cat-2.jpg',
		imgURL: 'image/cat-2.jpg'
	},

	{
		name: 'Sunny',
		count: 0,
		image: 'image/cat-3.jpg',
		imgURL: 'image/cat-3.jpg'
	},

	{
		name: 'Jackie',
		count: 0,
		image: 'image/cat-4.jpg',
		imgURL: 'image/cat-4.jpg'
	},

	{
		name: 'Yuki',
		count: 0,
		image: 'image/cat-5.jpg',
		imgURL: 'image/cat-5.jpg'

	}
	]
};

var	octopus = {

	init: function() {
		model.currentCat = model.cats[0];

		catListView.init();
		catView.init();
		adminView.init();
	},

	getCats: function() {
		return model.cats;
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},

	incrementCounter: function() {
		model.currentCat.count ++;
		catView.render();
	}，

	showAdmin: function() {
		model.adminVis = trun;
		adminView.render();
	},

	hideAdmin: function() {
		model.adminVis = false;
	},

	saveAdmin: function(name, clicks, adminUrl) {
		
	}

};

var	catView = {

	init: function() {
		this.catViewElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-image');
		this.catCountElem = document.getElementById('cat-count');


		this.catImageElem.addEventListener('click', function() {
			octopus.incrementCounter();
		});

		this.render();
	},

	render: function() {

		var	currentCat = octopus.getCurrentCat();
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.image;
		this.catCountElem.textContent = currentCat.count;
	}

};

var	catListView = {

	init: function() {

		this.catListElem = document.getElementById('cat-list');

		this.render();
	},

	render: function() {
		
		var elem, cat, i

		var cats = octopus.getCats();

		this.catListElem.innerHTML = '';

		for (var i = 0; i < cats.length; i++) {
			cat = cats[i];

			elem = document.createElement('li');
			elem.textContent = cat.name;

			elem.addEventListener('click', (function(catCopy) {

			return function() {
				octopus.setCurrentCat(catCopy);
				catView.render();
			};
			})(cat));

			this.catListElem.appendChild(elem);
		}
	}
};


octopus.init();