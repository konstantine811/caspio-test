(() => {
	const btnMenu = document.getElementById("btn-menu");
	const elMenuArray = document.querySelectorAll('.menu-item');
	const profileMenu = document.getElementById('profile-menu');
	const btnBackDashboard = document.getElementById('btn-back-dashboard');

  const initToggle = (elem) => {
    const classList = elem.classList;
    if (classList.contains("hidden")) {
			classList.remove("hidden");
			classList.add( "visible");
    } else {
			classList.remove("visible");
			classList.add("hidden");
    }
	};



	elMenuArray.forEach(function(elem) {
		elem.addEventListener('click', function(e) {
			initToggle(profileMenu)
		}, false);
	});

	btnBackDashboard.addEventListener('click', e => {
		e.preventDefault();
		initToggle(profileMenu)
	}, false);

  btnMenu.addEventListener(
    "click",
    e => {
      e.preventDefault();
      const menu = document.getElementById("menu");
      initToggle(menu);
    },
    false
  );
})();
