<?php

function agregarUsers () {
include('../php/db.php');
$usuario = $_POST['usuario'];
$email = $_POST['email'];
$msg = '';

if ( $usuario != NULL ) {
$query = "SELECT * FROM usuarios WHERE usuario = '{$usuario}';";
    $resu = $db->query($query);
    $resul = $resu->num_rows;
    if ( $resul != 0 ) {
       $msg.= 'The User '.$usuario. ' already exists.';
    }else{
        if ( $email != NULL ) {
            $query = "SELECT * FROM usuarios WHERE email = '{$email}';";
            $resu = $db->query($query);
            $resul = $resu->num_rows;
            if ( $resul != 0 ) {
                $msg.= 'The Email '.$email. ' already exists.';
             }else{
            $sql = "INSERT INTO usuarios( usuario, email ) VALUES( '{$usuario}', '{$email}' )";
            $db->query($sql);   
            $msg = "The User whit Name ".$usuario." and Email ".$email." Is ADDED, Thank You For Registration.";
            }

        }else{
            $msg.= 'Please Insert Email.';
        }
    }
}else{
  $msg.= 'Please Insert User.';
}
return $msg;
}

echo agregarUsers();

?>