$().ready(() => {
    $("#btn").click(function()
    {
        $("html").toggleClass("red");
    });
});

$().ready(() => {
    $("#btn2").click(function()
    {
        $("#parr").toggleClass("blue");
    });
});