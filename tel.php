<?php

$to = 'kebikovgen@gmail.com';
$subject = 'Заказ по акции.';
$headers = "From: best-potolok\r\n";
$headers .= "Reply-to: куда отвечать\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

$tel = clear_data($_POST["tel"]);


//форматируем с разметкой
$message = '
<html>
<body>
<center>
<table border="1" cellpadding="6" cellspacing="0" width="90%" bordercolor="#ed7272">
<tr><td colspan="2" align="center" bgcolor="#b2acac"><b>Информация о заказе по акции:</b></td></tr>
';

$message .= '<tr>
<td><b>Клиент оставил телефон:</b></td>
<td>'.$tel.'</td>
</tr>
';

function clear_data($val) {
    $val = trim($val); //удаляем пробелы в начале и конце
    $val = stripslashes($val); //удаляем cлешы
    $val = htmlspecialchars($val); //преобразование html в спецыальные сушности
    $val = json_encode($val); //преобразование из JSON 
    return $val;
}

//метод отправки письма(куда-почта, заголовок, сообшение, шапка)
mail($to, $subject, $message, $headers);

