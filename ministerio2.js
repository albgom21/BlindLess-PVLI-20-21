import dialogos from './dialogos.js';
import Oficial from './oficial.js';
export default class Ministerio2 extends Phaser.Scene {
  
    constructor() {
      super({ key: 'ministerio2'});     
      this.menuActivado = false;       
      this.fin = new Array(1); // array con el numero de personajes con los que hablar
      this.key = 'ministerio2';    
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
      this.add.image(200, 400, 'gobernantecuerpo');
      // debería ser la imagen del Oficial, no la del gobernante.
      this.oficial = new Oficial(this, 1000, 400, 'gobernantecuerpo', dialogos.ministerio2, 0);

      // Botón del inventario.
      this.botonT = this.add.image(60, 60, 'botonTicket').setInteractive();
      if (!this.menuActivado) this.botonT.on('pointerdown', () => this.scene.launch('inventario', {datosInventario: this.datosInventario}));
      
      this.cameras.main.once('camerafadeoutcomplete', () => { //FALTA 
        this.scene.launch('mapa',{antEscena:this.key, proxEscena:'calabozo', nombreEscena:'CALABOZO',
         vida:this.vidaMax, suma:0, resta:0, datosInventario: this.datosInventario}) 
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
        botonEscena.once('pointerdown', () => {this.cameras.main.fadeOut(1500)});
    }      
}
}