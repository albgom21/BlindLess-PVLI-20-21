export default class Barravida{
    constructor (scene, x, y,vida) {
        this.barra = new Phaser.GameObjects.Graphics(scene);
        this.x = x;
        this.y = y;
        this.value = vida;        
        this.p = 196 / 100;

        this.render();

        scene.add.existing(this.barra);
    }

    render () {
       if (this.value < 0)
        this.value = 0;
        
        this.barra.clear();

        //  Rectangulo negro
        this.barra.fillStyle(0x162521); // borde
        this.barra.fillRect(this.x, this.y, 200, 16);

        //  Vida
        if (this.value < 30){
            this.barra.fillStyle(0xa99d9d); //fondo rojizo
            this.barra.fillRect(this.x + 2, this.y + 2, 196, 12);
            this.barra.fillStyle(0xBF1A2F);  //vida roja     
        }              
        
        else  {
            this.barra.fillStyle(0x9da9a0); //fondo verdoso
            this.barra.fillRect(this.x + 2, this.y + 2, 196, 12);
            this.barra.fillStyle(0x51d58a); //vida verde
        } 

        const d = Math.floor(this.p * this.value);
        this.barra.fillRect(this.x + 2, this.y + 2, d, 12); //Rellena el rect de vida
    }
}