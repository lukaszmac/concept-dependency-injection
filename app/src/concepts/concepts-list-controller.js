/**
 * The controller for the list of concepts
 * @constructor
 * @param $log
 */
function ConceptsListController( $log, $scope, $state) {

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

  // Define the logic for selecting a concept:
  $scope.selectConcept = selectConcept;

  /**
   * This selects the given concept.
   * @param concept The concept to select.
   */
  function selectConcept(concept)
  {
    // Go to the state defined by the concept:
    $state.go(concept.state || concept.name);
  }

}

export default ConceptsListController;