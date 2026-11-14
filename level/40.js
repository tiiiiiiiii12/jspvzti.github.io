oS.Init({
  PName:[oLilyPad,oCactus,oSplitPea,oPlantern,oGarlic,oStarfruit,oPumpkinHead,oSeaShroom,oBlover,oStarfruit,oSquash,oCoffeeBean],
  ZName:[oZombie,oZombie2,oZombie3,oDuckyTubeZombie1,oDuckyTubeZombie2,oDuckyTubeZombie3,oDiggerZombie,oBalloonZombie,oBucketheadZombie,oDolphinRiderZombie,oLadderZombie,oSnorkelZombie,oJackinTheBoxZombie,oJalapenoZombie],
PicArr:function(){
  var b=oCabbage.prototype,
    c=b.PicArr,a="images/interface/fog",
    d=$User.Browser.IE&&!$User.Browser.IE9?"gif":"png";
  return[
    "images/interface/background4.jpg",
         c[b.CardGif],
         c[b.NormalGif],
         a+"0."+d,a+"1."+d,a+"2."+d,a+"3."+d
  ]
}(),
  Coord:2,
  HaveFog:8,
  SunNum:50,
  DKind:0,
  LF:[0,1,1,2,2,1,1],
  backgroundImage:"images/interface/background4.jpg",
  CanSelectCard:0,
  LevelName:"4-10",
  LvlEName:40,
  LargeWaveFlag:{
    10:$("imgFlag3"),
    20:$("imgFlag2"),
    30:$("imgFlag1")
  },
  StaticCard:0,
  UserDefinedFlagFunc:function(a){
    oP.FlagZombies>24&&oP.SetTimeoutWaterZombie(6,9,3,[oDuckyTubeZombie1,oDuckyTubeZombie2,oSnorkelZombie])
  },
  StartGameMusic:"MangZhong",
  LoadAccess: function(a) {
		(function(d) {
			var b = arguments.callee;
			switch (d) {
				case 0:
            innerText(c, "天色似乎又变黑了点，看来要下雨了",1);
						c.onclick = function() {
							oSym.addTask(50, b, [1]);
							c.onclick=null;
						};
					break;
				case 1:
					c.onclick = function() {
						oSym.addTask(50, b, [2]);
						c.onclick=null;
					};
					innerText(c, "……",1);
					break;
				case 2:
						c.onclick = function() {
							oSym.addTask(50, b, [3]);
							c.onclick=null;
						};
					innerText(c, "…虽然我知道大战在即，但我竟不感到慌张",1);
					break;
				case 3:
						c.onclick = function() {
							oSym.addTask(50, b, [4]);
							c.onclick=null;
					};
					innerText(c, "在这里陪伴着我的，只有惬意与宁静",1);
					break;
				case 4:
						c.onclick = function() {
							oSym.addTask(50, b, [5]);
							c.onclick=null;
						};
					innerText(c, "…当然还有这群难缠的僵尸",1);
					break;
				case 5:
						c.onclick = function() {
							oSym.addTask(100, b, [6]);
							c.onclick=null;
						};
					innerText(c, "现在，只能让他们滚开了",1);
					break;
				case 6:
						c.onclick = function() {
							oSym.addTask(100, b, [7]);
							c.onclick=null;
						};
					innerText(c, "希望以后还能有机会享受这悠闲吧",1);
					break;
				case 7:
          oSym.addTask(80,function(Left){
            a(0)
          },[0]);
			}
		})(0)
	},
  StartGame: function() {
		StopMusic(), PlayMusic(oS.LoadMusic = oS.StartGameMusic);
		SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop")), SetHidden($("dSunNum")); // 隐藏阳光和卡槽
		EDAll.style.filter="brightness(0.5)";
		(function(){ // 隐藏原卡槽
			var c = $("dCardList");
			for (var a = 0, b; b = c.childNodes.item(a); ++a) SetHidden(b);
		})();
		oS.InitLawnMower(), PrepareGrowPlants(function () {
			oP.Monitor(oS.Monitor, oS.UserDefinedFlagFunc);
			oSym.addTask(1500, function() { oP.AddZombiesFlag(), SetVisible($("dFlagMeterContent")); }, []);
			(function(){
				var a = dRand(GetX(0), GetX(oS.C)), b = dRand(GetY(1), GetY(oS.R - 1)), d = oS.PName[dRand(1, oS.PName.length) - 1];
				AppearCard(a, b, d, 1, 1000), oSym.addTask(dRand(500, 900), arguments.callee, []);
			})();
		});
	}
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
            [oBalloonZombie,2,10,[10,14,15,16,18,19,20]],
            [oJalapenoZombie,1,1],
            [oLadderZombie, 1, 1],
            [oDolphinRiderZombie,1,10,[10,14,15,16,18,19,20]],
            [oJackinTheBoxZombie,1,30,[30]],
            [oSnorkelZombie,1,15,[15,16,18,20,25,30]]
          ],
          FlagNum:30,
          FlagToSumNum:{
            a1:[3,5,9,10,13,15,19,20,23,25,29],
            a2:[2,6,12,20,18,24,30,40,36,42,48,60]
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
	dRand: function (l, r) { return Math.floor(Math.random() * (r - l + 1) + l); }, 
	AppearCard: function (h, f, e, a, t) { // x, y, 植物id, 移动卡槽类型, 消失时间（默认 15s）
		var b, d, g = "dCard" + Math.random(), c = "opacity:1;width:100px;height:120px;cursor:pointer;clip:rect(auto,auto,60px,auto);left:" + h + "px;top:-1000", t = t || 1500;
 
		if (a) d = 0, oSym.addTask(1, MoveDropCard, [g, f, t]); // 从天而降，反之抛物线掉落
		else d = f - 15 - 20, c += ";top:" + d + "px", oSym.addTask(1, DisappearCard, [g, t]), oSym.addTask(1,function(q,p,n,j,l,k,m,i){if(ArCard[q]&&$(q)){SetStyle($(q),{left:(p=p+j*k)+"px",top:(n=n+Number(l[0]))+"px"});l.shift();--m;m>0&&((l.length==0)&&(l=[8,16,24,32]),oSym.addTask(i,arguments.callee,[q,p,n,j,l,k,m,++i]))}},[g,h,d,Math.floor(Math.random()*4),[-32,-24,-16,-8],[-1,1][Math.floor(Math.random()*2)],8,2]); // 开始记时，确定抛物线，与阳光部分相似故压缩
 
		ArCard[g] = { DID: g, PName: e, PixelTop: 600, CDReady: 1, SunReady: 1, top: d, HasChosen: false, Kind: 1 }; // 生成卡片数据，是否被点击过
		NewImg(g, e.prototype.PicArr[e.prototype.CardGif], c, $("dCardList"), { // 生成卡片 ele
			onclick: function (g) { 
				var self = this, style = self.style, id = self.id; ClearChild($("MovePlant"), $("MovePlantAlpha")), CancelPlant(), style && (style.opacity = 0.5), ChosePlant(g, id), ArCard[id] && (ArCard[id].HasChosen = true);
			}
		});
	},
	MoveDropCard: function (c, b, t) { // 掉落目标
		var a = ArCard[c], ele = $(c); a && ele && ((!a.HasChosen && a.top < b - 52) ? (ele.style.top = (a.top += 2) + "px", oSym.addTask(5, MoveDropCard, [c, b, t])) : DisappearCard(c, t));
	},
	DisappearCard: function (d, r) {
		var q = 5, e = $(d), f = function (t) {
			switch (true) {
				case !ArCard[d] || !e: return; // 卡片已经消失，不做处理
				case oS.Chose == 1 && oS.ChoseCard == d: break; // 选中
				case t > 500: e.style.opacity = 1; break; // 未到闪烁时间
				case t > 0: e.style.opacity = [1, 0.5][Math.ceil(t / 50) % 2]; break; // 闪烁
				default: delete ArCard[d], ClearChild(e); return;
			}
			e = $(d), oSym.addTask(q, arguments.callee, [t - q]);
		}; f(r);
	},
	GrowPlant: function (l, d, c, e, b) {
		var j = oS.ChoseCard, f = ArCard[j], h = f.PName, k = h.prototype, i = k.coolTime, a, g = oGd.$LF[e], o = f.Kind, s = (k.name == "Plants");
		k.CanGrow(l, e, b) && (PlayAudio(g != 2 ? "plant" + Math.floor(1 + Math.random() * 2) : "plant_water"), s ? (new h).Birth(d, c, e, b, l) : asyncInnerHTML((a = new h).CustomBirth(e, b, 0, "auto"), function(n, m) {
			EDPZ.appendChild(n), m.Birth();
		}, a), o ? (delete ArCard[j], ClearChild($(j))) : (innerText(ESSunNum, oS.SunNum -= k.SunNum), i && (f.CDReady = 0, DoCoolTimer(j, k.coolTime))), oSym.addTask(20, SetHidden, [SetStyle(g != 2 ? $("imgGrowSoil") : $("imgGrowSpray"), {
			left: d - 30 + "px",
			top: c - 30 + "px",
			zIndex: 3 * e + 1,
			visibility: "visible"
		})]));
		CancelPlant();
	}
});
