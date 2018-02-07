<script language='javascript'>
//URL Shorener
//<![CDATA[
var key = window.location.href.split("go/")[1].replace("/","")
var urls={
    'cara-iklan-google':'http://www.101s.info/p/panduan-belajar-iklan-google-adwords.html',
    'blogging':"http://www.101s.info/search/label/blogging",
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
