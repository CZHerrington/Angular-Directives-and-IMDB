function MainController ($http) {

  let vm = this;

  vm.movies = ['tt0050212', 'tt0082176', 'tt0756683', 'tt0120623', 'tt1783732', 'tt0120815'];


  init()
  function init () {
    $http.get('http://www.omdbapi.com/?i=tt0050212').then( (result) => {
      console.log('API data: ', result)
    });
  }

}
MainController.$inject = ['$http'];
export { MainController };
