angular.module('CostSplitter', ['ionic', 'CostSplitter.services', 'CostSplitter.controllers', 'ezfb'])

.constant('FB_CONFIG', {
  FB_APP_ID: '473499536106818',
  LOCALE: 'es_AR'
})

.config(function($stateProvider, $urlRouterProvider, $FBProvider, FB_CONFIG) {

  $FBProvider.setLocale(FB_CONFIG.LOCALE);
  $FBProvider.setInitParams({
    appId: FB_CONFIG.FB_APP_ID
  });  

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // the pet tab has its own child nav-view and history
    .state('splitter-index', {
      url: '/splitters',
      templateUrl: 'templates/splitter-index.html',
      controller: 'SplitterIndexCtrl'
    })

    .state('event-detail', {
      url: '/splitters/:splitterId/events/:eventId',
      templateUrl: 'templates/event-detail.html',
      controller: 'EventCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/splitters');

});

