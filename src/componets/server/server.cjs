const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para enviar el formulario
app.post("/api/send-form", async (req, res) => {
  try {
    const { nombre, correo, mensaje } = req.body;

    // Crear transporte de correo electrónico
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "christianbarillasyt@gmail.com",
        pass: "christian1998xD",
      },
    });

    // Configurar los detalles del correo electrónico
    const mailOptions = {
      from: `"${nombre}" <${correo}>`,
      to: "destinatario@example.com",
      subject: "Mensaje enviado desde el formulario de contacto",
      text: mensaje,
      html: `<p>${mensaje}</p>`,
    };

    // Enviar correo electrónico
    await transporter.sendMail(mailOptions);

    // Responder con mensaje de éxito
    res.json({
      message: "Mensaje enviado correctamente",
    });
  } catch (error) {
    console.log(error);
    // Responder con mensaje de error
    res.status(500).json({
      message: "Error al enviar el mensaje",
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});














































// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();

// // Configurar el analizador de cuerpos de solicitud
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Agregar la ruta para enviar correos electrónicos
// app.post('http://localhost:5173/api/enviar-formulario', (req, res) => {
//   // Obtener los datos del formulario
//   const { nombre, correo, mensaje } = req.body;

//   // Crear el transporte de correo electrónico
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'christianbarillasyt@gmail.com',
//       pass: 'christian1998xD'
//     }
//   });

//   // Configurar el mensaje de correo electrónico
//   const mailOptions = {
//     from: 'christianbarillasyt@gmail.com',
//     to: correo,
//     subject: 'Mensaje enviado desde el formulario de contacto',
//     html: `<p>Hola ${nombre},</p><p>Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p><p>Aquí está una copia de tu mensaje:</p><p>${mensaje}</p><p>Saludos cordiales,</p><p>El equipo de mi sitio web</p>`
//   };

//   // Enviar el correo electrónico
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Hubo un error al enviar el correo electrónico.' });
//     } else {
//       console.log('Correo electrónico enviado: ' + info.response);
//       res.status(200).json({ message: 'Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.' });
//     }
//   });
// });

// // Iniciar el servidor
// const PORT = 5173;
// app.listen(PORT, () => console.log(`Servidor de API iniciado en http://localhost:${PORT}`));

































// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const nodemailer = require("nodemailer");

// // const app = express();
// // const port = 5173;

// // app.use(bodyParser.json());

// // app.post("/api/enviar-formulario", (req, res) => {
// //   console.log('Recibido una solicitud de envío de formulario');
// //   const { nombre, correo, mensaje } = req.body;

// //   const transporter = nodemailer.createTransport({
// //     service: "gmail",
// //     auth: {
// //       user: "christianbarillasyt@gmail.com",
// //       pass: "christian1998xD",
// //     },
// //   });

// //   const mailOptions = {
// //     from: "christianbarillasyt@gmail.com",
// //     to: correo,
// //     subject: "Mensaje enviado desde el formulario de contacto",
// //     html: `<p>Hola ${nombre},</p><p>Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p><p>Aquí está una copia de tu mensaje:</p><p>${mensaje}</p><p>Saludos cordiales,</p><p>El equipo de mi sitio web</p>`,
// //   };

// //   transporter.sendMail(mailOptions, (error, info) => {
// //     if (error) {
// //       console.error(error);
// //       res.status(500).json({ message: "Hubo un error al enviar el correo electrónico." });
// //     } else {
// //       console.log("Correo electrónico enviado: " + info.response);
// //       res.status(200).json({ message: "Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible." });
// //     }
// //   });
// // });

// // app.listen(port, () => {
// //   console.log(`Servidor de API iniciado en http://localhost:${port}`);
// // });
