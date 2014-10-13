var TTTApp = angular.module('TTTApp', []);

TTTApp.controller('TTTController', function ($scope) {
$scope.resetButton = function(){
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
  $scope.movecounter = 0 ;
  // resets notification 
  $scope.notification = "";

};

  $scope.playerPicks = function(thisCell) {
    if (thisCell.status == "X" || thisCell.status == "O") {
      // This says that once a value is issued the cell cannot be clicked again
      return;
    }    
  else {  
    $scope.movecounter = $scope.movecounter + 1 ;
    console.log("Cell was: " + thisCell.status) ;
    if (($scope.movecounter % 2) == 1) {
      thisCell.status = "X" ;  
      thisCell.clickNumber = thisCell.clickNumber + 1;
    } else {
      thisCell.status = "O" ;
      thisCell.clickNumber= thisCell.clickNumber +1;
      console.log("Cell is now: " + thisCell.status) ;
    }
  } 

  // WINS!
  // for x
  if ($scope.cellList[0].status == "X" &&
      $scope.cellList[1].status == "X" &&
      $scope.cellList[2].status == "X") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!";
}
  if ($scope.cellList[3].status == "X" &&
      $scope.cellList[4].status == "X" &&
      $scope.cellList[5].status == "X") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!"; 
      }
  if ($scope.cellList[6].status == "X" &&
      $scope.cellList[7].status == "X" &&
      $scope.cellList[8].status == "X") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!";
  } 
  if ($scope.cellList[0].status == "X" &&
      $scope.cellList[3].status == "X" &&
      $scope.cellList[6].status == "X") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!";
      }   
  if ($scope.cellList[1].status == "X" &&
      $scope.cellList[4].status == "X" &&
      $scope.cellList[7].status == "X") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!";
  }   
  if ($scope.cellList[2].status == "X" &&
      $scope.cellList[5].status == "X" &&
      $scope.cellList[8].status == "X") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!";
  }
  if ($scope.cellList[0].status == "X" &&
      $scope.cellList[4].status == "X" &&
      $scope.cellList[8].status == "X") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!";
  }
  if ($scope.cellList[2].status == "X" &&
      $scope.cellList[4].status == "X" &&
      $scope.cellList[6].status == "X") {

      $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!";
  }
  // for o
    if ($scope.cellList[0].status == "O" &&
      $scope.cellList[1].status == "O" &&
      $scope.cellList[2].status == "O") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!";
}
  if ($scope.cellList[3].status == "O" &&
      $scope.cellList[4].status == "O" &&
      $scope.cellList[5].status == "O") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!"; 
      }
  if ($scope.cellList[6].status == "O" &&
      $scope.cellList[7].status == "O" &&
      $scope.cellList[8].status == "O") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!";
  } 
  if ($scope.cellList[0].status == "O" &&
      $scope.cellList[3].status == "O" &&
      $scope.cellList[6].status == "O") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!";
      }   
  if ($scope.cellList[1].status == "O" &&
      $scope.cellList[4].status == "O" &&
      $scope.cellList[7].status == "O") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!";
  }   
  if ($scope.cellList[2].status == "O" &&
      $scope.cellList[5].status == "O" &&
      $scope.cellList[8].status == "O") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!";
  }
  if ($scope.cellList[0].status == "O" &&
      $scope.cellList[4].status == "O" &&
      $scope.cellList[8].status == "O") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!";
  }
  if ($scope.cellList[2].status == "O" &&
      $scope.cellList[4].status == "O" &&
      $scope.cellList[6].status == "O") {

        $scope.notification = "Put on your Sunday best kids. We're going to Sears to celebrate this triumphant win!";
  }

  // cat's game 

 if ($scope.movecounter == 9) {

      $scope.notification = "Aw nuts. You tied!!! Oh well, us Bradys have to stick together, or we will fall apart.";    
 }
  

};
$scope.resetButton();
});