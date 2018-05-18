<?php
if(isset($_POST['name'],$_POST['email'],$_POST['message'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message']; 
    echo $name; 
    mail('prabhunath877@gmail.com', $name. 'wants to connect you', $message , "From:" .$email );
}
?>  