let currentDroppable = null;
let canDrop = false;

// ball is same as document.getElementById('ball');
ball.onmousedown = function (event) {

    // console.log(ball.getBoundingClientRect());
    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;

    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ball.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ball.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
            if (currentDroppable) { // null when we were not over a droppable before this event
                leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) { // null if we're not coming over a droppable now
                // (maybe just left the droppable)
                enterDroppable(currentDroppable);
            }
        }
    }

    document.addEventListener('mousemove', onMouseMove);

    ball.onmouseup = function () {
        if (canDrop)
        {
            console.log("Goal!!")
            // let goal = document.getElementById('goal');
            goal.hidden = false;
            ball.hidden = true;
            gate.hidden = true;
            let para = document.querySelector('p');
            para.innerHTML = "WINNER!!";
            setTimeout(() => {
                chicken.hidden = false;
                setTimeout(() => {
                    goal.hidden = true;
                    chicken.hidden = true;
                    ball.hidden = false;
                    gate.hidden = false;
                    ball.style.left = 95+'px';
                    ball.style.top = 156+'px';
                    leaveDroppable(currentDroppable);
                    para.innerHTML = "Drag the ball.";

                }, 2500)
            }, 2000)
        }
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
    };
};

function enterDroppable(elem) {
    elem.style.background = 'pink';
    canDrop = true;
}

function leaveDroppable(elem) {
    elem.style.background = '';
    canDrop = false;
}

ball.ondragstart = function () {
    return false;
};