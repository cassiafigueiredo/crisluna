import styles from "../BemVinda/BemVinda.module.css"
function BemVinda() {
    return(
        <>
        <div className={`grid d-flex justify-content-center align-items-center   ${styles.containerBemVinda}`}> 
            <div className="row row-cols-2 ">
                <div className="g-col-6">
                    <img className={styles.imgBemVinda} src="./src/assets/images/design-entrada.png" alt="" />
                    </div>
                    <div className={`${styles.txtBtn}`}>
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