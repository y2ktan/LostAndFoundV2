BaseApp.controller('HomePageCtrl', function ($scope) {

    // Initialization to confirm the default set data executred
    $scope.init = function () {
        // This is to load initial data if there wasn't there
        if (localStorage.getItem("user_data_set") === null) {
            var base_value_obj = {
                "test": {
                    "user_name": "test",
                    "password": "123",
                    "first_name": "test1",
                    "last_name": "example",
                    "id_passport": "123-456-60",
                    "email": "test@yahoo.com",
                    "phone": "+6012-444555666",
                    "street": "some street",
                    "city": "some city",
                    "post_code": "some code",
                    "country": "Soem contry",
                    "gentle": "unknown",
                    "claim": [
                        {
                            "item": "Iphone 1",
                            "found_when": "dd/mm/yyyy hh"
                        }
                    ]
                },
                "cmtan": {
                    "user_name": "cmtan",
                    "password": "123",
                    "first_name": "Chun Mun",
                    "last_name": "Tan",
                    "id_passport": "S8076606H",
                    "email": "info@ressphere.com",
                    "phone": "+6012-111222333",
                    "street": "16 Sandilands Road",
                    "city": "SINGAPORE",
                    "post_code": "546080",
                    "country": "SINGAPORE",
                    "gentle": "male",
                    "claim": [
                        {
                            "item": "Iphone 5",
                            "found_when": "25/01/2018 2pm"
                        }
                    ]
                }
            };

            //console.log(base_value_obj);
            var base_value = JSON.stringify(base_value_obj);
            localStorage.setItem('user_data_set', base_value);

            console.log("Asserting initial data !!!!");
        }

        // Following is to cleanup local storage, debug purpose
        //localStorage.removeItem('user_data_set');
    };
    $scope.init();

    $scope.NavigateToLogin = function () {
        window.location = "#!/signIn";
    };

    $scope.NavigateToVisitor = function () {
        window.location = "#!/visitor";
    };


});