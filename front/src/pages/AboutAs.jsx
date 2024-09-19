import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import directeursud from '../images/responsable1.jpg'
import directeurouest from '../images/responsable2.jpg'
import directeurnord from '../images/resposable3.jpg'


export default function AboutAs() {
  return (
    <div style={{  backgroundColor: '#b7aeb8'}}>
      <Header />
      <div><h1 className='display-6 fw-bolder text-center mt-5' variant="info">--- Notre Points de vente ---</h1></div>
      <hr />

      <section className='aboutas'>

        <article>
          <h5>Shop Sud (Tataouine)</h5>
          <span><span style={{fontWeight:'bold'}}>Derige par </span>: Madame charlot models</span>
          <img src={directeursud} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            obcaecati repellendus animi dolor
            aut temporibus, esse laudantium voluptates corporis
            laborum incidunt rerum cumque libero autem, nam nesciunt possimus qui illum.</p>
            <a href="https://www.google.com/maps/place/Tataouine/@32.9245589,10.3646491,13z/data=!3m1!4b1!4m6!3m5!1s0x1254b7596be92873:0xd94cf811d4ad762d!8m2!3d32.9210902!4d10.4508956!16zL20vMDVnMGxu?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D">Click Ici C'est Notre Localisation </a>
        </article>
        <article>
        <h5>Shop Ouest (Sfax)</h5>
          <span><span style={{fontWeight:'bold'}}>Derige par </span>: Madame chatrine minez</span>

          <img src={directeurouest} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            obcaecati repellendus animi dolor
            aut temporibus, esse laudantium voluptates corporis
            laborum incidunt rerum cumque libero autem, nam nesciunt possimus qui illum.</p>
            <a href="https://www.google.com/maps/place/Sfax/@34.7613666,10.6505251,12z/data=!3m1!4b1!4m6!3m5!1s0x13002cda1486c695:0x22dfe0a62c50ce6f!8m2!3d34.739822!4d10.7600196!16zL20vMDZ0MWt4?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D">Click Ici C'est Notre Localisation </a>

        </article>
        <article>
          <h5>Shop Nord (Tunis)</h5>
          <span><span style={{fontWeight:'bold'}}>Derige par </span>: Monsieur Adam brous</span>

          <img src={directeurnord} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            obcaecati repellendus animi dolor
            aut temporibus, esse laudantium voluptates corporis
            laborum incidunt rerum cumque libero autem, nam nesciunt possimus qui illum.</p>
            <a href="https://www.google.com/maps/place/Tunis/@36.7948829,10.1432776,12z/data=!4m6!3m5!1s0x12fd337f5e7ef543:0xd671924e714a0275!8m2!3d36.8064948!4d10.1815316!16zL20vMGZ0bjg?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D">Click Ici C'est Notre Localisation </a>

        </article>
      </section>
      <div style={{marginTop:'13%'}}>
      <Footer />
      </div>
    </div>
  )
}
