	


$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#212121', '#212121', '#212121','#212121', '#212121'],
		'navigation': true,
		 loopBottom: true,
		afterLoad: function(anchorLink, index){
				console.log(index);
				if(index == 1){
					$('#nav').fadeOut().slideDown(500);
					$('.section1').find('.slideOne h3').delay(1000).fadeIn().transition({
					    perspective: '500px',
					    rotateY: 360
					},1000);
					$('.section1').find('.slideOne p').delay(1000).fadeIn().transition({
					    perspective: '500px',
					    rotateY: 360
					},1000);
					$('.section1').find('.slideTwo h3').delay(3000).fadeIn(1000).transition({
					    perspective: '500px',
					    rotateY: 360
					},1000);
					$('.section1').find('.slideTwo p').delay(3000).fadeIn(1000).transition({
					    perspective: '500px',
					    rotateY: 360
					},1000);
				}
				if(index == 2){
					$('#nav').fadeOut().slideDown(500);
					$('.p2_nav_l').transition({ x: 50, delay: 0 }).transition({ x: 0 });					
				}
				if(index == 3){
					$('.p3_main').find('li:eq(0)').animate({
						top: '0'
					}, 700);
					$('.p3_main').find('li:eq(1)').delay(100).animate({
						top: '0'
					}, 700);
					$('.p3_main').find('li:eq(2)').delay(150).animate({
						top: '0'
					}, 700);
				}
				if(index == 4){
					$('#nav').fadeOut().slideDown(500);
					$('.p4_nav_l').transition({ x: 50, delay: 0 }).transition({ x: 0 });
				}
				if(index == 5){
					$('#nav').fadeOut().slideDown(500);
					$('.p5_nav_l').transition({ x: 50, delay: 0 }).transition({ x: 0 });
					$('.p5_main .one').animate({
						left: '0'
					}, 700);
					$('.p5_main .two').animate({
						right: '0'
					}, 700);
				}
				if(index == 6){
					$('#nav').fadeOut().slideDown(500);
					$('.contact_l').delay(500).animate({
						bottom: '0'
					}, 700);
					$('#nav').css('background','#4E4E4E');
				}
		},
		onLeave: function(index, direction,nextIndex){
				if(index == '1'){
					$('.section1').find('h3').fadeOut();
					$('.section1').find('p').fadeOut();
				}
				if(index == '2'){
					
				}
				if(index == '3'){
					$('.p3_main').find('li:eq(0)').delay(120).animate({
						top: '-120%'
					}, 500);
					$('.p3_main').find('li:eq(1)').delay(150).animate({
						top: '-120%'
					}, 500);
					$('.p3_main').find('li:eq(2)').delay(180).animate({
						top: '-120%'
					}, 500);
				}
				if(index == '4'){
				}
				if(index == '5'){
					$('.p5_main .one').delay(100).animate({
						left: '120%'
					}, 700);
					$('.p5_main .two').delay(100).animate({
						right: '120%'
					}, 700);
				}
				if(index == '6'){
					$('.contact_l').delay(500).animate({
						bottom: '-120%'
					}, 700);
					$('#nav').css('background','none');
				}
		}
	});


	$('.p3_main').find('li').hover(function(){
		$(this).find('img').transition({ scale:1.2});
	},function(){
		$(this).find('img').transition({ scale:1});
	})

	$('.p2_main').find('li').hover(function(){
		$(this).find('img').transition({ scale:1.1});
	},function(){
		$(this).find('img').transition({ scale:1});
	})


	setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 15000);
		

	// 视频
 	jQuery(function($){
            $('.slideThree').vidbg({
                'mp4': 'video/aaa.mp4',
            }, {
                muted: true,
                loop: true,
                overlay: true,
            });
  	});

 	//轮播
 	LbMove('BoxUl','btnl','btnr','BoxSwitch',true,'left',true,305,1000,5000,4);

   		
});