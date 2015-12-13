(function(){

	var Tabs = function(){
		this.$container = document.querySelector('.tabs');
		this.$elements 	= this.$container.querySelectorAll('.tabs-link');
		
		this.addEvents();
	};

	Tabs.prototype.addEventListeners = function( elements, event, method ) {
		var that 	= this;
		var _this 	= {};

		[].forEach.call(elements, function(element, index){
			_this = {
				that: that,
				index: index,
				element: element
			}
			
			element.addEventListener( event, method.bind(_this) );
		});
	};

	Tabs.prototype.addEvents = function() {		
		var elements = this.$elements;

		this.addEventListeners( elements, 'keydown', this.onElementKeydown );
		this.addEventListeners( elements, 'click', this.onElementClick );		
	};

	Tabs.prototype.onElementKeydown = function(event) {
		event.preventDefault();
		
		var $current 	= this.element;
		var $prev 		= this.that.$elements[this.index-1]; //|| this.that.$elements[this.that.$elements.length-1];
		var $next 		= this.that.$elements[this.index+1]; //|| this.that.$elements[0];
		var $target 	= this.that.keyActivated(event, $prev, $next);

		if ($target) {
			this.that.deselect();
      		this.that.select($target);      		
		}
  		
	};

	

})();


