import React from "react";
import logo  from "./img/ironMan.jpg";
import styles from "./styles/styles.scss";

export const AverageComponent: React.FC = () => {

  const [name, setName ] = React.useState<string>("");

  React.useEffect(() => {
    const defaultInit: string = "Iniciar";
    setName(defaultInit);

  }, []);

  return (
    <>
    <img src={logo}/>
    <div className={styles}>
      <h1>{`Hola desde React, bienvenido ${name}`}</h1>
    </div>
    </>
  );
};