import Carro from './Carro'

export default class Ferrari implements Carro{
    constructor(
        public readonly velocidadeMaxima: number = 324,
        public _velocidadeAtual: number = 0
    ){}

    acelerar(): void {
     this._velocidadeAtual = Math.min(this._velocidadeAtual + 20, this.velocidadeMaxima)
    }

    frear(): void {
        this._velocidadeAtual = Math.max(this._velocidadeAtual - 20, 0)
    }

    get velocidadeAtual(): number {
        return this._velocidadeAtual
    }
}
