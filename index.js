module.exports['default'] = (function (element = document, threshold = 50) {
  let startingX = 0;
  let startingY = 0;
  let movementX = 0;
  let movementY = 0;
  let target;

  const updateMovement = (e) => {
    const { clientX, clientY } = e.touches[0];

    movementX = startingX - clientX;
    movementY = startingY - clientY;
  };

  element.addEventListener('touchstart', (e) => {
    const { clientX, clientY } = e.touches[0];
    target = e.target;

    startingX = clientX;
    startingY = clientY;

    document.addEventListener('touchmove', updateMovement);
  });

  document.addEventListener('touchend', (e) => {
    document.removeEventListener('touchmove', updateMovement);

    let eventType;

    if (movementX > threshold && movementX >= movementY) eventType = 'swipeleft';
    else if (movementY > threshold && movementY >= movementX) eventType = 'swipeup';
    else if (movementX < -threshold && movementX <= movementY) eventType = 'swiperight';
    else if (movementY < -threshold && movementY <= movementX) eventType = 'swipedown';
    else return;

    const event = new Event(eventType, { bubbles: true });
    target.dispatchEvent(event);
  });
})();

// swipe();
