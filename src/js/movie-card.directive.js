function MovieCard () {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    templateUrl: 'templates/movie-card.tpl.html',
    controller: function ($http, $scope) {
      let vm = this;
      $http.get('http://www.omdbapi.com/?i=' + $scope.name).then( (res) => {
        vm.movie = res.data;
      });
    },
    link: function (scope, element, attrs) {
      element.on('click', () => {
        alert(attrs.name);
      });
    },
    controllerAs: 'vm'
  };
}

MovieCard.$inject = [];
export { MovieCard };
