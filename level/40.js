oS.Init({
  PName:[oLilyPad,oSplitPea,oGarlic,oStarfruit,oPumpkinHead,oSeaShroom,oBlover,oCactus,oCherryBomb,oPlantern,oPlantern,oStarfruit,oDoomShroom],
  ZName:[oZombie,oZombie2,oZombie3,oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3,oDiggerZombie,oBalloonZombie,oBucketheadZombie,oDolphinRiderZombie,oLadderZombie,oSnorkelZombie,oJackinTheBoxZombie,oJalapenoZombie,oSquashZombie],
PicArr:function(){
  var b=oCabbage.prototype,
    c=b.PicArr,a="images/interface/fog",
    d=$User.Browser.IE&&!$User.Browser.IE9?"gif":"png";
  return[
    "images/interface/background4.jpg",
         "images/interface/Dave.gif",
         c[b.CardGif],
         c[b.NormalGif],
         a+"0."+d,a+"1."+d,a+"2."+d,a+"3."+d
  ]
}(),
  LoadAccess:function(a){
    EDAll.scrollLeft=0;
    NewImg("dDave","images/interface/Dave.gif","left:0;top:81px;z-index:20",EDAll);
    NewEle("DivTeach","div",0,0,EDAll);
    (function(d){
      var b=arguments.callee,
        c=$("DivTeach");
      switch(d){
        case 0:
          PlayAudio("crazydavelong1");
          c.onclick=null;
          $("dDave").src="images/interface/Dave3.gif";
          oSym.addTask(110,function(){
            $("dDave").src="images/interface/Dave.gif";
            c.onclick=function(){
              oSym.addTask(10,b,[1])
            }
          },[]);
          c.innerHTML='<span style="font-size:22px">你知道，他们曾叫我“迷雾男”。(点击继续)</span>';
          break;
        case 1:
          PlayAudio("crazydavelong3");
          c.onclick=null;
          $("dDave").src="images/interface/Dave3.gif";
          oSym.addTask(100,function(){
            $("dDave").src="images/interface/Dave.gif";
            c.onclick=function(){
              oSym.addTask(10,b,[2])
            }
          },[]);
          c.innerHTML='<span style="font-size:22px">因为我曾停留在雾中并突然从人群中跳出！(点击继续)</span>';
          break;
        case 2:
          PlayAudio("crazydavelong3");
          c.onclick=null;
          $("dDave").src="images/interface/Dave3.gif";
          oSym.addTask(100,function(){
            $("dDave").src="images/interface/Dave.gif";
            c.onclick=function(){
              oSym.addTask(10,b,[3])
            }
          },[]);
          c.innerHTML='<span style="font-size:22px">噢，那都是过去的事了。(点击继续)</span>';
          break;
        case 3:
          $("dDave").src="images/interface/Dave2.gif";
          ClearChild($("DivTeach"));
          oSym.addTask(50,function(){
            ClearChild($("dDave"));
            a(0);
            StopMusic();
            PlayMusic(oS.LoadMusic="Look up at the Sky")
          },[])}
    })(0)
  },
  Coord:2,
  DKind:0,
  HaveFog:9,
  SunNum:50,
  LF:[0,1,1,2,2,1,1],
  backgroundImage:"images/interface/background4.jpg",
  CanSelectCard:0,
  LevelName:"3-10",
  LvlEName:30,
  LargeWaveFlag:{
    10:$("imgFlag3"),
    20:$("imgFlag2"),
    30:$("imgFlag1")
  },
  StaticCard:0,
  UserDefinedFlagFunc:function(a){
    oP.FlagZombies>20&&oP.SetTimeoutWaterZombie(6,9,3,[oDuckyTubeZombie1,oDuckyTubeZombie2,oSnorkelZombie])
  },
  StartGameMusic:"MangZhong",
  StartGame:function(){
    StopMusic();
    PlayMusic(oS.LoadMusic=oS.StartGameMusic);
    SetVisible($("tdShovel"),$("dFlagMeter"),$("dTop"));
    SetHidden($("dSunNum"));
    oS.InitLawnMower();
    PrepareGrowPlants(function(){
      oP.Monitor({
        f:function(){
          (function(){
            var a=ArCard.length;
            if(a<10){
              var c=oS.PName,
                b=oP.FlagZombies<6?Math.floor(1+Math.random()*10)<4?1:Math.floor(Math.random()*c.length):Math.floor(1+Math.random()*10)<3?0:Math.floor(Math.random()*c.length),
                e=c[b],
                d=e.prototype,
                f="dCard"+Math.random();
              ArCard[a]={
                DID:f,PName:e,PixelTop:600
              };
              NewImg(f,d.PicArr[d.CardGif],"top:600px;width:100px;height:120px;cursor:pointer;clip:rect(auto,auto,60px,auto)",
                     $("dCardList"),{
                       onmouseover:function(g){
                         ViewPlantTitle(GetChoseCard(f),g)},
                       onmouseout:function(){
                         SetHidden($("dTitle"))
                       },onclick:function(g){
                         ChosePlant(g,oS.ChoseCard,f)
                       }
                     })}
            oSym.addTask(600,arguments.callee,[])
          })();
          (function(){
            var b=ArCard.length,
              a,
              c;
            while(b--){
              (c=(a=ArCard[b]).PixelTop)>60*b&&($(a.DID).style.top=(a.PixelTop=c-1)+"px")
            }
            oSym.addTask(5,arguments.callee,[])
          }
          )()},ar:[]});
      oP.AddZombiesFlag();
      SetVisible($("dFlagMeterContent"))})}
},
        {
          AZ:[
            [oZombie,3,1],
            [oZombie2,3,1],
            [oZombie3,2,1],
            [oDuckyTubeZombie1,1,6,[6,7,8,10,19,20,25,30]],
            [oDuckyTubeZombie2,1,6,[10,20,30]],
            [oDuckyTubeZombie3,1,6,[10,20,30]],
            [oDiggerZombie,4,1],
            [oBucketheadZombie,2,1],
            [oBalloonZombie,2,1],
            [oJalapenoZombie,1,1],
            [oLadderZombie, 1, 1],
            [oSquashZombie,2,1],
            [oDolphinRiderZombie,1,10,[10,14,15,16,18,19,20]],
            [oJackinTheBoxZombie,1,30,[30]],
            [oSnorkelZombie,1,15,[15,16,18,20,25,30]]
          ],
          FlagNum:30,
          FlagToSumNum:{
            a1:[3,5,9,10,13,15,19,20,23,25,29],
            a2:[3,6,12,20,18,24,30,40,36,42,48,60]
          },
          FlagToMonitor:{
            9:[ShowLargeWave,0],
            19:[ShowLargeWave,0],
            29:[ShowFinalWave,0]
          },
          FlagToEnd:function(){
            NewImg("imgSF","images/Card/Plants/Cabbage.png","left:627px;top:325px;clip:rect(auto,auto,60px,auto)",EDAll,{
              onclick:function(){
                ClearChild($("PointerUD"));
                GetNewCard(this,oCabbage,41);
              }
            });
            NewImg("PointerUD","images/interface/PointerDown.gif","top:290px;left:636px",EDAll)
          }
        },{
		GetChoseCard: function(b) {
			var a = ArCard.length;
			while (a--) ArCard[a].DID == b && (oS.ChoseCard = a, a = 0);
			return oS.ChoseCard
		},
		ChosePlant: function(a, b) {
			PlayAudio("seedlift"); a = window.event || a;
			var f = ArCard[oS.ChoseCard = b], e = a.clientX - EDAlloffsetLeft + EBody.scrollLeft || EElement.scrollLeft, d = a.clientY + EBody.scrollTop || EElement.scrollTop, c = f.PName.prototype;
			EditImg(NewImg("MovePlant", c.PicArr[c.StaticGif], "left:" + e - 0.5 * (c.beAttackedPointL + c.beAttackedPointR) + "px;top:" + d + 20 - c.height + "px;z-index:254", EDAll).cloneNode(false), "MovePlantAlpha", "", { visibility: "hidden", filter: "alpha(opacity=40)", opacity: 0.4, zIndex: 30 }, EDAll);
			SetAlpha($(f.DID), 50, 0.5);
			SetHidden($("dTitle"));
			oS.Chose = 1, GroundOnmousemove = GroundOnmousemove1;
		},
		CancelPlant: function() {
			ClearChild($("MovePlant"), $("MovePlantAlpha"));
			oS.Chose = 0, oS.ChoseCard = "";
			for(let Idx of ArCard) SetAlpha($(Idx.DID), 100, 1);		
			GroundOnmousemove = function() {};
		},
          GrowPlant:function(l,c,b,f,a){
            var j=oS.ChoseCard,
              g=ArCard[j],
              i=g.PName,
              k=i.prototype,
              d=g.DID,
              e,
              h=oGd.$LF[f];
            k.CanGrow(l,f,a)?function(){
              PlayAudio(h!=2?"plant"+Math.floor(1+Math.random()*2):"plant_water");
              (new i).Birth(c,b,f,a,l);
              oSym.addTask(20,SetNone,[SetStyle($("imgGrowSoil"),{
                left:c-30+"px",top:b-40+"px",zIndex:3*f,visibility:"visible"
              })]);
              ClearChild($("MovePlant"),$("MovePlantAlpha"));
              $("dCardList").removeChild(e=$(d));
              e=null;
              ArCard.splice(j,1);
			  oS.ChoseCard="";
              oS.Chose=0;
              GroundOnmousemove=function(){};
            }():CancelPlant();
		  },
          ViewPlantTitle:function(a){
          }
        });
