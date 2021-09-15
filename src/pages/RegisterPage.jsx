import React from "react";

const RegisterPage = () => (
    <>
        <h1 className="s-center">Registro</h1>
        <br/>
        <article className="s-center">
            <div id="registerError">

            </div>

            <div class="element.form">
                <label for="user">Usuario:</label>
                <br />
                <input type="text" name="user" id="user" placeholder="Nombre de usuario" required />
            </div>

            <div class="element.form">
                <label for="email">Correo electronico:</label>
                <br />
                <input type="email" name="email" id="email" placeholder="ejemplo@ejemplo.com" required />
            </div>

            <div class="element.form">
                <label for="tel">Número telefonico:</label>
                <br />
                <input type="tel" name="tel" id="tel" placeholder="55 5555 5555" required />
            </div>

            <div class="element.form">
                <label for="password">Contraseña:</label>
                <br />
                <input type="password" name="password" id="password" placeholder="**********" required />
            </div>

            <div class="element.form">
                <label for="confirmPassword">Cofirmar Contraseña:</label>
                <br />
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="**********"
                    required />
            </div>

            <br />
            <div>
                <input type="submit" id="registerButton" value="Registrar" className="button" />
            </div>

            <div id="registerSuccess">

            </div>
        </article>
    </>
)

export default RegisterPage