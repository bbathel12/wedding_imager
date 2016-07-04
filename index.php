<?php
use MetzWeb\Instagram\Instagram;
include('/var/www/Instagram-PHP-API/src/Instagram.php');
include('/var/www/Instagram-PHP-API/src/InstagramException.php');
 ini_set('display_errors',true);
 error_reporting(E_ALL);
$instagram = new Instagram(array(
    'apiKey'      => getenv('CLIENT_ID'),
    'apiSecret'   => getenv('CLIENT_SECRET'),
    'apiCallback' => 'http://www.amberandbrice.com/wedding_imager/success.php'
));
$scopes = array( 'basic','relationships','likes','comments','public_content');
echo "<a href='".$instagram->getLoginUrl($scopes )."'>Login with Instagram</a>";

