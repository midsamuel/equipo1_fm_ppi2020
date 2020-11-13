import React from "react";
import "../../commons/Styles/fondos.css";
import "./Register.css";
import user from "../../image/user.png";
import contraseña from "../../image/password.png";
import email from "../../image/email.png";
import Head from "../../commons/Head/Head";
import Title from "../../commons/Title/Title";
import Input from "../../commons/Input/Input";
import Button from "../../commons/Button/Button";
import Particles from "../../commons/particulas/Particles" 
class Register extends React.Component {
  render() {
    return (
      <section className="Fondo">
         <div className="canvas">
        <Particles />
      </div>
        <Head />
        <div >
          <form className="form">
            <Title title="REGISTRARSE" />
            <div>
              <Input placeholder="Ingrese email" img={user} />
              <Input placeholder="Nombre de usuario" img={email} />
              <Input placeholder="Ingrese contraseña" img={contraseña} />
            </div>
            <div className="buttons">
              <Button buttonText="Aceptar" />
              <Button buttonText="Regresar" direccion="/"/>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
export default Register;
