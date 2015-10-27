import 'angular-ui-router';
import ConceptContentController from 'concept-dec-vs-imp/concept-content-controller'
import conceptState from 'concept-dec-vs-imp/concept-state'

let moduleName = angular
      .module( "concept-dec-vs-imp", [ 'ui.router'  ] )
      .controller("DecVsImpConceptContentController" , ConceptContentController )
      .config(($stateProvider) => {

        $stateProvider.state(conceptState.name, conceptState);

      })
      .name;

export default moduleName;