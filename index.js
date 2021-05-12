window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

  function hover(element) {
    let hovImg;

    if (element.classList.contains('row1')) {
      hovImg = '/imgs/vpnflixhover-min.gif';
    }
    else if (element.classList.contains('row2')) {
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
  let unhovImg;
  if (element.classList.contains('row1')) {
    unhovImg='/imgs/vpnflix-still.png';
  }
  else if (element.classList.contains('row2')) {
    unhovImg='/imgs/firewall.png';
  }
  else if (element.classList.contains('row3')) {
    unhovImg= '/imgs/hotp-still.png';
  }
  else if (element.classList.contains('row4')) {
    unhovImg= '/imgs/travel-still.png';
  }
  element.querySelector('.row-img').setAttribute('src', unhovImg);
}
