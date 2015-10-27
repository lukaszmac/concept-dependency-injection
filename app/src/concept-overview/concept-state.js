import viewTemplate from 'concept-overview/concept-content-view.html!text';
import controller from 'concept-overview/concept-content-controller';

export default {
  name: 'Overview',
  url: '/overview',
  parent: 'concepts',
  views: {
    'content@root': {
      template: viewTemplate,
      controller: controller,
      controllerAs: 'controller'
    }
  }
}