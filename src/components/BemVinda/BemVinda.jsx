import styles from "../BemVinda/BemVinda.module.css"
function BemVinda() {
    return(
        <>
        <div className={styles.containerBemVinda}> 
            <img className={styles.imgBemVinda} src="./src/assets/images/unhas-img-principal.png" alt="" />
                <div className={styles.txtBtn}>
                    <h1>Cris Luna</h1>
                    <p>Escolha seu bem-estar. Escolha Cris Luna.</p>
                    <button className={styles.conhecerBtn}>Conhecer</button>
                </div>
        </div>
        </>
     )
}
export default BemVinda