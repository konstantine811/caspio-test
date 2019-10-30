(() => {
  const btnMenu = document.getElementById("btn-menu");
  const elMenuArray = document.querySelectorAll(".menu-item");
  const profileMenu = document.getElementById("profile-menu");
  const btnBackDashboard = document.getElementById("btn-back-dashboard");
  const dropDown = document.getElementById("drop-down");

  const initToggle = elem => {
    const classList = elem.classList;
    if (classList.contains("hidden")) {
      classList.remove("hidden");
      classList.add("visible");
    } else {
      classList.remove("visible");
      classList.add("hidden");
    }
  };

  elMenuArray.forEach(function(elem) {
    elem.addEventListener(
      "click",
      function(e) {
        initToggle(profileMenu);
      },
      false
    );
  });

  btnBackDashboard.addEventListener(
    "click",
    e => {
      e.preventDefault();
      initToggle(profileMenu);
    },
    false
  );

  btnMenu.addEventListener(
    "click",
    e => {
      e.preventDefault();
      const menu = document.getElementById("menu");
      initToggle(menu);
    },
    false
  );

  dropDown.addEventListener("click", e => {
		e.preventDefault();
		const thisElem = e.target;
		if(thisElem.classList.contains('open')) {
			thisElem.classList.remove('open');
		} else {
			thisElem.classList.add('open');
		}
	}, false);
})();
