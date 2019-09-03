##1.页面特点
  (1) 每个模块 通栏,width/height 100%;
  
  (2) 鼠标滑动 实现模块"显示"
##2.总结
###(1) 布局
  理清关系:html <--> body <--> .main <--> .page
  必须设置html height:100%,以便body设置height;
html
`
  <html lang="en">
  <head>
    ...
  </head>
  <body>
  <!-- main start -->
  <div class="main">
    <div class="page home"></div>
    <div class="page why"></div>
    <div class="page aboutMe"></div>
    <div class="page skill"></div>
    <div class="page contactMe"></div>
  </div>
  <!-- main end -->
  <!-- dot nav start -->
  <div class="dotList">
    <div class="dot currentPage"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
  <!-- dot nav end -->
  <script type="text/javascript" src="./libs/jquery-1.12.3.js"></script>
  <script type="text/javascript" src="./js/index.js"></script>
  </body>
</html>
`
css
`
html {
  height: 100%; /*layout*/
}

body {
  height: 100%; /*layout*/
  position: relative; /*.main position:absolute; .dotList position:fixed;*/
  overflow: hidden;
}

.main {
  width: 100%;
  height: 500%; /*layout*/
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  /*animation*/
  -webkit-transition: transform 0.6s;
  -moz-transition: transform 0.6s;
  -ms-transition: transform 0.6s;
  -o-transition: transform 0.6s;
  transition: transform 0.6s;
}

.page {
  width: 100%;
  height: 20%; /*layout*/

  /*滑轮 滚动*/
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
  overflow: visible;
}

/*滚动条 隐藏*/
body::-webkit-scrollbar {
  display: none;
}
`