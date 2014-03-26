angular.module('CostSplitter', ['ionic', 'CostSplitter.services', 'CostSplitter.controllers', 'ezfb'])

.constant('FB_CONFIG', {
  FB_APP_ID: '662664923796340',
  LOCALE: 'es_AR',
  PERMISSIONS: 'basic_info email publish_actions'
})

.config(function($stateProvider, $urlRouterProvider, $FBProvider, FB_CONFIG) {

  var _fb_init_config = { appId: FB_CONFIG.FB_APP_ID },
    _defaultLoadSDKFunction;

  if ( typeof cordova !== 'undefined' || typeof Cordova !== 'undefined' ) {
  // Executing on mobile device

    console.log('Executing on mobile device...');

    angular.extend( _fb_init_config, {
      nativeInterface: CDV.FB,
      useCachedDialogs: false // TODO: investigate behaviour
    });

    // Android FB SDK loaded so no need to load JS SDK
    $FBProvider.setLoadSDKFunction(function ($fbAsyncInit) {
      $fbAsyncInit();
    });

  } else { // Executing on browser
    console.log('Executing on browser...');
  };

  $FBProvider.setLocale(FB_CONFIG.LOCALE);
  $FBProvider.setInitParams( _fb_init_config );

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

