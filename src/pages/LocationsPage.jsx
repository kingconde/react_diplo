import React from "react";

const LocationPage = () => (
    <>
        <section className="s-center">
            <article>
                <header>
                    <hgroup>
                        <h1>Titulo de mensaje 1</h1>
                        <h2>Subtitulo de mensaje 1</h2>
                    </hgroup>
                    <time datetime="2021-08-28" pupdate>Publicado el 28-08-2021</time>
                </header>
                <p>Mensaje 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, voluptatum. Natus repudiandae aliquam mollitia veritatis qui eveniet ex eos numquam non sunt sequi porro, exercitationem odit, harum corporis perspiciatis sapiente.</p>

                <footer>
                    <p>Comentarios (0)</p>
                </footer>
            </article>

            <article>
                <header>
                    <hgroup>
                        <h1>Titulo de mensaje 2</h1>
                        <h2>Subtitulo de mensaje 2</h2>
                    </hgroup>
                    <time datetime="2021-08-28" pupdate>Publicado el 27-08-2021</time>
                </header>
                <p>Mensaje 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, voluptatum. Natus repudiandae aliquam mollitia veritatis qui eveniet ex eos numquam non sunt sequi porro, exercitationem odit, harum corporis perspiciatis sapiente.</p>

                <footer>
                    <p>Comentarios (5)</p>
                </footer>
            </article>
        </section>
    </>
)

export default LocationPage