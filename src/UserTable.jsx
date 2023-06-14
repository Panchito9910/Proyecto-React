import React, { Fragment } from "react";

const UserTable = (props) => {
  console.log(props.pic.results);
  return (
    <Fragment>
      {props.user.map((usuario) => {
        return (
          <div key={usuario.id} className="col-xs-6 col-sm-4 md-lg-4 col-lg-4">
            <table className="tabla my-20">
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
                  <td className="pad txt-center">
                    <img
                      className="img"
                      src=""
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })
      }
    </Fragment>
  );
};

export default UserTable;
