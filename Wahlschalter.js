var type = getCookie('Vorlage1');
var sugar = document.getElementById('sugar');
sugar.innerHTML ='<select onchange="changeskin(this.options[this.selectedIndex].value);window.location.reload();"><option> Wechsel den Style </option><option value="wert1"> Originalstyle </option><option value="wert2"> Style2 </option><option value="wert3"> Style3 </option></select>';

if (type == 'wert1')
{
   document.write('<link rel="stylesheet" type="text/css" href="http://nocheintestforum.forumieren.com">');
}
else if (type == 'wert2')
{
   document.write('<link rel="stylesheet" type="text/css" href="http://nocheintestforum.forumieren.com/201616-ltr.css">');
}
else if (type == 'wert3')
{
   document.write('<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/smalltalklvl2/weihnachtsstyle/master/meinstyle.css">');
}

function changeskin(change) {
   var scheme = change;
   var name = 'Vorlage1';
   var pathname = location.pathname;
   //var myDomain = pathname.substring(0,pathname.lastIndexOf('/')) +'/';
   var ExpDate = new Date ();
   ExpDate.setTime(ExpDate.getTime() + (180 * 24 * 3600 * 1000));
   setCookie(name,scheme,ExpDate,'/');
}
function getCookie(name){
   var cname = name + "=";
   var dc = document.cookie;
   if (dc.length > 0) {
      begin = dc.indexOf(cname);
      if (begin != -1) {
         begin += cname.length;
         end = dc.indexOf(";", begin);
         if (end == -1) end = dc.length;
         return unescape(dc.substring(begin, end));
      }
   }
   return null;
}
function setCookie(name, value, expires, path, domain, secure) { 
   document.cookie = name + "=" + escape(value) +
   ((expires == null) ? "" : "; expires=" + expires.toGMTString()) +
   ((path == null) ? "" : "; path=" + path) +
   ((domain == null) ? "" : "; domain=" + domain) +
   ((secure == null) ? "" : "; secure");
}
