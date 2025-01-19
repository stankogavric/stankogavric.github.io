<?php
// Check for empty fields
if(
   empty($_POST['email'])     ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$email_address = strip_tags(htmlspecialchars($_POST['email']));
   
// Create the email and send the message
$to = 'pilatesstudioreset@gmail.com';
$email_subject = "New subscription";
$email_body = "You have received a new subscription from your website.\n\n"."Here are the details:\n\nEmail: $email_address";
$headers = "From: noreply@resetpilates.rs\n";
$headers .= "Reply-To: $email_address\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";
if(mail($to,$email_subject,$email_body,$headers))
{
   $myobj=array('status'=>'success');
   echo json_encode($myobj);
}
else{
   $myobj=array('status'=>'error');
   echo json_encode($myobj);
}
return true;         
?>