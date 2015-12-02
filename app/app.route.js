empApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/views/home.html',
            controller: 'mainController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('EmpManagement', {
            url: '/EmpManagement',
            //abstract: true, 
            views: {

                // the main template will be placed here (relatively named)
                '': {
                    abstract: true, 
                    templateUrl: 'app/views/EmpManagement.html',
                    controller: 'empController'
                },

                // the child views will be defined here (absolutely named)
                'columnOne@EmpManagement': {
                    //controller: 'empController',
                    parent: 'EmpManagement',
                    templateUrl: 'app/views/table.html'
                },

                // the child views will be defined here (absolutely named)
                'columnTwo@EmpManagement': {
                                    
                    parent: 'EmpManagement',
                    templateUrl: 'app/views/form.html'
                }
            }
        });
});