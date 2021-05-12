"use strict";

window.onbeforeunload = function () {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = document.getElementsByTagName('form')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var form = _step.value;
      form.reset();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

function hover(element) {
  var hovImg;

  if (element.classList.contains('row1')) {
    hovImg = '/imgs/vpnflixhover-min.gif';
  } else if (element.classList.contains('row2')) {
    hovImg = '/imgs/firewallhover-min.gif';
  }

  if (element.classList.contains('row3')) {
    hovImg = '/imgs/hotp-min.gif';
  }

  if (element.classList.contains('row4')) {
    hovImg = '/imgs/travel-email-min.gif';
  }

  element.querySelector('.row-img').setAttribute('src', hovImg);
}
/*function unhover(element) {
  if (element.classList.contains('row1')) {
    element.querySelector('img').setAttribute('src', '/imgs/vpnflix-still.png');
  }
  else if (element.classList.contains('row2')) {
    element.querySelector('.row-img').setAttribute('src', '/imgs/firewall.png');
  }
  else if (element.classList.contains('row3')) {
    element.querySelector('img').setAttribute('src', '/imgs/hotp-still.png');
  }
  else if (element.classList.contains('row4')) {
    element.querySelector('.row-img').setAttribute('src', '/imgs/travel-still.png');
  }
}*/


function unhover(element) {
  var unhovImg;

  if (element.classList.contains('row1')) {
    unhovImg = '/imgs/vpnflix-still.png';
  } else if (element.classList.contains('row2')) {
    unhovImg = '/imgs/firewall.png';
  } else if (element.classList.contains('row3')) {
    unhovImg = '/imgs/hotp-still.png';
  } else if (element.classList.contains('row4')) {
    unhovImg = '/imgs/travel-still.png';
  }

  element.querySelector('.row-img').setAttribute('src', unhovImg);
}