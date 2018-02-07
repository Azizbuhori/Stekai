<script language='javascript'>
//URL Shorener
//<![CDATA[
var key = window.location.href.split("go/")[1].replace("/","")
var urls={
    '001':'https://borutosubtitleindonesia2.blogspot.co.id/2018/02/boruto-episode-01-sub-indo.html',
}
if(key){
    if(urls[key]){
        window.location.href=urls[key]
    }else{
        document.write("'"+key+"' not found :(");
    }
}
//]]>
</script>
