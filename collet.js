import Personaje from './personaje.js';
export default class Collet extends Personaje {
  constructor(scene, x, y, image, dialogos, fin) {
    super(scene, x, y, image, false, -60, -50, dialogos, fin);
    this.name = 'Collet'       //nombre del sprite y personaje
    this.scene = scene;
  }   
  hablar(){    
    super.hablar()
    //this.scene.fin[0] = true;
  }    
  deformar(){
    super.deformar()
    this.setTexture('collet');
  }
  finHablar(fin){
    fin = true;
  }
}