angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.constant('FirebaseUrl', 'https://chatapp-efbd1.firebaseio.com/')

.service('rootRef', ['FirebaseUrl', Firebase])

.service('users', ["rootRef", "$firebaseObject", function (rootRef, $firebaseObject) {
    var usersRef = rootRef.child('userInfo');
    this.get = function get(mobileNum) {
      return $firebaseObject(usersRef.child(mobileNum));
    }
}]);
