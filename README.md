# akdoganSlider
jQuery slider Eklentisi 


<h2> Kullanımı </h2> 

```html
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Vehbi Akdoğan Slider Eklentisi </title>
	<meta name="description" content="Vehbi Akdoğan Tab Eklentisi, jQuery tab eklentisi  " />
	<meta name="keyword" content="Vehbi Akdoğan Tab Eklentisi, jQuery tab eklentisi   " />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
	<meta name="author" content="Vehbi Akdogan" />
	<link rel="stylesheet" href="style/style.css?v=1.0" />
	<script type="text/javascript" src="http://vehbiakdogan.com/demolar/_jq.js"></script>
	<script type="text/javascript" src="js/akdoganSlider.jquery.js"></script>
	<script type="text/javascript">
		$(function(){
			$("ul.akdoganSlider").akdoganSlider({
				width:"1000px", // slider Genişlik default 100%
				height:"500px", // slider Yükseklik default 100%
				ileriGeriOk :true, // ileri Geri Nesneleri Görünsünmü ? true/false
				geriOkHtml: "Geri Git", // geri ok html
				ileriOkHtml: "İleri Git", // ileri ok html
				noktaHtml : "&spades;", // alt nokta html
				autoPlay: true
			});
			
		});
	</script>
</head>
<body>
	<div class="ortala">
		<ul class="akdoganSlider">
			<li> <img src="images/1.jpg" alt="" /> <p> İçerik Yazısı </p></li>
			<li> <img src="images/2.jpg" alt="" /> <p> İçerik Yazısı </p></li>
			<li> <img src="images/3.jpg" alt="" /> <p> İçerik Yazısı </p></li>
		</ul>
	</div>
</body>
</html>
```
<h2> Parametreler </h2>

<ul>
<li> <b>width:</b> Sliderin genişliğini belirtir. Default Değeri 100%</li>
<li> <b>height:</b> Sliderin yüksekliğini belirtir. Default Değeri 100%</li>
<li> <b>ileriGeriOk:</b>ileri Geri Okların Gösterilip Gösterilmeyeceğini Belirtir. Alabileceği değerler <b>True/False</b>. Default değeri <b>True</b.</li>
<li> <b>geriOkHtml:</b> Geri Okunun Htmlini belirtir Default Değeri <b>"Geri"</b> Dir. html kodu kullanabilirsiniz.</li>
<li> <b>ileriOkHtml:</b> İleri Okunun Htmlini belirtir Default Değeri <b>"İleri"</b> Dir. html kodu kullanabilirsiniz.</li>
<li> <b>noktaHtml:</b> Slider sayısını gösteren noktalardır. boş bırakırsanız sayı olarak görünecektir..</li>
<li> <b>autoPlay:</b>Sliderin Otomatik olarak Dönmesini Gösterir. alabileceği değerler <b>true/false</b>. Default Değeri <b>false</b>. </li>


<a href="http://vehbiakdogan.com/demolar/akdoganSlider/" target="_blank"><h2>DEMO</h2></a>
