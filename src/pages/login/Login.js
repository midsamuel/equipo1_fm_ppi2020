import React from "react";
import Input from "../../commons/Input/Input.jsx";
import Button from "../../commons/Button/Button.jsx";
import Head from "../../commons/Head/Head.jsx";
import Title from "../../commons/Title/Title.jsx";
import user from "../../image/user.png";

import contraseña from "../../image/password.png";
import "../../commons/Styles/fondos.css";
import "./login.css";
import Particles from "../../commons/particulas/Particles";
import { Link } from "react-router-dom";
function Login() {
  return (
    <section className="Fondo">
      <div className="canvas">
        <Particles />
      </div>
      <Head />
      <div className="main">
        <form className="form">
          <Title title="INICIAR SESIÓN" />
          <div>
            <Input placeholder="Ingrese email" img={user} />
            <Input placeholder="Ingrese contraseña" img={contraseña} />
          </div>
          <div className="buttons">
           
            <Button buttonText="Iniciar" direccion="/MainPlay"/>
            <Button buttonText="Reistrarse" direccion="/Register" />
            <Link to="">¿Has olvidado tu contraseña?</Link>
            <Button buttonText="Invitado" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
