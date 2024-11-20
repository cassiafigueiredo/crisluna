import styles from "../BemVinda/BemVinda.module.css"
function BemVinda() {
    return(
        <>
        <div className={`grid d-flex justify-content-center align-items-center   ${styles.containerBemVinda}`}> 
            <div className={`row ${styles.elementos}`}>
                <div className={`col-12 col-md-6`}>
                    <img className={styles.imgBemVinda} src="./src/assets/images/design-entrada.png" alt="" />
                </div>
                    <div className={`col-12 col-md-6 ${styles.txtBtn}`}>
                        <h1>Cris Luna</h1>
                        <p>Escolha seu bem-estar. Escolha Cris Luna.</p>
                        <button className={styles.conhecerBtn}>Conhecer</button>
                    </div>
            </div>
        </div>
        </>
     )
}
export default BemVinda