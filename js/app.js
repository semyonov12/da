document.addEventListener("DOMContentLoaded", function (event) {
	function initSliders() {
		// Перечень слайдеров
		// Проверяем, есть ли слайдер на стронице
		if (document.querySelector('.boxes-slider')) { // Указываем скласс нужного слайдера
			new Swiper('.boxes-slider', { // Указываем скласс нужного слайдера
				observer: true,
				observeParents: true,
				slidesPerView: 4,
				spaceBetween: 28,
				autoHeight: false,
				speed: 500,

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				},


				breakpoints: {
					320: {
						slidesPerView: 1.2,
						spaceBetween: 20,
					},
					480: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					820: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1120: {
						slidesPerView: 4,
						spaceBetween: 28,
					},
				},

			});
		}

		if (document.querySelector('.boxes-need__slider')) { // Указываем скласс нужного слайдера
			new Swiper('.boxes-need__slider', { // Указываем скласс нужного слайдера
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 20,
				autoHeight: false,
				speed: 500,

				// Кнопки "влево/вправо"
				navigation: {
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				},

			});
		}
	}

	window.addEventListener("load", function (e) {
		// Запуск инициализации слайдеров
		initSliders();
	});


	// видео
	const buttonPlay = document.querySelector('.boxes-about__play');
	const buttonPlayCareer = document.querySelector('.boxes-need__play');

	if (buttonPlay) {
		buttonPlay.addEventListener("click", function (e) {
			const video = document.querySelector('.boxes-about__video video');
			const blockParent = document.querySelector('.boxes-about__video');

			video.play();
			video.controls = true;
			blockParent.classList.add('boxes-about__video-act');
		});
	}

	// видео 2
	if (buttonPlayCareer) {
		buttonPlayCareer.addEventListener("click", function (e) {
			const video = document.querySelector('.boxes-need__video video');
			const blockParent = document.querySelector('.boxes-need__video');

			video.play();
			video.controls = true;
			blockParent.classList.add('boxes-need__video-act');
		});
	}

});



