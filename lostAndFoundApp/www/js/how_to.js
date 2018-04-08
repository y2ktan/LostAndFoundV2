BaseApp.controller('HowToPageCtrl', function ($scope) {
    // Initial value
    $scope.ag_header = {
        title: "Tutorial"
    };

    $scope.NavigateToVisitor = function () {
        window.location = "#!/visitor"
    };


});