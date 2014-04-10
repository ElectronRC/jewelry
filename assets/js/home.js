// Generated by CoffeeScript 1.7.1
(function() {
  var $, app;

  $ = jQuery;

  'use strict';

  app = angular.module('HomeApp', ['ngRoute', 'ui.router'], function() {});

  app.config([
    '$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      return $stateProvider.state('home', {
        url: "/",
        views: {
          left: {
            templateUrl: 'template/menu-one.html'
          },
          right: {
            templateUrl: 'template/gallery.html'
          }
        }
      });
    }
  ]);

  app.controller('Collection', function($scope, $http, $location) {
    $http.get("json/collection.json").success(function(data) {
      return $scope.lists = data;
    });
    return console.log($location);
  });

  app.controller('Language', function($scope, $http) {
    $http.get("json/language.json").success(function(data) {
      var _default;
      $scope.list_select = data;
      _default = _.where($scope.list_select, {
        "default": true
      });
      return $scope.default_data = _default[0];
    });
    return $scope.isActive = function(code) {
      return code === $scope.default_data.code;
    };
  });

  app.controller('Currency', function($scope, $http) {
    $http.get("json/currency.json").success(function(data) {
      var _default;
      $scope.list_select = data;
      _default = _.where($scope.list_select, {
        "default": true
      });
      return $scope.default_data = _default[0];
    });
    return $scope.isActive = function(code) {
      return code === $scope.default_data.code;
    };
  });

  app.controller('Notice', function($scope, $http) {
    return $http.get("json/notice.json").success(function(data) {
      return $scope.data = data;
    });
  });

  app.controller('Gallery', function($scope, $http, $rootScope, $location) {
    var _count_image, _current_image, _loop;
    _current_image = 0;
    _count_image = 0;
    _loop = 0;
    $http.get("json/gallery.json").success(function(data) {
      $scope.images = data;
      $scope.default_images = $scope.images[_current_image];
      return _count_image = $scope.images.length;
    });
    $scope.change = function(img, $index) {
      var completeHandler;
      _current_image = $index;
      _loop = 0;
      completeHandler = function() {
        return $scope.$apply(function() {
          return $scope.default_images = img;
        });
      };
      TweenLite.to($('.screen'), .5, {
        opacity: .8,
        onComplete: completeHandler
      });
      TweenLite.to($('.screen'), .5, {
        opacity: 1,
        delay: .5
      });
      return false;
    };
    return setInterval(function() {
      if (_loop !== 0) {
        _current_image++;
        if (_count_image <= _current_image) {
          _current_image = 0;
        }
        $scope.$apply(function() {
          return $scope.default_images = $scope.images[_current_image];
        });
      }
      return _loop++;
    }, 6000);
  });

  app.controller('Logins', function($scrope, $http) {
    var html;
    html = $('#forgot-password').html();
    WPopup.prototype.html(html, 160);
    return console.log('xxx');
  });

  $('body').on('click', '.link-forgot-password', function() {
    var html;
    html = $('#forgot-password').html();
    WPopup.prototype.html(html, 160);
    return false;
  });

  $('body').on('click', '.link-new-customer', function() {
    var html;
    html = $('#new-customer').html();
    WPopup.prototype.html(html, 220);
    return false;
  });

  $('body').on('click', '.wrapper-for-forgot-password button[type=submit]', function() {
    var html;
    html = $('#send-email-reset').html();
    WPopup.prototype.html(html, 160);
    WPopup.prototype.auto_close(2000);
    return false;
  });

  $('body').on('click', '#cboxContent .close-popup', function() {
    return WPopup.prototype.close();
  });

}).call(this);

//# sourceMappingURL=home.map
