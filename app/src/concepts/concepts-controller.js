/**
 * The controller for concepts
 * @constructor
 * @param $log
 */
function ConceptsController( $log ) {

  $log = $log.getInstance( "SessionController" );
  $log.debug( "instanceOf() ");

  var self = this;

}

export default [
    '$log',
    ConceptsController
  ];

