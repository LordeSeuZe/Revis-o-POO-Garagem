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
    setMarca(marca) {
        this.#marca = marca
    }
    getModelo() {
        return this.#modelo
    }
    setModelo(modelo) {
        this.#modelo = modelo
    }
    mover() {
        return `O veículo está se movendo.`
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
    getPortas() {
        return this.#portas
    }
    setPortas(portas) {
        this.#portas = portas
    }
    //Sobrescrito
    mover() {
        return `O carro está dirigindo na estrada.`
    }


}

class Moto extends Veiculo {
    //Atributo(s) privado(s)   
    #cilindradas
    //Metodo(s), get(s) e set(s)
    getCilindradas() {
        return this.#cilindradas
    }
    setCilindradas(cilindradas) {
        this.#cilindradas = cilindradas
    }
    //Sobrescrito
    mover() {
        return `A moto está acelerando.`
    }
}
//Garagem
const veiculos = []

//Valores
const pPortas = document.getElementById("pPortas");//Partição Portas
const pCilindradas = document.getElementById("pCilindradas");//Partição
const marca = document.getElementById("marca");
const modelo = document.getElementById("modelo");
const portas = document.getElementById("portas");
const cilindradas = document.getElementById("cilindradas")

//Tipo do Veículo
const tipo = document.getElementById("tipo")
tipo.addEventListener("change", function () {
    if (tipo.value === "carro") {
        pPortas.style.display = "block";
        pCilindradas.style.display = "none";
    } else {
        pCilindradas.style.display = "block";
        pPortas.style.display = "none";
    }
})

//Botões
const botaoCadastrar = document.getElementById("cadastrar")
botaoCadastrar.addEventListener("click", function () {
    if (marca.value === "") {
        alert("Preencha os Campo: Marca");
        return;
    } else if (modelo.value === "") {
        alert("Preencha o Campo: Modelo");
        return;
    }
    if (tipo.value === "carro") {
        if (portas.value !== "") {
            const carro = new Carro()
            carro.setMarca(marca.value);
            carro.setModelo(modelo.value);
            carro.setPortas(portas.value);
            veiculos.push(carro);
        } else {
            alert("Preencha o Campo: Portas")
            return;
        }

    } else {
        if (cilindradas.value !== "") {
            const moto = new Moto();
            moto.setMarca(marca.value);
            moto.setModelo(modelo.value);
            moto.setCilindradas(cilindradas.value);
            veiculos.push(moto);
        } else {
            alert("Preencha o campo: Cilindradas");
            return;
        }
    }
    marca.value = "";
    modelo.value = "";
    portas.value = "";
    cilindradas.value = "";
});

const botaoListar = document.getElementById("listar");
const lista = document.getElementById("lista")
const tituloL = document.getElementById("tituloLista")
botaoListar.addEventListener("click", function () {
    lista.innerHTML = "";
    veiculos.forEach(function (veiculo) {
        lista.innerHTML += `<p>${veiculo.exibirInfo()}</p>`
    });
    tituloL.style.display = "block";
});

const botaoMover = document.getElementById("mover");
const listaMover = document.getElementById("listaMover");
const tituloM = document.getElementById("tituloMover");
botaoMover.addEventListener("click", function () {
    listaMover.innerHTML = "";
    veiculos.forEach(function (veiculo) {
        if (veiculo instanceof Carro) {
            listaMover.innerHTML += `<p>Carro - ${veiculo.mover()}</p>`
        } else {
            listaMover.innerHTML += `<p>Moto - ${veiculo.mover()}</p>`
        }
    });
    tituloM.style.display = "block";
});

