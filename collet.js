import Personaje from './personaje.js';
export default class Collet extends Personaje {
  constructor(scene, x, y, image, dialogos, fin,aparece) {
    super(scene, x, y, image, false, -60, -50, dialogos, fin,aparece);
    this.name = 'Collet'       //nombre del sprite y personaje
    this.scene = scene;
  }   
  hablar(){    
    super.hablar();   
  }      
}