/*
$(function () {
  //每个"page"height == screen height
  (function (w) {
    var body = document.body;
    body.height = w.screen.height;
    body.width = w.screen.width;
  })(window);

  /!*home*!/
  var $conMsg = $(".contact_msg");
  $(".contact_info>li").hover(function () {
    $conMsg.animate({
      width: "100%"
    }, 1000).html($(this).children("a").attr("data-num"));
  }, function () {
    $conMsg.animate({
      width: "0px"
    }, 100).html("");
  });

  /!*鼠标滚动*!/

  /!* 1.滚动1个page高度;
   * 2.page index
   * $preScrollTop
   * $curScrollTop 当前滚动距离
   *!/

  //判断鼠标滚轮滚动方向
  if (window.addEventListener) {
    window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  //统一处理滚轮滚动事件
  function wheel(event) {
    var delta = 0;
    if (!event){
      event = window.event;
    }
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
      if (window.opera){
        delta = -delta;
      }
    } else if (event.detail) {
      delta = -event.detail / 3;
    }
    if (delta) {
      handle(delta);
    }
  }

  //上下滚动时的具体处理函数
  function handle(delta) {
    if (delta < 0) {//向下
      $('.main').css("top",-window.screen.height);
    } else {//向上
      $('.main').css("top",window.screen.height);
    }
  }
});*/

window.onload = function () {
  var $pageNumber = 0;//记录页码,默认第一页
  var $preDot = $('.dot:first');//默认保存第一个导航圆点
  $('.dotList').delegate('.dot', 'click', function () {
    //点击的页码
    var $pageIndex = $(this).index();
    //console.log(window.innerHeight);
    if ($pageNumber != $pageIndex) {//点击的是新页码
      //滚动距离
      var $layoutTop = -$pageIndex * window.innerHeight + 'px';
      //console.log($layoutTop);
      $('.main').css('transform', 'translateY(' + $layoutTop + ')');
      $pageNumber = $pageIndex;
      $(this).addClass('currentPage');
      $preDot.removeClass('currentPage');
      $preDot = $(this);
    } else {
      return;
    }
  });

  /**
    * 滚轮事件
    * 1.onmousewheel事件：鼠标滚轮滚动事件，会在滚轮滚动时触发，
    *   但是火狐不支持该属性。
    *   在火狐中需要使用DOMMouseScroll属性来绑定滚动事件，并且使用
    *      addEventListener()函数绑定
    * 2.event.wheelDelta:获取鼠标滚轮滚动的方向
    *   向下滚动时，该属性取值-120，向上滚动时，取值120.
    *   火狐不支持。
    *   在火狐中使用event.detail属性：
    *     向下滚动为正值，向上滚动为负值。
    */

  function mwHandler() {
    //向下滚动滚轮
    if (event.wheelDelta < 0 || event.detail > 0) {
      if ($pageNumber >= 4) {
        return;
      }
      $($('.dot').get($pageNumber)).removeClass("currentPage");
      $pageNumber++;
      var $layoutTop = -$pageNumber * window.innerHeight + 'px';
      $('.main').css('transform', 'translateY(' + $layoutTop + ')');
      //导航圆点
      $($('.dot').get($pageNumber)).addClass('currentPage');
      $preDot = $($('.dot').get($pageNumber));
      // console.log('向下');
      // console.log('pageNumber--> ', $pageNumber);
    } else {//向上滚动滚轮
      if ($pageNumber <= 0) {
        return;
      }
      $($('.dot').get($pageNumber)).removeClass("currentPage");
      $pageNumber--;
      var $layoutTop = -$pageNumber * window.innerHeight + 'px';
      $('.main').css('transform', 'translateY(' + $layoutTop + ')');
      //导航圆点
      $($('.dot').get($pageNumber)).addClass('currentPage');
      $preDot = $($('.dot').get($pageNumber));
      // console.log('向上');
      // console.log('pageNumber--> ', $pageNumber);
    }
  }

  $(document).on('mousewheel', mwHandler);
  document.addEventListener('DOMMouseScroll', mwHandler);
};