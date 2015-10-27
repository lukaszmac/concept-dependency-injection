import root from 'root/root';
import users from 'users/Users';
import concepts from 'concepts/concepts';
import overviewConcept from 'concept-overview/concept';
import decVsImpConcept from 'concept-dec-vs-imp/concept';
import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'main' module" );

export default angular.module('main', [ root, users, concepts, overviewConcept,decVsImpConcept] ).name;




