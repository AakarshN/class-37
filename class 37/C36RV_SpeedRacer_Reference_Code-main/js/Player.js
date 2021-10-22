class Player{

  constructor(){
    this.name= null 
    this.index= null
    this.positionX= 0
    this.positionY= 0
  }

  addPlayer(){
    var playerIndex= "players/player"+ this.index
    if(this.index=== 1){
      this.positionX= width/2 -100
    }
    else{
      this.positionX= width/2+ 100
    }
    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.postionY,
    });
  }

  getCount(){
      var PlayerRef= database.ref('PlayerCount'); 
      PlayerRef.on("value", function(data){
          PlayerCount= data.val();
      });
  }

  updateCount(count){
      database.ref('/').update({
          PlayerCount : count 
       })
  }

  /*update(name){

      var playerIndex= "Player"+ PlayerCount 
      database.ref(playerIndex).set({
          Name :  name
       })

  } */


}