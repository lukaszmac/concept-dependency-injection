const URL_AVATAR_ICONS = 'assets/svg/avatars.svg';
const URL_ICON_MENU    = 'assets/svg/menu.svg';
const URL_ICON_SHARE   = 'assets/svg/share.svg';

// Load the custom app ES6 modules

import 'angular-ui-router';
import ConceptsContentController from 'concepts/concepts-content-controller'
import ConceptsListController from 'concepts/concepts-list-controller'
import conceptsState from 'concepts/concepts-state'

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'users' module" );

// Define the Angular 'users' module

let moduleName = angular
      .module( "concepts", [ 'ui.router'  ] )
      .controller("ConceptsContentController" , ConceptsContentController )
      .controller("ConceptsListController" , ConceptsListController )
      .config( ($mdIconProvider) => {


        $log.debug( "Configuring $mdIconProvider" );

        // Register `dashboard` iconset & icons for $mdIcon service lookups

        $mdIconProvider
          .defaultIconSet( URL_AVATAR_ICONS, 128 )
          .icon('menu' ,URL_ICON_MENU, 24)
          .icon('share',URL_ICON_SHARE, 24);

      })
      .config(($stateProvider) => {

        $log.debug( "Defining 'concepts' state" );

        $stateProvider.state(conceptsState.name, conceptsState);

      })
      .name;

export default moduleName;



