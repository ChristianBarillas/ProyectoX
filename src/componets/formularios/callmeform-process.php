

// Incluir los archivos de PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Recuperar los datos del formulario
$name = $_POST['lname'];
$phone = $_POST['lphone'];
$email = $_POST['lemail'];
$interest = $_POST['lselect'];
$terms = $_POST['lterms'];

// Validar los datos del formulario
if (empty($name) || empty($phone) || empty($email) || empty($interest) || empty($terms)) {
    die('Faltan campos requeridos');
}

// Crear una instancia de PHPMailer
$mail = new PHPMailer(true);

try {
    // Configurar el servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'tu_correo@gmail.com';
    $mail->Password = 'tu_contraseña';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Configurar los detalles del correo electrónico
    $mail->setFrom($email, $name);
    $mail->addAddress('destinatario@example.com');
    $mail->isHTML(true);
    $mail->Subject = 'Mensaje enviado desde el formulario de contacto';
    $mail->Body    = 'Nombre: ' . $name . '<br>Teléfono: ' . $phone . '<br>Email: ' . $email . '<br>Interesado en: ' . $interest;

    // Enviar el correo electrónico
    $mail->send();
    echo 'Mensaje enviado correctamente';
} catch (Exception $e) {
    echo 'Error al enviar el mensaje: ' . $mail->ErrorInfo;
}


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PHPMailer = require('phpmailer');

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Configurar PHPMailer
  const mail = new PHPMailer();
  mail.isSMTP();
  mail.Host = 'smtp.gmail.com';
  mail.Port = 587;
  mail.SMTPSecure = 'tls';
  mail.SMTPAuth = true;
  mail.Username = 'tu_correo@gmail.com';
  mail.Password = 'tu_contrasena';
  mail.setFrom(email, name);
  mail.addAddress('destinatario@example.com');
  mail.Subject = 'Mensaje enviado desde React';
  mail.Body = message;

  // Enviar correo electrónico
  mail.send()
    .then(() => {
      res.json({ success: true });
    })
    .catch(error => {
      res.json({ success: false, error: error.message });
    });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en el puerto 3000');
});
