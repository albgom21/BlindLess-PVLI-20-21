import Personaje from './personaje.js';
export default class Vaso extends Personaje {
  constructor(scene, x, y, image, dialogos, dialogoDef) {
    super(scene, x, y, image, true, -60, -10, dialogos);
    this.name = 'Vaso'    //nombre del sprite
    this.dialogoDef = dialogoDef;
    this.deformado = false;
  }   
  hablar(){     
    if(this.deformado) super.cambiaVida(-3,'ser un borracho');
    super.hablar()     
  }    
  deformar(){
    super.deformar('Vaso D', this.dialogoDef)
    this.deformado = true;    
  }
}