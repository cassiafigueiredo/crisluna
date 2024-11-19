import styles from './Cafe.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

function Cafe() {
    return(
        <>
        
        <div className={` d-flex flex-column justify-content-center align-items-center ${styles.cafeContainer}`}>
            <img className={styles.xicara} src="./src/assets/images/xicara-de-cafe (1).png" alt="xicara de cafe" />
            <h2 className={styles.titulo}>CANTINHO ESPECIAL DO CAFÉ</h2>
            <p className={styles.frase}>Espaço para você tomar um cappucino, chá ou um espresso quentinho, para uma experiência de relaxamento e auto-cuidado completa.</p>
        </div>
        </>
    )
}

export default Cafe