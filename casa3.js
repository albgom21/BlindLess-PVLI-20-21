import Collet from './collet.js';
import dialogos from './dialogos.js';

export default class Casa3 extends Phaser.Scene {
   constructor() {
    super({ key: 'casa3'});    
    this.pointScene = 0;
    this.menuActivado = false;   
    this.fin = new Array(1); // array con el número de personajes  
    this.key = 'casa3';    
  }
  init(datos){
    this.vidaMax = datos.vidaMax;
    this.datosInventario = datos.datosInventario;
  }

  create() { 
    this.musica = this.sound.add("musicacasa",{volume: 0.025,loop: true});
    this.musica.play();      
    this.cameras.main.fadeIn(1500); 
    this.scene.stop('mapa');
    this.nameScene = 'CASA';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'casa');         
    this.madame = new Collet(this, 500, 400, 'madamcuerpo', dialogos.mcCasa3, 0, false);
    this.ganarLoteria = false;

    // Botón del inventario.
    this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
    this.botonT.on('pointerdown', () => {  if(!this.menuActivado) this.scene.launch('inventario', {datosInventario: this.datosInventario}); })
    this.cameras.main.once('camerafadeoutcomplete', () => {
      this.musica.stop();
      if(this.vidaMax <= 0){     
       this.scene.launch('mapa',{antEscena:this.key,proxEscena:'taberna4muerto',nombreEscena:'TABERNA',
       vida:this.vidaMax,suma:0,resta:0, datosInventario: this.datosInventario});
      }
      else{
        this.numeroGanador = Math.floor(Math.random() * (100 - 10) + 10);        
      for(const i of this.datosInventario.nums) {
          if( this.numeroGanador === i){
            this.ganarLoteria = true;            
          }
      }
      if(this.ganarLoteria){
        this.scene.launch('mapa',{antEscena:this.key,proxEscena:'taberna4nomuertoloteria',nombreEscena:'TABERNA',
            vida:this.vidaMax,suma:0,resta:0, datosInventario: this.datosInventario, boletoganador: this.numeroGanador});
      }
      else {          
        this.scene.launch('mapa',{antEscena:this.key,proxEscena:'taberna4nomuertonoloteria',nombreEscena:'TABERNA',
        vida:this.vidaMax,suma:0,resta:0, datosInventario: this.datosInventario,boletoganador: this.numeroGanador});
      }
      }});
  }  
  finEscena(){    
    let a = true ;
    let i = 0;
    while(a && i < this.fin.length) {
      if (this.fin[i]) i++;
      else a = false;
    }
    if(a) { //Que hayan hablado todos los personajes de la escena
      a = false;
      let botonEscena = this.add.image(1175, 100, 'botonescena').setInteractive();    
        botonEscena.once('pointerdown', () => { this.paso = this.sound.add("pasarescena",{volume:1}); this.paso.play(); this.cameras.main.fadeOut(1500)});     
    }       
  }    
}