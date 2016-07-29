//! Calltracks Web Number Dynamics - 3rd generation - Copyright 2007 onwards, Calltracks
//! This code is generated by the Calltracks system

function providePlugin(pluginName, pluginConstructor) {
  var ga = window[window['GoogleAnalyticsObject'] || 'ga'];
  if (ga) ga('provide', pluginName, pluginConstructor);
}
var CTPlugin = function(tracker, config) {
  this.tracker = tracker;
  
  session_id = 47749485;
  sid_index = config.slotNum;
  this.tracker.set('dimension'+sid_index, session_id);
  if(config.cid_slotNum) {
    this.tracker.set('dimension'+config.cid_slotNum, tracker.get('clientId'));
  }
};
providePlugin('ctplugin', CTPlugin);




if (typeof(dataLayer) !== "undefined") {
  if (dataLayer) {
    dataLayer.push({ 'event': 'visitIdSet', 'visitId': '47749485' });
  }
}


var _ctq = _ctq || [];
var __ctg3 = (function(ctWindow){
  var ua_client_id = '';
  var log_pingback = function(interval){
    var o=document.getElementById('ct_pingback');if(o){o.parentNode.removeChild(o)}
    var ua_params = '';
    
    var ga = window[window['GoogleAnalyticsObject'] || 'ga'];
    if(typeof(ga) == "function"){
      ga(function(tracker){
        if(typeof(tracker)!=="object"){tracker=tracker=ga.getAll()[0];}
        if(typeof(tracker)==="object"){
          ua_client_id = tracker.get('clientId');
          ua_params = ua_params + '&ua_client_id=' + ua_client_id;
        }
      });
    }

    if (interval < 1800000) { interval = parseInt(interval * 1.1, 10); }
    var wnd_pv_scr = document.createElement('script');
    src_string = 'https://lite.calltracks.com/wnd/pingback.js?pid=133858864&int=' + interval + '&fk=' + encodeURIComponent(__ctwnd.rc('__utma')) + '&c=' + encodeURIComponent(__ctwnd.rc('__utmz')) + '&cv=' + encodeURIComponent(__ctwnd.rc('__utmv')) + ua_params  ;
    wnd_pv_scr.setAttribute('src', src_string);
    wnd_pv_scr.setAttribute('type', 'text/javascript');
    wnd_pv_scr.setAttribute('id', 'ct_pingback');
    document.getElementsByTagName('head')[0].appendChild(wnd_pv_scr);
    var to = ctWindow.setTimeout(function() { log_pingback(interval) }, interval);
  };

  return {
    unhide: false,
    run: function(){
      for (var i=0;i<_ctq.length;i++){var o=_ctq[i];if(o[0]==="_unhide"){__ctg3.unhide=o[1]}}
        // Using default numbers
        __ctwnd.sc('calltracksData', 'kwid%3D%3Brefid%3D1%3Bvid%3D47749485');
        var to = ctWindow.setTimeout(function() { log_pingback(20000) }, 3000);
      if (__ctwnd.needReInit){__ctwnd.needReInit=false;__ctwnd.reinit();}
      
    },
    getPid: function(){
      return 133858864;
    }
  };
})(window);

__ctg3.run();
