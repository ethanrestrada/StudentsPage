window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		rewind: true,
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			breakpoint: 450,
			settings: {
				rewind: true,
				slidesToShow: 1,
				slidesToScroll: 1
			}
			},{
			breakpoint: 768,
			settings: {
				rewind: true,
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});
});