$(document).ready(function () {
	const gnbNav = $(".gnb-nav");
	const mobileGnbMenu = $(".mobile-gnb-menu");
	const webDeps2 = $(".deps2");

	const mainGnb = $(".main-gnb");
	const mobileBtn = $(".mobile-btn");
	const mobileGnbBtn = $(".mobile-gnbBtn");
	const mgnbCloseBtn = $(".mgnb-closeBtn");

	const languageBtn = $(".langBtn");
	const btnWrap = $(".btn-wrap");

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
});
