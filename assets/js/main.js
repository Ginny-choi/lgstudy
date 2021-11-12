$(document).ready(function () {
	const $window = $(window);
	//헤더 메뉴
	const gnbNav = $(".gnb-nav");
	const mobileGnbMenu = $(".mobile-gnb-menu");
	const webDeps2 = $(".deps2");

	const mainGnb = $(".main-gnb");
	const mobileBtn = $(".mobile-btn");
	const mobileGnbBtn = $(".mobile-gnbBtn");
	const mgnbCloseBtn = $(".mgnb-closeBtn");
	//언어설정
	const languageBtn = $(".langBtn");
	const btnWrap = $(".btn-wrap");
	//메인 이미지 화면
	const mainImg = $(".mainImg");
	let cnt = 0;
	//csr 화면
	const csrListBox = $(".csr-list-box");

	mainGnb.on({
		mouseenter: function () {
			webDeps2.hide(200);
			$(this).next().show(200);
		},
	});
	gnbNav.on({
		mouseleave: function () {
			webDeps2.hide(200);
		},
	});

	mobileBtn.on({
		click: function (e) {
			e.preventDefault();
			mobileGnbMenu.show();
		},
	});

	mobileGnbBtn.on({
		click: function (e) {
			e.preventDefault();
			$(this).toggleClass("active");
			$(this).next().slideToggle(300);
		},
	});

	mgnbCloseBtn.on({
		click: function (e) {
			e.preventDefault();
			mobileGnbMenu.hide();
		},
	});

	languageBtn.on({
		click: function () {
			$(this).next().slideToggle(200);
			btnWrap.toggleClass("on");
		},
	});

	//main 이미지 슬라이드
	function nextSlide() {
		mainImg.css({ zIndex: 1 });
		mainImg.eq(cnt == 0 ? 3 : cnt - 1).css({ zIndex: 3 });
		mainImg.eq(cnt).css({ zIndex: 4, opacity: 0 }).stop().animate({ opacity: 1 }, 1000);
	}
	function countFn() {
		cnt++;
		if (cnt > 3) {
			cnt = 0;
		}
		nextSlide();
	}

	function autoPlay() {
		setInterval(countFn, 4000);
	}
	autoPlay();

	///미디어

	var swiper = new Swiper(".newsSwiper", {
		slidesPerView: 2,
		spaceBetween: 20,
		slidesPerGroup: 2,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			1025: {
				slidesPerView: 4,
				spaceBetween: 20,
				slidesPerGroup: 4,
			},
		},
	});

	//crs
	var swiperCSR = new Swiper(".csrSwiper", {
		slidesPerView: 1,
		slidesPerGroup: 1,
		keyboard: {
			enabled: true,
		},
		pagination: {
			el: ".swiper-pagination2",
			clickable: true,
		},
		breakpoints: {
			1025: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
		},
	});

	function csrimgHeight() {
		const csrBg = $(".csr-bg");
		let csrBgW = csrBg.innerWidth();
		let csrBgH = csrBgW * 0.618261826;

		if ($window.innerWidth() < 1025) {
			csrListBox.css({ height: csrBgH });
		} else if ($window.innerWidth() >= 1025) {
			csrListBox.removeAttr("style");
		}
	}
	csrimgHeight();
	function resizeFn() {
		$window.resize(function () {
			csrimgHeight();
		});
	}
	setTimeout(resizeFn, 500);
});
