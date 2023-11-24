import { } from 'react';
import "../Home/style/Home.css"
import Imagem1 from "../../assets/imagem1.png"
import Imagem2 from "../../assets/imagem2.png"
import Imagem3 from "../../assets/imagem3.png"
import Imagem4 from "../../assets/imagem4.png"

function Home() {
  return (
    <div className='body'>
      <div className='Home'>
        <main>
          <img alt="Soluções de Estoque Inteligente" className="main_img" src={Imagem2} />
          <section className="main_info">
            <h1 className='main-title'>Transforme sua gestão de estoque com inteligência</h1>
            <p>
              SNODDA oferece soluções inovadoras, personalizando estratégias para otimizar a gestão de estoque farmacêutico. Integrando tecnologia avançada de sensores, nosso sistema detecta automaticamente caixas de medicamentos, fornecendo insights contínuos e colaboração profissional. Proporcionamos uma experiência única e eficaz na administração de medicamentos.
            </p>
          </section>

          <div className="text-box">
            <a href='https://www.fiap.com.br/' className="btn btn-white btn-animate">Saiba Mais</a>
          </div>

          

        </main>

        <aside>
          <section className='aside-container'>
            <section className='aside-item'>
              <h1 className='title_int'>O que oferecemos:</h1>
              <p>
                SNODDA é uma solução digital revolucionária desenvolvida para otimizar a gestão de estoque farmacêutico. Utilizando sensores avançados, o sistema identifica automaticamente caixas de medicamentos, proporcionando uma plataforma inovadora projetada para oferecer estratégias personalizadas adaptadas às necessidades específicas de cada farmácia. O objetivo é promover uma administração de medicamentos ativa e eficaz.
              </p>
            </section>
            <hr width='90%' className='aside-separador'></hr>
            <section className='aside-item'>
              <h1 className='title_int'>Como funciona:</h1>
              <p>
                SNODDA funciona como um guia personalizado para a gestão de estoque farmacêutico, iniciando com a análise detalhada das operações e das demandas específicas de cada farmácia. Com base nessas informações, os algoritmos adaptativos do sistema criarão estratégias de estoque específicas. A interatividade será incentivada por meio de recursos que permitirão às farmácias acompanhar seu desempenho e se conectar diretamente com profissionais de saúde para ajustes em tempo real. Essa abordagem dinâmica e personalizada garantirá uma gestão de medicamentos integral e alinhada com as necessidades individuais de cada farmácia.
              </p>
            </section>
            <hr width='90%' className='aside-separador'></hr>
            <section className='aside-item'>
              <h1 className='title_int'>Como funciona:</h1>
              <p>
                SNODDA funciona como um guia personalizado para a gestão de estoque farmacêutico, iniciando com a análise detalhada das operações e das demandas específicas de cada farmácia. Com base nessas informações, os algoritmos adaptativos do sistema criarão estratégias de estoque específicas. A interatividade será incentivada por meio de recursos que permitirão às farmácias acompanhar seu desempenho e se conectar diretamente com profissionais de saúde para ajustes em tempo real. Essa abordagem dinâmica e personalizada garantirá uma gestão de medicamentos integral e alinhada com as necessidades individuais de cada farmácia.
              </p>
            </section>
          </section>
        </aside>
      </div>

      <section className="vantagens">
        <h1 className='vantagens-titulo'>Vantagens</h1>
        <div className='cards'>
          <article className='vantagens-article'>
            <img src={Imagem3} alt='mobilidade' className='article-img' />
            <div className='article-div'>
              <h1 className='vantagens-numero'>01</h1>
              <h1 className='vantagens-vantagem'>Mobilidade restaurada</h1>
              <p className='vantagem-texto'>RecuFit visa restaurar a mobilidade por meio de exercícios adequados e personalizados.</p>
            </div>
          </article>

          <article className='vantagens-article'>
            <img src={Imagem1} alt='Plano de exercicios personalizado' className='article-img' />
            <div className='article-div'>
              <h1 className='vantagens-numero'>02</h1>
              <h1 className='vantagens-vantagem'>Personalização Adaptativa</h1>
              <p className='vantagem-texto'>Planos de exercícios personalizados com base no tipo de cirurgia e histórico médico.</p>
            </div>
          </article>

          <article className='vantagens-article'>
            <img src={Imagem4} alt='Acompanhamento médico' className='article-img' />
            <div className='article-div'>
              <h1 className='vantagens-numero'>03</h1>
              <h1 className='vantagens-vantagem'>Colaboração Profissional</h1>
              <p className='vantagem-texto'>Comunique-se diretamente com seus profissionais de saúde para ajustes personalizados em tempo real.</p>
            </div>
          </article>
        </div>
      </section>



    </div>
  )
}

export default Home;