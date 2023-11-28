const clickMe = () => {
    alert("Thanks you!! Have a nice day!")
}
$(document).ready(function () {
    // $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
});