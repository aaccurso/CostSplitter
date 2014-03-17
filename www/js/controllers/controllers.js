'use strict';

angular.module('CostSplitter.controllers', [])

.controller('SplitterIndexCtrl', function($scope, SplitterService) {
  $scope.splitters = SplitterService.query();
  $scope.newEvent = {};
  $scope.rightNavButtons = [{ 
      type: 'ion-navicon button-icon button-clear',
      tap: function(e) {
      	$scope.sideMenuController.toggleRight();
      }
  }];
  $scope.addEvent = function ($index) {
  	SplitterService.addEventToSplitter(
      $scope.splitters[$index].id,
      $scope.newEvent
    );
  };
})

.controller('EventCtrl', function($scope, $stateParams, SplitterService) {
  $scope.event = SplitterService.getEvent($stateParams.splitterId, $stateParams.eventId);
  $scope.rightNavButtons = [{ 
      type: 'ion-compose button-icon button-clear',
      tap: function(e) {
      	// TODO: compose new cost
      	$scope.sideMenuController.toggleRight();
      }
    },
    {
    	type: 'ion-trash-a button-icon button-clear',
    	tap: function(e) {
    		// TODO: delete event
    		// SplitterService.deleteEvent($stateParams.splitterId, $stateParams.eventId);
    	}
  }];
});
