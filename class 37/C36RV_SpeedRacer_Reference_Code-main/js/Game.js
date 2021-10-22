class Game{

  constructor(){

  }

  getState(){
      var gameRef= database.ref('Gamestate'); 
      gameRef.on("value", function(data){
          Gamestate= data.val();
      });
  }

  updateState(state){
      database.ref('/').update({
          Gamestate : state
       })
  }

  start(){


      player= new Player();
      player.getCount();
      form= new Form();
      form.display();
      

  }
}