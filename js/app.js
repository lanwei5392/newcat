//set up model
var model = {
 
    currentCat: null,
    adminVis: null,
 
    cats: [
 
    {
        name: 'Mimi',
        count: 0,
        image: 'image/cat-1.jpg'
    },
 
    {
        name: 'Lily',
        count: 0,
        image: 'image/cat-2.jpg'
    },
 
    {
        name: 'Sunny',
        count: 0,
        image: 'image/cat-3.jpg'
    },
 
    {
        name: 'Jackie',
        count: 0,
        image: 'image/cat-4.jpg'
    },
 
    {
        name: 'Yuki',
        count: 0,
        image: 'image/cat-5.jpg'
    }
    ]
};
 
var octopus = {
 
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
    },
 
 
    showAdmin: function() {
        model.adminVis = true;
        adminView.render();
    },
 
    hideAdmin: function() {
        model.adminView = false;
    },
 
    saveAdmin: function() {
 
        alert('name = ' + name);
        alert('imgURL = ' + imgURL);
        alert('clicks = ' + clicks);
        model.currentCat.name = name;
        model.currentCat.image = imgURL;
        model.currentCat.count = clicks;
        alert(model.currentCat.name);
        catView.render();
    }
 
};
 
var catView = {
 
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
 
    var currentCat = octopus.getCurrentCat();
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.image;
        this.catCountElem.textContent = currentCat.count;
    }
 
};
 
var catListView = {
 
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
 
var adminView = {
 
 
    init: function() {
 
    //store pointers to the DOM elements for easy access later
    	var currentCat = octopus.getCurrentCat();
 
    	document.getElementById('name').value = currentCat.name;
    	document.getElementById('imgURL').value = currentCat.image;
   		document.getElementById('clicks').value = currentCat.count;
 
    	this.saveBtn = document.getElementById('save');
		this.cancelBtn = document.getElementById('cancel');
    	this.adminBtn = document.getElementById('admin');
    	this.adminVis = document.getElementById('admin-section').style.visibility = "hidden";
 
    	this.cancelBtn.addEventListener('click', function() {
        	octopus.hideAdmin();
    	});
 
    	this.adminBtn.addEventListener('click', function() {
        	octopus.showAdmin();
    	});
 
 
    	this.saveBtn.addEventListener('click', function() {
    		this.name = document.getElementById('name').value;
    		this.imgURL = document.getElementById('imgURL').value;
    		this.clicks = document.getElementById('clicks').value;
    		octopus.saveAdmin(this.name, this.imgURL, this.clicks);
    	});
	},


 	render: function() {

 		this.adminVis = document.getElementById('admin-section').style.visibility = "visible";

 		this.name = document.getElementById('name').value;
 		this.imgURL = document.getElementById('imgURL').value;
 		this.clicks = document.getElementById('clicks').value;

 	}
 
};
 
octopus.init();
 