//Create the module and configure Routing
//.......................................
var app = angular.module("routingApp",["ngRoute"])
//$routeProvider to configure different toutes in our appliction
				 .config(function($routeProvider){
					$routeProvider
						.when("/home",{
							templateUrl: "Partial-temp/home.html",
							controller: "homeCntr"
						})
						.when("/classes",{
							templateUrl: "Partial-temp/classes.html",
							controller: "classesCntr"
						})
						.when("/studentList",{
							templateUrl: "Partial-temp/studentList.html",
							controller: "studentListCntr"
						})
						
						.when("/about-us",{
							templateUrl: "Partial-temp/about-us.html",
							controller: "aboutCntr"
						})
						.when("/contact",{
							templateUrl: "Partial-temp/contact.html",
							controller: "contactCntr"
						})
					})
		  		.controller("homeCntr",function($scope){
		  			$scope.message = "Krishna Vidyalaya";
		  })
		  		.controller("classesCntr",function($scope){
		  			var classes = ["1st standard","2nd standard","3rd standard",
		  					"4th standard","5th standard"];
		  			$scope.classes = classes;
		  })
		  		.controller("studentListCntr",function($scope){
		  			var students = [{Name:"Ashwini",Gender:"Female",Age:22},
		  					{Name:"Kavya",Gender:"Female",Age:09},
		  					{Name:"Ashok",Gender:"Male",Age:12},
		  					{Name:"Tamil",Gender:"Male",Age:15},
		  					{Name:"Barath",Gender:"Male",Age:10},
		  					{Name:"Sindu",Gender:"Female",Age:08},
		  					{Name:"Navya",Gender:"Female",Age:20}];
		  	$scope.students = students;
		  });
		  

