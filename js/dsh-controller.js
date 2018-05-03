var wishonaryApp = angular.module('wishonaryApp',[]);
//  Popup controller  //




//  slider   //

    wishonaryApp.controller('popupController', function ($scope) {
        $scope.showPopup = false;
        $scope.errorMessage = false;

        $scope.isPopupVisble = function () {
            $scope.showPopup = true;
        };
        $scope.hidePrompt = function () {
     
            $scope.showPopup = false;
        };
        $scope.deleteRecord = function() {
         
            if (endDate == "Invalid Date") {
                $scope.errorMessage = true;
                return;
            }
            $scope.hidePrompt();
        };
		
		// repeat box //
		
		 $scope.contacts = []
         $scope.addContact = function() {
         $scope.contacts.push({ name: ''})
    }
	
	

	// repeat box //
			
 		
});
//  Popup controller  END //

			// click anywhere dropdown  //
			
wishonaryApp.controller('dropctrl', function($scope){

})
	
 wishonaryApp.directive('clickAnywhereButHere', function($document){
  return {
    restrict: 'A',
    link: function(scope, elem, attr, ctrl) {
      elem.bind('click', function(e) {
        // this part keeps it from firing the click on the document.
        e.stopPropagation();
      });
      $document.bind('click', function() {
        // magic here.
        scope.$apply(attr.clickAnywhereButHere);
      })
    }
  }
});
			// click anywhere dropdown END  //

			
 wishonaryApp.directive('slideit',function() {
    return {
       restrict: 'A',
       replace: true,
       scope: {
         slideit: '=' 
       },
       template: '<ul class="bxslider">' +
                   '<li ng-repeat="slide in slides">' +
                     '<img ng-src="{{slide.src}}" alt="" />' +
                   '</li>' +
                  '</ul>',
       link: function(scope, elm, attrs) {
          elm.ready(function() {
            scope.$apply(function() {
                scope.slides = scope.slideit;
            });                    
            elm.bxSlider({
              adaptiveHeight: true,
			    auto: true,
  autoControls: true,
   pause: 5000,
  speed: 5000,
              mode: 'fade'});   
            });
       }
    }; 
});

 wishonaryApp.controller('bxctrl', function($scope) {
  $scope.base = 'http://bxslider.com';
  //$scope.images = [
      // {src: $scope.base + '/images/730_200/hill_fence.jpg' },
      // {src: $scope.base + '/images/730_100/tree_wishonaryApp.jpg' },
      // {src: $scope.base + '/images/730_150/me_trees.jpg' }
     //];
	 $scope.images = [
	 {src:'img/background1.jpg'},
	  {src:'img/background2.jpg'},
	   {src:'img/background3.jpg'},
	 
	 ];
});


 angular.module('wishonaryApp', ['angular-svg-round-progressbar']).controller('popupController', ['$scope', '$interval', '$timeout', '$window', 'roundProgressService', function($scope, $interval, $timeout, $window, roundProgressService){

            $scope.current =        75;
            $scope.max =            100;
            $scope.offset =         0;
            $scope.timerCurrent =   0;
            $scope.uploadCurrent =  0;
            $scope.stroke =         8;
            $scope.radius =         100;
            $scope.isSemi =         false;
            $scope.rounded =        false;
            $scope.responsive =     false;
            $scope.clockwise =      true;
            $scope.currentColor =   '#c8a985';
            $scope.bgColor =        '#ecf1f4';
            $scope.duration =       800;
            $scope.currentAnimation = 'easeOutCubic';
            $scope.animationDelay = 0;

            $scope.increment = function(amount){
                $scope.current+=(amount || 1);
            };

            $scope.decrement = function(amount){
                $scope.current-=(amount || 1);
            };

            $scope.animations = [];

            angular.forEach(roundProgressService.animations, function(value, key){
                $scope.animations.push(key);
            });

            $scope.getStyle = function(){
                var transform = ($scope.isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

                return {
                    'top': $scope.isSemi ? 'auto' : '50%',
                    'bottom': $scope.isSemi ? '5%' : 'auto',
                    'left': '50%',
                    'transform': transform,
                    '-moz-transform': transform,
                    '-webkit-transform': transform,
                    'font-size': $scope.radius/3.5 + 'px'
                };
            };

            $scope.getColor = function(){
                return $scope.gradient ? 'url(#gradient)' : $scope.currentColor;
            };

            $scope.showPreciseCurrent = function(amount){
                $timeout(function(){
                    if(amount <= 0){
                        $scope.preciseCurrent = $scope.current;
                    }else{
                        var math = $window.Math;
                        $scope.preciseCurrent = math.min(math.round(amount), $scope.max);
                    }
                });
            };

            var getPadded = function(val){
                return val < 10 ? ('0' + val) : val;
            };

            $interval(function(){
                var date = new Date();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var seconds = date.getSeconds();

                $scope.hours = hours;
                $scope.minutes = minutes;
                $scope.seconds = seconds;
                $scope.time = getPadded(hours) + ':' + getPadded(minutes) + ':' + getPadded(seconds);
            }, 1000);
        }]);


            
		
		

