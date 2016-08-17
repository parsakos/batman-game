
function moveBgLeft( x ) {
    return x - 4;
}

function keyUpHandler(
    keyCode = 0, upArrowPressed = false, rightArrowPressed = false, downArrowPressed = false, leftArrowPressed = false,
    shiftKeyPressed = false
) {
    if (keyCode === 38) {
        upArrowPressed = false;
    }
    if (keyCode === 39) {
        rightArrowPressed = false;
    }
    if (keyCode === 40) {
        downArrowPressed = false;
    }
    if (keyCode === 37) {
        leftArrowPressed = false;
    }
    if (keyCode === 16) {
        shiftKeyPressed = false;
    }
    return {
        upArrowPressed, rightArrowPressed, downArrowPressed, leftArrowPressed,
        shiftKeyPressed
    }
}

function keyDownHandler(
    keyCode = 0, upArrowPressed = false, rightArrowPressed = false,
    downArrowPressed = false, leftArrowPressed = false, shiftKeyPressed = false
) {
    if (keyCode === 38) {
        upArrowPressed = true;
    }
    if (keyCode === 39) {
        rightArrowPressed = true;
    }
    if (keyCode === 40) {
        downArrowPressed = true
    }
    if (keyCode === 37) {
        leftArrowPressed = true;
    }
    if (keyCode === 16) {
        shiftKeyPressed = true;
    }
    return {
        upArrowPressed,
        rightArrowPressed,
        downArrowPressed,
        leftArrowPressed,
        shiftKeyPressed
    }
}


function shouldJumpNow( y ) {
    return y - 100;
}
