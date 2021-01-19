import Personaje from './personaje.js';
export default class LibroMax extends Personaje {
  constructor(scene, x, y, image, dialogos, dialogoDef) {
    super(scene, x, y, image, true, -60, -10, dialogos);
    this.name = 'Libro Max'    //nombre del sprite
    this.dialogoDef = dialogoDef;
    this.deformado = false;
  }   
  hablar(){     
    if(this.deformado) super.cambiaVida(1,'darte cuenta del engaño');
    super.hablar()     
  }    
  deformar(){
    super.deformar('Libro Max D', this.dialogoDef)
    this.deformado = true;    
  }
}