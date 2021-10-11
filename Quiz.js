class Quiz {
  constructor(){}

getState(){
  var gameStateRef =  database.red('gameState');
  gameStateRef.on("value",function(data){
gameState = data.val();
  })
}


update(state){
  database.ref('/').update({
    gameState:state
  })
}



   start(){
    
  
      question = new Question()
      question.display();
    
  }

  
}
