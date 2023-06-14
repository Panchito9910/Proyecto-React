import React, { useEffect, useState } from "react";
import "./app.css"
import UserTable from "./UserTable.jsx";
import { NavBar } from "./NavBar.jsx";
import { Footer } from "./Footer";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [picture, setPicture] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respuesta) => respuesta.json())
      .then((data) => { 
        fetch("https://randomuser.me/api/?results="+data.length+"&inc=picture")
          .then((respuesta) => respuesta.json())
          .then((imagen) =>{
            setPosts(data); 
            setPicture(imagen)
          });
      });
  }, []); 
  return (
    <div>
      <NavBar />
      <div className="contenedor my-20">
        <div className="fila">
          <UserTable user={posts} pic={picture} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
