import styles from './Footer.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

function Footer() {
    return(
        <>
        <div className={` d-flex justify-content-evenly align-items-center  ${styles.containerFooter}`}>
            <div className={styles.textos}>
                <h2 className={styles.conhecerEspaço}>
                Venha conhecer meu espaço!
                </h2>
                <p className={styles.endereço}>
                Rua Vilmar Sales, 502, Serraria, São José
                </p>
                
            <div className={styles.divHorarios}>
                <p className={styles.horarioFuncionamento}>
                    Horário de Funcionamento
                </p>
                <p className={styles.diasFuncionamento}>
                    Ter a Sex, das às 18h <br /> Sáb das 9h às 14h
                </p>
                <div>
                <img src="./src/assets/images/whatsapp.png" alt="icone whatsapp" />
                </div>
            </div>
            </div>

            <div className={styles.imagem}>
                <img className={styles.crisLunaFoto} src="./src/assets/images/crisluna.jpeg" alt="cris luna"/>
            </div>
        </div>
        </>
    )
}

export default Footer