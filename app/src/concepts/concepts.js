import 'angular-ui-router';
import ConceptsContentController from 'concepts/concepts-content-controller'
import ConceptsListController from 'concepts/concepts-list-controller'
import conceptsState from 'concepts/concepts-state'

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'concepts' module" );

let moduleName = angular
      .module( "concepts", [ 'ui.router'  ] )
      .controller("ConceptsContentController" , ConceptsContentController )
      .controller("ConceptsListController" , ConceptsListController )
      .config(($stateProvider) => {

        $log.debug( "Defining 'concepts' state" );

        $stateProvider.state(conceptsState.name, conceptsState);

      })
      .name;

export default moduleName;