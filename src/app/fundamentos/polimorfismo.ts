import TerminalUtil from "../util/termiinalUtil";
import Carro from "@/core/fundamentos/Carro";
import Ferrari from "@/core/fundamentos/Ferrari";
import Fusca from "@/core/fundamentos/Fusca";


export default async function polimorfismo() {
    TerminalUtil.titulo("Polimorfismo");

    const [tipoCarro] = await TerminalUtil.selecao("Marca de carro ?", ['Ferrarri', 'Fusca']);

    const carro: Carro = tipoCarro === 0 ? new Ferrari() : new Fusca();

    while (true) {
        TerminalUtil.limpar();
        TerminalUtil.exibirChaveValor(
            "Velocidade Atual", 
            `${carro.velocidadeAtual} Km/h`
            );

        TerminalUtil.exibirChaveValor(
            "Velocidade Maxima", 
            `${carro.velocidadeMaxima} Km/h`
            );

        const [opcao] =  await TerminalUtil.selecao("Escolha uma opção", ["Acelear", "Frear", "Sair"]);

        opcao === 0 ? carro.acelerar() : carro.frear();

        const continuar = await TerminalUtil.confirmacao("Deseja continuar?");
        if (!continuar) return;
    }
}