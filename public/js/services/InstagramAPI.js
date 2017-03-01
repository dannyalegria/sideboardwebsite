angular.module("app")
.factory('InstagramAPI', ['$http', function($http) {
  var client_id = '99002af92a494c6e8056d72aae322672';
  var user_id = '4735510398';
  var access_token = '4735510398.99002af.e42973a5710b4c63808752e9ca0271e7';
  return {
    fetchPhotos : function(callback) {
      var endpoint = 'https://api.instagram.com/v1/users/';
      endpoint += user_id;
      endpoint += '/media/recent/?';
      endpoint += '?count=99';
      endpoint += '&callback=JSON_CALLBACK';
      endpoint += '&access_token=' + access_token;
      $http.jsonp(endpoint)
      .success(function(response) {
        callback(response.data);
      })
      .error(function(xhr, status, err) {
        console.error(status, err);
      })
    }
  }
  }]);
