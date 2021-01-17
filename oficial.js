import Personaje from './personaje.js';
export default class Oficial extends Personaje {
  constructor(scene, x, y, image, dialogos, fin, aparece) {
    super(scene, x, y, image, false, -60, -50, dialogos, fin,aparece);
    this.name = 'Oficial'       //nombre del sprite y personaje
    this.scene = scene;
  }   
  hablar(){    
    super.hablar()
    //this.scene.fin[0] = true;
  }   
}