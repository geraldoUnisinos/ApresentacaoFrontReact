import embaralhar from "functions/arrays"
import bancoDeQuestoes from "../bancoDeQuestoes"

export default (req: any, res: any) => {
    const ids = bancoDeQuestoes.map(q => q.id)
    res.status(200).json(embaralhar(ids))
}