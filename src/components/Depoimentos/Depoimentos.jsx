import styles from './Depoimentos.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


function Depoimentos(){
    return(
        <>
        <div>
            <h1 className={styles.h1Depoimentos}>Depoimentos de Clientes</h1>
        </div>
        <div className="container text-center">
            <div className="row ">
                <div className="col g-col-6 d-flex flex-column align-items-center">
                 <img className={styles.imgDepoimento} src="./src/assets/images/depoimento.png" alt="" />

                  <h2 className={styles.h2Depoimentos}>
                    Camila Almeida
                  </h2>
                  <p className={styles.pDepoimentos}>
                    &quot;Amei o atendimento da Cris! Além de caprichosa, ela deixa as unhas do jeitinho que a gente pede.&quot; 
                  </p>   
                </div>
                    <div className="col g-col-6 d-flex flex-column align-items-center">
                        <img className={styles.imgDepoimento} src="./src/assets/images/depoimento.png" alt="" />

                         <h2 className={styles.h2Depoimentos}>
                            Juliana Santos
                         </h2>
                         
                         <p className={styles.pDepoimentos}>
                         &quot;Meu spa dos pés foi uma experiência incrível, saí me sentindo renovada.&quot;
                         </p>
                    </div>
                        <div className="col g-col-6 d-flex flex-column align-items-center">
                            <img className={styles.imgDepoimento} src="./src/assets/images/depoimento.png" alt="" />

                             <h2 className={styles.h2Depoimentos}>
                                Stefani Faro
                             </h2>
                             <p className={styles.pDepoimentos}>
                             &quot;Simplesmente perfeita! A Cris é detalhista e super talentosa. Fiz a plástica dos pés e saí impressionada com o resultado. Obrigada pelo carinho!&quot;
                             </p>
                        </div>
            </div>
        </div>
        </>
    )
}

export default Depoimentos