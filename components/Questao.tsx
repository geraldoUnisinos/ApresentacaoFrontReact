import styles from '../src/styles/Questao.module.css'
import QuestaoModel from "model/questao";
import Enunciado from './Enunciado';
import Resposta from './Resposta';
import Temporizador from './Temporizador';

const letras = [
    { valor: "A", cor: "#F2C866" },  
    { valor: "B", cor: "#F266BA" },  
    { valor: "C", cor: "#85D4F2" },  
    { valor: "D", cor: "#BCE596" }  
]

interface QuestaoProps {
    valor: QuestaoModel
    tempoPraResposta?: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    function redenreizarRespostas() {
        return questao.respostas.map((resp, i) => {
            return (
                <Resposta
                    key={`${questao.id}-${i}`}
                    valor={resp}
                    indice={i}
                    letra={letras[i].valor}
                    corFundoLetra={letras[i].cor}
                    respostaFornecida={props.respostaFornecida}
                ></Resposta>
            )
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado}></Enunciado>
            <Temporizador key={questao.id} duracao={props.tempoPraResposta ?? 10} tempoEsgotado={props.tempoEsgotado}></Temporizador>
            {redenreizarRespostas()}
        </div>
    )
}