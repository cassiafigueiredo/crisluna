import styles from './Servicos.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
function Servicos(){
    return (
        <>
        <div> 
            <h1 className={` m-5 ${styles.meusServicos}`}>
                Meus Serviços
            </h1>
        </div>
        <div className="grid  m-5 p-5">
            <div className='row'>
                
                    <div className="col-12 col-md-6 col-sm-12 mt-5">
                        <img className={styles.imgServicos} src="./src/assets/images/manicure.png" alt="manicure icone" />
                        <h2 className={styles.h2SemP}>
                            Manicure
                        </h2>
                        <p className={styles.precoRosa}>
                            R$35,00
                        </p>
                    </div>
                    <div className="col-12 col-md-6  mt-5 ">
                        <img className={styles.imgServicos} src="./src/assets/images/pedicure.png" alt="pedicure icone" />
                        <h2 className={styles.h2SemP}>
                            Pedicure
                        </h2>
                        <p className={styles.precoRosa}>
                            R$35,00
                        </p>
                    </div>
                
            </div>
        </div>
        <div className="grid m-5">
            <div className='row'>
                <div className="col-12 col-md-6  mt-5 d-flex flex-column align-items-center text-center">
                    <img className={styles.imgServicos} src="./src/assets/images/spadospes.png" alt="manicure icone" />
                     <div className={`d-flex flex-column align-items-center ${styles.divTxtColorido}`}>
                        <h2 className={styles.h2ComP}>
                            Spa dos Pés
                            </h2>
                        <p className={styles.paragrafoRosa}>
                        Tratamento relaxante e terapêutico que conta com esfoliação, hidratação e massagem, proporcionando relaxamento, alívio do cansaço e melhora da circulação.
                        </p>
                        <p className={styles.precoBranco}>
                                R$45,00
                            </p>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-5 d-flex flex-column align-items-center  text-center">
                    <img className={styles.imgServicos} src="./src/assets/images/pe.png" alt="pedicure icone" />
                        <div className={` d-flex flex-column align-items-center  ${styles.divTxtColorido2}`}>
                            <h2 className={styles.h2ComP}>
                            Plástica dos pés
                            </h2>
                            <p className={styles.paragrafoRosa}>
                             Com técnicas mais profundas de esfoliação, remoção de calosidades e hidratação intensa, proporciona aos pés uma aparência mais macia e rejuvenescida.
                            </p>
                            <p className={styles.precoBranco}>
                                R$50,00
                            </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Servicos