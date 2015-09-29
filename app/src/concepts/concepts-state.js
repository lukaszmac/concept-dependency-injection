export default {
  name: 'concepts',
  url: '/concepts',
  views: {
    '': {
      templateUrl: "/src/concepts/concepts-view.html",
      controller: "ConceptsController",
      controllerAs: 'controller'
    }
  }
}