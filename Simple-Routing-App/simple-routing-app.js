//Create the module and configure Routing
//.......................................
var app = angular.module("routingApp",["ngRoute"]);
//$routeProvider to configure different toutes in our appliction
				 .config(function($routeProvider){
					$routeProvider
						.when("/home",{
							templeteUrl: "home.html";
							controller: "homeCntr";
						}),
						.when("/classes",{
							templeteUrl: "classes.html";
							controller: "classesCntr";
						}),
						.when("/studentList",{
							templeteUrl: "studentList.html";
							controller: "studentListCntr";
						}),
						
						.when("/about-us",{
							templeteUrl: "about-us.html";
							controller: "aboutCntr";
						}),
						.when("/contact",{
							templeteUrl: "contact.html";
							controller: "contactCntr";
						})
});
		  app.controller("homeCntr",function($scope){
		  			$scope.message = "Home Page";
		  });
		  app.controller("classesCntr",function($scope){
		  	var classes = ["1st standard","2nd standard","3rd standard",
		  					"4th standard","5th standard"];
		  		$scope.classes = classes;
		  });
		  app.controller("studentListCntr",function($scope){
		  	var students = [{Name:"Ashwini",Gender:"Female",Age:22},
		  					{Name:"Kavya",Gender:"Female",Age:09},
		  					{Name:"Ashok",Gender:"Male",Age:12},
		  					{Name:"Tamil",Gender:"Male",Age:15},
		  					{Name:"Barath",Gender:"Male",Age:10},
		  					{Name:"Sindu",Gender:"Female",Age:08},
		  					{Name:"Navya",Gender:"Female",Age:20}];
		  	$scope.students = students;
		  });
		  
