      oGargantuar= InheritO(oZombie, {
        PicArr: (function() {
            var a = "images/Zombies/Gargantuar/";
            return ["images/Card/Zombies/Gargantuar.png", a + "0.gif", a + "Walk.gif", a + "Attack.gif", a + "ImpToLand.gif", a + "throwImp.gif", a+"ImplessDie.gif",a+"Die.gif" + $Random, a+"ImplessWalk.gif", a + "0.gif",a+"ImplessAttack.gif"]
        })(),
        width:350,
        height:350,
        throwImpGif:4,
        ImpToLandGif:3,
        ImplessDieGif:5,
        ImplessWalkGif:7,
        HP:3000,
        BreakPoint:1,
        GoingDie:CZombies.prototype.NormalDie,
    AttackZombie: function(d, c) {
      PlayAudio("zaji");
			oSym.addTask(100,
			function(f, e) {
				var h = $Z[f],
				g;
				h && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) && g.getHit0(g, 1000, 0), h.JudgeAttack())
		},
			[d, c])
	},
	jinyinAct:function(){},
  JudgeAttack: function() {
                    var g = this,
                        d = g.ZX,
                        e = g.R + "_",
                        f = GetC(d),
                        h = oGd.$,
                        a,
                        c;
					a=g.JudgeAttackH1()||(c = g.JudgeLR(g, e, f, d, h) || g.JudgeSR(g, e, f, d, h)) ? (!g.isAttacking&&(g.isAttacking = 1, g.EleBody.src = g.PicArr[g.AttackGif]),!a&&g.NormalAttack(c[0], c[1]))
            :g.isAttacking && (oSym.addTask(50,function(g){g.isAttacking = 0, g.EleBody.src = g.PicArr[g.NormalGif]},[g]))
            },
                JudgeLR: function(f, d, e, c, g) {
                    return e > 10 || e < 1 ? false : function() {
                        d += --e + "_";
                        var h = 3,
                            i;
                        while (h--) {
                            if (i = g[d + h]) {
                                return i.AttackedRX >= c && i.AttackedLX <= c ? [f.id, i.id] : false
                            }
                        }
                    }()
                },
                JudgeSR: function(f, d, e, c, g) {
                    return e > 9 ? false : function() {
                        d += e + "_";
                        var h = 3,
                            i;
                        while (h--) {
                            if (i = g[d + h]) {
                                return i.AttackedRX >= c && i.AttackedLX <= c ? [f.id, i.id] : false
                            }
                        }
                    }()
                },
    NormalAttack: function(d, c) {
      PlayAudio("zaji");
            oSym.addTask(100, function(f, e) {
                var h = $Z[f];
                var tp;
              for (i=1;i<=3;i++){
                h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime &&(d=$P[e])&&((tp=oGd.$[d.R+"_"+d.C+"_"+i]) && tp.getHurt(h,1,50), h.JudgeAttack())
              }
            }, [d, c]);
        },
        ExplosionDie:function(){
          this.NormalDie()
        },
        getExplosion:function(){
          this.NormalDie()
        },
        hasthrew:0,
        PrivateAct:function(a){
          !a.hasthrew&&GetC(a.ZX)>4&&!a.isAttacking&&(a.HP<=1500)&&$Z[a.id]&&a.throwImp(a);
        },
        throwImp:function(g) {
            g.ChkActs = function() {
                    return 1
                },
                g.ChkActs1 = function() {
                    return 1
                },
                g.hasthrew=1,
                g.EleBody.src = f[g.throwImpGif] + $Random + Math.random(),oSym.addTask(100,
                    function(m, l) {
                        var k = $Z[m];
                        if (!k) {
                            return
                        }
                      CustomZombie(oImp,k.R,GetC(k.ZX)-5,k.PZ?0:1);
                        var j = CZombies.prototype;
                        k.ChkActs = !k.WalkDirection?j.ChkActs:j.ChkActs1;
                        k.ChkActs1 = j.ChkActs1;
                        k.EleBody.src = l;
                    },
                    [g.id,g.PicArr[[g.NormalGif = g.ImplessWalkGif, g.AttackGif = g.ImplessAttackGif,g.DieGif=g.ImplessDieGif][b]]])
        },
        SunNum:275,
        ImplessWalkGif:9,
        EName: "oGargantuar",
        CName: "伽刚特尔",
        Produce: '非常强力的僵尸<p>韧性：<font color="#FF0000">极高(3000)</font><br>特点：<font color="#FF0000">半血丢小鬼，砸击植物</font><br>伽刚特尔的气场，是任何僵尸都无法比拟的，是僵尸世界公认的偶像，最成功之僵。但他出道十几年以来，却仍有个老大难的问题：他没有女朋友！'
    })
