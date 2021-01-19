import Personaje from './personaje.js';
export default class Premio extends Personaje {
  constructor(scene, x, y, image, dialogos, dialogoDef) {
    super(scene, x, y, image, true, -60, -10, dialogos);
    this.name = 'Premio'    //nombre del sprite
    this.dialogoDef = dialogoDef;
    this.deformado = false;
  }   
  hablar(){     
    if(this.deformado) super.cambiaVida(-3,'autoengaño');
    super.hablar()     
  }    
  deformar(){
    super.deformar('Premio D', this.dialogoDef)
    this.deformado = true;    
  }
}