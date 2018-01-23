String.prototype.replaceAll = function(a, b) {
    return this.replace(new RegExp(a,"gm"), b);
}
String.prototype.Trim = function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

$(document).ready(function(){

});
function search(){
    $("#lstResult").html('<a href="#" class="list-group-item active">查询结果</a>')
    var keyword = $("#keyword").val();
    $.ajax({
        url: "search/" + keyword + "/",
        success: function( result ) {
            JSON.parse(result)["result"].forEach(function(value){
                $("#lstResult").append("<a href='#' class='list-group-item' onclick='getcontent(this)'>" + value + "</a>");
            });
        }
    });
}
function getcontent(obj){
    $.ajax({
        url: "getcontent/" + $(obj).text() + "/",
        success: function( result ) {
            kw = $("#keyword").val();
            kws = kw.Trim().split(" ")
            result = result.replaceAll("\n", "<br />")
            kws.forEach(function(value){
                result = result.replaceAll(value, "<font style='color:red; font-size: 14pt'>" + value + "</font>");
            })

            $("#content").html(result);
        }
    });
}