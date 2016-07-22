angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

      .state('tabsController', {
    url: '/home',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.people', {
    url: '/people',
    views: {
      'tab1': {
        templateUrl: 'templates/people.html',
        controller: 'peopleCtrl'
      }
    }
  })

  .state('tabsController.chats', {
    url: '/chats',
    views: {
      'tab4': {
        templateUrl: 'templates/chats.html',
        controller: 'chatsCtrl'
      }
    }
  })

  .state('tabsController.groups', {
    url: '/groups',
    views: {
      'tab2': {
        templateUrl: 'templates/groups.html',
        controller: 'groupsCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/settings',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('signUp', {
    url: '/signup',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl',
    resolve: {
        currentLocationDetails: getCountryByPos
    }
  })

  .state('verification', {
    url: '/verification',
    templateUrl: 'templates/verification.html',
    controller: 'verificationCtrl'
  })

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('privateChat', {
    url: '/private-chat',
    templateUrl: 'templates/privateChat.html',
    controller: 'privateChatCtrl'
  })

  .state('chatBot', {
    url: '/chat-bot',
    templateUrl: 'templates/chatBot.html',
    controller: 'chatBotCtrl'
  })

  .state('groupChat', {
    url: '/group-chat',
    templateUrl: 'templates/groupChat.html',
    controller: 'groupChatCtrl'
  })

  .state('yourProfileView', {
    url: '/your-profile',
    templateUrl: 'templates/yourProfileView.html',
    controller: 'yourProfileViewCtrl'
  })

  .state('aboutDeveloper', {
    url: '/about-developer',
    templateUrl: 'templates/aboutDeveloper.html',
    controller: 'aboutDeveloperCtrl'
  })

  .state('friendProfileView', {
    url: '/friend-profile',
    templateUrl: 'templates/friendProfileView.html',
    controller: 'friendProfileViewCtrl'
  })

  .state('groupProfileView', {
    url: '/group-profile',
    templateUrl: 'templates/groupProfileView.html',
    controller: 'groupProfileViewCtrl'
  })

  .state('quietHours', {
    url: '/quiet-hours',
    templateUrl: 'templates/quietHours.html',
    controller: 'quietHoursCtrl'
  })

  .state('notifications', {
    url: '/notifications',
    templateUrl: 'templates/notifications.html',
    controller: 'notificationsCtrl'
  })

$urlRouterProvider.otherwise('/welcome')



});

// gets the country using the latitude and longitdue
var getCountryByPos =  function ($cordovaGeolocation, $http) {
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  var lat;
  var long;
  var API_KEY = '85d0d21e759211619b8e307a294e4848';  // 2bf579245ce858eb98ccc1c01137c65d
  return $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      lat  = position.coords.latitude;
      long = position.coords.longitude;
      return $http.get('http://api.opencagedata.com/geocode/v1/json?q='+lat+'+'+long+'&key='+API_KEY).then(function (data) {
        return data.data.results[0];
      }, function (err) {
        return "error";
      });
    }, function(err) {
      // error
    });
}
