angular.module('CostSplitter', ['ionic', 'CostSplitter.services', 'CostSplitter.controllers', 'ezfb'])

.constant('FB_CONFIG', {
  FB_APP_ID: '662664923796340',
  LOCALE: 'es_AR',
  PERMISSIONS: 'basic_info email publish_actions'.split(' ')
})

.config(function($stateProvider, $urlRouterProvider, $FBProvider, FB_CONFIG) {

  var _fb_init_config = {};

  $FBProvider.setLocale(FB_CONFIG.LOCALE);

  if ( typeof cordova === 'undefined' || typeof Cordova === 'undefined' ) { // Executing on mobile device

  } else {
    var _defaultLoadSDKFunction = [
         '$window', '$document', '$fbAsyncInit', '$fbLocale',
    function ($window,   $document,   $fbAsyncInit,   $fbLocale) {
      // Load the SDK's source Asynchronously
      (function(d){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/" + $fbLocale + "/all.js";
        // js.src = "//connect.facebook.net/" + $fbLocale + "/all/debug.js";  // debug
        ref.parentNode.insertBefore(js, ref);
      }($document[0]));

      $window.fbAsyncInit = $fbAsyncInit;
    }];

    $FBProvider.setLoadSDKFunction( _defaultLoadSDKFunction );

    _fb_init_config = {
      status: true,
      cookie: true,
      xfbml: true,
      frictionlessRequests: true,
      useCachedDialogs: true,
      oauth: true
    };

  };

  _fb_init_config.appId = FB_CONFIG.FB_APP_ID;
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

