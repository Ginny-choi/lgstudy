$(document).ready(function () {
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
		mainImg.eq(cnt).css({ zIndex: 4 }).stop().animate({ opacity: 0 }, 0).animate({ opacity: 1 }, 1000);
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

	var swiper = new Swiper(".swiper", {
		slidesPerView: 4,
		spaceBetween: 30,
		slidesPerGroup: 3,
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
	});
});
