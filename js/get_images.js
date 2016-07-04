
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function imager(){

	this.images_by_size = [];
	this.images_125 = [];
	this.images_1   = [];
	this.images_67  = [];
	this.base = 400;
	this.min  = 0;
	this.max  = 350/2;
	this.update_images = function(data){
		//var $images = $('img');
		//console.log(data)
		var $img_125 = $('div.image_column:nth-child(odd) img');
		var $img_67  = $('div.image_column:nth-child(even) img ');
		for(var i = 0; i < data.length ;i++){
			 this.sort_images(data[i]);
		}
		for(var i = 0; i < this.images_125.length && i < 100; i++){
			console.log(125)
			$($img_125[i]).attr('src',this.images_125[getRandomInt(this.min, this.images_125.length-1)].src);
		}
		for(var i = 0; i < this.images_67.length&& i < 100 ; i++){
			console.log(67)
			$($img_67[i]).attr('src',this.images_67[getRandomInt(this.min, this.images_67.length-1)].src);
		}
		this.images_67=[];
		this.images_125=[]
		/*
		$('.image_holder:nth-child(odd) img').each(
			function(index){
				$(this).attr('src',this.images_125[index]);
			})
		$('.image_holder:nth-child(even) img').each(
			function(index){
				$(this).attr('src',this.images_67[index]);
			})*/

	}

	this.ratio = function(height,width){
		var aspect = height/width;
		return aspect.toFixed(2);
	}

	this.sort_images = function($image){
		size = this.ratio($image.height,$image.width);
		if(size - .67 < .0001){
			//console.log(67);
			this.images_67.push($image)
		}else if(size - 1 < .0001){
			//console.log(1);
			this.images_1.push($image);
		}
		else if(size -1.25 < .0001){
			//console.log(125);
			this.images_125.push($image);
		}
	}
	this.get_images = function(){
		return this.images_by_size;
	}

}

var wedding_imager = new imager();
var images;
var updater;
$(document).ready(
	function(){
		$.getJSON('http://amberandbrice.com/wedding_imager/get_tags.php',function(data){window.images = data; wedding_imager.update_images(images);var updater = setInterval(
	function(){wedding_imager.update_images(images);},10000)})
	}
)

/*
var updater =
setInterval(function(){
	$.getJSON('http://amberandbrice.com/wedding_imager/get_tags.php',function(data){;wedding_imager.update_images(data)})}
	,10000);*/
/*
$($images[i]).attr('src',data[i]['src']);
		var aspect = ratio(data[i]['height'],data[i]['width'])
		$($images[i]).parent().css({'height':Math.round(base*aspect),'width':Math.round(base/aspect)});
		$($images[i]).css({'height':Math.round(base*aspect),'width':Math.round(base/aspect)});

		$($images[i]).siblings().html(data[i]['caption'])*/
