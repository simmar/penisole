<?php

////----------------------------------------------------------------------------

 $Serveur        ='mysql51-35.perso';
 $Utilisateur    ='maraissimon';
 $Motdepasse   	 ='IGxGogjw';
 $base		     ='maraissimon';

$msg_ok = "Votre demande a bien été prise en compte.";
define('MAIL_DESTINATAIRE', 'marais.simon@free.fr');
// remplacer par votre email
define('MAIL_SUJET', 'Message du formulaire de example.com');

// vérification des champs
if (empty($_POST['nom']))
$message .= " Votre nom<br/>";
if (empty($_POST['prenom']))
$message .= "Votre prénom<br/>";

if (empty($_POST['email']))
$message .= "Votre email<br/>";

if (empty($_POST['ameliorer']))
$message .= "Votre message<br/>";

// si un champ est vide, on affiche le message d'erreur et on stoppe le script
if (strlen($message) > strlen($msg_erreur)) {
echo $message;
die();
}

// sinon c'est ok => on continue
foreach ($_POST as $index => $valeur) {
$$index = stripslashes(trim($valeur));
}



//Préparation de l'entête du mail:
$mail_entete = "MIME-Version: 1.0\r\n";
$mail_entete .= "From: {$_POST['nom']} " . "<{$_POST['email']}>\r\n";
$mail_entete .= 'Reply-To: ' . $_POST['email'] . "\r\n";
$mail_entete .= 'Content-Type: text/plain; charset="utf_8 . "\r\n"';
$mail_entete .= "\r\nContent-Transfer-Encoding: 8bit\r\n";
$mail_entete .= 'X-Mailer:PHP/' . phpversion() . "\r\n";

// préparation du corps du mail
$mail_corps  = "MESSAGE DE :$nom \n";
$mail_corps .= "Nom 	   : $nom\n";
$mail_corps .= "Prénom 	   : $prenom\n";
$mail_corps .= $comment;

// envoi du mail
if (mail(MAIL_DESTINATAIRE, MAIL_SUJET, $mail_corps, $mail_entete)) {
//Le mail est bien expédié
echo $msg_ok;
} else {
//Le mail n'a pas été expédié
echo "Une erreur est survenue lors de l'envoi du formulaire par email";
}

$nom =       $_POST['nom'];
//-------------------------------------------------------------------
$prenom =    $_POST['prenom'];
//-------------------------------------------------------------------
$email =     $_POST['email'];
//-------------------------------------------------------------------
$comment = $_POST['comment'];


//-------------------------------------------------------------------
$requete0 = "SET NAMES 'utf8'";



?>