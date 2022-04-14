$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

(function() {
  //novacancy.min.js
  (function(e){"use strict";var t=function(t,n){this._el=e(t);if(this.repeat())return true;this._settings=n;this._powerOn=false;this._loopTimeout=0;this._el.html(this.buildHTML());this._items=this._el.find("span.novacancy");this._blinkArr=this.arrayMake();this.bindEvent();this.writeCSS();if(this._settings.autoOn)this.blinkOn()};t.prototype.repeat=function(){var e=this._el;if(e[0].novacancy){return true}else{e[0].novacancy=true;return false}};t.prototype.writeCSS=function(){var t=this.css();var n=e("<style>"+t+"</style>");e("body").append(n)};t.prototype.selector=function(){var e=this._el;var t=e[0].tagName;if(e[0].id)t+="#"+e[0].id;if(e[0].className)t+="."+e[0].className;return t};t.prototype.css=function(){var e=this.selector();var t=this._settings;var n="text-shadow: "+t.glow.toString()+";";var r="color: "+t.color+";"+n;var i="color: "+t.color+"; opacity: 0.3;";var s="";s+=e+" .novacancy.on { "+r+" }"+"\n";s+=e+" .novacancy.off { "+i+" }"+"\n";return s};t.prototype.rand=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)};t.prototype.isNumber=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};t.prototype.blink=function(e){var t=this._settings;var n=this;this.off(e);e[0].blinking=true;setTimeout(function(){n.on(e);e[0].blinking=false;n.reblink(e)},this.rand(t.blinkMin,t.blinkMax))};t.prototype.reblink=function(e){var t=this._settings;var n=this;setTimeout(function(){if(n.rand(1,100)<=t.reblinkProbability){n.blink(e)}},this.rand(t.blinkMin,t.blinkMax))};t.prototype.on=function(e){e.removeClass("off").addClass("on")};t.prototype.off=function(e){e.removeClass("on").addClass("off")};t.prototype.buildHTML=function(){var t=this._el;var n="";e.each(t.contents(),function(t,r){if(r.nodeType==3){var i=r.nodeValue.split("");e.each(i,function(e,t){n+='<span class="novacancy on">'+t+"</span>"})}else{n+=r.outerHTML}});return n};t.prototype.arrayMake=function(){var t=this._el;var n=this._settings;var r=this._items;var i=r.length;var s=this.randomArray(i);var o;var u;var a=n.off;var f=n.blink;var l=this;a=Math.min(a,i);a=Math.max(0,a);u=s.splice(0,a);e.each(u,function(t,n){l.off(e(r[n]))});f=f===0?i:f;f=Math.min(f,i-a);f=Math.max(0,f);o=s.splice(0,f);return o};t.prototype.randomArray=function(e){var t=[];var n;var r;var i;for(n=0;n<e;++n){t[n]=n}for(n=0;n<e;++n){r=parseInt(Math.random()*e,10);i=t[r];t[r]=t[n];t[n]=i}return t};t.prototype.loop=function(){if(!this._powerOn)return;var t=this._el;var n=this._settings;var r=this._blinkArr;var i=this._items;if(r.length===0)return;var s;var o;var u=this;s=r[this.rand(0,r.length-1)];o=e(i[s]);if(!o[0].blinking)this.blink(o);this._loopTimeout=setTimeout(function(){u.loop()},this.rand(n.loopMin,n.loopMax))};t.prototype.blinkOn=function(){if(!this._powerOn){var e=this._settings;var t=this;this._powerOn=true;this._loopTimeout=setTimeout(function(){t.loop()},this.rand(e.loopMin,e.loopMax))}};t.prototype.blinkOff=function(){if(this._powerOn){this._powerOn=false;clearTimeout(this._loopTimeout)}};t.prototype.bindEvent=function(){var e=this._el;var t=this;e.on("blinkOn",function(e){t.blinkOn()});e.on("blinkOff",function(e){t.blinkOff()})};var n=function(t){var n=e.extend({reblinkProbability:1/3,blinkMin:.01,blinkMax:.5,loopMin:.5,loopMax:2,color:"ORANGE",glow:["0 0 80px Orange","0 0 30px Red","0 0 6px Yellow"],off:0,blink:0,autoOn:true},t);n.reblinkProbability*=100;n.blinkMin*=1e3;n.blinkMax*=1e3;n.loopMin*=1e3;n.loopMax*=1e3;return n};e.fn.novacancy=function(r){return e.each(this,function(e,i){new t(this,n(r))})}})(jQuery);
  $(function() {
    $('#error').novacancy({
      'reblinkProbability': 0.1,
      'blinkMin': 0.2,
      'blinkMax': 0.9,
      'loopMin': 8,
      'loopMax': 10,
      'color': '#ffffff',
      'glow': ['0 0 80px #ffffff', '0 0 30px #008000', '0 0 6px #0000ff']
    });
    return $('#code').novacancy({
      'blink': 5,
      'off': 1,
      'color': 'Red',
      'glow': ['0 0 80px Red', '0 0 30px FireBrick', '0 0 6px DarkRed']
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQWlCO0VBQUE7RUFDakI7RUFFQSxDQUFBLENBQUUsUUFBQSxDQUFBLENBQUE7SUFDQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsU0FBWixDQUNFO01BQUEsb0JBQUEsRUFBc0IsR0FBdEI7TUFDQSxVQUFBLEVBQVksR0FEWjtNQUVBLFVBQUEsRUFBWSxHQUZaO01BR0EsU0FBQSxFQUFXLENBSFg7TUFJQSxTQUFBLEVBQVcsRUFKWDtNQUtBLE9BQUEsRUFBUyxTQUxUO01BTUEsTUFBQSxFQUFRLENBQUMsa0JBQUQsRUFBcUIsa0JBQXJCLEVBQXlDLGlCQUF6QztJQU5SLENBREY7V0FTQSxDQUFBLENBQUUsT0FBRixDQUFVLENBQUMsU0FBWCxDQUNFO01BQUEsT0FBQSxFQUFTLENBQVQ7TUFDQSxLQUFBLEVBQU8sQ0FEUDtNQUVBLE9BQUEsRUFBUyxLQUZUO01BR0EsTUFBQSxFQUFRLENBQUMsY0FBRCxFQUFpQixvQkFBakIsRUFBdUMsaUJBQXZDO0lBSFIsQ0FERjtFQVZBLENBQUY7QUFIaUIiLCJzb3VyY2VzQ29udGVudCI6WyIjbm92YWNhbmN5Lm1pbi5qc1xuYChmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjt2YXIgdD1mdW5jdGlvbih0LG4pe3RoaXMuX2VsPWUodCk7aWYodGhpcy5yZXBlYXQoKSlyZXR1cm4gdHJ1ZTt0aGlzLl9zZXR0aW5ncz1uO3RoaXMuX3Bvd2VyT249ZmFsc2U7dGhpcy5fbG9vcFRpbWVvdXQ9MDt0aGlzLl9lbC5odG1sKHRoaXMuYnVpbGRIVE1MKCkpO3RoaXMuX2l0ZW1zPXRoaXMuX2VsLmZpbmQoXCJzcGFuLm5vdmFjYW5jeVwiKTt0aGlzLl9ibGlua0Fycj10aGlzLmFycmF5TWFrZSgpO3RoaXMuYmluZEV2ZW50KCk7dGhpcy53cml0ZUNTUygpO2lmKHRoaXMuX3NldHRpbmdzLmF1dG9Pbil0aGlzLmJsaW5rT24oKX07dC5wcm90b3R5cGUucmVwZWF0PWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fZWw7aWYoZVswXS5ub3ZhY2FuY3kpe3JldHVybiB0cnVlfWVsc2V7ZVswXS5ub3ZhY2FuY3k9dHJ1ZTtyZXR1cm4gZmFsc2V9fTt0LnByb3RvdHlwZS53cml0ZUNTUz1mdW5jdGlvbigpe3ZhciB0PXRoaXMuY3NzKCk7dmFyIG49ZShcIjxzdHlsZT5cIit0K1wiPC9zdHlsZT5cIik7ZShcImJvZHlcIikuYXBwZW5kKG4pfTt0LnByb3RvdHlwZS5zZWxlY3Rvcj1mdW5jdGlvbigpe3ZhciBlPXRoaXMuX2VsO3ZhciB0PWVbMF0udGFnTmFtZTtpZihlWzBdLmlkKXQrPVwiI1wiK2VbMF0uaWQ7aWYoZVswXS5jbGFzc05hbWUpdCs9XCIuXCIrZVswXS5jbGFzc05hbWU7cmV0dXJuIHR9O3QucHJvdG90eXBlLmNzcz1mdW5jdGlvbigpe3ZhciBlPXRoaXMuc2VsZWN0b3IoKTt2YXIgdD10aGlzLl9zZXR0aW5nczt2YXIgbj1cInRleHQtc2hhZG93OiBcIit0Lmdsb3cudG9TdHJpbmcoKStcIjtcIjt2YXIgcj1cImNvbG9yOiBcIit0LmNvbG9yK1wiO1wiK247dmFyIGk9XCJjb2xvcjogXCIrdC5jb2xvcitcIjsgb3BhY2l0eTogMC4zO1wiO3ZhciBzPVwiXCI7cys9ZStcIiAubm92YWNhbmN5Lm9uIHsgXCIrcitcIiB9XCIrXCJcXG5cIjtzKz1lK1wiIC5ub3ZhY2FuY3kub2ZmIHsgXCIraStcIiB9XCIrXCJcXG5cIjtyZXR1cm4gc307dC5wcm90b3R5cGUucmFuZD1mdW5jdGlvbihlLHQpe3JldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKHQtZSsxKStlKX07dC5wcm90b3R5cGUuaXNOdW1iZXI9ZnVuY3Rpb24oZSl7cmV0dXJuIWlzTmFOKHBhcnNlRmxvYXQoZSkpJiZpc0Zpbml0ZShlKX07dC5wcm90b3R5cGUuYmxpbms9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5fc2V0dGluZ3M7dmFyIG49dGhpczt0aGlzLm9mZihlKTtlWzBdLmJsaW5raW5nPXRydWU7c2V0VGltZW91dChmdW5jdGlvbigpe24ub24oZSk7ZVswXS5ibGlua2luZz1mYWxzZTtuLnJlYmxpbmsoZSl9LHRoaXMucmFuZCh0LmJsaW5rTWluLHQuYmxpbmtNYXgpKX07dC5wcm90b3R5cGUucmVibGluaz1mdW5jdGlvbihlKXt2YXIgdD10aGlzLl9zZXR0aW5nczt2YXIgbj10aGlzO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtpZihuLnJhbmQoMSwxMDApPD10LnJlYmxpbmtQcm9iYWJpbGl0eSl7bi5ibGluayhlKX19LHRoaXMucmFuZCh0LmJsaW5rTWluLHQuYmxpbmtNYXgpKX07dC5wcm90b3R5cGUub249ZnVuY3Rpb24oZSl7ZS5yZW1vdmVDbGFzcyhcIm9mZlwiKS5hZGRDbGFzcyhcIm9uXCIpfTt0LnByb3RvdHlwZS5vZmY9ZnVuY3Rpb24oZSl7ZS5yZW1vdmVDbGFzcyhcIm9uXCIpLmFkZENsYXNzKFwib2ZmXCIpfTt0LnByb3RvdHlwZS5idWlsZEhUTUw9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9lbDt2YXIgbj1cIlwiO2UuZWFjaCh0LmNvbnRlbnRzKCksZnVuY3Rpb24odCxyKXtpZihyLm5vZGVUeXBlPT0zKXt2YXIgaT1yLm5vZGVWYWx1ZS5zcGxpdChcIlwiKTtlLmVhY2goaSxmdW5jdGlvbihlLHQpe24rPSc8c3BhbiBjbGFzcz1cIm5vdmFjYW5jeSBvblwiPicrdCtcIjwvc3Bhbj5cIn0pfWVsc2V7bis9ci5vdXRlckhUTUx9fSk7cmV0dXJuIG59O3QucHJvdG90eXBlLmFycmF5TWFrZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX2VsO3ZhciBuPXRoaXMuX3NldHRpbmdzO3ZhciByPXRoaXMuX2l0ZW1zO3ZhciBpPXIubGVuZ3RoO3ZhciBzPXRoaXMucmFuZG9tQXJyYXkoaSk7dmFyIG87dmFyIHU7dmFyIGE9bi5vZmY7dmFyIGY9bi5ibGluazt2YXIgbD10aGlzO2E9TWF0aC5taW4oYSxpKTthPU1hdGgubWF4KDAsYSk7dT1zLnNwbGljZSgwLGEpO2UuZWFjaCh1LGZ1bmN0aW9uKHQsbil7bC5vZmYoZShyW25dKSl9KTtmPWY9PT0wP2k6ZjtmPU1hdGgubWluKGYsaS1hKTtmPU1hdGgubWF4KDAsZik7bz1zLnNwbGljZSgwLGYpO3JldHVybiBvfTt0LnByb3RvdHlwZS5yYW5kb21BcnJheT1mdW5jdGlvbihlKXt2YXIgdD1bXTt2YXIgbjt2YXIgcjt2YXIgaTtmb3Iobj0wO248ZTsrK24pe3Rbbl09bn1mb3Iobj0wO248ZTsrK24pe3I9cGFyc2VJbnQoTWF0aC5yYW5kb20oKSplLDEwKTtpPXRbcl07dFtyXT10W25dO3Rbbl09aX1yZXR1cm4gdH07dC5wcm90b3R5cGUubG9vcD1mdW5jdGlvbigpe2lmKCF0aGlzLl9wb3dlck9uKXJldHVybjt2YXIgdD10aGlzLl9lbDt2YXIgbj10aGlzLl9zZXR0aW5nczt2YXIgcj10aGlzLl9ibGlua0Fycjt2YXIgaT10aGlzLl9pdGVtcztpZihyLmxlbmd0aD09PTApcmV0dXJuO3ZhciBzO3ZhciBvO3ZhciB1PXRoaXM7cz1yW3RoaXMucmFuZCgwLHIubGVuZ3RoLTEpXTtvPWUoaVtzXSk7aWYoIW9bMF0uYmxpbmtpbmcpdGhpcy5ibGluayhvKTt0aGlzLl9sb29wVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dS5sb29wKCl9LHRoaXMucmFuZChuLmxvb3BNaW4sbi5sb29wTWF4KSl9O3QucHJvdG90eXBlLmJsaW5rT249ZnVuY3Rpb24oKXtpZighdGhpcy5fcG93ZXJPbil7dmFyIGU9dGhpcy5fc2V0dGluZ3M7dmFyIHQ9dGhpczt0aGlzLl9wb3dlck9uPXRydWU7dGhpcy5fbG9vcFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3QubG9vcCgpfSx0aGlzLnJhbmQoZS5sb29wTWluLGUubG9vcE1heCkpfX07dC5wcm90b3R5cGUuYmxpbmtPZmY9ZnVuY3Rpb24oKXtpZih0aGlzLl9wb3dlck9uKXt0aGlzLl9wb3dlck9uPWZhbHNlO2NsZWFyVGltZW91dCh0aGlzLl9sb29wVGltZW91dCl9fTt0LnByb3RvdHlwZS5iaW5kRXZlbnQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9lbDt2YXIgdD10aGlzO2Uub24oXCJibGlua09uXCIsZnVuY3Rpb24oZSl7dC5ibGlua09uKCl9KTtlLm9uKFwiYmxpbmtPZmZcIixmdW5jdGlvbihlKXt0LmJsaW5rT2ZmKCl9KX07dmFyIG49ZnVuY3Rpb24odCl7dmFyIG49ZS5leHRlbmQoe3JlYmxpbmtQcm9iYWJpbGl0eToxLzMsYmxpbmtNaW46LjAxLGJsaW5rTWF4Oi41LGxvb3BNaW46LjUsbG9vcE1heDoyLGNvbG9yOlwiT1JBTkdFXCIsZ2xvdzpbXCIwIDAgODBweCBPcmFuZ2VcIixcIjAgMCAzMHB4IFJlZFwiLFwiMCAwIDZweCBZZWxsb3dcIl0sb2ZmOjAsYmxpbms6MCxhdXRvT246dHJ1ZX0sdCk7bi5yZWJsaW5rUHJvYmFiaWxpdHkqPTEwMDtuLmJsaW5rTWluKj0xZTM7bi5ibGlua01heCo9MWUzO24ubG9vcE1pbio9MWUzO24ubG9vcE1heCo9MWUzO3JldHVybiBufTtlLmZuLm5vdmFjYW5jeT1mdW5jdGlvbihyKXtyZXR1cm4gZS5lYWNoKHRoaXMsZnVuY3Rpb24oZSxpKXtuZXcgdCh0aGlzLG4ocikpfSl9fSkoalF1ZXJ5KWBcblxuJCAtPlxuICAkKCcjZXJyb3InKS5ub3ZhY2FuY3lcbiAgICAncmVibGlua1Byb2JhYmlsaXR5JzogMC4xXG4gICAgJ2JsaW5rTWluJzogMC4yXG4gICAgJ2JsaW5rTWF4JzogMC42XG4gICAgJ2xvb3BNaW4nOiA4XG4gICAgJ2xvb3BNYXgnOiAxMFxuICAgICdjb2xvcic6ICcjZmZmZmZmJ1xuICAgICdnbG93JzogWycwIDAgODBweCAjZmZmZmZmJywgJzAgMCAzMHB4ICMwMDgwMDAnLCAnMCAwIDZweCAjMDAwMGZmJ11cblxuICAkKCcjY29kZScpLm5vdmFjYW5jeVxuICAgICdibGluayc6IDFcbiAgICAnb2ZmJzogMVxuICAgICdjb2xvcic6ICdSZWQnXG4gICAgJ2dsb3cnOiBbJzAgMCA4MHB4IFJlZCcsICcwIDAgMzBweCBGaXJlQnJpY2snLCAnMCAwIDZweCBEYXJrUmVkJ10iXX0=
//# sourceURL=coffeescript