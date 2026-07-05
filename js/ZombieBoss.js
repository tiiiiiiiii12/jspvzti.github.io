var oGargantuarBoss = InheritO(oGargantuar, {
  throwImpnum: 1,
  Lvl: 200,
  hasthrew: 0,
  width: 350,
  CanPass: function(d, c) {
    return c
  },
  beAttackedPointL: 154,
  beAttackedPointR: 285,
  HP:60000,
  level:1,
  WalkToLadder:function(){},//不走梯子
  height: 300,
  bedevil:function(a,b){
    if(b==2){
      CZombies.prototype.bedevil(a,0)
    }
  },
  NormalAttack: function(d, c) {
    PlayAudio("zaji");
    oSym.addTask(125, function(f, e) {
      var h = $Z[f];
      var tp;
      $P[e]&&PrivateTombstones($P[e].R,$P[e].C);
      for (i = -1; i <= 3; i++) {
        h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((d = $P[e]) && (tp = oGd.$[d.R + "_" + d.C + "_" + i]) && tp.getHurt(h, 1, 50),
          oSym.addTask(40, function(h) {
            $Z[f] && h.JudgeAttack()
          }, [h]))
      }
    }, [d, c]);
  },
  CheckSkill:function(a){
	for(i=1;i<=oS.R;i++){
		PrivateTombstones(i,a.PZ?9:1)
	}
	PlayAudio("explosion");
    oSym.addTask(1000, function(a) {
		if($Z[a.id]){
	var Num=Math.floor(Math.random() * a.Skill.length);
      a.Skill[Num].func(a);
      a.HP<20000&&a.Skill[Math.floor(Math.random() * a.Skill.length)].func(a);
	NewEle("DivTeach", "div", 0, 0, EDAll);
	innerText($("DivTeach"),a.Skill[Num].name);
	oSym.addTask(500, ClearChild,[$("DivTeach")]);
	oSym.addTask(1200 + (a.HP * 0.01),arguments.callee,[a])
	}
    }, [a])
  },
  SetZombie: function(a) {
      oSym.addTask(500, function(a) {
		a.getr(a,5,1);
        a.ChangeR(a);
        if (a.HP >= 55000) {
			try{
          oP.SetTimeoutZombie([oZombie, oPeaZombie, oConeheadZombie], 0);
		  oP.SetTimeoutTomZombie([oZombie]);
          oP.NumZombies += 3;
		}catch{};
        } else if (a.HP >= 35000) {
          try{
          oP.SetTimeoutZombie([oScreenDoorZombie, oConeheadZombie,oDancingZombie,oPoleVaultingZombie,oNewspaperZombie], 0);
          oP.SetTimeoutTomZombie([oZombie, oBucketheadZombie, oConeheadZombie]);
		  AppearTombstones(8, 9, 1);
			oP.NumZombies += 5;
			}catch{};
} else if (a.HP >= 10000) {
          try{
          oP.SetTimeoutZombie([oJackinTheBoxZombie, oZomboni,oBucketheadZombie,oLadderZombie,oDancingZombie,oPoleVaultingZombie,oFootballZombie], 0);
          oP.SetTimeoutTomZombie([oZombie, oBucketheadZombie, oConeheadZombie]);
		oP.NumZombies += 7;
		  AppearTombstones(8, 9, 1);
			}catch{};
}else {
          try{
          oP.SetTimeoutZombie([oLadderZombie,oFootballZombie, oZomboni, oGargantuar, oTallNutZombie,oGatlingPeaZombie,oFlagZombie,oJalapenoZombie], 0);
          oP.SetTimeoutTomZombie([oZombie,oFootballZombie,oScreenDoorZombie,oBucketheadZombie]);
          oP.NumZombies += 8;
		  AppearTombstones(6, 9, 2);
			}catch{};
        }
		$Z[a.id]&&oSym.addTask(1500 + (a.HP * 0.01),arguments.callee,[a])
      }, [a])
  },
  Skill: [
    {
      name: "狂暴",
      tip: "使全场僵尸能踩植物，此技能持续10秒",
      func: function(a) {
a.PrivateAct=function(a){
            for (u in $Z) {
              e = $Z[u];
			if(!e.color){
				 e.PZ&&e.beAttacked&&(e.EleBody.style.filter = 'saturate(25%)',e.color=1);
			}
		    if(e.PZ&&e.beAttacked&&e.canWalk(e,u)){
				for (let i = 0; i < 4; i++) {
				let p = oGd.$[e.R + "_" + GetC(e.ZX - 10) + "_" + i];
                    p && (p.canEat) && p.getHurt(e, 1, 100);
				        }
			        }
			}
	};
  oSym.addTask(1200, function(a) {
            a.PrivateAct = function() {};
            for (u in $Z) {
              e = $Z[u];
				e.EleBody.style.filter = 'saturate(100%)';
				e.color=0;
            }
          }, [a])
      }
    },
{
name:"The world",
tip:"使场上植物被冻结,持续5秒",
func:function(a){
for (u in $P) e = $P[u], e && e.getFreeze(e,u,500);
for (i in $Z) Z = $Z[i], Z&&(Z.PZ!=a.PZ)&&Z.ZX<oS.W&&Z.ZX>100&&Z.getFreeze(Z,i,500)
}
},
	{
name:"脑旗号角",
tip:"在本行最后一列召唤加强血量旗帜僵尸，在20000血以上为非精英，20000血以下为精英",
func:function(a){
	var b=CustomZombie(oFlagZombie,a.R,!a.PZ?1:9,!a.PZ);
	b.HP*=5/Math.max(Math.round(a.HP/6000),1);
	b.Speed=b.OSpeed=1.1;
	b.jinyinnum=(a.HP>=20000?0:100)
}
},
{
name:"小鬼狂潮",
tip:"用更大的力气丢出小鬼并换行，持续三次，若血量小于20000则持续五次",
func:function(a){
	a.hasthrew=0;
	a.throwImpnum=a.HP<20000?5:3;
	a.throwImp(a);
	a.PrivateAct=function(a){
		a.throwImpnum>a.hasthrew&&a.canWalk(a,a.id)&&(a.throwImp(a),a.ChangeR(a))
	}
}
},
	{
name:"穿刺重弹",
tip:"砸地产生能造成穿透伤害的子弹",
func:function(a) {
    var b = "PB" + Math.random();
	a.BulletEle = NewImg(0, "images/Plants/Cactus/Projectile" + ($User.Browser.IE6 ? 8 : 32) + ".png", "left:" + (a.AttackedLX) + "px;top:" + (a.pixelTop + 240) + "px;width:60px;height:32px;transform:rotateY(180deg);visibility:hidden;z-index:" + (a.zIndex + 2));
    EditEle(a.BulletEle.cloneNode(false), {
        id: b
      },
      0, EDPZ);
	PlayAudio("zaji");
	a.EleBody.src=a.PicArr[3];
	a.isAttacking=1;
	oSym.addTask(125,function(a,b){
	if(!$Z[a.id])return;
	oSym.addTask(40,function(a){
		$Z[a.id]&&(a.EleBody.src=a.PicArr[2],a.isAttacking=0)
	},[a]);
    oSym.addTask(1,
      function(d) {
        var c = $(d);
        c && SetVisible(c)
      },
      [b]);
    oSym.addTask(1,
      function(f, j, n, i, o) {
        var l, e = GetC(n);
        var Kind = 3,
			Z = oZ[a.PZ?"getHZ1":"getZ0"](n,i),
          d;
		Z && Z.Altitude == 1 && (Z.getHit0(Z,50,0));
        while (Kind--) {
          (d = oGd.$[i + "_" + e + "_" + Kind]) && a.PZ&&(d.canEat) && (d.Stature >= 0) && (d.EName != "oBrains") && (d.AttackedLX < n) && (d.AttackedRX > n) && (d.getHurt(a, 3, 50))
        }
(n += (l = !a.PZ?5:-5)) < oS.W && n > 100 ? (j.style.left = (o += l) + "px", oSym.addTask(1, arguments.callee, [f, j, n, i, o])) : (ClearChild(j),a.BulletEle=null)
      },
      [b, $(b), a.ZX, a.R, a.ZX - 20])
	},[a,b])
  }
}
  ],
  getr: function(e, l, c) {
    if (c) {
      CZombies.prototype.getr(e, l)
    }
  },
  Boss:1,
  hasthrew: 0,
  PrivateAct: function(h){
      !h.Walkin&&(h.PZ?h.ZX<=700:h.ZX>=150)&&(h.OSpeed=h.Speed=0,h.Walkin=1,h.CheckSkill(h),h.SetZombie(h))
    },
  jinyinnum:100,
  jinyinAct: function(a) {},
  PrivateDie: function(){},
  throwImp: function(g) {
    g.ChkActs = function() {
        return 1
      },
      g.ChkActs1 = function() {
        return 1
      },
	g.hasthrew+=1,
      g.EleBody.src = g.PicArr[g.throwImpGif], oSym.addTask(100,
        function(m, l) {
          var k = $Z[m];
          if (!k) {
            return
          }
          PlayAudio("ImpToLand");
          var AC = Math.max(GetC(k.ZX) - 4 * k.PZ, 2);
          oSym.addTask(100, ClearChild, [NewImg(0, k.PicArr[k.ImpToLandGif], "left:" + (GetX(AC) - 30) + "px;top:" + (k.pixelTop + 150) + "px;transform:" + (k.PZ ? "rotateY(0px)" : "rotateY(180px)") + ";z-index:" + k.zIndex, EDPZ)]);
          oSym.addTask(100, function(k) {
            CustomZombie(oImp, k.R, AC, k.PZ ? 0 : 1);
          }, [k]);
          var j = CZombies.prototype;
          k.ChkActs = !k.WalkDirection ? j.ChkActs : j.ChkActs1;
          k.ChkActs1 = j.ChkActs1;
          k.EleBody.src=l;
        },
        [g.id, g.PicArr[g.NormalGif]])
  },
  SunNum: 1000,
  coolTime:Infinity,
  EName: "oGargantuarBoss",
  CName: "首领巨人",
  Produce: '他统领着一大堆僵尸，<br>韧性：<font color="#FF0000">极高(60000)</font><br>特点：<font color="#FF0000">不断丢出僵尸</font><br>那机甲似乎不会回来了，就由我来统领僵尸们踏平这座房子吧'
})
