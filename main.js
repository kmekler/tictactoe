var TTTApp = angular.module('TTTApp', []);

TTTApp.controller('TTTController', function ($scope) {

  $scope.cellList = [

  {status: "A", image: [{name: 'marcia', src: 'marcia_new.png'}], num: 1}, 

  {status: "B", image: [{name: 'carol', src: 'carol_new.png'}], num: 2}, 
  {status: "C", image: [{name: 'greg', src: 'greg_new.png'}], num: 3}, 
  {status: "D", image: [{name: 'jan', src: 'jan_new.png'}], num: 4}, 
  {status: "E", image: [{name: 'alice', src: 'alice_new.png'}], num: 5}, 
  {status: "F", image: [{name: 'peter', src: 'peter_new.png'}], num: 6}, 
  {status: "G", image: [{name: 'cindy', src: 'cindy_new.png'}], num: 7}, 
  {status: "H", image: [{name: 'mike', src: 'mike_new.png'}], num: 8}, 
  {status: "I", image: [{name: 'bobby', src: 'bobby_new.png'}], num: 9}
  ]  ;

  $scope.movecounter = 0 ;

  $scope.playerPicks = function(thisCell) {
    $scope.movecounter = $scope.movecounter + 1 ;
    console.log("Cell was: " + thisCell.status) ;
    if (($scope.movecounter % 2) == 1) {
      thisCell.status = "X" ;  
    } else {
      thisCell.status = "O" ;
    } 
    console.log("Cell is now: " + thisCell.status) ;
  } ;


}) ;