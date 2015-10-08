import root from 'root/root';
import users from 'users/Users';
import concepts from 'concepts/concepts';
import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
    $log = $log.getInstance( "BOOTSTRAP" );
    $log.debug( "Configuring 'main' module" );

export default angular.module('main', [ root, users, concepts] ).name;




