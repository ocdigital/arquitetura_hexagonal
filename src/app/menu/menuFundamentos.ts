import TerminalUtil from "@/app/util/termiinalUtil";
import polimorfismo from "../fundamentos/polimorfismo";

export default async function menuFundamentos() {
    TerminalUtil.titulo('Fundamentos')

    const [indice] = await TerminalUtil.menu(['Polimorfismo', 'Voltar'])

    switch (indice) {
        case 0: await polimorfismo(); 
        break
        case 1: return
    }

    await menuFundamentos()
}