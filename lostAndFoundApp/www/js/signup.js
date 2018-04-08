BaseApp.controller('SignupPageCtrl', function ($scope) {
    // Initial value
    $scope.ag_signup = {
        username: "USERNAME",
        email: "EMAIL",
        phone: "PHONE NUMBER",
        password1: "PASSWORD",
        password2: "RETYPE PASSWORD"
    };

    // This is handle signup proceess
    $scope.proceed_signup = function () {
        // @todo - do add in some basic check like user name crash, email reused, phone reused amd etc
        // @todo - hide the password as it type

        // perform password consistance check
        if ($scope.ag_signup.username == "USERNAME" || $scope.ag_signup.username === "") {
            $scope.ag_signup.error_display = "Please enter USERNAME!!!";
        }
        else if ($scope.ag_signup.email == "EMAIL" || $scope.ag_signup.email === "") {
            $scope.ag_signup.error_display = "Please enter EMAIL!!!";
        }
        else if ($scope.ag_signup.phone == "PHONE NUMBER" || $scope.ag_signup.phone === "") {
            $scope.ag_signup.error_display = "Please enter PHONE NUMBER!!!";
        }
        else if ($scope.ag_signup.password1 == "PASSWORD" || $scope.ag_signup.password1 === "") {
            $scope.ag_signup.error_display = "Please enter PASSWORD!!!";
        }
        else if ($scope.ag_signup.password2 == "RETYPE PASSWORD" || $scope.ag_signup.password2 === "") {
            $scope.ag_signup.error_display = "Please enter RETYPE PASSWORD!!!";
        }
        else if ($scope.ag_signup.password1 !== $scope.ag_signup.password2) {
            $scope.ag_signup.error_display = "Password and retype password require match !!!";
        }
        else if ($scope.ag_signup.term_chk !== true) {
            $scope.ag_signup.error_display = "Please check on term and condition!!!";
        }
        else
        {
            // Build data obj
            var data_obj = {
                "user_name": $scope.ag_signup.username,
                "password": $scope.ag_signup.password1,
                "first_name": "",
                "last_name": "",
                "id_passport": "",
                "email": $scope.ag_signup.email,
                "phone": $scope.ag_signup.phone,
                "street": "",
                "city": "",
                "post_code": "",
                "country": "",
                "gentle": "",
                "claim": [
                    {
                    }
                ]
            };
            //console.log(data_obj);

            // Retreive stored user data
            var user_data_set_obj = JSON.parse(localStorage.getItem('user_data_set'));
            //console.log(user_data_set_obj);

            // Enter new data
            user_data_set_obj[$scope.ag_signup.username] = data_obj;
            localStorage.setItem('user_data_set', JSON.stringify(user_data_set_obj));
            //console.log(user_data_set_obj);

            // record copy in session
            sessionStorage.setItem("user_name", $scope.ag_signup.username);
            sessionStorage.setItem("user_data", JSON.stringify(data_obj));
            sessionStorage.setItem("login_status", "true");

            $scope.ag_signup.error_display = "Proceeding signup ~~~";

            // Diver to activation page
            window.location = '#!/activation'
        }
    };
});