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
        <div className="grid bg-white m-5 p-5">
            <div className='row row-cols-2'>
                <div className="g-col-6 mt-5">
                    <img className={styles.imgServicos} src="./src/assets/images/manicure.png" alt="manicure icone" />
                    <h2 className={styles.h2SemP}>Manicure</h2>
                </div>
                <div className="g-col-6 mt-5 ">
                    <img className={styles.imgServicos} src="./src/assets/images/pedicure.png" alt="pedicure icone" />
                    <h2 className={styles.h2SemP}>Pedicure</h2>
                </div>
            </div>
        </div>
        <div className="grid m-5">
            <div className='row row-cols-2'>
                <div className="g-col-6 mt-5 d-flex flex-column align-items-center text-center">
                    <img className={styles.imgServicos} src="./src/assets/images/spadospes.png" alt="manicure icone" />
                    <div className={`d-flex flex-column align-items-center justify-content-center ${styles.divTxtColorido}`}>
                        <h2 className={styles.h2ComP}>Spa dos Pés</h2>
                        <p className={styles.pServicos}>
                        Tratamento relaxante e terapêutico que conta com esfoliação, hidratação e massagem, proporcionando relaxamento, alívio do cansaço e melhora da circulação.
                        </p>
                    </div>
                </div>
                <div className="g-col-6 mt-5 d-flex flex-column align-items-center  text-center">
                    <img className={styles.imgServicos} src="./src/assets/images/pe.png" alt="pedicure icone" />
                    <div className={` d-flex flex-column align-items-center justify-content-center ${styles.divTxtColorido2}`}>
                        <h2 className={styles.h2ComP}>Plástica dos pés</h2>
                        <p className={styles.pServicos}>
                        Procedimento mais intensivo,  para a renovação da pele dos pés. Conta com técnicas mais profundas de esfoliação, remoção de calosidades e hidratação intensa, proporcionando aos pés uma aparência mais macia e rejuvenescida.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Servicos