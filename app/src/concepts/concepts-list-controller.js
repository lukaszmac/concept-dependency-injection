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
    { name: 'Overview', icon:'binoculars' },
    { name: 'Declarative vs Imperative', icon:'random' },
    { name: 'Concept 3', icon:'tab' }
  ];

  // Select the first concept:
  $scope.selected = $scope.concepts[0];

}

export default ConceptsListController;