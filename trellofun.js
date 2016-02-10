$(document).ready(function(){
    console.log("READY");
    var $todayList = $(".list").has("h2:contains('Today')");
    $todayList.addClass("today-list");
});
