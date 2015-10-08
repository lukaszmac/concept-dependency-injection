/**
 * The controller for the list of concepts
 * @constructor
 * @param $log
 */
function ConceptsListController( $log, $scope ) {

  $log.debug( "Concepts List Controller");

  var self = this;

  // Define the concepts that we have:
  $scope.concepts = [
    { name: 'Concept 1', icon:'supervisor_account' },
    { name: 'Concept 2', icon:'swap_vertical_circle' },
    { name: 'Concept 3', icon:'tab' }
  ];

  // Select the first concept:
  $scope.selected = $scope.concepts[0];

}

export default ConceptsListController;