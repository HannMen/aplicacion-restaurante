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
  const [table, setTable] = useState(0);

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
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-6 col-lg-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <input
              type="email"
              className="form-control"
              placeholder="Correo"
              onChange={(e) => {
                setCorreo(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <input
              type="text"
              className="form-control"
              placeholder="Teléfono"
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <input
              type="date"
              className="form-control"
              placeholder="Fecha"
              onChange={(e) => {
                setFecha(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 col-lg-3">
            <input
              type="text"
              className="form-control"
              placeholder="Mesa"
              onChange={(e) => {
                setMesa(e.target.value);
              }}
            />
          </div>
          {formUpdate ? (
            <div className="col-sm-6 col-lg-3">
              <button
                className="btn btn-primary"
                onClick={() => onUpdate(item.id)}
              >
                Actualizar
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setFormUpdate(false)}
              >
                Cancelar
              </button>
            </div>
          ) : (
            <div className="col-sm-6 col-lg-3">
              <button className="btn btn-primary" onClick={createUser}>
                Agregar Reserva
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="reservationslist container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Telefono</th>
              <th scope="col">Fecha</th>
              <th scope="col">Mesa</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.nombre}</td>
                <td>{user.correo}</td>
                <td>{user.telefono}</td>
                <td>{user.fecha}</td>
                <td>{user.mesa}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => formUpdateOpen(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => borrarUsuario(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservationsC;
