import styles from "../BemVinda/BemVinda.module.css"
function BemVinda() {
    return(
        <>
        <div className={` ${styles.containerBemVinda}`} >
            <div className={`row align-items-center ${styles.containerBemVinda}`}>
                <div className="col-md-6 d-none d-md-block">
                    <img className={` ${styles.unhaimg}`} src="./src/assets/images/unhaprofissional.jpg" alt="unhas rosas" />
                </div>
                <div className={`col-12 col-md-6 text-center text-md-left ${styles.txtBemVinda}`}>
                    <h1 className={styles.h1CrisLuna}>
                        Cris luna
                    </h1>
                    <p className={styles.pCrisLuna}>
                        Cuidado, Charme & Capricho
                    </p>
                </div>
            </div>
        </div>
        </>
     )
}
export default BemVinda