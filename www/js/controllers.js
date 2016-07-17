angular.module('app.controllers', [])

.controller('peopleCtrl', function($scope) {

})

.controller('chatsCtrl', function($scope, user) {
  $scope.chats = user.relationshipArray;
})

.controller('groupsCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})

.controller('signUpCtrl', function($scope, dialCodes, currentLocationDetails, $localForage, users, setNumber) {
  $scope.dialList = dialCodes; // get the list of countries to populate the drop-down.

  $scope.country = dialCodes[97]; // by default india is selected.

  // set the value of select to the country in which user
  if(currentLocationDetails != undefined){
    $scope.country = _.find(dialCodes, function (obj) {
      return obj.name == currentLocationDetails.components.country;
    });
  }

  $scope.sendOTP = function (m) {
    m = $scope.country.dial_code+m;
    $localForage.setItem("mobileNum", m);
    setNumber.number = m;
    var obj = users.get(m);

    var OTP = "";
    for(var i = 0; i < 5; i++){     // generating random OTP
      OTP += Math.floor(Math.random()*9)+1;
    }
    var temp = {"OTP": {"password":OTP, "timestamp": new Date().getTime()}};
    for(attr in temp){
      obj[attr] = temp[attr];
    }
    obj.$save();
  }
})

.controller('verificationCtrl', function($scope, getNumber) {
  console.log(getNumber.number);
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
