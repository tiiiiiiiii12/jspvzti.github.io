oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper],
	ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie,oImp],
	PicArr: function() {
		var a = oRepeater.prototype,
			b = a.PicArr;
		return ["images/interface/background1.jpg", b[a.CardGif], b[a.NormalGif]]
	}(),
	backgroundImage: "images/interface/background1.jpg",
	CanSelectCard: 1,
	LevelName: "关卡 1-8",
	LvlEName: 8,
	LargeWaveFlag: {
		12: $("imgFlag1")
	}
}, {
	AZ: [
		[oZombie, 3, 1],
		[oZombie2, 2, 1],
		[oZombie3, 2, 1],
		[oConeheadZombie, 2, 1],
		[oBucketheadZombie, 1, 1],
		[oImp, 1, 1]
	],
	FlagNum: 12,
	FlagToSumNum: {
		a1: [3, 5, 11],
		a2: [1, 5, 10, 30]
	},
	FlagToMonitor: {
		11: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/Card/Plants/Repeater.png", "left:827px;top:525px;clip:rect(auto,auto,60px,auto)", EDAll, {
			onclick: function() {
				GetNewCard(this, oRepeater, 9)
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:490px;left:836px", EDAll)
	}
});
