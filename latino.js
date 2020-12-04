import Personaje from './personaje.js';
export default class Latino extends Personaje {
  constructor(scene,x,y,image) {
    super(scene,x,y,image);   
    this.name = 'latino'    //nombre del sprite
  }   
  hablar(){    
    super.hablar()
    alert('LATINO');      
  }    
  deformar(){
    super.deformar()
    this.setTexture('latino');
  }
}