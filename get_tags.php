<?php
ini_set('display_errors',true);
error_reporting(E_ALL);
require_once 'Instagram-Grabber/vendor/autoload.php';
header('content-type:json');
header('Access-Control-Allow-Origin:*');
$media = Bolandish\Instagram::getMediaByHashtag("bforbathel",350 );
$media2 = Bolandish\Instagram::getMediaByHashtag("nolawedding",100);
foreach($media as $bforbathel){
	array_push($media2,$bforbathel);
}
/*echo "<pre>";
echo var_dump(($media));
echo "</pre>";*/
foreach($media2 as $row){
	$images[]= array(
		'src'=>$row->display_src,
		//'caption'=>$row->caption,
		'height'=>$row->dimensions->height,
		'width'=>$row->dimensions->width
		);
}

echo json_encode($images); ?>
