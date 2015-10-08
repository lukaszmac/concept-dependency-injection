
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
          .config( ['$provide', LogDecorator] )
      .config(['$locationProvider', ConfigureApp]);

    angular.bootstrap( body, [ app.name ], { strictDi: false })

  });

function ConfigureApp($locationProvider)
{
  // NOTE: We switch off html 5 mode to help debug with live server.

  // Switch on html 5 mode:
  // http://stackoverflow.com/questions/27307914/angular-error-running-karma-tests-html5-mode-requires-a-base-tag
  // http://stackoverflow.com/a/28686169/231860
  //$locationProvider.html5Mode({
  //  enabled: true,
  //  requireBase: false
  //});
}

