
function lightbox(e) {
    "use strict";

    var src = e.src;
    console.log('src done');
    var lighthtml = '<div id="lightbox" onclick="closelightbox()">' +
        '<p>Click to close</p>' +
        '<div id="content">' +
        '<img src="' + src + '" />' +
        '</div>' +
        '</div>';

    console.log('lighthtml done');
    if($('#lightbox').length > 0){
        $('#content').html('<img src="' + src + '" />');
        $('#lightbox').show();

    } else {
        $('#mid_content').append(lighthtml);
    };
};

function closelightbox(){
    $('#lightbox').hide();


};
