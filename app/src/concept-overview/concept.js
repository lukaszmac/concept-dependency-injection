import 'angular-ui-router';
import ConceptContentController from 'concept-overview/concept-content-controller'
import conceptState from 'concept-overview/concept-state'

let moduleName = angular
      .module( "concept-overview", [ 'ui.router'  ] )
      .controller("OverviewConceptContentController" , ConceptContentController )
      .config(($stateProvider) => {

        $stateProvider.state(conceptState.name, conceptState);

      })
      .name;

export default moduleName;