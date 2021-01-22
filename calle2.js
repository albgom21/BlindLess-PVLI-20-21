import Vieja from "./vieja.js";
import LaLunares from "./lalunares.js";
import dialogos from './dialogos.js';

export default class Calle2 extends Phaser.Scene {  
    constructor() {
      super({ key: "calle2" });  
      this.pointScene = 0;
      this.menuActivado = false;    
      this.fin = new Array(2);
      this.key = 'calle2';
    }
  
  init(datos){
    this.vidaMax = datos.vidaMax;
    this.datosInventario = datos.datosInventario;
  }
    
  create(){
    this.musica = this.sound.add("calle",{volume: 0.5,loop: true});
    this.musica.play();
    this.cameras.main.fadeIn(1500);
    this.scene.stop('mapa');
    this.nameScene = 'CALLE';
    this.add.image(640, 360, 'fondoShakeDanyo'); 
    this.add.image(640, 360, 'calle');  
    this.vieja = new Vieja(this, 400, 400, 'viejacuerpo', dialogos.dVieja, 0, true);

    
    // Botón del inventario.
    this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
    this.botonT.on('pointerdown', () => {  if(!this.menuActivado) this.scene.launch('inventario', {datosInventario: this.datosInventario}); }) 
    
  
     
    this.cameras.main.once('camerafadeoutcomplete', () => {
        if(this.pointScene === 0) {
            this.musica.stop();
            this.scene.launch('mapa',{antEscena:this.key,proxEscena:'calle3',nombreEscena:'CALLE',
            vida:this.vidaMax,suma:2,resta:11, datosInventario: this.datosInventario});
        }
        else {
           this.musica.stop();
           this.scene.launch('mapa',{antEscena:this.key,proxEscena:'casa3',nombreEscena:'CASA',
           vida:this.vidaMax,suma:4,resta:11, datosInventario: this.datosInventario}); // Falta poner daños y sanacion
        } 
    });
}

  aparece(){     
    if(this.pointScene === 0){
        this.laLunares = new LaLunares(this, 700, 400, 'lalunarescuerpo', dialogos.dLunares, 1);
        this.laLunares.image.x = 800;
        this.laLunares.image.alpha = 0;
        this.tweens.add({
          targets: this.laLunares.image,
          duration: 1000,
          x: 700,
          alpha: 1,
          ease: 'Linear'
      })
    }
    else
        this.fin[1] = true;
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
        botonEscena.once('pointerdown', () => {this.paso = this.sound.add("pasarescena",{volume:1}); this.paso.play();this.cameras.main.fadeOut(1500)});      
    }      
   }
}