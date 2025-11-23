import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    template: `
        <section class="about" id="sobre-mim">
            <div class="container">
                <div class="contentGrid">
                    <div class="imgHolder" style="background-image: url('images/profile_pic.png')"></div>
                    <div class="content">
                        <h3>Sobre mim</h3>
                        <p>Mais de 15 anos de experiência em processos de design de ponta a ponta, sendo <b>slides de 5 anos com design Ui | Ux.</b></p>
                        <p class="noMargin">Participo desde a <b>conceituação</b> do projeto, desenvolvimento de <b>protótipos</b> de baixa e alta fidelidade, <b>apresentação</b> do fluxo e telas para stakeholders, clientes e para a equipe de programadores e aprimoramento de produtos já existentes.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    styles: `
        section.about {
            margin: 64px auto;
            scroll-margin-top: 100px;
            div.container {
                div.contentGrid {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: stretch;
                    gap: 16px;
                    margin: 0 auto;
                    width: 1080px;
                    max-width: 100%;

                    .imgHolder {
                        min-width: 300px;
                        max-width: 300px;
                        flex-grow: 1;
                        border-radius: 16px;
                        background-size: cover;
                    }
                    
                    div.content {
                        max-width: 620px;
                        flex-grow: 4;
                        background: var(--secondary);
                        border-radius: 16px;
                        padding: 32px;

                        h3 {
                            margin: 0 0 24px;
                            font-size: 1.5rem;
                        }
                        p {
                            font-size: 1rem;
                            line-height: 1.5rem;

                            &.noMargin {
                                margin: 0;
                            }
                        }
                    }
                }
            }

            @media (max-width: 650px) {
                margin: 32px auto;
                div.container {
                    div.contentGrid {
                        flex-direction: column;
                        align-items: center;

                        .imgHolder {
                            width: 100%;
                            max-width: 100vw;
                            padding-top: 300px;
                        }
                    }
                }
            }
        }
    `
})
export class AboutComponent {}