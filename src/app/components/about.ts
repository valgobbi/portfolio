import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    template: `
        <section class="about" id="sobre-mim">
            <div class="container">
                <div class="contentGrid">
                    <img src="images/profile_pic.png" alt="Valéria Gobbi" />
                    <div class="content">
                        <h3>Sobre mim</h3>
                        <p>Mais de 15 anos de experiência em processos de design de ponta a ponta, sendo <b>mais de 5 anos com design Ui | Ux.</b></p>
                        <p>Participo desde a <b>conceituação</b> do projeto, desenvolvimento de <b>protótipos</b> de baixa e alta fidelidade, <b>apresentação</b> do fluxo e telas para stakeholders, clientes e para a equipe de programadores e aprimoramento de produtos já existentes.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    styles: `
        section.about {
            margin: 64px auto;
            div.container {
                div.contentGrid {
                    display: flex;
                    flex-direction: row;
                    gap: 16px;
                    margin: 0 auto;
                    width: 1080px;

                    .about img {
                        width: 260px;
                        height: 274px;
                        border-radius: 16px;
                        object-fit: cover;
                    }
                    
                    div.content {
                        flex-grow: 1;
                        background: var(--secondary);
                        border-radius: 16px;
                        padding: 48px;

                        h3 {
                            margin: 0 0 24px;
                            font-size: 1.5rem;
                        }
                        p {
                            font-size: 1rem;
                            line-height: 1.5rem;
                        }
                    }
                }
            }
        }
    `
})
export class AboutComponent {}