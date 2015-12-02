empApp.controller('empController', function($scope,$http) {
    // $scope.employee = {};
    console.log($scope)
    $http.get('Data.json').success(function(data) {
      	$scope.employee = $scope.employee || data;
    });
    // this.employee = employees;
    $scope.showForm = $scope.showForm || false;
    $scope.saveEmp = $scope.saveEmp || false;
    $scope.updateEmp = $scope.updateEmp || false; 
    $scope.submitted = $scope.submitted || false;
    var key;
    $scope.submitForm = function(isValid) {
    	// check to make sure the form is completely valid
    	$scope.submitted = true;
    }
    	
    $scope.add = function() {        
    	$scope.showForm = true;
    	$scope.saveEmp = true;
    	$scope.updateEmp = false;
    	$scope.submitted = false;
    	$scope.id = '';
        $scope.fname = '';
        $scope.lname = '';
        $scope.desig = ''; 
        console.log($scope)
    }

    $scope.save = function(isValid) {
    	if(isValid) {
            console.log($scope)
            console.log($scope.employee.id)
            console.log($scope.employee.fname)
            console.log($scope.employee.lname)
			$scope.employee.push({ 'id': $scope.employee.id,'fname': $scope.employee.fname, 'lname': $scope.employee.lname,'desig': $scope.employee.desig });
	        $scope.employee.id = '';
	        $scope.employee.fname = '';
	        $scope.employee.lname = '';
	        $scope.employee.desig = '';
	        $scope.showForm = false;
	    }    
    }

    $scope.edit = function(emp,index) {
    	$scope.showForm = true;
    	$scope.saveEmp = false;
    	$scope.updateEmp = true;
    	$scope.submitted = false; 
        key = index;
    	$scope.employee.id = emp.id;
        $scope.employee.fname = emp.fname;
        $scope.employee.lname = emp.lname;
        $scope.employee.desig = emp.desig;
    }
    $scope.update = function(isValid) {
    	if(isValid) {
    		$scope.employee[key].id = $scope.employee.id;
	        $scope.employee[key].fname = $scope.employee.fname;
	        $scope.employee[key].lname = $scope.employee.lname;
	        $scope.employee[key].desig = $scope.employee.desig;
	        $scope.employee.id = '';
	        $scope.employee.fname = '';
	        $scope.employee.lname = '';
	        $scope.employee.desig = '';
	        $scope.showForm = false;	
    	}
    	
    }
    $scope.delete = function(index) {
    	$scope.employee.splice(index, 1);
    }

});