angular.module('CostSplitter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('SplitterIndexCtrl', function($scope, SplitterService) {
  $scope.splitters = SplitterService.query();
  $scope.rightButtons = [{ 
      type: 'ion-navicon-round button-menu button-clear',
      tap: function(e) {
      	$scope.sideMenuController.toggleRight();
      }
  }];
  $scope.addEvent = function () {
  	console.info('Add event clicked.');
  };
})

// A simple controller that shows a tapped item's data
.controller('EventCtrl', function($scope, $stateParams, SplitterService) {
  $scope.event = SplitterService.getEvent($stateParams.splitterId, $stateParams.eventId);
  $scope.rightButtons = [{ 
      type: 'ion-ios7-compose button-menu button-clear',
      tap: function(e) {
      	// TODO: compose new cost
      	$scope.sideMenuController.toggleRight();
      }
  }];
});
