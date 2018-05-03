var wishonaryApp = angular.module('wishonaryApp', ['simple-accordion', 'app1']);
//  Popup controller  //

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
	
    
	$scope.elements=[
	    {element:''},{element:''},{element:''},{element:''},{element:''},{element:''}
	];
	
	

 $scope.colors = [
    { code:'', cls:'color-0'},{ code:'', cls:'color-1'},{ code:'', cls:'color-2'},{ code:'', cls:'color-3'},{ code:'', cls:'color-4'},
	{ code:'', cls:'color-5'},{ code:'', cls:'color-6'},{ code:'', cls:'color-7'},{ code:'', cls:'color-8'}
 ];
	// repeat box //
$scope.getColorClass = function(clsname,event){
console.log(event);
  $('.editer').addClass(clsname);
  $(this).removeClass('selected');
     var editorclass =  $('.editer');
 var className = editorclass.attr('class');
 console.log(className);
 var seperator = className.split(" ");
  console.log(seperator);
 if(seperator[1]!=clsname){
 editorclass.addClass(clsname).removeClass(seperator[1]);
 }					
};

// add multi click function //

// add multi click function //
 		
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

wishonaryApp.controller('addSkillsController', ['$scope', function($scope) {

		$scope.skills = [];

		$scope.addSkill = function() {
			$scope.skills.push({'title': $scope.newSkill, 'done':false})
			$scope.newSkill = ''
		}

		$scope.deleteSkill = function(index) {	
			$scope.skills.splice(index, 1);
		}
	}]);
	
wishonaryApp.controller('pbController', ['$scope', function($scope) {	
  $scope.items=[
	    {rw:''}
	];
	
	$scope.addItem = function() {
			$scope.items.push({'name': $scope.newItem, 'done':false})
			$scope.newItem = ''
   }
		$scope.removeItem = function(index) {	
			$scope.items.splice(index, 1);
		}
		   
   
}]);


wishonaryApp.controller('tableCtrl', ['$scope', function($scope) {	
  $scope.rows=[
	    {adds:''}
	];
	
	$scope.addRow = function() {
			$scope.rows.push({'name': $scope.newRow, 'done':false})
			$scope.newRow = ''
   }
		$scope.removeRow = function(index) {	
			$scope.rows.splice(index, 1);
		}
		   
   
}]);

// pie chart js // 

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function Controller() {
    _classCallCheck(this, Controller);

    this.portfolio = {
        id: 123,
        portfolioAssets: [{
            id: 123,
            name: 'Asset A',
            //symbol: 'AAA',
            percentage: 10
        }, {
            id: 124,
           // name: 'Asset B With a really long name from foreign country: united states',
            name: 'Asset B',
            //symbol: 'BBB',
            percentage: 15
        }, {
            id: 125,
            name: 'Asset C',
            //symbol: 'CCC',
            percentage: 15
        }, {
            id: 126,
            name: 'Asset D',
            //symbol: 'DDD',
            percentage: 10
        }, {
            id: 127,
            name: 'Asset E',
            //symbol: 'BBB',
            percentage: 25
        }]
    };
};


angular.module('app1', []).factory('highstock', function ($window) {
    var Highcharts = $window.Highcharts;
    // Pie chart has gap bug: https://github.com/highcharts/highcharts/issues/1828
    Highcharts.wrap(Highcharts.seriesTypes.pie.prototype, 'drawPoints', function (proceed) {
        if (this.options.borderColor == null && this.options.borderWidth >= 1) {
            Highcharts.each(this.points, function (point) {
                point.pointAttr['']['stroke-width'] = 1;
                point.pointAttr[''].stroke = point.pointAttr[''].fill;
                point.pointAttr['hover']['stroke-width'] = 1;
                point.pointAttr['hover'].stroke = point.pointAttr['hover'].fill;
                point.pointAttr['select']['stroke-width'] = 1;
                point.pointAttr['select'].stroke = point.pointAttr['select'].fill;
            });
        }
        proceed.apply(this);
    });

    return Highcharts;
})


