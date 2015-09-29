
// Load the Angular Material CSS associated with ngMaterial
// then load the main.css to provide overrides, etc.

import 'angular-material/angular-material.css!'
import 'assets/app.css!'

// Load Angular libraries

import angular from 'angular'
import material from 'angular-material'
import 'angular-ui-router';

// Load custom application modules

import main from 'app/main'

// Load loggers for injection and pre-angular debugging

import { LogDecorator, ExternalLogger } from 'utils/LogDecorator';


/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {

    let appName = 'concept';
    let $log = new ExternalLogger();

    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Initializing '{0}'", [ appName ] );

    let body = document.getElementsByTagName("body")[0];
    let app  = angular
          .module( appName, [ material, main, 'ui.router' ] )
          .config( ['$provide', LogDecorator] );

    angular.bootstrap( body, [ app.name ], { strictDi: false })

  });



