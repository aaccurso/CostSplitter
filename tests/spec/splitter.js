'use strict';
describe('Controller: SplitterIndexCtrl', function() {

  var SplitterIndexCtrl,
  	SplitterServiceMock,
    scope;
	
	// load the controller's module
  beforeEach(module('CostSplitter'));

  // define SplitterServiceMock
  beforeEach(function() {
    var splitters = [
	    { id: 0, title: 'Viajes', events: [
	        { id: 10, title: 'Carmen', date: new Date('2014-2-1'), costs: [
	            { id: 110, title: 'Bebidas', cost: 200, person: 'Alan' },
	            { id: 210, title: 'Combustible', cost: 150, person: 'Hernan' },
	            { id: 310, title: 'Peajes', cost: 60, person: 'Hernan' },
	            { id: 410, title: 'Comida', cost: 300, person: 'Fede' }
	          ]
	        },
	        { id: 20, title: 'Santa Teresita', date: new Date('2013-12-25'), costs: [
	            { id: 120, title: 'Bebidas', cost: 300, person: 'Alan' },
	            { id: 220, title: 'Combustible', cost: 250, person: 'Hernan' },
	            { id: 320, title: 'Peajes', cost: 80, person: 'Hernan' },
	            { id: 420, title: 'Asado', cost: 200, person: 'Fede' },
	            { id: 520, title: 'Patys', cost: 150, person: 'KevinB' }
	          ]
	        }
	      ]
	    },
	    { id: 1, title: 'Salidas', events: [
	        { id: 11, title: 'Fiesta Egresados', date: new Date('2013-12-28'), costs: [
	            { id: 111, title: 'Cotillón', cost: 200, person: 'NatiP' },
	            { id: 211, title: 'Bebidas', cost: 150, person: 'Alan' },
	            { id: 311, title: 'Bebidas', cost: 180, person: 'RodriM' },
	            { id: 411, title: 'Alquiler Salón', cost: 2000, person: 'Estefanía' }
	          ]
	        }
	      ]
	    }
	  ];
    SplitterServiceMock = {
	    query: function() {
	      return splitters;
	    },
	    getEvent: function(splitterId, eventId) {
	      return splitters[splitterId].events[eventId];
	    }
	  };
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SplitterIndexCtrl = $controller('SplitterIndexCtrl', {
      $scope: scope,
      SplitterService: SplitterServiceMock
    });
  }));
  
  it('should retrieve 2 splitters', function() {
    expect(scope.splitters.length).toBe(2);
  });

});

