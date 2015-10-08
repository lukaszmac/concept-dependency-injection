/**
 * The root state controller.
 * @constructor
 * @param $log
 */
function RootController( $log ) {

  $log = $log.getInstance( "SessionController" );
  $log.debug( "instanceOf() ");

  var self = this;

}

export default [
    '$log',
    RootController
  ];

