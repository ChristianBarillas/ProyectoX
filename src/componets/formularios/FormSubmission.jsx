import React, { useState } from 'react';

const FormSubmission = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { nombre, correo, mensaje };
    try {
      const response = await fetch("/api/enviar-formulario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
      setNombre("");
      setCorreo("");
      setMensaje("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </label>
      <label>
        Correo electrónico:
        <input
          type="email"
          value={correo}
          onChange={(event) => setCorreo(event.target.value)}
        />
      </label>
      <label>
        Mensaje:
        <textarea
          value={mensaje}
          onChange={(event) => setMensaje(event.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormSubmission;
