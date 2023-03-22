window.onscroll = function () { downHill() };

function downHill() {
    if (document.documentElement.scrollTop > 250) {
        document.getElementById("con").className = "schedule_header"
    }
    else {
        document.getElementById("con").className = "schedule_header_fix"
    }
}