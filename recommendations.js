(function(window){var nextSeq=0;function sendRequest(url,callback){var req=createXMLHTTPObject();if(!req)return;var method="GET";req.open(method,url,true);req.onreadystatechange=function(){if(req.readyState!=4)return;if(req.status!=200&&req.status!=304){if(window.console&&window.console.warn){console.warn('Econsultancy recommednations - HTTP error '+ req.status);}
return;}
callback(req);}
if(req.readyState==4)return;req.send();}
var isLegacyIe=(function(){var d=document.createElement('div');d.innerHTML="<!--[if lt IE 10]><i></i><![endif]-->";return 1==d.getElementsByTagName("i").length;})();var XMLHttpFactories=[function(){if(isLegacyIe){var xdr=new window.XDomainRequest(),that;if(!xdr){throw"could not create XDomainRequest";}
xdr.onprogress=function(){};xdr.onerror=function(){that.status=500;that.readyState=4;that.onreadystatechange();};xdr.ontimeout=function(){that.status=500;that.readyState=4;that.onreadystatechange();};xdr.onload=function(){that.status=200;that.responseText=xdr.responseText;that.readyState=4;that.onreadystatechange();};that={status:0,readyState:0,open:function(method,url,async){xdr.open(method,url);that.readyState=1;},onreadystatechange:function(){},send:function(){xdr.send();}};return that;}else{return new XMLHttpRequest();}},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];function createXMLHTTPObject(){var xmlhttp=false;for(var i=0;i<XMLHttpFactories.length;i++){try{xmlhttp=XMLHttpFactories[i]();}
catch(e){continue;}
break;}
return xmlhttp;}
function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;}
if(typeof(window.Econsultancy)==='undefined'){window.Econsultancy={};}
window.Econsultancy.recommendationsLoaded=function(iframe){iframe.height=iframe.contentWindow.document.body.scrollHeight+"px";};window.Econsultancy.fetchRecommendations=function(config,callback){config.idioIdCookie=config.idioIdCookie||'iv';config.contentUrl=config.contentUrl||window.location;config.format=config.format||'default';config.resizeFrame=typeof(config.resizeFrame)==='undefined'?true:config.resizeFrame;var queryParams={'contentUrl':config.contentUrl,'site':config.site,'format':config.format};var idioId=readCookie(config.idioIdCookie);if(idioId){queryParams['idioId']=idioId;}
if(config.showInfo){queryParams['showInfo']='1';}
var qs=(function(qp){var params=[];for(var p in qp){if(qp.hasOwnProperty(p)){params.push(encodeURIComponent(p)+'='+ encodeURIComponent(qp[p]));}}
return params.join("&");})(queryParams);var requestUrl=config.serverUrl+(config.serverUrl.substr(-1,1)=='/'?'':'/')+'recommendations?'+ qs;if(!config.target){var frameId='__econsultancy.recommendations.'+ nextSeq++;var iframeHtml='<iframe id="'+ frameId+'" frameborder="0"';if(config.frameWidth){iframeHtml+=' width="'+ config.frameWidth+'"';}
if(config.frameHeight){iframeHtml+=' height="'+ config.frameHeight+'"';}
iframeHtml+='></iframe>';document.write(iframeHtml);config.target=frameId;}
sendRequest(requestUrl,function(req){if(200===req.status){var target=document.getElementById(config.target);if('IFRAME'===target.tagName.toUpperCase()){var frameDoc=target.contentWindow.document;if(frameDoc){frameDoc.open();frameDoc.write(req.responseText);frameDoc.close();if(config.resizeFrame){Econsultancy.recommendationsLoaded(target);}}}else{target.innerHTML=req.responseText;}
callback&&callback(target);}else{config.onError&&config.onError(req.status);}});};})(window);