angular.module('starter.services', [])

.factory('ProjectTree', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
    var tree = [
          { "name": "Project 1", "complete": false, "cancelled": false },
          {
              "name": "Project 2", "complete": false, "cancelled": false, "children": [
                 { "name": "Subproject 2-1", "complete": false, "cancelled": false },
                 {
                     "name": "Subproject 2-2", "complete": false, "cancelled": false, "children": [
                        { "name": "Subproject 2-2-1", "complete": false, "cancelled": false },
                        { "name": "Subproject 2-2-2", "complete": true, "cancelled": false },
                        { "name": "Subproject 2-2-3", "complete": true, "cancelled": true },
                        { "name": "Subproject 2-2-4", "complete": false, "cancelled": false }]
                 },
                 { "name": "Subproject 2-3", "complete": false, "cancelled": false }]
          },
          {
              "name": "Project 3", "complete": true, "cancelled": false, "children": [
                 { "name": "Subproject 3-1", "complete": true, "cancelled": false },
                 { "name": "Subproject 3-2", "complete": true, "cancelled": true },
                 { "name": "Subproject 3-1", "complete": true, "cancelled": true },
                 { "name": "Subproject 3-1", "complete": true, "cancelled": false }]
          },
          { "name": "Project 4", "complete": false, "cancelled": false },
          { "name": "Project 5", "complete": false, "cancelled": false }
    ];

  return {
    all: function() {
        return tree;
    }
  };
});
