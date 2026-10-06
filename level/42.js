let warn=confirm("您真的要打开这一关吗？");
if(warn==true){
oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus, oBlover, oSplitPea, oStarfruit,oPumpkinHead,oGarlic,oUmbrellaLeaf],
	ZName: [oZombie, oZombie2, oZombie3, oGatlingPeaZombie,oImp,oWallNutZombie,oConeheadZombie,oPeaZombie,oBungeeZombie,oCatapultZombie,oDancingZombie,oBackupDancer],
	PicArr: function() {
		var a = oCoffeeBean.prototype,
			b = a.PicArr;
		return ["images/interface/background_Dark.jpg", "images/Plants/FumeShroom/FumeShroom.gif","images/interface/Tombstones.png", "images/interface/Tombstone_mounds.png", b[a.CardGif], b[a.NormalGif]]
	}(),
	backgroundImage: "images/interface/background_Dark.jpg",
	CanSelectCard: 1,
	DKind: 0,
	SunNum: Math.round(Math.random()*150+75),
	LevelName: "5-2",
	LvlEName: 42,
	AudioArr: ["fume"],
	LargeWaveFlag: {
  10: $("imgFlag3"),
	20: $("imgFlag2"),
  30: $("imgFlag1")
	},
	Monitor: {
		f: AppearTombstones,
		ar: [6, 9, 11]
	},
	UserDefinedFlagFunc: function(a) {
		if(oP.FlagZombies>22){
      AppearTombstones(8,9,1);
      oP.SetTimeoutTomZombie([oZombie,oConeheadZombie,oPeaZombie,oImp,oWallNutZombie]);
      oSym.addTask(400,function(){
        for (i in $Z) $Z[i] && $Z[i].ZX>800&&$Z[i].PZ&&(Math.random()*100>30&&oLadderZombie.prototype.getAid(i,0,800),$Z[i].Speed*=1.5,$Z[i].OSpeed*=1.5,$Z[i].LostPaperSpeed*=1.5)
      },[])
    }
	},
	StartGameMusic: "rebeatedupnight",
	LoadAccess: function(a) {
  oHypnoShroom.prototype.Tooltip="";
  oHypnoShroom.prototype.Produce="你好，房主<br>你好，……player";
	SetHidden($("dChapter1"),$("dChapter2"),$("dChapter3"),$("dChapter4"));
	oAudio["Look up at the Sky"].playbackRate=Math.random()*0.7+0.7;//音乐变速
  NewImg("dDave", "images/Plants/FumeShroom/FumeShroom.gif", "left:0;width:400px;height:352px;top:200px", EDAll);
	NewEle("DivTeach", "div", 0, 0, EDAll);
		(function(d) {
			var b = arguments.callee,
				c = $("DivTeach");
			switch (d) {
				case 0:
            innerText(c, "房主在吗？");
					  PlayAudio("fume");
						c.onclick = function() {
							oSym.addTask(10, b, [1])
						};
					break;
				case 1:
					PlayAudio("fume");
					c.onclick = function() {
						oSym.addTask(10, b, [2])
					};
					innerText(c, "你应该知道戴夫失踪了吧？");
					break;
				case 2:
					PlayAudio("fume");
						c.onclick = function() {
							oSym.addTask(10, b, [3])
						};
					innerText(c, "他好像被抓走…或者被控制了");
					break;
				case 3:
					PlayAudio("fume");
						c.onclick = function() {
							oSym.addTask(10, b, [4])
					};
					innerText(c, "我觉得，");
					break;
				case 4:
					PlayAudio("fume");
						c.onclick = function() {
							oSym.addTask(10, b, [5])
						};
					innerText(c, "有一股神秘的力量介入到了这里");
					break;
				case 5:
          PlayAudio("fume");
					c.onclick = null;
						c.onclick = function() {
							oSym.addTask(10, b, [6])
						};
					innerText(c, "那股力量很强大，祝你好运吧！");
					break;
				case 6:
            PlayAudio("fume");
						c.onclick = function() {
							oSym.addTask(10, b, [7])
						};
					innerText(c, "另外你可以带上我，我很好用！");
					break;
				case 7:
          oSym.addTask(1,function(Left){
            $("dDave").style.left=Left+"px";
            (Left-=5)>-400?oSym.addTask(1,arguments.callee,[Left]):(ClearChild($("dDave")),a(0),ClearChild($("DivTeach")));
          },[0]);
			}
		})(0)
	}
}, {
	AZ: [
		[oZombie, 3, 1],
		[oZombie2, 2, 1],
		[oZombie3, 2, 1],
		[oImp, 2, 1],
    [oConeheadZombie, 1, 1],
    [oGatlingPeaZombie, 1, 1],
    [oDancingZombie, 1, 1],
    [oWallNutZombie, 1, 1],
    [oBungeeZombie, 1, 1],
    [oPeaZombie, 1, 1],
		[oCatapultZombie, 1, 1]
	],
	FlagNum: 30,
	FlagToSumNum: {
		a1: [3, 5, 9,13,15,19,23,25,29],
		a2: [2, 3, 10,18,6,12,30,10,20,45]
	},
	FlagToMonitor: {
		9: [ShowLargeWave, 0],
    19: [ShowLargeWave, 0],
    29: [ShowLargeWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/Card/Plants/CoffeeBean.png", "left:667px;top:220px;clip:rect(auto,auto,60px,auto)", EDAll, {
			onclick: function() {
        ClearChild($("PointerUD"));
				GetNewCard(this,oCoffeeBean, 43);
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
	}
});
}
