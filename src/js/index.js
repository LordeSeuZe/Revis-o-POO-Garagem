class Veiculo {
//Atributos privados
    #marca 
    #modelo
    constructor() {       
    }
//Metodos, gets e sets
    getMarca() {
        return this.#marca
    }
    setMarca(marca){
        this.#marca = marca
    }
    getModelo(){
        return this.#modelo
    }
    setModelo(modelo){
        this.#modelo = modelo 
    }
    mover(){
       return `O veículo está se movendo`
    }
    exibirInfo() {
        return `O seu veículo é da marca ${this.#marca} e modelo ${this.#modelo}`
    }
}

//Filhinhos
class Carro extends Veiculo {
//Atributo(s) privado(s)
    #portas
//Metodo(s), get(s) e set(s)
    getPortas(){
        return this.#portas
    }
    setPortas(portas){
        this.#portas = portas
    }
//Sobrescrito
    mover() {
        return `O carro está dirigindo na estrada`
    }


}

class Moto extends Veiculo{
//Atributo(s) privado(s)   
    #cilindradas
//Metodo(s), get(s) e set(s)
    getCilindradas(){
        return this.#cilindradas
    }
    setCilindradas(cilindradas){
        this.#cilindradas = cilindradas    
    }
//Sobrescrito
    mover() {
        return `A moto está acelerando`
    }
}

//teste veiculo
const carrinho = new Veiculo()

carrinho.setMarca("Ford")
carrinho.setModelo("Mustang")

const move = document.getElementById("mover")
move.innerText = carrinho.mover()

const exibir = document.getElementById("exibir")
exibir.innerText = carrinho.exibirInfo()

//teste carro
const carro = new Carro();
carro.setMarca("Toyota");
carro.setModelo("Corola");
carro.setPortas(4);

const moveCarro = document.getElementById("moverCarro")
moveCarro.innerText = carro.mover()

const exibirCarro = document.getElementById("exibirCarro")
exibirCarro.innerText = carro.exibirInfo()

//teste moto
const moto = new Moto();
moto.setMarca("Honda");
moto.setModelo("CG 160 Titan");
moto.setCilindradas(162);

const moverMoto = document.getElementById("moverMoto")
moverMoto.innerText = moto.mover()

const exibirMoto = document.getElementById("exibirMoto")
exibirMoto.innerText = moto.exibirInfo()