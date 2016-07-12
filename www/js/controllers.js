angular.module('app.controllers', [])

.controller('peopleCtrl', function($scope) {

})

.controller('chatsCtrl', function($scope) {

})

.controller('groupsCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})

.controller('signUpCtrl', function($scope) {

})

.controller('verificationCtrl', function($scope) {

})

.controller('welcomeCtrl', function($scope) {

})

.controller('privateChatCtrl', function($scope, $ionicHistory) {
  $scope.name ="abc";
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
  });
  // $scope.myGoBack = function () {
  //   $ionicHistory.goBack();
  // }
})

.controller('chatBotCtrl', function($scope) {

})

.controller('groupChatCtrl', function($scope) {

})

.controller('yourProfileViewCtrl', function($scope) {

})

.controller('aboutDeveloperCtrl', function($scope) {

})

.controller('friendProfileViewCtrl', function($scope) {

})

.controller('groupProfileViewCtrl', function($scope) {

})

.controller('quietHoursCtrl', function($scope) {

})

.controller('notificationsCtrl', function($scope) {

})
