import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { TitlePage } from "../components/title-page";

import '../styles/EstanteVirtual.css'

function EstanteVirtual () {
    return (
        <>
            <Header />
            <Navigation />
            <TitlePage title={"Estante Virtual"} />
            <section className="container-servicos">
                <div className="organizadores">
                    <h2 className="title">Organizadores</h2>
                    <p>Fabricio Carneiro e Samira Lustoza</p>
                </div>

                <div className="conteudo">
                    <h2 className="title">Conteúdo</h2>

                    {[...Array(5)].map((_, index) => (
                    <div key={index} className="capitulo">
                        <h3 className="capitulo-titulo">
                        <a href="#" className="capitulo-link">
                            Capítulo 1: Introdução à Programação Orientada a Objetos com Java
                        </a>
                        </h3>
                        <p className="autores">
                        Lucas Oliveira, Rafaela Santos, Pedro Almeida, Ana Silva
                        </p>
                        <p className="doi">
                        DOI: 10.36229/978-65-5866-371-3-CAP01
                        </p>

                        <h3 className="capitulo-titulo">
                        <a href="#" className="capitulo-link">
                            Capítulo 2: Desenvolvimento de Aplicações Web com Spring Boot e Hibernate
                        </a>
                        </h3>
                        <p className="autores">
                        Bruno Pereira, Carolina Lima, Daniel Oliveira, Mariana Rodrigues
                        </p>
                        <p className="doi">
                        DOI: 10.36229/978-65-5866-371-3-CAP02
                        </p>
                    </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default EstanteVirtual;