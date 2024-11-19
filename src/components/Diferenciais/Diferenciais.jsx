import styles from './Diferenciais.module.css'
function  Diferenciais() {
    return(
        <>
        <div>
            <h1 className={styles.h1Diferenciais}>
                O melhor para você
            </h1>
        </div>
        
        <div className={`grid ${styles.diferenciaisContainer}`}>
            <div className='row row-cols-2'>
                <div className="g-col-6 mt-5 d-flex flex-column align-items-center text-center">
                    <img className={styles.imgDiferenciais} src="./src/assets/images/materiais.png" alt="manicure icone" />
                     <div className={`d-flex flex-column align-items-center `}>
                        <h2 className={styles.h2Diferenciais}>
                        Material Esterelizado
                        </h2>
                        <p className={styles.pDiferenciais}>
                        Após cada cliente, todos os alicates, cortadores de unhas e palitos de unhas são esterelizados em autoclave. Também contamos com botas, toalhas e serrinhas de unhas descartáveis.
                        </p>
                    </div>
                </div>
                <div className="g-col-6 mt-5 d-flex flex-column align-items-center  text-center">
                    <img className={styles.imgDiferenciais} src="./src/assets/images/cuidado-pes.png" alt="pedicure icone" />
                        <div className={` d-flex flex-column align-items-center`}>
                            <h2 className={styles.h2Diferenciais}>
                            Cuidado Completo
                            </h2>
                            <p className={styles.pDiferenciais}>
                            Mais que apenas fazer suas unhas, cuidamos de seus pés e mãos oferecendo hidratação ao final do serviço, para a sensação gostosa de unha recém feita ser ainda maior!
                            </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Diferenciais