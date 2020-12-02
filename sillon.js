import MyObject from './myobject.js'

export default class Sillon extends MyObject {
  constructor(scene,x,y) {
    super(scene,x,y,'sillon'); 
    this.text = 'hola soy un sillon';
    
  }   
  hablar(){     
    //super.hablar()
    alert(this.text);     
    this.menuFalse(); 
  }    
  deformar(){
    this.setTexture('max');
    this.menuFalse();
  }
}