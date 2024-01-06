import TerminalUtil from "../util/termiinalUtil";

export default async function polimorfismo() {
    TerminalUtil.titulo("Polimorfismo");

    const resposta = await TerminalUtil.selecao("Marca de carro ?", ['Ferrarri', 'Fusca']);

    while (true) {
        TerminalUtil.limpar();
        const continuar = await TerminalUtil.confirmacao("Deseja continuar?");
        if (!continuar) return;
    }
}