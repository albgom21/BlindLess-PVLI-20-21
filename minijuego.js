import Player from './player.js'
import Platform from './platform.js';
import Seta from './seta.js';
import Coin from './coin.js';
import Spike from './spike.js';

export default class Minijuego extends Phaser.Scene {
  constructor() {
    super({ key: 'minijuego' });
    this.fin = false;
    this.stop = false;
    this.tiempoJuego = 45000; //45s
  }  
  
  create() {   
    this.cameras.main.fadeIn(500); 
    this.scene.pause('taberna2');
    this.add.image(640,360, 'fondo');    
    
    this.player = new Player(this, 640, 700);   
    this.setaUI =  this.add.image(1220,50, 'mui');
    this.setaUI.setVisible(false); 
   
    
    this.barrafondo = this.add.graphics({ x: 0, y: 0 });
    this.barrafondo.fillStyle(0xbe8a50); 
    this.barrafondo.fillRect(0, 0, 1280 , 5);

    this.barra = this.add.graphics({ x: 0, y: 0 });
    this.barra.fillStyle(0x6b3805);   

    new Coin(this,150,500);
    new Coin(this,950,600);
    new Coin(this,750,300);
    
    new Seta(this,50,705);

    new Platform(this, this.player, 275, 650);
    new Platform(this, this.player,  950, 450);
    new Platform(this, this.player,  950, 450);
    new Platform(this, this.player, 600, 300);
    new Platform(this, this.player,  230, 200);
    new Platform(this, this.player, 950, 200);
  
    
  this.anims.create({
    key: 'jump',
    frames: this.anims.generateFrameNumbers('character', { frames: [ 1, 2, 3, 4 ] }),
    frameRate: 12,
    repeat: 0
});

this.anims.create({
    key: 'idle',
    frames: this.anims.generateFrameNumbers('character', { frames: [ 6, 7, 8 ] }),
    frameRate: 5,
    repeat: -1
});

this.anims.create({
    key: 'walk',
    frames: this.anims.generateFrameNumbers('character', { frames: [ 12, 13, 14, 15, 16, 17] }),
    frameRate: 9,
    repeat: -1
});

  this.anims.create({
    key: 'c',
    frames: this.anims.generateFrameNumbers('coin', { frames: [ 0, 1, 2, 3, 4 ,5] }),
    frameRate: 8,
    repeat: -1
});
    this.timedEventPlatforms = this.time.addEvent({ delay: 2000, callback: this.platfoms, callbackScope: this, loop:true });
    this.timedEventFin = this.time.addEvent({ delay: this.tiempoJuego , callback: this.finJuego, callbackScope: this, loop:false });
    this.timedEventCoin = this.time.addEvent({ delay: 3500 , callback: this.spawnCoin, callbackScope: this, loop:true });

    this.pantallaFin = this.add.image(640,360, 'final').setInteractive();   
    this.pantallaFin.setVisible(false);     
    this.pantallaFin.on('pointerdown', () => {this.scene.resume('taberna2',{sumaVida:this.player.score}),this.scene.stop('minijuego')});
  }
  finJuego(){
    this.fin = true;   
  }
  spawnCoin(){
    new Coin(this, Phaser.Math.Between(50, 1150),Phaser.Math.Between(10, 650));  
  }
  platfoms(){
    let rndY = Phaser.Math.Between(110, 700);
    new Platform(this, this.player, 0, rndY);

    this.item = Phaser.Math.Between(1, 3);   
     
    if(this.item === 1){
      new Seta (this, -15, rndY-45);}
    else if(this.item === 2){
        new Spike (this, 0, rndY-45,this.player);}
    else {
      new Seta (this, Phaser.Math.Between(50, 1000) , 705);}         
  }   

  ui(){    
    if(this.player.setas===true){
      this.setaUI.setVisible(true);       
    }
    else{
      this.setaUI.setVisible(false); 
    }
  }

  update(){         
    if(this.timedEventFin)    {
      this.barra.fillRect(0, 0, 1280 * this.timedEventFin.getProgress(), 5);
    }     
    if(this.fin){      
      this.stop = true;
      this.timedEventFin.remove(false);     
      this.timedEventPlatforms.remove(false);     
      this.timedEventCoin.remove(false);  
      this.fin = false;
      this.pantallaFin.setVisible(true);        
      const monedas = this.player.score;     
      this.game.monedas = this.player.score;
      const imagen = this.pantallaFin.setDepth(1);
      if(monedas !== 1){
        this.texto = this.add.text(640,0, "Has conseguido " + monedas + " monedas que se convertirán en " + monedas + " puntos de vida \n                      al pasar de escena",
        { fontFamily: 'VT323',fontSize: '36px', color: '#281501' }).setDepth(2);
      }
      else{
        this.texto = this.add.text(640,0, "Has conseguido " + monedas + " moneda que se convertirá en " + monedas + " punto de vida \n                      al pasar de escena",
        { fontFamily: 'VT323',fontSize: '36px', color: '#281501' }).setDepth(2);
      }
     
      Phaser.Display.Align.In.Center(this.texto, imagen);
    }   
    
  }
}