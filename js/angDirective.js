var myApp = angular.module('superhero', []);

myApp.directive("superman", function() {
  // E = ELEMENT
  // return {
  //   restrict : "E",
  //   template : "<div>here I am to save the day</div>"
  // };

  // A = ATTRIBUTE
  return {
    restrict  : "A",
    link      : function() {
      alert('superman');
    }
  };
  
  // C = CLASS
  // return {
  //   restrict  : "C",
  //   link      : function() {
  //     alert('test');
  //   }
  // };
  
  // M = META / COMMENT
  // return {
  //   restrict  : "M",
  //   link      : function() {
  //     alert('test');
  //   }
  // };
});

myApp.directive("flash", function() {
  // A = ATTRIBUTE
  return {
    restrict  : "A",
    link      : function() {
      alert('flash')
    }
  };
});