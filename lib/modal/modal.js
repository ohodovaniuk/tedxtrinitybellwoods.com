function toggleSlickSliderModal(slickType, modalID, path, images) {
    if (slickType == 1) {
        if (!$(modalID).hasClass('modal-show')) {
            showModal(modalID, path, images);
            $('.slick4-arrow').hide();
        } else {
            hideModal(modalID);
        }
    }
}

// Create the modal containing the slide show of images
function showModal(modalID, path, images) {
    var imageArray = images.split('/');
    var imageExists1;
    var html = '<section class="slide1"><div class="slick1-wrap"><div class="slick1">';
    for (var i = 1; i <= imageArray.length; i++) {
        html += '<div class="slick1-item-img"><img src="' + path + i + '.jpg" alt=""></div>'; //.jpg only
    }
    html += '</div></div></section>';
    $('.modal-content').append(html); //add html content into modal 

    slick1(); // From slick.js

    // Display the modal
    $(modalID).addClass('modal-show');
    $('.modal-overlay').addClass('modal-overlay-show');
}

function hideModal(modalID) {
    $('.slide1').remove(); //remove html content from modal 

    // Hide the modal 
    $(modalID).removeClass('modal-show');
    $('.modal-overlay').removeClass('modal-overlay-show');
}

$(document).click(function(event) {
    // If you click on anything except the modal, close the modal
    if (!$(event.target).closest(".modal, .modal-show-button").length) {
        hideModal('#slick1-modal');
        $('.slick4-arrow').show();
    }
});