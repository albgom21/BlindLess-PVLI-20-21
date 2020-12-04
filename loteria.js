/*
*   La clase Lotería se encarga de crear números nuevos aleatorios,
*   añadirlos al array de los tickets acumulados hasta el momento
*   y mostrar en pantalla los tickets que se poseen.
*/

export default class Loteria extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,image) {
        super(scene,x,y,image);

         scene.add.existing(this);
         this.setInteractive();   

        // Estilo de las letras de los tickets de lotería.
         let style = { font: "26px Courier New", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        // Array de números representando los boletos obtenidos hasta el momento.
         this.nums = new Array();        
        // Booleano que comprobará si se ha ganado la lotería.
         this.ganar = false;
        // Texto que mostrará los boletos acumulados hasta el momento.
         this.txt = scene.add.text(x-400, y-400, '', style);
         this.txt.visible = true;
    }
    

    // Método que crea un número aleatorio redondeado que va de 100 a 1000.
     numRandom(){
         this.numTicket = Math.floor(Math.random() * (1000 - 100) + 100);
     }

    // Método que crea el número ganador con numRandom.
     crearGanador(){
        this.numGanador = this.numRandom();
     }
     
    // Método que crea un número aleatorio y lo guarda en el array de tickets.
     crearNumero(){
         this.numRandom();
         this.nums.push(this.numTicket);
         this.txt.text = this.nums;
     }

    // Método que escribe en pantalla los boletos actuales.
    // escribirBoletos(){
    //     this.txt.text = this.nums;
    //}

    // Método que activa/desactiva la interfaz en la que aparecen números de lotería.
     verNumeros(){
         this.txt.visible = !this.txt.visible;
     }
    
    // Método prototipo de la comprobación de ganar la lotería.
    // Se ejecutará al acabar el juego.
     ganador(){
         for(const n of this.nums){
            if (this.ganador === n) this.ganar = true;
         }
         //for (i = 0; i < this.nums.length; i++) 
         // La pantalla de fin de juego cambiará si ganar == true;
         // if (this.ganar) setPantallaFinal ( la que toque );
     }
}