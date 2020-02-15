//document.location.reload();

/*Collapsable Menu - Scrolling Changes */
$(document).ready(function () {
	// run test on initial page load
	checkSize();
	scrollLogo();
	shiftMenu();
	// run test on resize of the window
	$(window).resize(checkSize);
	$(window).resize(scrollLogo);
	$(window).resize(shiftMenu);
});

function reset(element) {
	$(element).removeAttr('style');
	$(window).scroll(function () {
		$(element).removeAttr('style');
	});
}


//Shifting Menu Functions
function scrollLogo() {
	if ($("#mobileTest-Home").css("display") == "none") {
		function runLogo() {
			var scroll = $(window).scrollTop();
			var logoWidth = 400;
			var changeWidth = logoWidth - (scroll * 2);
			if (changeWidth < 90) {
				changeWidth = 90;
			}

			$('.logo-shift').width(changeWidth);

		}
		runLogo();
		$(window).scroll(function () {
			runLogo();
		});
	} else if ($("#mobileTest-Home").css("display") == "block") {
		reset('*');
	}
}

function shiftMenu() {
	if ($("#mobileTest-Home").css("display") == "none") {
		function runShift() {
			var scroll = $(window).scrollTop();
			//Shift Menu to the Left
			var changePos = scroll * 0.75;
			if (changePos > 110) {
				changePos = 110;
			}
			if (changePos < 7) {
				changePos = 7;
			}
			var Pos = (" " + changePos + "px");


			//Adjust Top Position of Menu
			var menuTop = 200;
			var changeTop = menuTop - scroll;
			if (changeTop < 0) {
				changeTop = 0;
			}

			$('#collapsable-menu').css({
				left: Pos
			});
			$('#collapsable-menu').css({
				top: changeTop
			});
			$('#div').css({
				top: 0
			});
			//Adjust Height of Background
			$('.menu-wrapper').height(changeTop + 67);
		}
		runShift();

		$(window).scroll(function () {
			runShift();
		});
	} else if ($("#mobileTest-Home").css("display") == "block") {
		reset('*');
	}
}


//Background Color Change on Scroll
function checkSize() {
	function whiteLarge(scroll) {
		if (scroll >= 150) {
			$('#menu').addClass('black')
		} else {
			$('#menu').removeClass('black')
		}
	}
	function whiteMobile(scroll) {		
		if (scroll >= 195) {
			$('#menu').addClass('black')			
		} else {
			$('#menu').removeClass('black')
			}
	}
	function truckLarge(scroll) {
		if (scroll >= 200) {
			$('#menu').addClass('black')
			$('#menu').removeClass('menu-resize')
			$('#logo-resize').removeClass('logo-resize') // Work On This
		} else {
			$('#menu').removeClass('black')
			$('#menu').addClass('menu-resize')
			$('#logo-resize').addClass('logo-resize')
		}
	}
	function truckMobile(scroll) {
		if (scroll >= 5) { 	$('#menu').addClass('black')
		} else { $('#menu').removeClass('black')
		}
	}

	function scrollTest() {
		var scroll = $(window).scrollTop();
		if ($("#mobileTest-About").css("display") == "none") {
			whiteLarge(scroll);
		} else if ($("#mobileTest-About").css("display") == "block") {
			whiteMobile(scroll);
		} else if ($("#mobileTest-Home").css("display") == "none") {
			truckLarge(scroll);
		} else if ($("#mobileTest-Home").css("display") == "block") {
			truckMobile(scroll);
		}
	}
	
	scrollTest();
	$(window).scroll(function () {
		scrollTest();
	});

}


(function (window, document) {
	var menu = document.getElementById('menu'),
		WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange' : 'resize';

	function toggleHorizontal() {
            [].forEach.call(
			document.getElementById('menu').querySelectorAll('.menu-can-open'),
			function (el) {
				el.classList.toggle('pure-menu-horizontal');
				el.classList.toggle('hidden');
			}
		);
	}


	function toggleMenu() {
		// set timeout so that the panel has a chance to roll up
		// before the menu switches states
		if (menu.classList.contains('open')) {
			setTimeout(toggleHorizontal, 500);
		} else {
			toggleHorizontal();

		}
		menu.classList.toggle('open');
		document.getElementById('toggle').classList.toggle('x');
	}

	function closeMenu() {
		if (menu.classList.contains('open')) {
			toggleMenu();

		}
	}

	document.getElementById('toggle').addEventListener('click', function (e) {
		toggleMenu();
		e.preventDefault();
	});

	window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})(this, this.document);
