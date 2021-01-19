import Personaje from './personaje.js';
export default class Libros extends Personaje {
  constructor(scene, x, y, image, dialogos, dialogoDef) {
    super(scene, x, y, image, true, -60, -10, dialogos);
    this.name = 'Libros'    //nombre del sprite
    this.dialogoDef = dialogoDef;
    this.deformado = false;
  }   
  hablar(){     
    if(this.deformado) super.cambiaVida(-5,'afrontar la realidad');
    super.hablar()     
  }    
  deformar(){
    super.deformar('Libros D', this.dialogoDef)
    this.deformado = true;    
  }
}