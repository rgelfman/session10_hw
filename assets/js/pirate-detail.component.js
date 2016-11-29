angular.module('pirateDetail', []).component('pirateDetail', {
    templateUrl: '/templates/pirate-detail.html',

    controller: [ '$http', '$routeParams', '$location',
        function PirateDetailController($http, $routeParams, $location) {
            var self = this;
            $http.get('/api/pirates/' + $routeParams.pirateId)
                .then(function (response) {
                    self.pirate = response.data;
                });

            self.back = function () {
                $location.path('/');
            }

         self.editorEnabled = false;

             self.enableEditor = function () {
             self.editorEnabled = true;
            };

              self.disableEditor = function () {
                 self.editorEnabled = false;
            };

            
         self.savePirate = function (pirate, pid) {
                console.log(pirate.name)

                $http.put('/api/pirates/' + pid, pirate)

                     .success(function (res) {
                           self.editorEnabled = false;
              
                    })
            }



        }
    ]
});