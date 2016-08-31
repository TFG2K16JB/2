(function() {
    var app = angular.module('agenda', []);
    
    app.controller('ElasticController', ['$http', function($http){
        
        var elastic = this;
        elastic.contacts = [];
      
        $http.get('http://localhost:9200/agenda/_search?q=*&pretty').success(function(data){
            elastic.contacts = data;
        }); 
    }]);
    
    app.controller('MyController', ['$http', function($http){
        
        var update = function(){

            var req = {
                method: 'POST',
                url: 'http://localhost:9200/agenda/amigo/',
                data: { "nombre": nombre,
                        "apellido": apellido,
                        "edad": edad
                      }
            };

            $http(req).then(function(){return true;}, function(){return false;});
        };
    }]);
})();


