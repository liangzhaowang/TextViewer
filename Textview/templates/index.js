function search(){
    var keyword = $("#keyword").text();
    alert(keyword)
    $.ajax({
        url: "search/" + keyword + "/",
        success: function( result ) {
            alert(result);
        }
    });
}