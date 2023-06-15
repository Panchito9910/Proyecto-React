import React, { Fragment } from "react";

const UserTable = (props) => {
  return (
    <Fragment>
      {props.user.map((usuario,index) => {
        return (
          <div key={usuario.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-4 borde my-20 p-10">
            <table className="tabla txt-center">
              <thead>
                <tr>
                  <th className="fila-borde-b">Nombre: {usuario.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fila-borde-b">Email: {usuario.email}</td>
                </tr>
                <tr>
                  <td className="fila-borde-b">
                    Ciudad: {usuario.address.city}
                  </td>
                </tr>
                <tr>
                  <td className="fila-borde-b">
                    Compañia: {usuario.company.name}
                  </td>
                </tr>
                <tr>
                  <td className="p-10 txt-center">
                    <img className="img" src={props.pic.results[index].picture.large}/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </Fragment>
  );
};

export default UserTable;
