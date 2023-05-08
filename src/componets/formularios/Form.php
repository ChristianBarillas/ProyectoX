<?php
// Inicializar las variables con un valor predeterminado para evitar errores de "variable indefinida"
$name = "";
$phone = "";
$email = "";
$select = "";
$terms = "";
$errorMSG = "";
$EmailTo = "christianbarillasyt@gmail.com";
$Subject = "Nuevo contacto desde la web";

// Validar que se hayan enviado los datos por el método POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  // Validar el campo "Nombre"
  if (empty($_POST["name"])) {
    $errorMSG .= "El campo Nombre es requerido.<br>";
  } else {
    $name = test_input($_POST["name"]);
  }

  // Validar el campo "Teléfono"
  if (empty($_POST["phone"])) {
    $errorMSG .= "El campo Teléfono es requerido.<br>";
  } else {
    $phone = test_input($_POST["phone"]);
  }

  // Validar el campo "Correo Electrónico"
  if (empty($_POST["email"])) {
    $errorMSG .= "El campo Correo Electrónico es requerido.<br>";
  } else {
    $email = test_input($_POST["email"]);
    // Validar que el correo electrónico tenga un formato válido
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errorMSG .= "El formato del Correo Electrónico es inválido.<br>";
    }
  }

  // Validar el campo "Paquete"
  if (empty($_POST["select"])) {
    $errorMSG .= "El campo Paquete es requerido.<br>";
  } else {
    $select = test_input($_POST["select"]);
  }

  // Validar el campo "Términos y Condiciones"
  if (empty($_POST["terms"])) {
    $errorMSG .= "El campo Términos y Condiciones es requerido.<br>";
  } else {
    $terms = test_input($_POST["terms"]);
  }

  // Si no hubo errores, enviar el correo electrónico
  if ($errorMSG == "") {
    // Preparar el cuerpo del correo electrónico
    $Body = "Nombre: ".$name."\n";
    $Body .= "Teléfono: ".$phone."\n";
    $Body .= "Correo Electrónico: ".$email."\n";
    $Body .= "Paquete: ".$select."\n";
    $Body .= "Términos y Condiciones: ".$terms."\n";

    // Enviar el correo electrónico
    $success = mail($EmailTo, $Subject, $Body, "From:".$email);

    // Si el correo electrónico fue enviado exitosamente, mostrar un mensaje de éxito. De lo contrario, mostrar un mensaje de error.
    if ($success) {
      echo "success";
    } else {
      echo "Ha ocurrido un error al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.";
    }
  } else {
    echo $errorMSG;
  }
}

// Función para limpiar los datos recibidos por el método POST
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
