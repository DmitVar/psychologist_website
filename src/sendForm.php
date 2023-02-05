<?php
// Файлы phpmailer
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['phoneOrEmail'];
$text = $_POST['text'];



// Формирование самого письма
$title = "Заявка на консультацию";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Почта или телефон:</b> $email<br><br>
<b>Сообщение: $text </b><br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['status'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'mpsihologist@mail.ru'; // Логин на почте
    $mail->Password   = 'Rysgvb4xCrniK3yEj7SB'; // Пароль на почте 31M01Bravo
    $mail->setFrom('mpsihologist@mail.ru', 'Заявка с сайта'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('buribo.maria@mail.ru');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

header('Content-type: application/json');
echo json_encode(["result" => $result, "status" => $status]);
