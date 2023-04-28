<?php
// Check for empty fields
if(
   empty($_POST['mail'])      ||
   !filter_var($_POST['mail'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
// Send email
$email_address = strip_tags(htmlspecialchars($_POST['mail']));
// Create the email and send the message
$to = 'gavricstanko@gmail.com';
$email_subject = "Website luminous.rs";
$email_body = "You have received a new subscriber from your website.\n\n"."Here are the details:\n\nEmail: $email_address";
$headers = "From: office@luminous.rs\n";
$headers .= "Reply-To: $email_address\n";   
$headers .= "Content-Type: text/plain; charset=UTF-8";
mail($to,$email_subject,$email_body,$headers);
return true; 
?>