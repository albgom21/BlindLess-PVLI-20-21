export default class Inventario extends Phaser.Scene{
    constructor(){
         super({ key: "inventario" });
    }
    
    init(datos){
        this.datosInventario = datos.datosInventario;
    }
    
    create(){
        this.add.image(640, 360, 'inventario');
        this.add.text(750, 130, this.datosInventario.coleccionables + "/10", {fontFamily: 'VT323', fontSize: '102px', color: '#4B3621' });
        this.hola = this.add.image(60, 60, 'botonTicket').setInteractive();
        for (let i = 1; i <= this.datosInventario.nums.length; i++){
            this.add.image(323 * i, 485, 'loteria');
            this.add.text((323 * i + 10), 465,  this.datosInventario.nums[i - 1], {fontFamily: 'VT323', fontSize: '40px', color: '#4B3621' });
            this.add.text((323 * i - 40), 465,  this.datosInventario.fijo, {fontFamily: 'VT323', fontSize: '40px', color: '#4B3621' });
        }
        this.sonidoInventario = this.sound.add("salirinventario",{volume: 0.5});
        this.sonidoInventario.play();
        this.hola.on('pointerdown', () => this.scene.stop('inventario'));
    }
}