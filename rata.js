import Personaje from './personaje.js';
export default class Rata extends Personaje {
  constructor(scene, x, y, image, dialogos, dialogoDef) {
    super(scene, x, y, image, true, -60, -10, dialogos);
    this.name = 'Rata'    //nombre del sprite
    this.dialogoDef = dialogoDef;
    this.deformado = false;
    this.image.setScale(0.75);
  }   
  hablar(){     
    if(this.deformado) super.cambiaVida(-5,'mordisco');
    super.hablar()     
  }    
  deformar(){
    super.deformar('Rata D', this.dialogoDef)
    this.image.setScale(0.75);
    this.deformado = true;    
  }
}