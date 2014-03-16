'use strict';
describe('Controller: SplitterIndexCtrl', function() {

	// load the controller's module
  beforeEach(module('CostSplitter'));

  var SplitterIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SplitterIndexCtrl = $controller('SplitterIndexCtrl', {
      $scope: scope
    });
  }));
  
  it('should contain hello', function() {
    var message = 'hello world test';
    expect(message).toContain('hello');
  });

});

