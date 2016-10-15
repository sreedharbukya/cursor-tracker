document.addEventListener("mousemove", mouseMovementHandler);

function mouseMovementHandler(event) {
    addMouseImage(event.clientX, event.clientY)
}


function addMouseImage(xPosition, yPosition) {
    var x = xPosition + 'px';
    var y = yPosition + 'px';
    var img = $('<img src="http://www.szczepanek.pl/icons.grass/v.0.1/img/standard/gui-pointer.gif" alt="myimage" />');
    var div = $('<div>').css({
        "position": "absolute",
        "left": x,
        "top": y
    });
    div.append(img);
    $(document.body).append(div);
}