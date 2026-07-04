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
	oSym.addTask(12000 + (a.HP * 0.01),arguments.callee,[a])
	}
    }, [a])
  },
  SetZombie: function(a) {
      oSym.addTask(500, function(a) {
		a.getr(a,5,1);
        a.ChangeR(a);
        if (a.HP >= 80000) {
			try{
          oP.SetTimeoutZombie([oZombie, oZombie2, oZombie3], 0);
		  oP.SetTimeoutTomZombie([oZombie]);
          oP.NumZombies += 3;
		}catch{};
        } else if (a.HP >= 60000) {
			try{
          oP.SetTimeoutZombie([oNewspaperZombie, oConeheadZombie,oZombie, oZombie2, oPoleVaultingZombie,oPeaZombie], 0);
          oP.SetTimeoutTomZombie([oZombie]);
          oP.NumZombies += 6;
				}catch{};
        } else if (a.HP >= 40000) {
          try{AppearTombstones(8, 9, 1);
          oP.SetTimeoutZombie([oJackinTheBoxZombie, oWallNutZombie,oBucketheadZombie,oDancingZombie,oJalapenoZombie,oFootballZombie], 0);
          oP.SetTimeoutTomZombie([oZombie, oBucketheadZombie, oConeheadZombie]);
			}catch{};
          oP.NumZombies += 6;
        } else if (a.HP >= 10000) {
          try{AppearTombstones(6, 9, 2);
          oP.SetTimeoutZombie([oFootballZombie, oZomboni, oGargantuar, oTallNutZombie,oGatlingPeaZombie,oFlagZombie], 0);
          oP.SetTimeoutTomZombie([oZombie,oFootballZombie,oScreenDoorZombie,oBucketheadZombie]);
          oP.NumZombies += 6;
			}catch{};
        }
		oSym.addTask(1500 + (a.HP * 0.01),arguments.callee,[a])
      }, [a])
  },
  Skill: [
    {
      name: "狂暴",
      tip: "使全场僵尸能踩植物，此技能持续12秒",
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
tip:"使场上植物被冻结,持续7秒",
func:function(a){
for (u in $P) e = $P[u], e && e.getFreeze(e,u,700);
for (i in $Z) Z = $Z[i], Z&&(Z.PZ!=a.PZ)&&Z.ZX<oS.W&&Z.ZX>100&&Z.getFreeze(Z,i,700)
}
},
	{
name:"脑旗号角",
tip:"在本行最后一列召唤一个5倍血量旗帜僵尸，在20000血以上为非精英，20000血以下为精英",
func:function(a){
	var b=CustomZombie(oFlagZombie,a.R,!a.PZ?1:9,!a.PZ);
	b.HP*=5;
	b.jinyinnum=(a.HP>=20000?0:100)
}
},
{
name:"小鬼狂潮",
tip:"用更大的力气丢出小鬼并换行，持续五次，若血量小于20000则持续七次",
func:function(a){
	a.hasthrew=0;
	a.throwImpnum=a.HP<20000?7:5;
	a.throwImp(a);
	a.PrivateAct=function(a){
		a.throwImpnum>a.hasthrew&&a.canWalk(a,a.id)&&(a.throwImp(a),a.ChangeR(a))
	}
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
  PrivateDie: CZombies.prototype.PrivateDie,
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
        [g.id, g.PicArr[g.WalkGif]])
  },
  SunNum: 1000,
  coolTime:Infinity,
  EName: "oGargantuarBoss",
  CName: "首领巨人",
  Produce: '他统领着一大堆僵尸，<br>韧性：<font color="#FF0000">极高(60000)</font><br>特点：<font color="#FF0000">不断丢出僵尸</font><br>那机甲似乎不会回来了，就由我来统领僵尸们踏平这座房子吧'
})
