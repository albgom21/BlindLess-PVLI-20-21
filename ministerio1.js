import dialogos from './dialogos.js';
import Gobernante from './gobernante.js';
export default class Ministerio1 extends Phaser.Scene {
  
    constructor() {
      super({ key: 'ministerio1'});     
      this.menuActivado = false;       
      this.fin = new Array(1); // array con el numero de personajes con los que hablar
      this.key = 'ministerio1';    
      this.pointScene = 0;
    } 
  
    init(datos){
      this.vidaMax = datos.vidaMax;
      this.datosInventario = datos.datosInventario;
    }
    
    create() {  
      this.cameras.main.fadeIn(1500); 
      this.scene.stop('mapa');
      this.nameScene = 'MINISTERIO';    
      this.add.image(640, 360, 'fondoShakeDanyo'); 
      this.add.image(640, 360, 'ministerio');  
      this.gobernante = new Gobernante(this, 300, 450, 'gobernantecuerpo', dialogos.dMinisterio1, 0);
      
      // Botón del inventario.
      this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
      this.botonT.on('pointerdown', () => {  if(!this.menuActivado) this.scene.launch('inventario', {datosInventario: this.datosInventario}); }) 

      this.cameras.main.once('camerafadeoutcomplete', () => { //FALTA 
        if (this.pointScene > 0) this.scene.launch('mapa', {antEscena: this.key, proxEscena: 'casa2', nombreEscena:'CASA',
         vida:this.vidaMax, suma: 0, resta: 0, datosInventario : this.datosInventario});

        else this.scene.launch('mapa',{antEscena:this.key, proxEscena:'calabozo', nombreEscena:'CALABOZO',
         vida:this.vidaMax, suma: 0, resta: 0, datosInventario : this.datosInventario});
    });
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