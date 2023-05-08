import Link from 'next/link'
import styles from '../src/styles/Botao.module.css'

interface BotaoProps {
    href?: string
    texto: string
    onClick?: (e: any) => void
}

export default function Botao(props: BotaoProps) {

    function renderizarBotao() {
        return (
            <button className={styles.botao}
                onClick={props.onClick}>
                {props.texto}
            </button>
        )
    }

    return props.href ? (
        <div>
            <Link href={props.href}>
                {renderizarBotao()}
            </Link>
        </div>
    ) : (
        <div>
            {renderizarBotao()}
        </div>
    )
}