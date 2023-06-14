import React, { useEffect, useState } from "react";
import UserTable from "./UserTable.jsx";
import { NavBar } from "./NavBar.jsx";
import { Footer } from "./Footer";

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respuesta) => respuesta.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container my-3">
        <div className="row">
          <UserTable user={posts} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
