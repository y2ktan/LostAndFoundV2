BaseApp.controller('LoginPageCtrl', function ($scope) {

    // Initial values ~~~~~~~~~~~~~
    $scope.ag_login = {
        password: "PASSWORD",
        username: "USERNAME"
    };

    $scope.dummy_database_json_path = "../asset/user_data_info.json";




    // APIs ~~~~~~~~~~~~~~~~~

    // This use for the sign in button
    $scope.proceed_signin = function () {

        // Retreive stored user data
        var user_data_set_obj = JSON.parse(localStorage.getItem('user_data_set'));
        //console.log(user_data_set_obj);

        // Check the username and password
        var login_status = "false";
        if ($scope.ag_login.username in user_data_set_obj)
        {
            var user_data_obj = user_data_set_obj[$scope.ag_login.username];

            if ($scope.ag_login.password === user_data_obj["password"])
            {
                sessionStorage.setItem("user_name", $scope.ag_login.username);
                sessionStorage.setItem("user_data", JSON.stringify(user_data_obj));
                login_status = "true";
                $scope.ag_login.error_display = "Login ~~~~";

                //alert(JSON.stringify(user_data_set_obj[$scope.ag_login.username]));

                // Diver to user page
                window.location = '#!/visitor'
            }
            else
            {
                $scope.ag_login.error_display = "Passwrod is incorrect !!";
            }
            
        }
        else
        {
            $scope.ag_login.error_display = "User name not found !!";
            
        }

        // Record login status
        sessionStorage.setItem("login_status", login_status);

    };


});
