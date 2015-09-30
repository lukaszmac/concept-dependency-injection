import viewTemplate from 'concepts/concepts-view.html!text';

export default {
  name: 'concepts',
  url: '/concepts',
  views: {
    '': {
      templateUrl: "/src/concepts/concepts-view.html",
      template: viewTemplate,
      controller: "ConceptsController",
      controllerAs: 'controller'
    }
  }
}