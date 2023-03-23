window.onscroll = function () { downHill() };

function downHill() {
    if (document.documentElement.scrollTop > 250) {
        document.getElementById("con").className = "schedule_header"
    }
    else {
        document.getElementById("con").className = "schedule_header_fix"
    }
}

function message_make() {
    var page = document.getElementById('message_page');
    if (page.style.display === 'none') {
        page.style.display = "block"
    }
    else {
        page.style.display = "none"
    }
}