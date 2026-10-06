oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKelp, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oSeaShroom, oPlantern, oCactus, oBlover, oSplitPea, oStarfruit,oPumpkinHead,oGarlic],
	ZName: [oZombie, oZombie2, oZombie3, oNewspaperZombie,oImp,oPoleVaultingZombie,oConeheadZombie,oPeaZombie,oLadderZombie,oBungeeZombie],
	PicArr: function() {
		var a = oUmbrellaLeaf.prototype,
			b = a.PicArr;
		return ["images/interface/background_Dark.jpg", "images/Plants/ScaredyShroom/ScaredyShroom.gif","images/Plants/ScaredyShroom/ScaredyShroomCry.gif","images/interface/Tombstones.png", "images/interface/Tombstone_mounds.png", b[a.CardGif], b[a.NormalGif]]
	}(),
	backgroundImage: "images/interface/background_Dark.jpg",
	CanSelectCard: 1,
	DKind: 0,
	SunNum: Math.round(Math.random()*100+50),
	LevelName: "5-1",
	LvlEName: 41,
	AudioArr: ["puff"],
	LargeWaveFlag: {
    10: $("imgFlag3"),
	20: $("imgFlag1")
	},
	Monitor: {
		f: AppearTombstones,
		ar: [7, 9, 8]
	},
	UserDefinedFlagFunc: function(a) {
		oP.FlagZombies>15 && oP.SetTimeoutTomZombie([oZombie,oConeheadZombie,oPeaZombie,oImp])
	},
	StartGameMusic: "rebeatedupnight",
	LoadAccess: function(a) {	
  NewImg("dDave", "images/Plants/ScaredyShroom/ScaredyShroom.gif", "left:0;width:285px;height:405px;top:200px", EDAll);
	NewEle("DivTeach", "div", 0, 0, EDAll);
		(function(d) {
			var b = arguments.callee,
				c = $("DivTeach");
			switch (d) {
				case 0:
            innerText(c, "亲爱的" + $User.Visitor.UserName||"player" + "您好，我是胆小菇。");
					  PlayAudio("puff");
						c.onclick = function() {
							oSym.addTask(10, b, [1])
						};
					break;
				case 1:
					PlayAudio("puff");
					c.onclick = function() {
						oSym.addTask(10, b, [2])
					};
					innerText(c, "请问，这是哪里？");
					break;
				case 2:
						c.onclick = function() {
							oSym.addTask(10, b, [3])
						};
					innerText(c, "“……我不知道”");
					break;
				case 3:
					PlayAudio("puff");
					$("dDave").src = "images/Plants/ScaredyShroom/ScaredyShroomCry.gif";
						c.onclick = function() {
							oSym.addTask(10, b, [4])
					};
					innerText(c, "为什么又是黑夜……我好害怕……");
					break;
				case 4:
					PlayAudio("puff");
						c.onclick = function() {
							oSym.addTask(10, b, [5])
						};
					innerText(c, "有好多的僵尸……");
					break;
				case 5:
					PlayAudio("puff");
					c.onclick = null;
						c.onclick = function() {
							oSym.addTask(10, b, [6])
						};
					innerText(c, "“别怕……”");
					break;
				case 6:
						c.onclick = function() {
							oSym.addTask(10, b, [7])
						};
					innerText(c, "（远处传来了僵尸的叫声，看来这是一场恶战……）");
					break;
				case 7:
					ClearChild($("DivTeach"));
          oSym.addTask(1,function(Left){
            $("dDave").style.left=Left+"px";
            (Left-=5)>-250?oSym.addTask(1,arguments.callee,[Left]):(ClearChild($("dDave")),a(0));
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
    [oPeaZombie, 1, 1],
    [oLadderZombie, 1, 1],
    [oPoleVaultingZombie, 1, 1],
    [oBungeeZombie, 1, 1],
		[oNewspaperZombie, 1, 1]
	],
	FlagNum: 20,
	FlagToSumNum: {
		a1: [3, 5, 9,13,15,19],
		a2: [2, 3, 10,18,6,12,30]
	},
	FlagToMonitor: {
		9: [ShowLargeWave, 0],
    19: [ShowFinalWave, 0] 
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/Card/Plants/UmbrellaLeaf.png", "left:667px;top:220px;clip:rect(auto,auto,60px,auto)", EDAll, {
			onclick: function() {
        ClearChild($("PointerUD"));
				GetNewCard(this,oUmbrellaLeaf, 42);
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
	}
});
