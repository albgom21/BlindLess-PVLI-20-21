import Personaje from './personaje.js';
export default class Gafas extends Personaje {
  constructor(scene, x, y, image, dialogos, dialogoDef) {
    super(scene, x, y, image, true, -60, -10, dialogos);
    this.name = 'Bebida'    //nombre del sprite
    this.dialogoDef = dialogoDef;
    this.deformado = false;
  }   
  hablar(){     
    if(this.deformado) super.cambiaVida(-20,'que te has envenenado');
    super.hablar()     
  }    
  deformar(){
    super.deformar('Veneno', this.dialogoDef)
    this.deformado = true;    
  }
}