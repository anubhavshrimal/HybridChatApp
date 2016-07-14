angular.module('app.controllers', [])

.controller('peopleCtrl', function($scope) {

})

.controller('chatsCtrl', function($scope, users) {
  $scope.user = users.get('+919828011756');
})

.controller('groupsCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})

.controller('signUpCtrl', function($scope, dialCodes, currentLocationDetails) {
  $scope.dialList = dialCodes; // get the list of countries to populate the dropdown.

  $scope.country = dialCodes[97]; // by default india is selected.

  // set the value of select to the country in which user is by checking latitude longitude.
  if(currentLocationDetails != undefined){
    $scope.country = _.find(dialCodes, function (obj) {
      return obj.name == currentLocationDetails.components.country;
    });
  }
})

.controller('verificationCtrl', function($scope) {

})

.controller('welcomeCtrl', function($scope) {

})

.controller('privateChatCtrl', function($scope, $ionicHistory) {
  $scope.name ="abc";
  $scope.myGoBack = function () {
    $ionicHistory.goBack();
  }
})

.controller('chatBotCtrl', function($scope) {

})

.controller('groupChatCtrl', function($scope) {

})

.controller('yourProfileViewCtrl', function($scope) {

})

.controller('aboutDeveloperCtrl', function($scope) {

})

.controller('friendProfileViewCtrl', function($scope, $ionicHistory) {
  $scope.myGoBack = function () {
    $ionicHistory.goBack();
  }

})

.controller('groupProfileViewCtrl', function($scope) {

})

.controller('quietHoursCtrl', function($scope) {

})

.controller('notificationsCtrl', function($scope) {

})
