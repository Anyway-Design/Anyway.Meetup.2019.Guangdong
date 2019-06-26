var bgm=document.getElementById("bgm"),m=new Vue({el:".wrapper",data:{stage:1,scrollY:0,landscape:!0,playingMusic:!1,muted:!0,windowWidth:1200,windowHeight:700,headerFinalScale:4.8,headerScrollDistance:500,smallScreenW:379,smallScreenH:283,smallScreenHPercent:.3,opScrollDistance:1400,windowHeight:1e3,lastScroll:0,scrollDirection:1,tvInitOffsetX:200,tvFinalOffsetX:176,tvInitOffsetY:0,tvFinalOffsetY:0,opBgNum:0,mainBgColor:"7c0808",mainScroll:0,mainPageH:700,bgColorList:["7c0808","8a9eae","b96605"]},watch:{stage:function(){2==this.stage&&!this.playingMusic&!this.muted&&(bgm.play(),bgm.muted=!1,this.playingMusic=!0)}},methods:{checkScroll:function(t){t>this.lastScroll?this.scrollDirection=1:this.scrollDirection=-1,t>this.headerScrollDistance+this.opScrollDistance?(this.stage=3,this.mainScroll=t-this.headerScrollDistance-this.opScrollDistance):t>this.headerScrollDistance?(this.stage=2,this.opBgNum=Math.floor(t/80)%7+1):this.stage=1,this.lastScroll=t},swtichBgColor(){this.mainBgColor=bgColorList[Math.floor(Math.random()*bgColorList.length)]},checkInView(t){if(this.landscape?this.mainPageH=this.windowHeight+200:this.mainPageH=this.windowHeight-100,this.mainScroll>(t-1)*this.mainPageH&&this.mainScroll<t*this.mainPageH)return"in"},toggleMute(){this.muted?(this.muted=!1,bgm.muted=!1):(this.muted=!0,bgm.muted=!0)}}}),bgColorList=["7c0808","8a9eae","b96605"];function getSize(){m.windowWidth=window.innerWidth,m.windowHeight=window.innerHeight,window.innerWidth>window.innerHeight?(m.landscape=!0,m.tvInitOffsetX=window.innerWidth/4,m.tvFinalOffsetX=.052*window.innerWidth,m.tvInitOffsetY=0,m.tvFinalOffsetY=-.054*window.innerHeight,m.headerFinalScale=window.innerWidth/(window.innerHeight*m.smallScreenHPercent/m.smallScreenH*m.smallScreenW)):(m.landscape=!1,m.headerFinalScale=1/m.smallScreenHPercent,m.tvInitOffsetX=0,m.tvFinalOffsetX=.052*window.innerWidth*1.4,m.tvInitOffsetY=0,m.tvFinalOffsetY=-.5*(window.innerHeight-1.4*window.innerWidth/1.097),m.headerFinalScale=window.innerHeight/(1.4*window.innerWidth/3.62))}function swtichBgColor(){m.mainBgColor=bgColorList[Math.floor(Math.random()*bgColorList.length)]}function audioAutoPlay(t){var e=document.getElementById(t),i=function(){e.play(),document.removeEventListener("touchstart",i,!1)};e.play(),document.addEventListener("WeixinJSBridgeReady",function(){i()},!1),document.addEventListener("YixinJSBridgeReady",function(){i()},!1),document.addEventListener("touchstart",i,!1)}function stopAudio(t){var e=document.getElementById(t),i=function(){e.pause(),document.removeEventListener("touchstart",i,!1)};e.pause(),document.addEventListener("WeixinJSBridgeReady",function(){i()},!1),document.addEventListener("YixinJSBridgeReady",function(){i()},!1),document.addEventListener("touchstart",i,!1)}getSize(),window.onload=function(){setInterval(m.swtichBgColor,2e3)},window.onresize=function(){getSize()},window.onscroll=function(){m.checkScroll(window.scrollY),m.scrollY=window.scrollY};