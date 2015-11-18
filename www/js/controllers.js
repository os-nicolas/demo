angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('TreeController', function ($scope, ProjectTree) {
    $scope.tree = ProjectTree.all();

    $scope.delete = function (data) {
        treeDelete($scope.tree, data);
    };

    function treeDelete(subTree, toDelete) {
        // subTree (the array) contains toDelete
        // go ahead a delete it
        var index = subTree.indexOf(toDelete);
        if (index > -1) {
            subTree.splice(index, 1);
        } else {
            // otherwise we just call treeDelete again
            subTree.forEach(function (subSubTree) {
                if (subSubTree.children != undefined) {
                    treeDelete(subSubTree.children, toDelete);
                }
            });
        }
    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
