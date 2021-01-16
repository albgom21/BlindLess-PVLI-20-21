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
    init(datos) {
      this.vidaMax = datos.vidaMax;
    }
    create() {  
      this.cameras.main.fadeIn(1500); 
      this.scene.stop('mapa');
      this.nameScene = 'MINISTERIO';    
      this.add.image(640, 360, 'fondoShakeDanyo'); 
      this.add.image(640, 360, 'ministerio');  
      this.gobernante = new Gobernante(this, 300, 450, 'gobernantecuerpo', dialogos.dMinisterio1, 0);

      this.cameras.main.once('camerafadeoutcomplete', () => { //FALTA 
        this.scene.launch('mapa',{antEscena:this.key, proxEscena:'taberna1', nombreEscena:'TABERNA', vida:this.vidaMax, suma:10, resta:7}) 
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