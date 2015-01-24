/**
* 	@author: Vehbi AKDOGAN
* 	@mail: mf.leqelyy@gmail.com || info@vehbiakdogan.com
* 	@website: vehbiakdogan.com
*/
(function($){
	$.fn.akdoganSlider = function(ayarlar) {
		
		var conf = $.extend({
			width : "100%",
			height: "100%",
			ileriGeriOk : true,
			geriOkHtml: "Geri",
			ileriOkHtml: "İleri",
			noktaHtml: null,
			autoPlay: false
		},ayarlar);
		
		return this.each(function(){
			$(this).wrap('<div id="akdoganSlider"></div>');
			var slider = $("#akdoganSlider"),
				sliderUl = slider.find("ul")
				sliderLi = sliderUl.find("li"),
				sliderW = sliderLi.width(),
				sliderSayi = sliderLi.size(),
				aktif = 0;
				sliderUl.width(sliderSayi * sliderW);
			slider.css({
				"width": conf.width,
				"height":conf.height,
				"overflow":"hidden",
				"position":"relative"
			});
			// slider Sayısı
			
			slider.append('<div class="akdoganSliderNokta"></div>');
			var sliderNokta = $(".akdoganSliderNokta");
			for(i=1;i<=sliderSayi;i++) {
				nokta = conf.noktaHtml ? conf.noktaHtml : i;
				sliderNokta.append(' <a href="#"> ' + nokta + '</a>');
			}
			sliderNokta.find("a").filter(":first-child").addClass("aktif");
			
			
			// ileri Geri Oklar 
			
			if(conf.ileriGeriOk) {
				// okları Göster
				slider.append(' <div class="akdoganSliderOklar"><a class="geriOk" href="#">' + conf.geriOkHtml + '</a><a class="ileriOk" href="#">'+ conf.ileriOkHtml +'</a></div>');
				
			}
			$.sliderDegis = function(aktif) {
				sliderUl.stop().animate({marginLeft:(-aktif * sliderW ) + "px"});
				sliderNokta.find("a").removeClass("aktif");
				sliderNokta.find("a").eq(aktif).addClass("aktif");
			}
			$("a.ileriOk").click(function(){
				aktif = ( aktif < sliderSayi-1 ) ? ++aktif : 0;
				$.sliderDegis(aktif);
				return false;
			});
			
			$("a.geriOk").click(function(){
				aktif = aktif > 0 ? --aktif : aktif;
				$.sliderDegis(aktif);
				return false;
			});
			$(".akdoganSliderNokta a").on("click",function(){
				$.sliderDegis($(this).index());
				return false;
			});
			
			if(conf.autoPlay) {
				setInterval(function(){$("a.ileriOk").trigger("click");},3000);
				
			}
			
			
			
			
		});
		
		
		
		
	}
	

	
})(jQuery);