.controller('Controller', Controller).directive('pieChart', function ($timeout, highstock) {
    var colors = ['#CD5955', '#E96D66', '#EC876C', '#EFA071', '#EFB278', '#EEC27D', '#DEC782', '#BCBB87', '#99AD8A', '#7B9D8A', '#5E8D8A'];
    var chartConfig = {
        chart: {
            type: 'pie',
            //renderTo: null,
            height: 300,
            backgroundColor: 'none',
            events: {
                //load: null
            }
        },
        title: {
            style: { display: 'none' }
        },
        subtitle: {
            style: { display: 'none' }
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%'],
                colors: colors,
                borderWidth: 1,
                borderColor: null,
                stickyTracking: false,
                dataLabels: {
                    enabled: false
                },
                states: {
                    hover: {
                        brightness: 0
                    }
                }
            }
        },
        tooltip: {
            backgroundColor: '',
            borderWidth: 0,
            useHTML: true,
            formatter: function formatter() {
                console.log('this is ', this);
                var point = this.point;
                return '\n                    <section class="donut-chart-tooltip">\n                        <i style="background-color:' + point.color + '"><span class="point-percentage">' + (point.y + '%') + '</span></i>\n                        <span class="point-name" style="color:' + point.color + '">' + point.name + '</span>\n                    </section>\n                ';
            }
        },
        series: [{
            name: 'Assets Percentage',
            data: null, // To be set
            size: '100%',
            innerSize: '85%'
        }],
        exporting: {

            enabled: false
        },
        credits: {
            enabled: false
        }
    };

    return {
        restrict: 'AE',
        scope: {
            portfolio: '=',
            chartTitle: '@'
        },
        template: '\n                <header class="portfolio-assets-donut-chart-title">\n                    <h3 ng-bind="chartTitle"></h3>\n                </header>\n                <div class="portfolio-assets-donut-chart"></div>\n                <ul class="portfolio-assets-legend">\n                    <li ng-repeat="asset in portfolio.portfolioAssets">\n                        <div class="item-container">\n                        <div class="color-label"><i ng-style="{\'background-color\': getColorByIndex($index)}"></i></div>\n                        <div class="asset-details">\n                            <span ng-style="{\'color\': getColorByIndex($index)}" class="percentage" ng-bind="asset.percentage + \'%\'"></span>\n                            <h4 ng-style="{\'color\': getColorByIndex($index)}" ng-bind="asset.name"></h4>\n                            <h5 ng-bind="asset.symbol"><h5>\n                        </div>\n                        </div>\n                    </li>\n                </ul>\n        ',
        link: function link(scope, elem) {
            var titleElem = elem[0].getElementsByClassName('portfolio-assets-donut-chart-title')[0];
            var chartElem = elem[0].getElementsByClassName('portfolio-assets-donut-chart')[0];
            var portfolio = scope.portfolio;

            var chart = null;
            var createChart = function createChart() {
                // Process data
                var data = portfolio.portfolioAssets.map(function (item) {
                    return {
                        y: item.percentage,
                        name: item.name
                    };
                });

                chartConfig.series[0].data = data;

                chart = new highstock.Chart(chartConfig);
            };

            scope.getColorByIndex = function (i) {
                var len = colors.length;
                return colors[i % len];
            };

            var positionTitle = function positionTitle() {
                console.log('positioning title', chart);
                console.log('this is ', this);

                Object.assign(titleElem.style, {
                    width: this.plotWidth + 'px',
                    height: this.plotHeight + 'px',
                    left: this.plotLeft + 'px',
                    top: this.plotTop + 'px'
                });
            };

            //chartConfig.events.load = positionTitle;
            chartConfig.chart.renderTo = chartElem;
            chartConfig.chart.events.load = positionTitle;
            chartConfig.chart.events.redraw = positionTitle;
            createChart();
        }
    };
});
