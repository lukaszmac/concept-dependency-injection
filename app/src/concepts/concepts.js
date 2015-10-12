const URL_ICON_BINOCULARS    = 'assets/svg/ic_binoculars.svg';
const URL_ICON_RANDOM    = 'assets/svg/ic_random.svg';
const ICON_SIZE = 36;

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
      .config( ($mdIconProvider) => {

        $log.debug( "Configuring $mdIconProvider" );

        $mdIconProvider
          .icon('binoculars' ,URL_ICON_BINOCULARS, ICON_SIZE)
          .icon('random' ,URL_ICON_RANDOM, ICON_SIZE)

      })
      .name;

export default moduleName;