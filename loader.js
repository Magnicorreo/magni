
//! Calltracks Web Number Dynamics - 3rd generation - Copyright 2007 onwards, Calltracks
//! This code is generated, and MUST be loaded from Calltracks. Do not simply copy and paste the code into your web site or tag manager.
if (document.createElement && document.childNodes){
  if (typeof(__ctwnd) == "object") {
    if(__ctwnd.isInitialised){__ctwnd.reinit()}
  }
  else{
    var __ctwnd = (function(ctWindow){
        var reInitG3 = false;          var numberIdentifiers = [];
        var previousIdentifiers = [];
        var generate_guid = function() {
             function rch() { return Math.floor((1 + Math.random()) * 0x10000) .toString(16) .substring(1); }
             return rch() + rch() + rch() + rch() + rch() + rch() + rch() + rch();
        };
        var getNumberIdentifiers = function(){
          var newNumberIdentifiers = [];
          var spanElements = document.getElementsByTagName('span');
          for (var i=0; i<spanElements.length; i++){
            if (spanElements[i].className.indexOf('calltracks_')===-1){continue}
            var elementClasses=spanElements[i].className.split(' ');
            for (var j=0; j<elementClasses.length; j++){
              if (elementClasses[j].toLowerCase().indexOf('calltracks_')!=0){continue}
              var identifierName = elementClasses[j].toLowerCase().replace('calltracks_', ''), add=true;
              break;
            }
            var allids=newNumberIdentifiers.concat(previousIdentifiers);
            for(var k=0;k<allids.length;k++){var curr=allids[k].toLowerCase();if(curr==identifierName||curr.indexOf(identifierName+"|")===0){add=false;break;}}
            if (!__ctwnd.isInitialised && spanElements[i].attributes['data-replace-delayed'] && spanElements[i].attributes['data-replace-delayed'].value==='true'){add=false;break;}
            if(add){
              reInitG3 = __ctwnd.isInitialised && true;               var extra_info="|original-content=" + encodeURIComponent(encodeURIComponent(spanElements[i].innerHTML));               for( var l=0; l<spanElements[i].attributes.length; l++){
                if(spanElements[i].attributes[l].name.toLowerCase().indexOf("data-")===0){
                  extra_info += "|" + spanElements[i].attributes[l].name.toLowerCase().replace("data-","") + "=" + encodeURIComponent(spanElements[i].attributes[l].value);
                }
              }
              newNumberIdentifiers.push(identifierName+extra_info);
            }
          }
          return newNumberIdentifiers;
        };
        return{
           init: function(){
             var requestForIdentifiers = []
             if (__ctwnd.isInitialised){reInitG3=false;previousIdentifiers=numberIdentifiers.slice();}
               requestForIdentifiers = getNumberIdentifiers();
             numberIdentifiers=previousIdentifiers.concat(requestForIdentifiers);
             var calltracksData = __ctwnd.rc('calltracksData');
             var calltracksGuid = __ctwnd.rc('calltracksGuid');
             if (calltracksGuid == null) {
               var newGuid = generate_guid();
               __ctwnd.sc("calltracksGuid", newGuid)
               calltracksGuid = __ctwnd.rc('calltracksGuid');
             }
             else {
               __ctwnd.sc("calltracksGuid", calltracksGuid);
             }
             if (__ctwnd.isInitialised && reInitG3 == false){
               if(typeof(__ctg3)==="object"){__ctg3.run()}
               else{__ctwnd.needReInit=true}
             }
             else{
               var ctuapsid = new Date().getTime()+'.'+Math.random().toString(36).substring(5);
               __ctwnd.ctuapsid = ctuapsid;

               var ctG3    = document.createElement('script');
               var ctG3Uri = '//lite.calltracks.com/wnd/g3.js?cr=' + encodeURIComponent(document.referrer) + '&cp=' + encodeURIComponent(window.location.href) + '&ctd=' + calltracksData + '&ctguid=' + calltracksGuid + '&t=' + ctWindow.escape(ctWindow.escape(document.title)) + '&fk=' + encodeURIComponent(__ctwnd.rc('__utma')) + '&c=' + encodeURIComponent(__ctwnd.rc('__utmz')) + '&cv=' + encodeURIComponent(__ctwnd.rc('__utmv')) + '&ids=' + (requestForIdentifiers.length===0 ? null : requestForIdentifiers) + '&ctuapsid=' + ctuapsid;
               if (typeof(__ctg3) == 'object'){ctG3Uri += '&pid=' + __ctg3.getPid();}
               else if(__ctwnd.isInitialised){__ctwnd.needReInit=true;numberIdentifiers=previousIdentifiers;return}
               ctG3Uri = ctG3Uri + '&ts=' + new Date().getTime();
               ctG3.setAttribute('src', ctG3Uri);
               ctG3.setAttribute('type', 'text/javascript');
               ctG3.setAttribute('async', true);
               __ctwnd.isInitialised=true;
               document.getElementsByTagName('head')[0].appendChild(ctG3);
             }
           },
           reinit: function(){
             __ctwnd.init();
           },
           sc: function(name,value){
             var date  = new Date();
               
               date.setTime(date.getTime() + 2592000000);
               var expires = ' expires=' + date.toGMTString() + ';';
             c = name + '=' + value + '; path=/;' + expires;
             document.cookie = c;
           },
           rc: function(name) {
             var nameEQ = name + "=";
             var ca = document.cookie.split(';');
             for (var i=0; i<ca.length; i++) {
               var c = ca[i];
               while (c.charAt(0) === ' ') { c = c.substring(1, c.length); }
               if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length, c.length); }
             }
             return null;
           },
           get_guid: function(){
             return __ctwnd.rc('calltracksGuid');
           },
           isInitialised: false
        };
    })(window);
    window.setTimeout(function(){__ctwnd.init()},10);
  }
}
