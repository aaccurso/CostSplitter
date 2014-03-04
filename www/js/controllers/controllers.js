angular.module('CostSplitter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('SplitterIndexCtrl', function($scope, SplitterService) {
  $scope.splitters = SplitterService.query();
})

// A simple controller that shows a tapped item's data
.controller('EventCtrl', function($scope, $stateParams, SplitterService) {
  $scope.event = SplitterService.getEvent($stateParams.splitterId, $stateParams.eventId);
});
