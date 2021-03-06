angular.module('issueTracker.dashboard', [
    'issueTracker.services.issues',
    'issueTracker.services.authentication',
    'issueTracker.services.users'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'home/dashboard/dashboard.html',
            controller: 'DashboardController'
        })
    }])
    .controller('DashboardController', [
        '$scope',
        '$location',
        'issues',
        'authentication',
        'users',
        function($scope, $location, issues, authentication, users){
              issues.getUserIssues(100, 1, 'DueDate desc')
                  .then(function (userIssues) {
                      $scope.issues = userIssues.Issues;
                  });

                users.getCurrentUser()
                    .then(function (data) {
                        $scope.isAdmin = data.data.isAdmin;
                    });


        }
    ]);