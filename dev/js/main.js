var show = function (elem, timing) {
  var getHeight = function () {
    elem.style.display = 'block';
    var height = elem.scrollHeight + 'px';
    elem.style.display = '';
    return height;
  }

  var height = getHeight();
  elem.classList.add('is-visible');
  elem.style.height = height;

  window.setTimeout(function () {
    elem.style.height = '';
  }, timing);
};

var hide = function (elem, timing) {
  elem.style.height = elem.scrollHeight + 'px';

  window.setTimeout(function () {
    elem.style.height = '0';
  }, 1);

  window.setTimeout(function () {
    elem.classList.remove('is-visible');
  }, timing);
};

var toggle = function (elem, toggleBtn, timing) {
  if (elem.classList.contains('is-visible')) {
    hide(elem, timing);
    toggleBtn.classList.remove('active');
    return;
  }

  toggleBtn.classList.add('active');
  show(elem, timing);
}

var toggleElement = document.getElementsByClassName("toggle");


var initToggle = function (e) {
  var timing = 650;
  e.preventDefault();
  var content = this.parentNode.parentNode.nextElementSibling;
  if (content.classList.contains('toggle-content')) {
    toggle(content, this, timing);
  } else {
    return;
  }
}

for (var i = 0; i < toggleElement.length; i++) {
  toggleElement[i].addEventListener('click', initToggle, false)
}


