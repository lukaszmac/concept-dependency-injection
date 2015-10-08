import viewTemplate from 'root/root-view.html!text';

export default {
  name: 'root',
  url: '',
  views: {
    '': {
      template: viewTemplate,
      controller: "RootController",
      controllerAs: 'controller'
    }
  }
}