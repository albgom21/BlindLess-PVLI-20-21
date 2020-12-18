import Personaje from './personaje.js';
export default class Gafas extends Personaje {
  constructor(scene, x, y, image, dialogos, dialogoDef) {
    super(scene, x, y, image, true, -60, -10, dialogos);
    this.name = 'Gafas'    //nombre del sprite
    this.dialogoDef = dialogoDef;
  }   
  hablar(){  
    super.cambiaVida(20,'pena por no ver');
    super.hablar() 
  }    
  deformar(){
    super.deformar('Gafas D', this.dialogoDef)
  }
}