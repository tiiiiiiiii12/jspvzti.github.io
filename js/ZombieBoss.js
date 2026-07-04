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
   a.cannotCheck = 1;
    oSym.addTask(1300 + (a.HP * 0.01), function(a) {
	var Num=Math.floor(Math.random() * a.Skill.length);
      a.Skill[Num].func(a);
      a.HP<20000&&a.Skill[Math.floor(Math.random() * a.Skill.length)].func(a);
      a.cannotCheck = 0;
	NewEle("DivTeach", "div", 0, 0, EDAll);
	innerText($("DivTeach"),a.Skill[Num].name);
	oSym.addTask(500, ClearChild,[$("DivTeach")]);
    }, [a])
  },
  Skill: [{
      name: "墓碑炸弹",
      tip: "向前发射并向上下各散射两个墓碑吞噬者，击中植物或魅惑僵尸直接在当格生成墓碑",
      func: function(a) {
        let i = 0,
          max = 5;
        var timer = setInterval(function() {
            i++;
            let z = $(a.id);
            let div = $n("div");
            let d = "tPea" + Math.random();
            div.id = d;
            div.innerHTML = '<img src="images/Plants/GraveBuster/GraveBuster.gif">';
            EditEle(div, 0, {
              position: "absolute",
              transform: "rotateY(20deg)",
              zIndex: "24",
              left: a.ZX + "px",
              top: a.pixelTop + 160 + "px"
            }, EDPZ, 0);
            oSym.addTask(1, function(z, d, a, i) {
                let pea = $(d);
                let y = (i <= 2 ? (Math.random() * 4 + 0) : (i <= 4 ? 0 : Math.random() * 0 - 4));
                $(d).style.left = $(d).offsetLeft - 5 + "px";
                $(d).style.top = $(d).offsetTop - y + "px";
                let C = GetC(a.ZX + 40);
                for (let i = 3; i >= 0; i--) {
                  for (let j = 1; j <= C; j++) {
                    let p = oGd.$[GetR($(d).offsetTop + 100) + "_" + j + "_" + i];
                    p && (p.canEat) && (p.EName != "oLawnCleaner" && p.EName != "oPoolCleaner" && p.EName != "oBrains") && (p.AttackedLX < $(d).offsetLeft) && (p.AttackedRX > $(d).offsetLeft) && (PlayAudio("explosion"), (PrivateTombstones(p.R, p.C)), ($(d) && ClearChild($(d))));
                    let Z = oZ.getHZ1($(d).offsetLeft, GetR($(d).offsetTop + 100));
                    Z && (Z.Altitude == 1) && ((Z.DisappearDie(), (PrivateTombstones(Z.R, GetC(Z.ZX))), ($(d) && ClearChild($(d)))))
                  }
                }
                if ($(d).offsetLeft <= 0 || ($(d).offsetTop <= GetY(0) - 100) || ($(d).offsetTop >= GetY(oS.R) + 250)) {
                  ClearChild($(d));
                }
                oSym.addTask(1, arguments.callee, [z, d, a, i])
              },
              [z, d, a, i]);
            (i > max) && clearInterval(timer);
          },
          100);
      }
    },
    {
      name: "狂暴",
      tip: "使全场僵尸能踩植物，此技能持续10秒",
      func: function(a) {
		  a.EleBody.style.filter = 'saturate(25%)',
        a.PrivateAct = function(a) {
            for (u in $Z) {
              e = $Z[u];	
			if(e.color!==1){
				 e.PZ&&e.beAttacked && (!e.FreeSetbodyTime)&&(
					e.color=1);
			e.caiPlants = function(a) {
		    if(a.PZ&&a.beAttacked&&(!a.FreeSetbodyTime)){
				for (let i = 0; i < 4; i++) {
				let p = oGd.$[a.R + "_" + GetC(a.ZX - 10) + "_" + i];
                    p && (p.canEat) && p.getHurt(a, 1, 100);
				        }
			        }
                return 1;
				}
			}
		}
	};
          $Z[a.id] && oSym.addTask(1000, function(a) {
            a.PrivateAct = function() {};
			a.EleBody.style.filter = 'saturate(100%)';
            for (u in $Z) {
              e = $Z[u];
                e.caiPlants =function(){return 0};
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
      !h.Walkin&&(h.PZ?h.ZX<=700:h.ZX>=150)&&(h.OSpeed=h.Speed=0,h.Walkin=1,h.CheckSkill(h))
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
      g.hasthrew += 1,
      g.EleBody.src = g.PicArr[g.throwImpGif], oSym.addTask(100,
        function(m, l) {
          var k = $Z[m];
          if (!k) {
            return
          }
          PlayAudio("ImpToLand");
          var AC = Math.max(GetC(k.ZX) - 4 * k.PZ, 3);
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
