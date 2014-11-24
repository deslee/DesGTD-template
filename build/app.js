(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.log("main js file");

require('angular');
require('angular-route');

angular.module('app', ['ngRoute']).config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'assets/home.html',
      controller: function() {
      }
    })
    .when('/inlist', {
      templateUrl: 'assets/inlist.html',
      controller: function() {
      }
    })
    .otherwise({redirectTo: '/'});
}).run(function() {
  console.log('run');
});

},{"angular":"1UrYvy","angular-route":"b8xedZ"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImM6XFxVc2Vyc1xcZGVzbW9uZFxcUHJvamVjdHNcXERlc0dURFxcbm9kZV9tb2R1bGVzXFxndWxwLWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYzovVXNlcnMvZGVzbW9uZC9Qcm9qZWN0cy9EZXNHVEQvYXBwL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zb2xlLmxvZyhcIm1haW4ganMgZmlsZVwiKTtcclxuXHJcbnJlcXVpcmUoJ2FuZ3VsYXInKTtcclxucmVxdWlyZSgnYW5ndWxhci1yb3V0ZScpO1xyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdSb3V0ZSddKS5jb25maWcoZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcbiAgJHJvdXRlUHJvdmlkZXJcclxuICAgIC53aGVuKCcvJywge1xyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9ob21lLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC53aGVuKCcvaW5saXN0Jywge1xyXG4gICAgICB0ZW1wbGF0ZVVybDogJ2Fzc2V0cy9pbmxpc3QuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLm90aGVyd2lzZSh7cmVkaXJlY3RUbzogJy8nfSk7XHJcbn0pLnJ1bihmdW5jdGlvbigpIHtcclxuICBjb25zb2xlLmxvZygncnVuJyk7XHJcbn0pO1xyXG4iXX0=
