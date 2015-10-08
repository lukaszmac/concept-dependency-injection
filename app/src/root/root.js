// Load the custom app ES6 modules

import 'angular-ui-router';
import RootController from 'root/root-controller'
import rootState from 'root/root-state'

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'root' module" );

let moduleName = angular
      .module( "root", [ 'ui.router'  ] )
      .controller("RootController" , RootController)
      .config(($stateProvider) => {

        $log.debug( "Defining 'root' state" );

        $stateProvider.state(rootState.name, rootState);

      })
      .name;

export default moduleName;