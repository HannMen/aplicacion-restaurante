import React, { useEffect, useState } from "react";
import { db } from "../Firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import "../styles/reservations.css";

const ReservationsC = () => {
  const [users, setUser] = useState([]);
  const userCollectionRef = collection(db, "reservations");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState(0);
  const [date, setDate] = useState("");
  const [table, setTable] = useState("0");

  const [formUpdate, setFormUpdate] = useState(false);
  const [item, setItem] = useState(null);

  const createUser = async () => {
    await addDoc(userCollectionRef, {
      nombre: name,
      correo: mail,
      telefono: phone,
      fecha: date,
      mesa: table,
    });
    getUsers();
  };

  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const borrarUsuario = async (id) => {
    const userDoc = doc(db, "reservations", id);
    await deleteDoc(userDoc);
    getUsers();
  };

  const formUpdateOpen = (data) => {
    setFormUpdate(true);
    setItem(data);
  };

  const handleChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
    console.log(setItem);
  };

  const onUpdate = async (id) => {
    await updateDoc(doc(db, "reservations", id), item);
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="reservationsform">
        <h1>Reservations</h1>

        <div className="row mb-3">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Correo"
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Telefono"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <input
              type="datetime-local"
              className="form-control"
              placeholder="Fecha"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Mesa"
              onChange={(e) => {
                setTable(e.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary" onClick={createUser}>
              Enviar
            </button>
          </div>
        </div>
      </div>

      <div className="reservationstable">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Telefono</th>
              <th scope="col">Fecha y Hora</th>
              <th scope="col">Mesa</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.correo}</td>
                <td>{item.telefono}</td>
                <td>{item.fecha}</td>
                <td>{item.mesa}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => borrarUsuario(item.id)}
                  >
                    Borrar
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => formUpdateOpen(item)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {formUpdate && (
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={item.nombre}
            name="nombre"
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Correo"
            value={item.correo}
            name="correo"
            onChange={handleChange}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Telefono"
            value={item.telefono}
            name="telefono"
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Fecha (mm/dd/yyyy)"
            value={item.fecha}
            name="fecha"
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Mesa"
            value={table}
            onChange={(e) => {
              setTable(e.target.value);
            }}
          />
          <button className="btn btn-success" onClick={() => onUpdate(item.id)}>
            Guardar
          </button>
        </div>
      )}
    </div>
  );
};

export default ReservationsC;
