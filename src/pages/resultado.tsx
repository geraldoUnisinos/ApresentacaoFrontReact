import Estatistica from 'components/Estatistica'
import styles from '../../src/styles/Resultado.module.css'
import stylesButton from '../styles/Botao.module.css'
import { useRouter } from 'next/router'

const BASE_URL = 'http://localhost:3000/api'

export default function resultado() {

    const router = useRouter()

    const total = router.query.total ? +router.query.total : ""
    const certas = router.query.certas ? +router.query.certas : ""
    const percentual = Math.round((+certas / +total) * 100)

    function retornar() {
        router.push({
            pathname: "/"
        })
    }
    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Estatistica texto="Perguntas" valor={total}></Estatistica>
                <Estatistica texto="Certas" valor={certas}></Estatistica>
                <Estatistica texto="Percentual" valor={`${percentual}%`}></Estatistica>
            </div>
            <div>
                <button className={stylesButton.botao} onClick={retornar}>Retornar ao Questionário</button>
            </div>
        </div>
    )
}