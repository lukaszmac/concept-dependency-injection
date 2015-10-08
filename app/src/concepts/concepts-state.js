import viewTemplate from 'concepts/concepts-content-view.html!text';
import listViewTemplate from 'concepts/concepts-list-view.html!text';

export default {
  name: 'concepts',
  url: 'concepts',
  parent: 'root',
  views: {
    'content': {
      template: viewTemplate,
      controller: "ConceptsController",
      controllerAs: 'controller'
    },
    'list': {
      template: listViewTemplate,
      controller: "ConceptsListController",
      controllerAs: 'listController'
    }
  }
}