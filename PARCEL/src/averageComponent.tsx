import React from "react";
const logo = require('./img/ironMan.jpg');
const styles = require('./styles/styles.scss');

export const AverageComponent: React.FC = () => {
  const [name, setName] = React.useState<string>("");

  React.useEffect(() => {
    const defaultName: string = "Rodrigo";
    setName(defaultName);
  }, []);

  return (
    <>
    <img src={logo}/>
    <div  className={"estilo-texto"}>
      <h1 >{`Hola desde React, bienvenido ${name}`}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Deserunt modi voluptas ipsam voluptate suscipit distinctio unde! Maiores, et itaque excepturi voluptatem illum, cupiditate quod ad voluptas placeat inventore, distinctio tempore?</p>
    </div>
    </>
  );
};