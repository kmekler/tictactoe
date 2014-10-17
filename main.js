var TTTApp = angular.module('TTTApp', ['firebase']);

TTTApp.controller('TTTController', function($scope,$firebase) {

$scope.remoteGameContainer = 
$firebase(new Firebase("https://bradytictactoe.firebaseio.com")) ;

// Variables and objects:
  $scope.cellList = [ 

  {status: "0", image: [{name: 'marcia', src: 'marcia_new.png'}], num: 1}, 
  {status: "1", image: [{name: 'carol', src: 'carol_new.png'}], num: 2}, 
  {status: "2", image: [{name: 'greg', src: 'greg_new.png'}], num: 3}, 
  {status: "3", image: [{name: 'jan', src: 'jan_new.png'}], num: 4}, 
  {status: "4", image: [{name: 'alice', src: 'alice_new.png'}], num: 5}, 
  {status: "5", image: [{name: 'peter', src: 'peter_new.png'}], num: 6}, 
  {status: "6", image: [{name: 'cindy', src: 'cindy_new.png'}], num: 7}, 
  {status: "7", image: [{name: 'mike', src: 'mike_new.png'}], num: 8}, 
  {status: "8", image: [{name: 'bobby', src: 'bobby_new.png'}], num: 9}
  ]  ;

  // resets moves
  $scope.moveCounter = 0;

  // resets notification 
  $scope.notification = "";


// Special Sauce

$scope.gameContainer = {
  cellListArray: $scope.cellList, 
  moveCount: $scope.moveCounter 
};

// Angular stuff here 

$scope.remoteGameContainer.$bind($scope, "gameContainer");

$scope.$watch('gameContainer', function(){
  console.log('gameContainer changed!');
});

// Functions start here 
// This says that once a value is issued the cell cannot be clicked again
  $scope.playerPicks = function(thisCell){
    if (thisCell.status == "X" || thisCell.status == "O"){
      return;
    }    
  else {  
    $scope.gameContainer.moveCount ++;
    console.log("Cell was: " + thisCell.status);
    if (($scope.gameContainer.moveCount % 2) == 1){
      thisCell.status = "X"; 
      determineWin("X"); 
    } else {
      thisCell.status = "O";
      determineWin("O"); 
    }
    thisCell.clickNumber ++;
    console.log("Cell is now: " + thisCell.status);
  } 
};
// WINS!
function determineWin(xo){
  if ($scope.gameContainer.moveCount <= 4){
    return;
  } 
  if ($scope.gameContainer.cellListArray[0].status == xo &&
      $scope.gameContainer.cellListArray[1].status == xo &&
      $scope.gameContainer.cellListArray[2].status == xo){

        $scope.notification = "Put on your Sunday best, kids. We're going to Sears to celebrate this triumphant win!";
  }
  if ($scope.gameContainer.cellListArray[3].status == xo &&
      $scope.gameContainer.cellListArray[4].status == xo &&
      $scope.gameContainer.cellListArray[5].status == xo){

        $scope.notification = "Put on your Sunday best, kids. We're going to Sears to celebrate this triumphant win!"; 
      }
  if ($scope.gameContainer.cellListArray[6].status == xo &&
      $scope.gameContainer.cellListArray[7].status == xo &&
      $scope.gameContainer.cellListArray[8].status == xo){

        $scope.notification = "Put on your Sunday best, kids. We're going to Sears to celebrate this triumphant win!";
  } 
  if ($scope.gameContainer.cellListArray[0].status == xo &&
      $scope.gameContainer.cellListArray[3].status == xo &&
      $scope.gameContainer.cellListArray[6].status == xo){

        $scope.notification = "Put on your Sunday best, kids. We're going to Sears to celebrate this triumphant win!";
      }   
  if ($scope.gameContainer.cellListArray[1].status == xo &&
      $scope.gameContainer.cellListArray[4].status == xo &&
      $scope.gameContainer.cellListArray[7].status == xo){

        $scope.notification = "Put on your Sunday best, kids. We're going to Sears to celebrate this triumphant win!";
  }   
  if ($scope.gameContainer.cellListArray[2].status == xo &&
      $scope.gameContainer.cellListArray[5].status == xo &&
      $scope.gameContainer.cellListArray[8].status == xo){

        $scope.notification = "Put on your Sunday best, kids. We're going to Sears to celebrate this triumphant win!";
  }
  if ($scope.gameContainer.cellListArray[0].status == xo &&
      $scope.gameContainer.cellListArray[4].status == xo &&
      $scope.gameContainer.cellListArray[8].status == xo){

        $scope.notification = "Put on your Sunday best, kids. We're going to Sears to celebrate this triumphant win!";
  }
  if ($scope.gameContainer.cellListArray[2].status == xo &&
      $scope.gameContainer.cellListArray[4].status == xo &&
      $scope.gameContainer.cellListArray[6].status == xo){

      $scope.notification = "Put on your Sunday best, kids. We're going to Sears to celebrate this triumphant win!";
  }
  // this will establish a cat's game 
 if ($scope.gameContainer.moveCount == 9 && $scope.notification === ""){
      $scope.notification = "Aw nuts. You tied!!! Oh well, us Bradys have to stick together, or we will fall apart.";    
  }
};

$scope.resetButton = function(){
  $scope.gameContainer.cellListArray = [ 

  {status: "0", image: [{name: 'marcia', src: 'marcia_new.png'}], num: 1}, 
  {status: "1", image: [{name: 'carol', src: 'carol_new.png'}], num: 2}, 
  {status: "2", image: [{name: 'greg', src: 'greg_new.png'}], num: 3}, 
  {status: "3", image: [{name: 'jan', src: 'jan_new.png'}], num: 4}, 
  {status: "4", image: [{name: 'alice', src: 'alice_new.png'}], num: 5}, 
  {status: "5", image: [{name: 'peter', src: 'peter_new.png'}], num: 6}, 
  {status: "6", image: [{name: 'cindy', src: 'cindy_new.png'}], num: 7}, 
  {status: "7", image: [{name: 'mike', src: 'mike_new.png'}], num: 8}, 
  {status: "8", image: [{name: 'bobby', src: 'bobby_new.png'}], num: 9}
  ];

  // resets moves
  $scope.gameContainer.moveCount = 0;

  // resets notification 
  $scope.notification = "";

};

  $scope.resetButton();

});