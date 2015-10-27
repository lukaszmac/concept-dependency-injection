import viewTemplate from 'concept-dec-vs-imp/concept-content-view.html!text';
import controller from 'concept-dec-vs-imp/concept-content-controller';

export default {
  name: 'Declarative vs Imperative',
  url: '/dec-vs-imp',
  parent: 'concepts',
  views: {
    'content@root': {
      template: viewTemplate,
      controller: controller,
      controllerAs: 'controller'
    }
  }
}