<?php
ini_set('display_errors',true);
 error_reporting(E_ALL);
use MetzWeb\Instagram\Instagram;
include('/var/www/Instagram-PHP-API/src/Instagram.php');
include('/var/www/Instagram-PHP-API/src/InstagramException.php');
$instagram = new Instagram(array(
    'apiKey'      => getenv('CLIENT_ID'),
    'apiSecret'   => getenv('CLIENT_SECRET'),
    'apiCallback' => 'http://www.amberandbrice.com/wedding_imager/success.php'
));
/*$instagram = new Instagram(getenv('CLIENT_ID'));
$result = $instagram->getPopularMedia();*/
$code = $_GET['code'];
// check whether the user has granted access
if (isset($code)) {
    // receive OAuth token object
    $data = $instagram->getOAuthToken($code);
    //$username = $data->user->username;
    // store user access token
    $instagram->setAccessToken($data);
    // now you have access to all authenticated user methods
    $result    = $instagram->getUserMedia();
    $tagresult = $instagram->getTagMedia('louisiana');
} else {
    // check whether an error occurred
    if (isset($_GET['error'])) {
        echo 'An error occurred: ' . $_GET['error_description'];
    }
}

var_dump($result);
var_dump($tagresult);