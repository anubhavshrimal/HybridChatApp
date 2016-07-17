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

.controller('signUpCtrl', function($scope, dialCodes, currentLocationDetails, $localForage, OTP, setNumber) {
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
    OTP.generate(m);
  }
})

.controller('verificationCtrl', function($scope, getNumber, $ionicPopup, otpService, $state, OTP) {
  var otpObj = otpService.get(getNumber.number);

  $scope.verify = function (otp) {
    var date = new Date().getTime();

    // when user data is loaded
    otpObj.$loaded().then(function () {

      // if OTP is entered in 10 minutes of generation
      if(parseInt(date) - parseInt(otpObj.timestamp) <= 600000){

        // if otp matches redirect to welcome page else show error
        if(otpObj.password == otp){
          otpObj.$remove().then(function () {
            $state.go('welcome');
          });
        }
        else{
          $ionicPopup.alert({
            title: 'Incorrect OTP',
            template: 'please check the OTP again.'
          });
        }
      }
      else{ // generate a new OTP if the previous expires
        OTP.generate(getNumber.number);
        $ionicPopup.alert({
          title: 'OTP Expired',
          template: 'Generating new OTP.'
        });
      }
    });
  }

  // generate a new OTP request
  $scope.resendOTP = function () {
    OTP.generate(getNumber.number);
    $ionicPopup.alert({
      title: 'OTP Generated',
      template: 'Please check your inbox again.'
    });
  }
})

.controller('welcomeCtrl', function($scope, $ionicHistory) {
  $ionicHistory.clearHistory();
})

.controller('privateChatCtrl', function($scope, goBack) {
  $scope.name ="abc";
  $scope.myGoBack = goBack;

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
