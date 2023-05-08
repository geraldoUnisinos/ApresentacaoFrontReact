import questoes from "../bancoDeQuestoes"

export default function carregaQuestao (req: any, res: any) {
    const idSelecionado = +req.query.id

    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

    if(unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        const obj = questaoSelecionada.converterParaObjeto()
        res.status(200).json(obj)
    } else {
        res.status(200).json({resposta: "ID não encontrado"})
    }
}