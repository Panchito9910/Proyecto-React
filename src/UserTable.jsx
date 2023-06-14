import React, { Fragment } from "react";

const UserTable = (props) => {
  console.log(props.user);
  return (
    <Fragment>
      {props.user.map((usuario) => {
        return (
          <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <table key={usuario.id} className="tabla" style={{borderRadius:5}}>
            <tr>
              <th>Nombre: {usuario.name}</th>
            </tr>
            <tr>
              <td>Email: {usuario.email}</td>
            </tr>
            <tr>
              <td>Ciudad: {usuario.address.city}</td>
            </tr>
            <tr>
              <td>Compañia: {usuario.company.name} </td>
            </tr>
            <tr>
              <td>
                <img src="" alt="" />
              </td>
            </tr>
          </table>
          </div>
        );
      })}
    </Fragment>
  );
};

export default UserTable;
