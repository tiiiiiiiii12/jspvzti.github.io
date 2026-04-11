var CZombies = function(b, a) {
        return (a = function() {}).prototype = {
                name: "Zombies",
                HP: 270,
                Lvl: 1,
                NormalGif: 2,
                CardGif: 0,
                StaticGif: 1,
			    jinyin:false,
			    jinyinnum:20,
                StandGif: 2,
                BookHandBack: 0,
                AudioArr: [],
                CanSelect: 1,
                CanDisplay: 1,
                BookHandPosition: "50% 70%",
                AttackGif: 3,
                LostHeadGif: 4,
                LostHeadAttackGif: 5,
                HeadGif: 6,
                DieGif: 7,
                BoomDieGif: 8,
                width: 166,
                height: 144,
                beAttackedPointL: 82,
                beAttackedPointR: 156,
                BreakPoint: 90,
                SunNum: 50,
                coolTime: 0,
                Ornaments: 0,
                OrnHP: 0,
                OSpeed: 1.6,
                Speed: 1.6,
                CSS_fliph: "",
                CSS_alpha: "",
                AKind: 0,
                beAttacked: 1,
                isAttacking: 0,
                Attack: 100,
                WalkDirection: 0,
                LivingArea: 1,
                Altitude: 1,
                FreeSetbodyTime: 0,
                FreeFreezeTime: 0,
                FreeSlowTime: 0,
			    ShootPeaSpeed:140,
                CanPass: function(d, c) {
                    return c && c != 2
                },
                CanGrow: function(d, c, e) {
                    return this.CanPass(c, oGd.$LF[c]) && (oS.ArP ? e > oS.ArP.ArC[1] : true);
                },
                ChkActs: function(h, f, j, e) {
                    var d, c, g;
                    !(h.FreeFreezeTime || h.FreeSetbodyTime) ? (h.beAttacked && !h.isAttacking && h.JudgeAttack(), !h.isAttacking ? ((c = h.AttackedRX -= (d = h.Speed)) < -50 ? (j.splice(e, 1), h.DisappearDie(), g = 0) : (c < 100 && !h.PointZombie && (h.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), h.ChangeR({
                        R: f,
						ar: [oS.R - 1],
                        CustomTop: 400 - h.height + h.GetDY()
                    })), h.ZX = h.AttackedLX -= d, h.Ele.style.left = Math.floor(h.X -= d) + "px", g = 1)) : g = 1) : g = 1;
                h.PrivateAct&&h.PrivateAct(h);
                    return g
                },
			canWalk:function(h,b){
				return $Z[b]&&!(h.FreeFreezeTime || h.FreeSetbodyTime)
			},
                ChkActs1: function(g, e, h, d) {
                    var c,f;
                    !(g.FreeFreezeTime || g.FreeSetbodyTime) ? (g.beAttacked && !g.isAttacking && g.JudgeAttack(), !g.isAttacking ? (g.AttackedLX += (c = g.Speed)) > oS.W ? (h.splice(d, 1), g.DisappearDie(), f = 0) : (g.ZX = g.AttackedRX += c, g.Ele.style.left = Math.ceil(g.X += c) + "px", f = 1) : f = 1) : f = 1;
                    g.PrivateAct&&g.PrivateAct(g);
                    return f
                },
                GetDX: function() {
                    return -110
                },
                GetDY: function() {
                    return -10
                },
                GetDTop: 0,
                ChangeR: function(e) {
                    var h = e.R,
                        g = e.ar || [],
                        j = e.CustomTop,
                        d = this,
                        q = h - 1,
                        l,
                        k = d.id,
                        m = -1,
                        f = d.Ele,
                        n = d.EleBody,
                        i = oGd.$LF,
                        c;
                    !g.length && (d.CanPass(q, i[q]) && (g[++m] = q), d.CanPass(q += 2, i[q]) && (g[++m] = q));
                    g.length ? (l = !d.WalkDirection ? -5 : 5, d.ZX += l, d.AttackedLX += l, d.AttackedRX += l, d.X += l, q = g[Math.floor(Math.random() * g.length)], SetStyle(f, {
                        left: d.X + "px",
                        top: (d.pixelTop = j == undefined ? GetY(q) - d.height + d.GetDY() : j) + "px",
                        zIndex: d.zIndex = 3 * q + 1
                    }), d.isAttacking && (n.src = d.PicArr[d.NormalGif]), oZ.moveTo(k, h, q)) : n.src = d.PicArr[d.NormalGif];
                    d.isAttacking = 0
                },
                getShadow: function(c) {
                    return "left:" + (c.beAttackedPointL - 10) + "px;top:" + (c.height - 22) + "px"
                },
                Init: function(g, i, e, d) {
                    var c = 0,
                        h = this,
                        f = [];
                    i.AttackedRX = (i.X = (i.ZX = i.AttackedLX = g) - i.beAttackedPointL) + i.beAttackedPointR;
                    while (--d) {
                        i.CanPass(d, e[d]) && (f[c++] = d)
                    }
                    i.ArR = f;
                    i.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + i.getShadow(i) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);top:", 'px" src="', '"></div>']
				},
                getHTML: function(d, g, i, h, f, k, j, c) {
                    var e = this.ArHTML;
                    return e[0] + d + e[1] + f + e[2] + g + e[3] + i + e[4] + h + e[5] + k + e[6] + j + e[7] + c + e[8]
                },
                prepareBirth: function(f) {
                    var h = this,
                        e = h.ArR,
                        d = e[Math.floor(Math.random() * e.length)],
                        g = GetY(d) + h.GetDY(),
                        c = g - h.height,
                        j = 3 * d + 1,
                        i = h.id = "Z_" + Math.random();
                    h.R = d;
                    h.pixelTop = c;
                    h.zIndex = j;
                    (h.delayT = f) && (h.FreeSetbodyTime = oSym.Now);
                    return h.getHTML(i, h.X, c, j, "none", "auto", h.GetDTop, h.PicArr[h.NormalGif])
                },
                CustomBirth: function(i, c, d, m) {
                    var g = this,
                        f = GetY(i) + g.GetDY(),
                        h = f - g.height,
                        k = 3 * i + 1,
                        e = g.id = "Z_" + Math.random(),
                        l = g.beAttackedPointL,
                        j = g.beAttackedPointR;
                    g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = GetX(c) - (j - l) * 0.5) - l) + j;
                    g.R = i;
                    g.pixelTop = h;
                    g.zIndex = k;
                    (g.delayT = d) && (g.FreeSetbodyTime = oSym.Now);
                    return g.getHTML(e, g.X, h, k, "none", m || 0, g.GetDTop, g.PicArr[g.NormalGif])
                },
                BirthCallBack: function(f) {
                    var e = f.delayT,
                        d = f.id,
                        c = f.Ele = $(d);
                    f.EleShadow = c.firstChild;
                    f.EleBody = c.childNodes[1];
                    e ? oSym.addTask(e,
                        function(h, g) {
                            var i = $Z[h];
                            i && (i.FreeSetbodyTime = 0, SetBlock(g))
						},
                        [d, c]) : SetBlock(c)
                },
			    level:1,
Birth: function() {
  var c = this;
  $Z[c.id] = c;
  c.HP *= Math.max(c.level * 0.75, 1);
  c.OrnHP *= Math.max(c.level * 0.75, 1);
  c.tasktime /= c.level;
  oZ.add(c);
  c.BirthCallBack(c);
  Math.random() * 100 < c.jinyinnum && (c.jinyin = true, c.jinyinAct && c.jinyinAct(c));
  c.MaxHP=c.HP;
  c.MaxOrnHP=c.OrnHP;
  if (c.HPlook) {
    var B = NewEle("dskill", "div", "position:absolute;color:yellow;width:80px;font-size:12px;z-index:100;" + c.getShadow(c), "", c.Ele);
    var A = "hp" + Math.random();
    dskill.id = A;
    var C = $(A);
    oSym.addTask(0, function(C, B) {
      B.innerHTML = (c.OrnHP > 0 ? c.OrnHP + "+" + c.HP : c.HP) + "<br>精英:" + c.jinyin
      oSym.addTask(5, arguments.callee, [C, B])
    }, [C, B]);
  }
  c.PrivateBirth && c.PrivateBirth(c);
},
                getCrushed: function(c) {
                    return true
                },
                getRaven: function() {
                    return this.DisappearDie(),
                        1
                },
                getExplosion: function(a) {
				if(a==undefined){var a=1800}
                   this.HP+this.OrnHP-this.BreakPoint>a?this.getHit0(this,a,0):this.ExplosionDie()
                },
                getThump: function(a) {
					if(a==undefined){var a=1800}
                    this.HP+this.OrnHP-this.BreakPoint>a?this.getHit0(this,a,0):this.DisappearDie()
                },
                PlayNormalballAudio: function() {
                    PlayAudio("splat" + Math.floor(1 + Math.random() * 3))
				},
                PlayFireballAudio: function() {
                    PlayAudio(["ignite", "ignite2"][Math.floor(Math.random() * 2)])
                },
                PlaySlowballAudio: function() {
                    PlayAudio("frozen")
                },
                getFireball: function(h, e, g) {
                    h.FreeSlowTime = 0;
                    h.Attack = 100;
                    h.FreeFreezeTime || h.FreeSetbodyTime ? (h.PlayNormalballAudio(), h.Speed = h.OSpeed) : h.PlayFireballAudio();
                    var f = h.AttackedLX,
                        j = h.AttackedRX,
                        c = !g ? oZ.getArZ(f, f + 40, h.R) : oZ.getArZ(j - 40, j, h.R),
                        d = c.length;
                    while (d--) {
                        c[d].getSputtering()
                    }
                },
                getSputtering: function(c) {
                    this.getHit2(this, c || 13, 0)
                },
                getSlow: function(h, f, g) {
                    var d = oSym.Now + g,
                        e = h.FreeSlowTime,
                        c = 0;
                    switch (true) {
                        case !e:
                            !(h.FreeFreezeTime || h.FreeSetbodyTime) && (h.Speed = 0.5 * h.OSpeed);
                            h.Attack = 50;
                            h.PlaySlowballAudio();
                            h.FreeSlowTime = d;
                            c = 1;
                            break;
                        case e < d:
                            h.FreeSlowTime = d;
                            h.PlayNormalballAudio();
                            c = 1
                    }
                    c && oSym.addTask(g,
                        function(j, i) {
                            var k = $Z[j];
                            k && k.FreeSlowTime == i && (k.FreeSlowTime = 0, k.Attack = 100, k.Speed && (k.Speed = k.OSpeed))
                        },
                        [f, d])
                },
                getFreeze: function(d, c,a) {
                    d.Speed = 0;
                    oSym.addTask(400||a,
                        function(g, f, e) {
                            ClearChild(e);
                            var h = $Z[g];
                            h && h.FreeFreezeTime == f && (h.FreeFreezeTime = 0, h.Attack = 50, !h.FreeSetbodyTime && (h.Speed = 0.5 * h.OSpeed, h.isAttacking && h.JudgeAttack()), oSym.addTask(1500,
                                function(j, i) {
                                    var k = $Z[j];
                                    k && k.FreeSlowTime == i && (k.FreeSlowTime = 0, k.Attack = 100, !k.FreeSetbodyTime && (k.Speed = k.OSpeed))
								},
                                [g, h.FreeSlowTime = oSym.Now + 1500]))
                        },
                        [c, d.FreeFreezeTime = oSym.Now + 400, NewImg("icetrap_" + Math.random(), "images/Plants/IceShroom/icetrap.gif", d.getShadow(d), d.Ele)])
                },
                NormalDie: function() {
                    var c = this;
					c.PrivateDie&&c.PrivateDie(c);
                    c.EleBody.src = c.PicArr[c.DieGif] + Math.random();
                    oSym.addTask(250, ClearChild, [c.Ele]);
                    c.HP = 0;
                    delete $Z[c.id];
                    c.PZ && oP.MonPrgs()
                },
                ExplosionDie: function() {
                    var c = this;
					c.PrivateDie&&c.PrivateDie(c);
                    c.EleBody.src = c.PicArr[c.BoomDieGif] + Math.random();
                    oSym.addTask(300, ClearChild, [c.Ele]);
                    c.HP = 0;
                    delete $Z[c.id];
                    c.PZ && oP.MonPrgs()
				},
                DisappearDie: function() {
					this.PrivateDie&&this.PrivateDie(this);
                    ClearChild(this.Ele);
                    this.HP = 0;
                    delete $Z[this.id];
                    this.PZ && oP.MonPrgs()
                },
                CrushDie: function() {
                    var c = this;
					c.PrivateDie&&c.PrivateDie(c);
                    c.GoingDieHead(c.id, c.PicArr, c);
                    ClearChild(c.Ele);
                    c.HP = 0;
                    delete $Z[c.id];
                    c.PZ && oP.MonPrgs()
                },
                GoingDieHead: function(e, c, d) {
                    oSym.addTask(200, ClearChild, [NewImg(0, c[d.HeadGif] + Math.random(), "left:" + d.AttackedLX + "px;top:" + (d.pixelTop - 20) + "px;z-index:" + d.zIndex, EDPZ)])
                },
                GoingDie: function(d) {
                    var c = this,
                        e = c.id;
                    c.EleBody.src = d;
                    c.GoingDieHead(e, c.PicArr, c);
                    c.beAttacked = 0;
                    c.FreeFreezeTime = c.FreeSetbodyTime = c.FreeSlowTime = 0;
                    c.AutoReduceHP(e)
                },
                AutoReduceHP: function(c) {
                    oSym.addTask(100,
                        function(e) {
                            var d = $Z[e];
                            d && ((d.HP -= 60) < 1 ? d.NormalDie() : d.AutoReduceHP(e))
                        },
                        [c])
                },
                JudgeAttack: function() {
                    var g = this,
                        d = g.ZX,
                        e = g.R + "_",
                        f = GetC(d),
                        h = oGd.$,
						a,
                        c;
					(a=g.JudgeAttackH1())||(c = g.JudgeLR(g, e, f, d, h) || g.JudgeSR(g, e, f, d, h)) ? (!g.isAttacking&&(g.isAttacking = 1, g.EleBody.src = g.PicArr[g.AttackGif]),!a&&g.NormalAttack(c[0], c[1])) : g.isAttacking && (g.isAttacking = 0, g.EleBody.src = g.PicArr[g.NormalGif])
                },
				JudgeAttackH1: function() {
                    var e = this,
                        d = oZ.getHZ1(e.ZX, e.R),
                        f = e.id,
                        c;
					if(d && d.Altitude == 1){
                     (!e.isAttacking ? e.AttackZombie(f, c = d.id) : e.AttackZombie(f, d.id, 1))
					return d
				   }
                },
                JudgeLR: function(f, d, e, c, g) {
                    return e > 10 || e < 1 ? false : function() {
                        d += --e + "_";
                        var h = 3,
                            i;
                        while (h--) {
                            if ((i = g[d + h]) && i.canEat) {
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
                            if ((i = g[d + h]) && i.canEat) {
                                return i.AttackedRX >= c && i.AttackedLX <= c ? [f.id, i.id] : false
                            }
                        }
                    }()
                },
                JudgeAttackH: function() {
                    var e = this,
                        d = oZ.getZ0(e.ZX, e.R),
                        f = e.id,
                        c;
                    d && d.AttackedLX < oS.W && d.Altitude == 1 ? (!e.isAttacking ? (e.isAttacking = 1, e.EleBody.src = e.PicArr[e.AttackGif], e.AttackZombie(f, c = d.id)) : e.AttackZombie(f, d.id, 1)) : e.isAttacking && (e.isAttacking = 0, e.EleBody.src = e.PicArr[e.NormalGif])
				},
	getr:function(e,l){
		GetC(e.ZX)<10&&(e.ZX +=l,
			e.AttackedLX += l, 
			e.AttackedRX += l, 
			e.X += l, 
			SetStyle(e.Ele, {
            left: e.X + "px"
          }))
		},
			tasktime:100,
                AttackZombie: function(d, c) {
                    oSym.addTask($Z[d].tasktime*0.1,
                        function(f, e) {
                            var h = $Z[f],
                                g;
                            h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $Z[e]) && g.getHit0(g, 10, 0), h.JudgeAttack())
                        },
                        [d, c])
                },
                NormalAttack: function(d, c) {
                    PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)]);
                    oSym.addTask(50,
                        function(e) {
                            $Z[e] && PlayAudio(["chomp", "chompsoft"][Math.floor(Math.random() * 2)])
                        },
                        [d]);
                    oSym.addTask(this.tasktime,
                        function(f, e) {
                            var h = $Z[f],
                                g;
                            h && h.beAttacked && !h.FreeFreezeTime && !h.FreeSetbodyTime && ((g = $P[e]) && g.getHurt(h, h.AKind, h.Attack), h.JudgeAttack())
                        },
                        [d, c])
                },
                PZ: 1,
                ExchangeLR: function(f, d) {
                    var e = f.width,
                        h = f.beAttackedPointL,
                        c = f.beAttackedPointR,
                        g = f.Ele;
                    g.style.left = (f.X = f.AttackedLX - (f.beAttackedPointL = e - c)) + "px";
                    f.beAttackedPointR = e - h;
                    f.EleShadow.style.cssText = f.getShadow(f);
                    f.ExchangeLR2(f, f.EleBody, d)
                },
                ExchangeLR2: $User.Browser.IE ?
                    function(e, c, d) {
                        c.style.filter = e.CSS_alpha + (e.CSS_fliph = d ? " fliph" : "")
                    } : function(e, c, d) {
                        c.className = d ? "fliph" : ""
                    },
                bedevil: function(c) {
                    c.ExchangeLR(c, 1);
                    c.JudgeAttack = c.JudgeAttackH;
                    c.PZ = 0;
                    c.WalkDirection = 1;
                    c.ZX = c.AttackedRX;
                    c.ChkActs = c.ChkActs1;
                    oP.MonPrgs()
                },
			    jianshang:1,
                SetAlpha: $User.Browser.IE ?
                    function(f, d, e, c) {
                        d.style.filter = (f.CSS_alpha = "alpha(opacity=" + e + ")") + f.CSS_fliph
                    } : function(f, d, e, c) {
                        d.style.opacity = c
                    }
            },
            a
    }(),
    OrnNoneZombies = function() {
        var a = function(c, b) {
            if ((c.HP -= (b*c.jianshang)) < c.BreakPoint) {
                c.GoingDie(c.PicArr[[c.LostHeadGif, c.LostHeadAttackGif][c.isAttacking]]);
                c.getHit0 = c.getHit1 = c.getHit2 = c.getHit3 = function(c,b) {
					(c.HP-=(b*c.jianshang))<1&&(
					c.NormalDie==oAquaticZombie.prototype.NormalDie&&oSym.addTask(50,ClearChild,[c.Ele]),
					c.NormalDie())
				};
                return
            }
            c.SetAlpha(c, c.EleBody, 50, 0.5);
            oSym.addTask(10,
                function(e, d) {
                    (d = $Z[e]) && d.SetAlpha(d, d.EleBody, 100, 1)
                },
                [c.id])
        };
        return InheritO(CZombies, {
            getHit: a,
            getHit0: a,
            getHit1: a,
            getHit2: a,
            getHit3: a,
            getPea: function(e, b, c) {
                e.PlayNormalballAudio();
                e.getHit0(e, b, c)
            },
            getFirePea: function(g, c, j) {
                g.PlayFireballAudio();
                (g.FreeSlowTime || g.FreeFreezeTime) && (g.Speed = g.OSpeed, g.FreeSlowTime = 0, g.FreeFreezeTime = 0);
                g.Attack = 100;
                var f = g.AttackedLX,
                    h = g.AttackedRX,
                    b = oZ.getArZ(f, f + 40, g.R),
                    e = b.length;
                while (e--) {
                    b[e].getFirePeaSputtering()
                }
                g.getHit0(g, c, j)
            },
            getFirePeaSputtering: function() {
                this.getHit0(this, 13)
            },
			getFreezePea:function(a,b,d){
				a.getHit0(a,b,0);
				a.getFreeze(a,a.id,d);
			},
            getSnowPea: function(f, c, g) {
                var e = f.FreeSlowTime,
                    b = oSym.Now + 1000;
                e == 0 ? (f.PlaySlowballAudio(), f.Speed = 0.5 * f.OSpeed, f.Attack = 50) : f.PlayNormalballAudio();
                e < b && (f.FreeSlowTime = b, oSym.addTask(1000,
                    function(h, d) {
                        var i = $Z[h];
                        i && i.FreeSlowTime == d && (i.FreeSlowTime = 0, i.Attack = 100, i.Speed && (i.Speed = i.OSpeed))
                    },
                    [f.id, b]));
                f.getHit0(f, c, g)
            }
        })
    }(),
    oBackupDancer = InheritO(OrnNoneZombies, {
        EName: "oBackupDancer",
        CName: "伴舞僵尸",
        OSpeed: 3.5,
        Speed: 3.5,
        Lvl: 1,
        StandGif: 9,
        CanSelect: 0,
        width: 126,
        height: 152,
        beAttackedPointL: 50,
        beAttackedPointR: 95,
        PicArr: (function() {
            var a = "images/Zombies/BackupDancer/";
            return ["images/Card/Zombies/BackupDancer.png", a + "0.gif", a + "BackupDancer.gif", a + "Attack.gif", a + "LostHead.gif", a + "LostHeadAttack.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "Dancing.gif" + $Random, a + "LostHeadDancing.gif" + $Random, a + "Mound.gif" + $Random]
        })(),
        bedevil: function(a) {
            a.ExchangeLR(a, 1);
            a.JudgeAttack = a.JudgeAttackH;
            a.PZ = 0;
            a.WalkDirection = 1;
            a.ZX = a.AttackedRX;
            a.ChkActs = a.ChkActs1;
            a.Speed = 3.5;
            a.ChangeChkActsTo1(a, a.id, a.EleBody);
            oP.MonPrgs()
        },
        getSlow: function(f, d, e) {
            var b = oSym.Now + e,
                c = f.FreeSlowTime,
                a = 0;
            switch (true) {
                case !c:
                    f.PlaySlowballAudio();
                    f.Attack = 50;
                    f.FreeSlowTime = b;
                    a = 1;
                    break;
                case c < b:
                    f.PlayNormalballAudio();
                    f.FreeSlowTime = b;
                    a = 1
            }
            a && oSym.addTask(e,
                function(h, g) {
                    var i = $Z[h];
                    i && i.FreeSlowTime == g && (i.FreeSlowTime = 0, i.Attack = 100)
                },
                [d, b])
        },
        getFreeze: function(b, a) {
            b.beAttacked && b.getHit0(b, 20, 0);
            oSym.addTask(400,
                function(e, d, c) {
                    ClearChild(c);
                    var f = $Z[e];
                    f && f.FreeFreezeTime == d && (f.FreeFreezeTime = 0, f.Attack = 50, !f.FreeSetbodyTime && f.isAttacking && f.JudgeAttack(), oSym.addTask(1500,
                        function(h, g) {
                            var i = $Z[h];
                            i && i.FreeSlowTime == g && (i.FreeSlowTime = 0, i.Attack = 100)
                        },
                        [e, f.FreeSlowTime = oSym.Now + 1500]))
                },
                [a, b.FreeFreezeTime = oSym.Now + 400, NewImg("icetrap_" + Math.random(), "images/Plants/IceShroom/icetrap.gif", b.getShadow(b), b.Ele)])
        },
    CustomBirth: function(g, d, a, b, q, j) {
      var e = this,
        c = GetY(g) + e.GetDY(),
        f = c - e.height,
        i = e.beAttackedPointL,
        h = e.beAttackedPointR;
      e.AttackedRX = (e.X = (e.ZX = e.AttackedLX = d - (h - i) * 0.5) - i) + h;
      e.R = g;
      (e.delayT = a) && (e.FreeSetbodyTime = oSym.Now);
      e.PZ = q;
      return e.getHTML(e.id = b, e.X, e.pixelTop = f, e.zIndex = 3 * g + 1, "none", j || 0, e.height + "px", e.PicArr[e.StandGif]);
    },
		jinyinAct:function(a){
			a.ChangeChkActsTo0=function(){};
			a.ChangeChkActsTo1(a,a.id,a.EleBody);
			a.PrivateAct=function(a){
			a.canWalk(a,a.id)&&!a.isAttacking&&a.getr(a,a.PZ?-a.Speed*2:a.Speed*2);
			}
		},
        Produce: '当舞王僵尸摇摆时，这种僵尸四个结伙出现。</p><p>韧性：<font color="#FF0000">低</font><br>精英形态：不跳舞，三倍速度<br>伴舞僵尸曾在位于僵尸纽约城的“咀利牙”表演艺术学院钻研过六年的舞技。',
        BirthCallBack: function(e) {
            var d = e.delayT,
                c = e.id,
                b = e.Ele = $(c),
                a = e.EleBody = b.childNodes[1];
            e.EleShadow = b.firstChild;
            oSym.addTask(d,
                function(g, f) {
                    var h = $Z[g];
                    h && (h.FreeSetbodyTime = 0, SetBlock(f))
                },
                [c, b])
        },
        ChangeChkActsTo0: function(c, b, a) {
            c.LostHeadGif = 10;
            c.NormalGif = 9;
            !c.isAttacking && (a.src = c.PicArr[9]);
            c.Speed = c.DZStep = 0;
            oSym.addTask(200,
                function(e, d) {
                    var f = $Z[e];
                    f && f.beAttacked && f.ChangeChkActsTo1(f, e, d)
				},
                [b, a])
        },
        ChangeChkActsTo1: function(c, b, a) {
            c.LostHeadGif = 4;
            c.NormalGif = 2;
            c.DZStep = 1;
            !c.isAttacking && (a.src = c.PicArr[2]);
            oSym.addTask(220,
                function(e, d) {
                    var f = $Z[e];
                    f && f.beAttacked && f.ChangeChkActsTo0(f, e, d)
                },
                [b, a])
        },    
	ChkActs: function(g, d, h, c) {
      var e, b, a, f;
      !g.PZ && g.bedevil(g);
      !(g.FreeFreezeTime || g.FreeSetbodyTime) ? (g.beAttacked && !g.isAttacking && g.JudgeAttack(), e = g.id, !g.isAttacking ? ((a = g.AttackedRX -= (b = g.Speed)) < -50 ? (h.splice(c, 1), g.DisappearDie(), f = 0) : (a < 100 && !g.PointZombie && (g.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), g.ChangeR({
        R: d,
        ar: [oS.R - 1],
        CustomTop: 400 - g.height + g.GetDY()
      })), g.ZX = g.AttackedLX -= b, g.Ele.style.left = Math.floor(g.X -= b) + "px", f = 1)) : f = 1) : f = 1;
      g.ChkSpeed(g);
	  g.PrivateAct&&g.PrivateAct(g);
      return f
      },
        ChkSpeed: function(b) {
            if (!b.DZStep) {
                return
            }
            var a = b.Speed;
            switch (true) {
                case (b.FreeFreezeTime || b.FreeSetbodyTime) == 1:
                    a && (b.Speed = 0);
                    break;
                case b.FreeSlowTime > 0:
                    a != 1.75 && (b.Speed = 1.75);
                    break;
                default:
                    a != 3.5 && (b.Speed = 3.5)
            }
        }
    }),
    oDancingZombie = InheritO(OrnNoneZombies, {
        EName: "oDancingZombie",
        CName: "舞王僵尸",
        HP: 500,
        BreakPoint: 166,
        Lvl: 3,
        StandGif: 9,
        SunNum: 350,
        beAttackedPointL: 40,
        beAttackedPointR: 85,
        width: 184,
        height: 176,
        BookHandPosition: "70% 70%",
        AudioArr: ["dancer"],
        OSpeed: 7.2,
        Speed: 7.2,
        NormalGif: 9,
        GetDTop: 5,
        getShadow: function(a) {
            return "left:30px;top:146px"
        },
        GetDX: function() {
            return -50
        },
        GetDY: function() {
            return -5
        },
        LostHeadGif: 14,
		jinyinAct:function(a){
			var b=a.num;
			if(!(a.num=Math.round(Math.random()*1+0)||a.Privatenum)){
				a.HP*=1.5;
			a.JudgeLR=function(f, d, e, c, g) {
                    return e > 10 || e < 1 ? false : function() {
                        d += --e + "_";
                        var h = 3,
                            i;
                        while (h--) {
                            if ((i = g[d + h]) && (i.EName=="oBrains")) {
                                return i.AttackedRX >= c && i.AttackedLX <= c ? [f.id, i.id] : false
                            }
                        }
                    }()
                };
                a.JudgeSR=function(f, d, e, c, g) {
                    return e > 9 ? false : function() {
                        d += e + "_";
                        var h = 3,
                            i;
                        while (h--) {
                            if ((i = g[d + h]) && (i.EName=="oBrains")) {
                                return i.AttackedRX >= c && i.AttackedLX <= c ? [f.id, i.id] : false
                            }
                        }
                    }()
                }
			}
		},
        addSpotlight: (function() {
            var a, b;
			this.havelight=1;
            $User.Browser.IE6 ? (a = "8", b = "filter:alpha(opacity=30)") : a = b = "";
            return function(d, f, c) {
                var g = $Z[d],
                    e;
                NewEle(d + "_spotlightCon", "div", "position:absolute;left:-30px;top:-400px;width:184px;height:600px;overflow:hidden", 0, c).appendChild(g.spotlight = NewImg(d + "_spotlight", "images/Zombies/DancingZombie/spotlight" + a + ".png", "left:0;top:0;width:920px;height:600px;" + b));
                e = NewEle(d + "_spotlight2Con", "div", "position:absolute;left:-25px;top:135px;width:184px;height:60px;overflow:hidden", 0);
                c.insertBefore(e, f.EleShadow);
                e.appendChild(g.spotlight2 = NewImg(d + "_spotlight2", "images/Zombies/DancingZombie/spotlight2" + a + ".png", "left:0;top:0;width:920px;height:60px;" + b))
            }
        })(),
        PicArr: (function() {
            var d = "images/Zombies/DancingZombie/",
                c = $User.Browser.IE6 ? "8" : "",
                a = d + "spotlight" + c + ".png" + $Random,
                b = d + "spotlight2" + c + ".png" + $Random;
            return ["images/Card/Zombies/DancingZombie.png", d + "0.gif", d + "DancingZombie.gif", d + "Attack.gif", d + "LostHead.gif", d + "LostHeadAttack.gif", d + "Head.gif" + $Random, d + "Die.gif" + $Random, d + "BoomDie.gif" + $Random, d + "SlidingStep.gif" + $Random, d + "Dancing.gif" + $Random, d + "Summon1.gif", d + "Summon2.gif", d + "Summon3.gif", d + "LostHeadSlidingStep.gif" + $Random, d + "LostHeadDancing.gif" + $Random, d + "LostHeadSummon.gif" + $Random, a, b]
        })(),
        Produce: '舞王僵尸和人类(在世或者死去的)如有雷同，纯属巧合。<br>韧性：<font color="#FF0000">中</font><br>精英形态一：一直滑步，无视植物，碰到脑子召唤伴舞（750血）<br>精英形态二：每次召唤在全场最多10个僵尸的位置复制一个伴舞<br>特点：<font color="#FF0000">召唤伴舞僵尸</font></p>舞王僵尸的最新唱片“抓住脑子啃啊啃”在僵尸界的人气正急速飙升。',
        getSnowPea: function() {
            this.PlaySlowballAudio();
        },
        NormalDie: function() {
            var a = this;
            a.ResetBackupDancer(a);
            a.EleBody.src = a.PicArr[a.DieGif] + Math.random();
            oSym.addTask(250, ClearChild, [a.Ele]);
            a.HP = 0;
            delete $Z[a.id];
            a.PZ && oP.MonPrgs()
        },
        ExplosionDie: function() {
            var a = this;
            a.ResetBackupDancer(a);
            a.EleBody.src = a.PicArr[a.BoomDieGif] + Math.random();
            oSym.addTask(300, ClearChild, [a.Ele]);
            a.HP = 0;
            delete $Z[a.id];
            a.PZ && oP.MonPrgs()
        },
        DisappearDie: function() {
            this.ResetBackupDancer(this);
            ClearChild(this.Ele);
            this.HP = 0;
            delete $Z[this.id];
            this.PZ && oP.MonPrgs()
        },
        CrushDie: function() {
            var a = this;
            a.ResetBackupDancer(a);
            a.GoingDieHead(a.id, a.PicArr, a);
            ClearChild(a.Ele);
            a.HP = 0;
            delete $Z[a.id];
            a.PZ && oP.MonPrgs()
        },
    bedevil: function(b) {
      var a = b.id;
      b.ExchangeLR(b, 1);
      b.JudgeAttack = b.JudgeAttackH;
      b.PZ = 0;
      b.WalkDirection = 1;
      b.ZX = b.AttackedRX;
      b.ChkActs = b.ChkActs1;
      b.ResetBackupDancer(b);
      b.havelight&&($(a + "_spotlightCon").style.left = "20px",
      $(a + "_spotlight2Con").style.left = "25px");
      oP.MonPrgs()
    },
    ResetBackupDancer: function(f) {
      var g = f.ArDZ,
        d = g.length,
        c, b, e, a = f.DZStep;
      while (d--) {
        if ((c = g[d]) && (b = c[0]) && (e = $Z[b]) && e.beAttacked) {
          if (a > 0) {
            switch (true) {
              case (e.FreeFreezeTime || e.FreeSetbodyTime) == 1:
                e.Speed = 0;
                break;
              case e.FreeSlowTime > 0:
                e.Speed = 1.75;
                break;
              default:
                e.Speed = 3.5
            }
          }
        }
      }
      a > -1 && oSym.addTask(f.DZStepT - oSym.Now,
        function(o, j) {
          var m = 4,
            l, k, n, h = "ChangeChkActsTo" + j;
          while (m--) {
            (l = o[m]) && (k = l[0]) && (n = $Z[k]) && n.beAttacked && (n.DZStep = j, n[h](n, k, n.EleBody))
          }
        },
        [g, [1, 0][a]])
    },
    BirthCallBack: function(d) {
      var b = d.delayT,
        l = d.id,
        a = d.Ele = $(l),
        c = 320,
        i = oGd.$LF,
        g = d.R,
        s = g - 1,
        n = g + 1,
        e,
        r,
        q = LX - 60,
        m = LX + 100,
        k = LX - 130,
        j = LX - 70,
        h = LX + 30,
        f = d.ArDZ = [0, 0, 0, 0];
      d.EleShadow = a.firstChild;
      d.EleBody = a.childNodes[1];
      s > 0 && (e = i[s]) && e != 2 && (f[0] = ["", s,
        function(o) {
          return o
        },
        3 * s + 2,
        function(o) {
          return o - 70
        },
        GetY(s) - 155
      ]);
      n <= oS.R && (e = i[n]) && e != 2 && (f[2] = ["", n,
        function(o) {
          return o
        },
        3 * n + 2,
        function(o) {
          return o - 70
        },
        GetY(n) - 155
      ]);
      e = 3 * g + 2;
      r = GetY(g) - 155;
      f[3] = ["", g,
        function(o) {
          return o - 60
        },
        e,
        function(o) {
          return o - 130
        },
        r
      ];
      f[1] = ["", g,
        function(o) {
          return o + 100
        },
        e,
        function(o) {
          return o + 30
        },
        r
      ];
      func = function(t, o) {
        var u = $Z[t];
        u && (u.ExchangeLR(d, 1), u.DZMSpeed = 7.2, u.DZStep = -1, u.DZStepT = oSym.Now + 220, u.FreeSetbodyTime = 0, SetBlock(o))
      };
      b||!d.canWalk(d,l)? (oSym.addTask(b, func, [l, a]), c += b) : func(l, a);
	!d.num&&d.jinyin&&d.ExchangeLR(d,0);
      oSym.addTask(c,
        function(o) {
          var t = $Z[o];
          t &&!(!t.num&&t.jinyin)&&t.beAttacked && !t.isAttacking && t.NormalAttack(o)
        },
        [d.id])
    },
    ChkActs1: function(e, b, f, a) {
      var c, d;
      !(e.FreeFreezeTime || e.FreeSetbodyTime) ? (e.beAttacked && !e.isAttacking && e.JudgeAttack(), c = e.id, !e.isAttacking ? (e.AttackedLX += e.Speed) > oS.W ? (f.splice(a, 1), e.DisappearDie(), d = 0) : (e.ZX = e.AttackedRX += e.Speed, e.Ele.style.left = Math.ceil(e.X += e.Speed) + "px", d = 1) : d = 1) : d = 1;
      e.ChkSpeed(e);
      return d
    },
    ChkTmp: function(c, b, d, a) {
      c.ChkSpeed(c);
      return 0
    },
    ChkActs: function(g, d, h, c) {
      var e, b, a, f;
      !(g.FreeFreezeTime || g.FreeSetbodyTime) ? (g.beAttacked && !g.isAttacking && g.JudgeAttack(), e = g.id, !g.isAttacking ? ((a = g.AttackedRX -= (b = g.Speed)) < -50 ? (h.splice(c, 1), g.DisappearDie(), f = 0) : (a < 100 && !g.PointZombie && (g.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), g.ChangeR({
        R: d,
        ar: [oS.R - 1],
        CustomTop: 400 - g.height + g.GetDY()
      })), g.ZX = g.AttackedLX -= b, g.Ele.style.left = Math.floor(g.X -= b) + "px", f = 1)) : f = 1) : f = 1;
      g.ChkSpeed(g);
      return f
    },
    ChkSpeed: function(g) {
      if (!g.DZStep) {
        return
      }
      var h = g.ArDZ,
        d = 4,
        c, b, e, a = g.OSpeed,
        f = [];
      switch (true) {
        case (g.isAttacking || g.FreeFreezeTime || g.FreeSetbodyTime) == 1:
          a = 0;
          break;
        case g.FreeSlowTime > 0:
          a != 1.75 && (a = 1.75)
      }
      while (d--) {
        if ((c = h[d]) && (b = c[0]) && (e = $Z[b]) && e.beAttacked) {
          f.push(e);
          switch (true) {
            case (e.isAttacking || e.FreeFreezeTime || e.FreeSetbodyTime) == 1:
              a = 0;
              break;
            case e.FreeSlowTime > 0:
              a != 1.75 && (a = 1.75)
          }
        }
      }
      if (a != g.DZMSpeed) {
        g.DZMSpeed = a;
        d = f.length;
        while (d--) {
          (e = f[d]).Speed != a && (e.Speed = a)
        }
        g.Speed != a && (g.Speed = a)
      }
    },
    ChkBackupDancer: function(h, g, f) {
      var b = h.ArDZ,
        d = 4,
        j = 1,
        c, e, a;
      while (d--) {
        (e = b[d]) && (!(c = e[0]) || !(a = $Z[c])) && (d = j = 0)
      }!h.isAttacking && j ? f.src = h.PicArr[10] : h.Summon(h, g);
      h.ChangeChkActsTo0(h, g, f)
    },
    ChangeChkActsTo0: function(g, e, a) {
      var d = 4,
        h = g.ArDZ,
        c, b, f;
      while (d--) {
        (b = h[d]) && (c = b[0]) && (f = $Z[c]) && f.beAttacked && (f.LostHeadGif = 10, f.NormalGif = 9, !f.isAttacking && (f.EleBody.src = f.PicArr[9]), f.Speed = 0)
      }
      g.LostHeadGif = 15;
      g.NormalGif = 10;
      g.Speed = g.DZMSpeed = g.DZStep = 0;
      g.DZStepT = oSym.Now + 200;
      oSym.addTask(200,
        function(j, i) {
          var k = $Z[j];
          k && k.beAttacked && k.ChangeChkActsTo1(k, j, i)
        },
        [e, a])
    },
    ChangeChkActsTo1: function(g, e, a) {
      var d = 4,
        h = g.ArDZ,
        c, b, f;
      while (d--) {
        (b = h[d]) && (c = b[0]) && (f = $Z[c]) && f.beAttacked && (f.LostHeadGif = 4, f.NormalGif = 2, !f.isAttacking && (f.EleBody.src = f.PicArr[2]))
      }
      g.LostHeadGif = 4;
      g.NormalGif = 2;
      g.DZStep = 1;
      g.DZStepT = oSym.Now + 220;
      !g.isAttacking && (a.src = g.PicArr[2]);
      oSym.addTask(220,
        function(j, i) {
          var k = $Z[j];
          k && k.beAttacked && k.ChkBackupDancer(k, j, i)
        },
        [e, a])
    },
    TurnLeft: function(c) {
      var a = CZombies.prototype,
        b = c.id;
      c.AttackZombie = a.AttackZombie;
      c.NormalAttack = a.NormalAttack;
      c.OSpeed = 3.5;
      !(c.FreeSlowTime || c.FreeFreezeTime || c.FreeSetbodyTime) && (c.Speed = 3.5);
      c.getSnowPea = OrnNoneZombies.prototype.getSnowPea;
      c.getFreeze = CZombies.prototype.getFreeze;
      oSym.addTask(20,
        function(d, e) {
          $Z[d] && e.beAttacked && (e.addSpotlight(d, e, e.Ele), oSym.addTask(200,
            function(g, f, i, h, k) {
              var j = $Z[g];
              j && (h > -736 ? h -= 184 : h = 0, f.style.left = h + "px", k > -736 ? k -= 184 : k = 0, i.style.left = k + "px", oSym.addTask(100, arguments.callee, [g, f, i, h, k]))
            },
            [d, e.spotlight, e.spotlight2, 0, 0]), oSym.addTask(200,
            function(h, g) {
              var f;
              $Z[g] && h.beAttacked && (f = h.EleBody, !h.isAttacking ? f.src = h.PicArr[10] : h.isAttacking = 0, h.ChangeChkActsTo0(h, g, f))
            },
            [e, d]))
        },
        [b, c]);
      c.Summon(c, b)
    },
    NormalAttack: function(a) {
      var b = $Z[a];
      b.PZ&&b.ExchangeLR(b, 0);
      b.TurnLeft(b)
    },
    Summon: function(d, c) {
      d.LostHeadGif = 16;
      var a = d.EleBody,
        b = d.ChkActs;
      d.ChkActs = d.ChkTmp;
      d.ChkTmp = b;
      a.src = "images/Zombies/DancingZombie/Summon1.gif";
      PlayAudio("dancer");
      oSym.addTask(10,
        function(f, e) {
          var g = $Z[f];
          g && g.beAttacked && (e.src = "images/Zombies/DancingZombie/Summon2.gif", oSym.addTask(10,
            function(t, s, x) {
              var h = $Z[t],
                v = h.ZX,
                m = h.ArDZ,
                n = [],
                k = "images/Zombies/BackupDancer/Mound.gif" + $Random + Math.random(),
                r = 4,
                w = [],
                u = [],
			  AZ = [],
              DZid = [],
              AZlength = o = 0,
                q,
                l;
              if (h && h.beAttacked) {
                s.src = "images/Zombies/DancingZombie/Summon3.gif";
			for (i in $Z) {
                h.num &&(AZlength<=9)&&$Z[i] &&$Z[i].beAttacked&&($Z[i].PZ==h.PZ)&& !$Z[i].ChkSpeed && (AZ[AZlength] = (DZid[AZlength] = new oBackupDancer).CustomBirth($Z[i].R, $Z[i].AttackedLX, 100, "Z_" + Math.random(),h.PZ), ++AZlength);
              }
                while (r--) {
                  (q = m[r]) && (!(l = q[0]) || !$Z[l]) && (u[o] = (w[o] = new oBackupDancer).CustomBirth(q[1], q[2](v), 100, q[0] = "Z_" + Math.random(), h.PZ), n.push(NewImg("", k, "z-index:" + q[3] + ";left:" + q[4](v) + "px;top:" + q[5] + "px", EDPZ)), ++o)
                }
                oSym.addTask(220,
                  function() {
                    var i = arguments.length;
                    while (i--) {
                      ClearChild(arguments[i])
                    }
                  },
                  n);
              oSym.addTask(110,
                function(A, y, z, i, a, b, c) {
                  var B = $Z[A];
                  B && B.beAttacked && (
                    oP.AppearUP(y, z, i),
                    B.num&&oP.AppearUP(a, b, c),
                    oSym.addTask(100,
                      function(D, C) {
                        var E = $Z[D];
                        if (E && E.beAttacked) {
                          return
                        }
                        var j = C.length,
                          E;
                        while (j--) {
                          (E = C[j]).ChangeChkActsTo0(E, E.id, E.EleBody)
                        }
                      },
                      [A, z]))
                },
                [t, u, w, o, AZ, DZid, AZlength]);
                oSym.addTask(200,
                  function(y, i) {
                    var z = $Z[y],
                      j;
                    z && z.beAttacked && (j = z.ChkActs, z.ChkActs = z.ChkTmp, z.ChkTmp = j)
                  },
                  [t, s])
              }
            },
            [f, e]))
        },
        [c, a])
    }
    }),
    oZombie = InheritO(OrnNoneZombies, {
        EName: "oZombie",
        CName: "领带僵尸",
        StandGif: 9,
		jinyinGif:10,
		jinyinAttackGif:11,
        PicArr: (function() {
            var a = "images/Zombies/Zombie/";
            return ["images/Card/Zombies/Zombie.png", a + "0.gif", a + "Zombie.gif", a + "ZombieAttack.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieHead.gif" + $Random, a + "ZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "1.gif", a + "jinyinZombieWalk.gif", a + "jinyinZombieAttack.gif"]
        })(),
		jinyinAct:function(a){
			a.NormalGif=a.jinyinGif;
			a.AttackGif=a.jinyinAttackGif;
			a.EleBody.src=a.PicArr[a.NormalGif];
			a.OSpeed=a.Speed=3.6;
			a.tasktime*=0.5;
		},
        Produce: '韧性：<font color="#FF0000">低</font><br>精英形态：红眼，两倍速度，两倍伤害<br>这种僵尸喜爱脑髓，贪婪而不知足。脑髓，脑髓，脑髓，夜以继日地追求着。老而臭的脑髓？腐烂的脑髓？都没关系。僵尸需要它们。'
    }),
    oZombie2 = InheritO(oZombie, {
        EName: "oZombie2"
    }, {
        PicArr: {
            2: "images/Zombies/Zombie/Zombie2.gif",
            9: "images/Zombies/Zombie/2.gif"
        }
    }),
    oZombie3 = InheritO(oZombie, {
        EName: "oZombie3"
    }, {
        PicArr: {
            2: "images/Zombies/Zombie/Zombie3.gif",
            9: "images/Zombies/Zombie/3.gif"
        }
    }),
    oFlagZombie = InheritO(oZombie, {
        PicArr: (function() {
            var a = "images/Zombies/FlagZombie/";
            return ["images/Card/Zombies/FlagZombie.png", a + "0.gif", a + "FlagZombie.gif", a + "FlagZombieAttack.gif", a + "FlagZombieLostHead.gif", a + "FlagZombieLostHeadAttack.gif", "images/Zombies/Zombie/ZombieHead.gif" + $Random, "images/Zombies/Zombie/ZombieDie.gif" + $Random, "images/Zombies/Zombie/BoomDie.gif" + $Random, a + "1.gif",a + "FlagZombiejinyin.gif",a + "FlagZombiejinyinAttack.gif"]
        })(),
        EName: "oFlagZombie",
        CName: "旗帜僵尸",
        OSpeed: 3.3,
        Speed: 3.3,
		HP:400,
		increaseSpeed:1.5,
		SunNum:200,
		PrivateAct:function(a){
			for (u in $Z) {
              e = $Z[u];	
			if($Z[a.id]&&!e.angry&&u!==a.id){
				e.angry=1;
				e.OSpeed*=a.increaseSpeed;
				e.Speed*=a.increaseSpeed;
				e.LostPaperSpeed*=a.increaseSpeed;
				e.tasktime*=a.jinyin?0.25:0.5;
			}
		}
	},
		PrivateDie:function(a){			
			for (u in $Z) {
              e = $Z[u];	
			if(e.angry&&(e.id!==a.id)){
				e.angry=0;
				e.OSpeed/=a.increaseSpeed;
				e.Speed/=a.increaseSpeed;
				e.LostPaperSpeed/=a.increaseSpeed;
				e.tasktime/=a.jinyin?0.25:0.5;
			}
		}},
		jinyinAct:function(a){
			a.NormalGif=a.jinyinGif;
			a.AttackGif=a.jinyinAttackGif;
			a.EleBody.src=a.PicArr[a.NormalGif];
			a.tasktime*=0.1;
			a.increaseSpeed=2;
			a.GoingDieHead=function(){};
			a.JudgeAttack=function() {
                var f = this,
                    c = f.ZX,
                    d = f.R + "_",
                    e = GetC(c),
                    g = oGd.$,
					a,
                    b;
                ((a=f.JudgeAttackH1())&&a.beAttacked)||(b = f.JudgeLR(f, d, e, c, g) || f.JudgeSR(f, d, e, c, g))&&!(a&&a.beAttacked)&&f.NormalAttack(b[0], b[1])
            },
			a.NormalAttack=function(c, b) {
                var d = $Z[c];
                $P[b].getHurt(d, 2, d.Attack)
            },
			a.Speed*=2;
			a.OSpeed*=2;
			a.getSnowPea=OrnNoneZombies.prototype.getPea;
			a.getSlow=function(){};
		},
        beAttackedPointR: 101,
        Produce: '旗帜僵尸标志着即将来袭的一大堆僵尸"流"。</font><br>通用技能：号召</font><br>当旗帜僵尸存在时，全场僵尸速度和伤害都翻倍</font><br>精英形态：处决者旗帜</font><br>本身速度更快，碾压植物，免疫减速等负面效果<br>韧性：<font color="#FF0000">中（400）</font><br>毫无疑问，摇旗僵尸喜爱脑髓。但在私下里他也迷恋旗帜。也许是因为旗帜上也画有脑子吧，这很难说。'
    }),
    OrnIZombies = function() {
        var a = function(f, b) {
            var d = f.OrnHP,
                c = f.HP,
                e = OrnNoneZombies.prototype;
			if(b>=d+c)return (f.HP=0,f.GoingDie(f.PicArr[f.LostHeadGif]));
            (d = f.OrnHP -= b*f.jianshang) < 1 && (f.HP += d, f.Ornaments = 0, f.EleBody.src = f.PicArr[[f.NormalGif = f.OrnLostNormalGif, f.AttackGif = f.OrnLostAttackGif][f.isAttacking]], f.PlayNormalballAudio = e.PlayNormalballAudio, f.PlayFireballAudio = e.PlayFireballAudio, f.PlaySlowballAudio = e.PlaySlowballAudio, f.getHit = f.getHit0 = f.getHit1 = f.getHit2 = f.getHit3 = e.getHit);
            f.SetAlpha(f, f.EleBody, 50, 0.5);
            oSym.addTask(10,
                function(h, g) {
                    (g = $Z[h]) && g.SetAlpha(g, g.EleBody, 100, 1)
                },
                [f.id])
        };
        return InheritO(OrnNoneZombies, {
            Ornaments: 1,
            OrnLostNormalGif: 9,
            OrnLostAttackGif: 10,
            getHit: a,
            getHit0: a,
            getHit1: a,
            getHit2: a,
            getHit3: a
        })
    }(),
    oConeheadZombie = InheritO(OrnIZombies, {
        EName: "oConeheadZombie",
        CName: "路障僵尸",
        OrnHP: 370,
        Lvl: 2,
        SunNum: 100,
        StandGif: 11,
        PicArr: (function() {
            var b = "images/Zombies/ConeheadZombie/",
                a = "images/Zombies/Zombie/";
            return ["images/Card/Zombies/ConeheadZombie.png", b + "0.gif", b + "ConeheadZombie.gif", b + "ConeheadZombieAttack.gif", a + "ZombieLostHead.gif", a + "ZombieLostHeadAttack.gif", a + "ZombieHead.gif" + $Random, a + "ZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "Zombie.gif", a + "ZombieAttack.gif", b + "1.gif", b + "jinyinWalk.gif", b + "jinyinAttack.gif"]
        })(),
        AudioArr: ["plastichit"],
        PlayNormalballAudio: function() {
            PlayAudio("plastichit")
		},
		jinyinGif:12,
        jinyinAttackGif:13,
		jinyinAct:function(a){
			a.NormalGif=a.jinyinGif;
			a.AttackGif=a.jinyinAttackGif;
			a.OrnHP*=1.5;
			a.EleBody.src=a.PicArr[a.NormalGif];
			a.PrivateAct=function(a){
				var Z=oZ.getArZ(a.ZX+20,a.ZX+100,a.R),
					len=Z.length;
				while(len--){
					Z[len]&&(Z[len].EName!="oDuckyTubeZombie2")&&(Z[len].EName!="oConeheadZombie")&&a.Ornaments&&(
						Z[len].ChangeR(Z[len]),Z[len].ChangeR=function(){},
						oSym.addTask(500,function(Z,len){
							Z[len].ChangeR=CZombies.prototype.ChangeR
						},[Z,len]))
				}
			}
		},
        Produce: '他的路障头盔，使他两倍坚韧于普通僵尸。<p>韧性：<font color="#FF0000">中</font><br>精英形态：<font color="#FF0000">真·路障僵尸（防具600，使其附近的其他僵尸换行）</font></p>和其他僵尸一样，路障头僵尸盲目地向前。但某些事物却使他停下脚步，捡起一个交通路障，并固实在自己的脑袋上。是的，他很喜欢参加聚会。'
    }),
    oBucketheadZombie = InheritO(oConeheadZombie, {
        EName: "oBucketheadZombie",
        CName: "铁桶僵尸",
        OrnHP: 1100,
        Lvl: 3,
        SunNum: 125,
        PlayNormalballAudio: function() {
            PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)])
        },
		jinyinAct:function(a){
			a.NormalGif=a.jinyinGif;
			a.AttackGif=a.jinyinAttackGif;
			a.EleBody.src=a.PicArr[a.NormalGif];
			a.PrivateAct=function(a){
				if(!a.bool&&a.OrnHP<1){
					a.PZ?PrivateTombstones(a.R,GetC(a.ZX)):PrivateTombstones1(a.R,GetC(a.ZX));
					a.bool=1;
				}
			}
		},
        Produce: '他的铁桶头盔，能极大程度的承受伤害。<p>韧性：<font color="#FF0000">高</font><br>精英形态：铁桶被打掉后，原地生成墓碑</font><br>弱点：<font color="#FF0000">磁力菇</font></p>铁桶头僵尸经常戴着水桶，在冷漠的世界里显得独一无二。但事实上，他只是忘记了，那铁桶还在他头上而已。'
    }, {
        PicArr: {
            0: "images/Card/Zombies/BucketheadZombie.png",
            1: "images/Zombies/BucketheadZombie/0.gif",
            2: "images/Zombies/BucketheadZombie/BucketheadZombie.gif",
            3: "images/Zombies/BucketheadZombie/BucketheadZombieAttack.gif",
            9: "images/Zombies/Zombie/Zombie2.gif",
            11: "images/Zombies/BucketheadZombie/1.gif",
			12: "images/Zombies/BucketheadZombie/jinyinBucketheadZombie.gif",
			13: "images/Zombies/BucketheadZombie/jinyinBucketheadAttack.gif"
        }
    }),
    oFootballZombie = InheritO(oConeheadZombie, {
        EName: "oFootballZombie",
        CName: "橄榄球僵尸",
        OrnHP: 1600,
        Lvl: 4,
        SunNum: 225,
        StandGif: 11,
        width: 154,
        height: 160,
        OSpeed: 3.2,
        Speed: 3.2,
        beAttackedPointL: 40,
        beAttackedPointR: 134,
        PlayNormalballAudio: function() {
            PlayAudio("plastichit")
        },
		jinyinAct:function(a){
			a.PicArr=a.PicArr2;
			a.EleBody.src=a.PicArr[a.NormalGif];
			a.Speed*=0.75;
			a.OSpeed*=0.75;
			a.getFreeze=function(){};
			a.HP*=2.5;
			a.OrnHP*=2;
		},
        PicArr: (function() {
            var a = "images/Zombies/FootballZombie/";
            return ["images/Card/Zombies/FootballZombie.png", a + "0.gif", a + "FootballZombie.gif", a + "Attack.gif", a + "LostHead.gif", a + "LostHeadAttack.gif", "images/Zombies/Zombie/ZombieHead.gif" + $Random, a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "OrnLost.gif", a + "OrnLostAttack.gif", a + "1.gif"]
        })(),
		PicArr2: (function() {
            var a = "images/Zombies/BlackFootballZombie/";
            return ["images/Card/Zombies/FootballZombie.png", a + "0.gif", a + "FootballZombie.gif", a + "Attack.gif", a + "LostHead.gif", a + "LostHeadAttack.gif", "images/Zombies/Zombie/ZombieHead.gif" + $Random, a + "Die.gif" + $Random,"images/Zombies/FootballZombie/BoomDie.gif" + $Random, a + "OrnLost.gif", a + "OrnLostAttack.gif", a + "1.gif"]
        })(),
        getShadow: function(a) {
            return "left:" + (a.beAttackedPointL + 15) + "px;top:" + (a.height - 22) + "px"
        },
        Produce: '橄榄球僵尸的表演秀。<p>韧性：<font color="#FF0000">极高</font><br>精英形态：黑橄榄，两倍头盔血量，速度减慢，免疫冻结<br>速度：<font color="#FF0000">快</font><br>弱点：<font color="#FF0000">磁力菇</font><br>在球场上，橄榄球僵尸表现出110%的激情，他进攻防守样样在行。虽然他完全不知道橄榄球是什么<br>黑橄榄贴图来源：江南游戏'
    }),
    oPoleVaultingZombie = InheritO(OrnNoneZombies, {
        EName: "oPoleVaultingZombie",
        CName: "撑杆僵尸",
        HP: 600,
        width: 348,
        height: 218,
        OSpeed: 3.2,
        Speed: 3.2,
        beAttackedPointL: 215,
        beAttackedPointR: 260,
        StandGif: 13,
        GetDX: function() {
            return -238
        },
        GetDY: function() {
            return 2
        },
        Lvl: 2,
        SunNum: 75,
        BookHandPosition: "-30px 70%",
        PicArr: (function() {
            var a = "images/Zombies/PoleVaultingZombie/";
            return ["images/Card/Zombies/PoleVaultingZombie.png", a + "0.gif", a + "PoleVaultingZombie.gif", a + "PoleVaultingZombieAttack.gif", a + "PoleVaultingZombieLostHead.gif", a + "PoleVaultingZombieLostHeadAttack.gif", a + "PoleVaultingZombieHead.gif" + $Random, a + "PoleVaultingZombieDie.gif" + $Random, a + "BoomDie.gif" + $Random, a + "PoleVaultingZombieWalk.gif", a + "PoleVaultingZombieLostHeadWalk.gif", a + "PoleVaultingZombieJump.gif", a + "PoleVaultingZombieJump2.gif", a + "1.gif"]
        })(),
        AudioArr: ["polevault", "grassstep"],
        Produce: '撑杆僵尸运用标杆高高地跃过障碍物。<p>韧性：<font color="#FF0000">中（600)</font><br>精英形态：反向，跳跃完毕后于跳跃前位置的3×3植物上召唤血量极低的普通撑杆<br>速度：<font color="#FF0000">快,而后慢(跳跃后)</font><BR>特点：<font color="#FF0000">跃过他所碰到的第一筑植物</font></p>一些僵尸渴望走得更远、得到更多，这也促使他们由普通成为非凡。那就是撑杆僵尸。',
        getShadow: function(a) {
            return "left:" + (a.beAttackedPointL - 20) + "px;top:" + (a.height - 35) + "px"
        },
        GoingDieHead: function(c, a, b) {
            oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "left:" + b.X + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
        },
        JudgeAttack: function() {
            var g = this,
                b = g.ZX,
                d = g.R + "_",
                c = GetC(b),
                h = oGd.$,
                f,
                a,
                e = b - 74;
			if(!g.JudgeAttackH1()){
            for (f = c - 2; f <= c; f++) {
                if (f > 9) {
                    continue
                }
                for (a = 2; a > -1;
                    (p = h[d + f + "_" + a--]) && (p.EName != "oBrains" ? p.AttackedRX >= e && p.AttackedLX < b && p.canEat && (a = -1, g.JudgeAttack = CZombies.prototype.JudgeAttack, g.NormalAttack(g.id, p.id, p.AttackedLX)) : p.AttackedRX >= b && p.AttackedLX < b && (a = -1, g.JudgeAttack = CZombies.prototype.JudgeAttack, (g.NormalAttack = CZombies.prototype.NormalAttack)(g.id, p.id)))) {}
               }
			}
        },
        jinyinAct:function(a){
			a.ExchangeLR(a,1);
		},
		AttackZombie:function(d,c){
			$Z[d]&&($Z[d].JudgeAttack=CZombies.prototype.JudgeAttack,$Z[d].NormalAttack(d,c,c.ZX))
		},
        getCrushed: function(a) {
            this.NormalAttack(this.id, a.id, a.AttackedLX);
            this.getCrushed = function() {
                return false
            };
            a.Stature > 0 && oSym.addTask(50,
                function(c) {
                    var b = $Z[c];
                    b && b.CrushDie()
                },
                [this.id]);
            return false
		},
        getRaven: function(a) {
            return !this.isAttacking && this.NormalAttack(this.id, a, $P[a].AttackedLX),
                0
        },
        NormalAttack: function(d, b, g) {
            var f = $Z[d],
                a = f.Ele,
                c = f.EleShadow,
                e = f.EleBody;
			f.jinyin&&f.ExchangeLR(f,0);
            e.src = "images/Zombies/PoleVaultingZombie/PoleVaultingZombieJump.gif" + $Random + Math.random();
            PlayAudio("grassstep");
            SetHidden(c);
            f.isAttacking = 1;
            f.Altitude = 2;
            f.getFreeze = function() {
                f.getSnowPea(f, 20)
            };
            oSym.addTask(50,
                function(h) {
                    $Z[h] && PlayAudio("polevault")
                },
                [d]);
            oSym.addTask(100,
                function(m, j, i, l, n) {
                    var h = $Z[m],
                        k,
                        q,
                        r,
						Z,
						Z2,
					    R = (h.R - 1) || 0,
                        RM = h.R + 1 <= oS.R ? h.R + 1 : oS.R,
                    C = GetC(h.ZX);
                    h && ((k = $P[j]) && k.Stature > 0 ? (h.AttackedRX = (h.X = (h.AttackedLX = h.ZX = q = k.AttackedRX) - h.beAttackedPointL) + h.beAttackedPointR, SetStyle(i, {
                        left: h.X + "px"
					}),n.src = "images/Zombies/PoleVaultingZombie/PoleVaultingZombieWalk.gif", SetVisible(l), h.isAttacking = 0, h.Altitude = 1, h.OSpeed = h.Speed = 1.6, h.NormalGif = 9, h.LostHeadGif = 10, h.NormalAttack = (r = CZombies.prototype).NormalAttack, h.getCrushed = r.getCrushed, h.getFreeze = r.getFreeze, h.getRaven = r.getRaven) : (h.ZX = h.AttackedLX = (h.X = (h.AttackedRX = g) - h.beAttackedPointR) + h.beAttackedPointL, SetStyle(i, {
                        left: h.X + "px"
                    }), n.src = "images/Zombies/PoleVaultingZombie/PoleVaultingZombieJump2.gif" + $Random + Math.random(), SetVisible(l), oSym.addTask(80,
                        function(s, v) {
                            var u = $Z[s],
                                t;
                            u && (v.src = "images/Zombies/PoleVaultingZombie/PoleVaultingZombieWalk.gif", u.isAttacking = 0, u.Altitude = 1, u.OSpeed = u.Speed = 1.6, u.NormalGif = 9, u.LostHeadGif = 10, u.NormalAttack = (t = CZombies.prototype).NormalAttack, u.getCrushed = t.getCrushed, u.getFreeze = t.getFreeze, u.getRaven = t.getRaven)
                        },
                        [m, n])));
			if(h.jinyin){
			for(let i = R;i <= RM;i++){
                    for(let j = C - 1;j <= C + 1;j++){
                        for(let k = 0;k <= 3;k++){
                            let p = oGd.$[i+"_"+j+"_"+k];
							h&&h.PZ&&h.canWalk(h,m)&&p&&((Z=CustomZombie(oPoleVaultingZombie,i,j,!h.PZ)).HP=Math.max(h.MaxHP*=0.25,150),Z.jinyinnum=0);
                        }
                    }
				  var Z=oZ[h.PZ?"getArHZ":"getArZ"](h.ZX-100,h.ZX+100,i);
				      Zl=Z.length;
				      while(Zl--){
						  h&&h.canWalk(h,m)&&((Z2=CustomZombie(oPoleVaultingZombie,i,GetC(Z[Zl].ZX),!h.PZ)).HP=Math.max(h.MaxHP*=0.25,150),Z2.jinyinnum=0);
					  }
                   }
			}
                },
                [d, b, a, c, e])
        }
    }),
    OrnIIZombies = InheritO(OrnNoneZombies, {
        Ornaments: 2,
        BreakPoint: 91,
        NormalGif: 2,
        AttackGif: 3,
        LostHeadGif: 4,
        LostHeadAttackGif: 5,
        OrnLostNormalGif: 6,
        OrnLostAttackGif: 7,
        OrnLostHeadNormalGif: 8,
        OrnLostHeadAttackGif: 9,
        HeadGif: 10,
        DieGif: 11,
        BoomDieGif: 12
    }),
    oNewspaperZombie = InheritO(OrnIIZombies, {
        EName: "oNewspaperZombie",
        CName: "读报僵尸",
        OrnHP: 150,
        Lvl: 3,
		HP:370,
		SunNum:75,
        LostPaperGif: 13,
        StandGif: 14,
        width: 216,
        height: 164,
        beAttackedPointL: 60,
        beAttackedPointR: 130,
        LostPaperSpeed: 5.4,
        PicArr: (function() {
            var a = "images/Zombies/NewspaperZombie/";
            return ["images/Card/Zombies/NewspaperZombie.png", a + "0.gif", a + "HeadWalk1.gif", a + "HeadAttack1.gif", a + "LostHeadWalk1.gif", a + "LostHeadAttack1.gif", a + "HeadWalk0.gif", a + "HeadAttack0.gif", a + "LostHeadWalk0.gif", a + "LostHeadAttack0.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "LostNewspaper.gif", a + "1.gif"]
        })(),
        AudioArr: ["newspaper_rarrgh2"],
        Produce: '他的报纸只能提供有限的防御。<p>韧性：<font color="#FF0000">中（370，发怒后50%减伤）</font><br>精英形态：破报犹豫时间变长，无减伤，破报后虚化（可被路灯花显形）<br>报纸韧性：<font color="#FF0000">低</font><br>速度：正常，而后快(失去报纸后)</font><br>伤害：正常，而后4倍(失去报纸后)</p>读报僵尸，他正痴迷于完成他的数独难题。难怪他这么反常。',
        getShadow: function(a) {
            return "left:75px;top:" + (a.height - 25) + "px"
        },
        GoingDie: function(b) {
            var a = this,
                c = a.id;
            a.EleBody.src = b;
            oSym.addTask(200, ClearChild, [NewImg(0, a.PicArr[a.HeadGif] + Math.random(), "left:" + a.AttackedLX + "px;top:" + (a.pixelTop - 20) + "px;z-index:" + a.zIndex, EDPZ)]);
            a.beAttacked = 0;
            a.FreeFreezeTime = a.FreeSetbodyTime = a.FreeSlowTime = 0;
            a.AutoReduceHP(c)
        },
        getHurtOrnLost: function(j, a, g, m, c, l, k, i) {
            var e = this;
            if (!e.beAttacked) {
                k && e.DisappearDie();
                return
            }
            var b = e.id,
                h = e.HP,
                d = e.PicArr,
                f = e.isAttacking;
            switch (true) {
                case (h -= g) < 1:
                    e.HP = 0;
                    e.NormalDie();
                    return;
                case h < 91:
                    e.HP = h;
                    e.GoingDie(d[[e.OrnLostHeadNormalGif, e.OrnLostHeadAttackGif][f]]);
                    return
            }
            e.HP = h;
            switch (m) {
                case -1:
                    e.getSlow(e, b, 1000);
                    break;
                case 1:
                    e.getFireball(e, b, a);
                    break;
                default:
                    !i && j == -1 && e.PlayNormalballAudio()
            }
            SetAlpha(e.EleBody, 50, 0.5);
            oSym.addTask(10,
                function(q) {
                    var n = $Z[q];
                    n && SetAlpha(n.EleBody, 100, 1)
                },
                [b])
        },
        getSnowPea: function(c, a, b) {
            PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
            c.getHit0(c, a, b)
        },
		getFreezePea: function(c, a, b) {
            PlayAudio("splat" + Math.floor(1 + Math.random() * 3));
            c.getHit0(c, a, b)
        },
        getFirePea: function(f, b, e) {
            f.PlayFireballAudio();
            (f.FreeSlowTime || f.FreeFreezeTime) && (f.Speed = f.OSpeed, f.FreeSlowTime = 0, f.FreeFreezeTime = 0);
            f.Attack = 100;
            var d = f.AttackedLX,
                g = f.AttackedRX,
                a = oZ.getArZ(d, d + 40, f.R),
                c = a.length,
                h;
            while (c--) {
                (h = a[c]) != this && h.getFirePeaSputtering()
            }(f.HP -= b) < f.BreakPoint ? (f.getFirePea = OrnNoneZombies.prototype.getFirePea, f.GoingDie(f.PicArr[[f.LostHeadGif, f.LostHeadAttackGif][f.isAttacking]]), f.getHit = f.getHit0 = f.getHit1 = f.getHit2 = f.getHit3 = function() {}) : (f.CheckOrnHP(f, f.id, f.OrnHP, b, f.PicArr, f.isAttacking, 0), f.SetAlpha(f, f.EleBody, 50, 0.5), oSym.addTask(10,
                function(j, i) {
                    (i = $Z[j]) && i.SetAlpha(i, i.EleBody, 100, 1)
                },
                [f.id]))
        },
        getHit0: function(c, a, b) {
			if(c.OrnHP+c.HP<=a) return c.NormalDie();
            c.CheckOrnHP(c, c.id, c.OrnHP, a, c.PicArr, c.isAttacking, 1), c.SetAlpha(c, c.EleBody, 50, 0.5), oSym.addTask(10,
                function(e, d) {
                    (d = $Z[e]) && d.SetAlpha(d, d.EleBody, 100, 1)
                },
                [c.id])
        },
        getHit1: function(b, a) {
            (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function() {}) : (b.CheckOrnHP(b, b.id, b.OrnHP, a, b.PicArr, b.isAttacking, 0), b.SetAlpha(b, b.EleBody, 50, 0.5), oSym.addTask(10,
                function(d, c) {
                    (c = $Z[d]) && c.SetAlpha(c, c.EleBody, 100, 1)
                },
                [b.id]))
        },
        getHit2: function(b, a) {
            (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function() {}) : (b.SetAlpha(b, b.EleBody, 50, 0.5), oSym.addTask(10,
                function(d, c) {
                    (c = $Z[d]) && c.SetAlpha(c, c.EleBody, 100, 1)
                },
                [b.id]))
        },
        getHit3: function(b, a) {
            (b.HP -= a) < b.BreakPoint ? (b.GoingDie(b.PicArr[[b.LostHeadGif, b.LostHeadAttackGif][b.isAttacking]]), b.getFirePea = OrnNoneZombies.prototype.getFirePea, b.getSnowPea = OrnNoneZombies.prototype.getSnowPea, b.getHit = b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function() {}) : (b.CheckOrnHP(b, b.id, b.OrnHP, a, b.PicArr, b.isAttacking, 0), b.SetAlpha(b, b.EleBody, 50, 0.5), oSym.addTask(10,
                function(d, c) {
                    (c = $Z[d]) && c.SetAlpha(c, c.EleBody, 100, 1)
                },
                [b.id]))
        },
		jinyinAct:function(a){a.LostPaperGif=a.DieGif},
        CheckOrnHP: function(g, h, d, c, f, b, a) {
            var e = OrnNoneZombies.prototype;
            (g.OrnHP = d -= c) < 1 && (a && (g.HP += d), g.ChkActs = function() {
                    return 1
                },
                g.ChkActs1 = function() {
                    return 1
                },
                g.EleBody.src = f[g.LostPaperGif] + $Random + Math.random(), g.Ornaments = 0, g.LostHeadGif = 8, g.LostHeadAttackGif = 9, g.getFirePea = e.getFirePea, g.getSnowPea = e.getSnowPea, g.getFreezePea = e.getFreezePea,g.getHit = g.getHit0 = g.getHit1 = g.getHit2 = g.getHit3 = e.getHit, oSym.addTask(g.jinyin?450:150,
                    function(m, l) {
                        var k = $Z[m];
                        if (!k) {
                            return
                        }
                        var j = CZombies.prototype,
                            i = k.OSpeed = k.LostPaperSpeed;
                        k.ChkActs =!k.WalkDirection?j.ChkActs:j.ChkActs1;
                        k.ChkActs1 = j.ChkActs1;
						k.tasktime*=0.4;
						!k.jinyin&&(k.jianshang=0.5);
						k.jinyin&&(k.PrivateAct=function(h) {
                   var num = 0;
                !h.xianxing ? (h.Altitude = 4,
                h.Ele.style.opacity = 0.1) : (h.Altitude = 1,
              h.Ele.style.opacity = 1);
            var a = h.R,
              b = GetC(h.ZX);
            for (let i = a - 1; i <= a + 1; i++) {
              for (let l = b - 2; l <= b + 2; l++) {
                !num && h.xianxing && oGd.$[i + "_" + l + "_" + "1"] && (oGd.$[i + "_" + l + "_" + "1"].EName != "oPlantern") && (h.xianxing = 0);
                !num && !h.xianxing && oGd.$[i + "_" + l + "_" + "1"] && (oGd.$[i + "_" + l + "_" + "1"].EName == "oPlantern") && (h.xianxing = true, num = 1)
              }
            }
          });
                        k.Speed && (k.Speed = !k.FreeSlowTime ? i : 0.5 * i);
                        if (!k.beAttacked) {
                            return
                        }
                        !k.jinyin&&PlayAudio("newspaper_rarrgh2");
                        k.EleBody.src = l;
                        k.JudgeAttack()
                    },
                    [h, f[[g.NormalGif = g.OrnLostNormalGif, g.AttackGif = g.OrnLostAttackGif][b]]]))
        }
    }),
oScreenDoorZombie = InheritO(oNewspaperZombie, {
  EName: "oScreenDoorZombie",
  CName: "铁栅门僵尸",
  OrnHP: 1000,
  Lvl: 3,
  SunNum: 100,
  StandGif: 13,
  width: 166,
  height: 144,
  beAttackedPointL: 60,
  beAttackedPointR: 116,
  check: 1,
  LostPaperSpeed: 1.6,
  PicArr: (function() {
    var a = "images/Zombies/ScreenDoorZombie/",
      b = "images/Zombies/Zombie/";
    return ["images/Card/Zombies/ScreenDoorZombie.png", a + "0.gif", a + "HeadWalk1.gif", a + "HeadAttack1.gif", a + "LostHeadWalk1.gif", a + "LostHeadAttack1.gif", b + "Zombie2.gif", b + "ZombieAttack.gif", b + "ZombieLostHead.gif", b + "ZombieLostHeadAttack.gif", b + "ZombieHead.gif" + $Random, b + "ZombieDie.gif" + $Random, b + "BoomDie.gif" + $Random, a + "1.gif"]
  })(),
  HP: 270,
  jinyinAct: function(a) {
    var z = $(a.id);
    a.num=Math.round(Math.random()*1+0)||a.Privatenum;
    z.FumeDoor = "Fume" + Math.random();
	a.num&&(a.OrnHP*=0.5);
    var Sh = NewImg(z.FumeDoor, a.num ? "images/Plants/FumeShroom/FumeShroom.gif" : "images/interface/Shovel.png", "position:absolute;transform:" + (a.PZ ? "rotateY(180deg);" : "rotateY(0deg);") + "left:25px;top:" + (a.num ? 50 : 80) + "px;", 0);
    z.appendChild(Sh); //寒冰头与大喷菇
    a.num && (NewEle(a.id + "_Bullet",
      "div", "position:absolute;transform:" + (a.PZ ? "rotateY(180deg);" : "rotateY(0deg);") + "visibility:hidden;width:343px;height:62px;left:" + (a.PZ ? "-250" : "40") + "px;top:70px;background:url(images/Plants/FumeShroom/FumeShroomBullet.gif);z-index:" + (a.zIndex + 1), 0, $(a.id)), oSym.addTask(1, function(a, h, z) {
      if (a.Ornaments && $Z[a.id]) {
        let A = oZ["getAr" + (a.PZ ? "HZ" : "Z")](a.PZ ? a.ZX - 300 : a.ZX, a.PZ ? a.ZX : a.ZX + 300, a.R),
          Tz = A.length;
        for (let i = GetC(a.ZX + 20) - 3; i <= GetC(a.ZX + 20); i++) {
          for (let l = 0; l <= 3; l++) {
            var m = oGd.$[a.R + "_" + i + "_" + l];
            (Tz || (m&& a.PZ))&&a.canWalk(a,a.id) ? (
              a.Speed = a.OSpeed = 0,
              EditImg($(z.FumeDoor), 0, "images/Plants/FumeShroom/FumeShroomAttack.gif", {}, 0),
              PlayAudio("fume"),
              SetVisible($(h)),
              oSym.addTask(50, function(a, z) {
                a && a.Ornaments && EditImg($(z.FumeDoor), 0, "images/Plants/FumeShroom/FumeShroom.gif", {}, 0)
              }, [a, z]),
              ImgSpriter(h, a.id, [
                  ["0 0", 5, 1],
                  ["0 -62px", 5, 2],
                  ["0 -124px", 5, 3],
                  ["0 -186px", 5, -1]
                ], 0,
                function(i) {
                  SetHidden($(i))
                }),
              a.PZ && m && (m.getHurt(a, 3, 25))
            ) : (a.Speed = a.OSpeed = a.LostPaperSpeed);
          }
        }
        while (Tz--) {
          (t = A[Tz]) && (t.Altitude == 1) && (t.getHit1(t, 25, 0))
        }
      } else {
        ClearChild(h);
        a.Speed = a.OSpeed = a.LostPaperSpeed;
      }
      a && oSym.addTask(140, arguments.callee, [a, a.id + "_Bullet", z])
    }, [a, a.id + "_Bullet", z])); //大喷技能
    a.PrivateAct = function(a) {
      var P = $(a.id);
      if (!a.num && a.Ornaments) {
        var C = GetC(a.ZX);
    for (i = 3; i >= 0; i--) {
        var p = oGd.$[a.R + "_" + C + "_" + i];
          a.PZ && p && p.canEat && $(p.id) && (p.C == C) && (PlantKind = p.PKind, NewC = p.C + 1, p.AttackedLX += 80, p.pixelRight += 80, p.AttackedRX += 80, p.pixelLeft += 80, $(p.id).style.left = (p.pixelLeft) + "px",
			(p.EName== "oBrains"||p.C>9)?p.Die():(delete oGd.$[p.R + "_" + p.C + "_" + p.PKind], p.C = NewC, oGd.add(p, a.R + "_" + NewC + "_" + PlantKind,
		p.oTrigger&&oT.delP(p),p.InitTrigger(p,p.id,p.R,p.C,p.AttackedLX,p.AttackedRX),PlayAudio("shovel"))));//重置植物列数并重置索敌
        }
        var z = oZ["get" + (a.PZ ? "HZ1" : "Z0")](a.ZX, a.R);
        z && (z.getr(z, 80), z.getHit0(z, 100, 0),PlayAudio("shovel"))
      }!(a.PZ == a.check) && (a.Ornaments && (a.num && EditEle($(a.id + "_Bullet"), 0, {
            transform: a.PZ ? "rotateY(180deg)" : "rotateY(0deg)",
            left: (a.PZ ? "-250" : "40") + "px"
          }, $(a.id), 0),
          EditImg($(P.FumeDoor), 0, a.num ? "images/Plants/FumeShroom/FumeShroom.gif" : "images/interface/Shovel.png", {
            transform: a.PZ ? "rotateY(180deg)" : "rotateY(0deg)",
            left: a.PZ ? "25px" : "40px"
          }, 0)),
        a.check = a.PZ);
		!a.Ornaments&&ClearChild($(a.Ele.FumeDoor))
    }
  },
PrivateDie:function(a){
	a.Ornaments&&ClearChild($(a.Ele.FumeDoor))
},
  PlayNormalballAudio: function() {
    PlayAudio("splat" + Math.floor(1 + Math.random() * 3))
  },
  Produce: '他的铁栅门是有效的盾牌。<br>韧性：<font color="#FF0000">低</font><br>铁栅门韧性：<font color="#FF0000">高(1000)</font><br>精英形态：<br>1.手持大喷菇，对前方三格植物造成每次25伤害，但防具血量只有500<br>2.手持铲子，将植物铲至身后<br>弱点：大喷菇<br>门板僵尸上次拜访过的房主防守并不专业，在吃掉房主的脑子后拿走了他家的铁栅门。',
  GoingDie: CZombies.prototype.GoingDie,
  getFirePea: function(c, a, b) {
    PlayAudio(b == c.WalkDirection ? ["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)] : "splat" + Math.floor(1 + Math.random() * 3));
    c.getHit0(c, a, b)
  },
  getFirePeaSputtering: function() {},
  getSnowPea: function(c, a, b) {
    PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
    c.getHit0(c, a, b)
  },
  getPea: function(c, a, b) {
    PlayAudio(b == c.WalkDirection ? ["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)] : "splat" + Math.floor(1 + Math.random() * 3));
    c.getHit0(c, a, b)
  },
  getHit0: function(c, a, b) {
    if (c.OrnHP + c.HP <= a) return c.NormalDie();
    c.CheckOrnHP(c, c.id, c.OrnHP, a, c.PicArr, c.isAttacking, 1), c.SetAlpha(c, c.EleBody, 50, 0.5), oSym.addTask(10,
      function(e, d) {
        (d = $Z[e]) && d.SetAlpha(d, d.EleBody, 100, 1)
      },
      [c.id])
  },
  CheckOrnHP: function(g, h, d, c, f, b, a) {
    var e = OrnNoneZombies.prototype;
    (g.OrnHP = d -= c) < 1 && (a && (g.HP += d), g.Ornaments = 0, g.EleBody.src = f[[g.NormalGif = g.OrnLostNormalGif, g.AttackGif = g.OrnLostAttackGif][b]], g.LostHeadGif = 8, g.LostHeadAttackGif = 9, g.getPea = e.getPea, g.getFreezePea = e.getFreezePea, g.getFirePea = e.getFirePea, g.getFirePeaSputtering = e.getFirePeaSputtering, g.getSnowPea = e.getSnowPea, g.PlayNormalballAudio = e.PlayNormalballAudio, g.PlayFireballAudio = e.PlayFireballAudio, g.PlaySlowballAudio = e.PlaySlowballAudio, g.getHit = g.getHit0 = g.getHit1 = g.getHit2 = g.getHit3 = e.getHit)
  },
  getFireball: function(c, a, b) {
    b != c.WalkDirection ? (c.FreeSlowTime = 0, c.Attack = 100, c.Speed != c.OSpeed ? (c.PlayNormalballAudio(), c.Speed = c.OSpeed) : c.PlayFireballAudio()) : c.PlayNormalballAudio()
  },
  getSputtering: function() {},
  getSlow: function(d, a, c, b, e) {
    (b != d.WalkDirection || e != -1) ? CZombies.prototype.getSlow(d, a, c): d.PlayNormalballAudio()
  }
}),
    oAquaticZombie = InheritO(OrnNoneZombies, {
        StandGif: 4,
        AttackGif: 5,
        HeadGif: 6,
        DieGif: 7,
        WalkGif0: 2,
        WalkGif1: 3,
        CanPass: function(b, a) {
            return a == 2
        },
        BirthCallBack: function(g) {
            var e = g.delayT,
                c = g.id,
                b = g.Ele = $(c),
                d = g.AttackedLX,
                f,
                a,
                h;
            f = g.EleShadow = b.firstChild;
            g.EleBody = b.childNodes[1];
            switch (true) {
                case d > GetX(9):
                    g.ChkActs = g.ChkActsL1;
                    g.WalkStatus = 0;
                    break;
                case d < GetX(0):
                    g.ChkActs = g.ChkActsL3;
                    g.WalkStatus = 0;
                    break;
                default:
                    g.ChkActs = g.ChkActsL2;
                    g.WalkStatus = 1;
                    SetHidden(f);
                    NewEle(a = c + "_splash", "div", "position:absolute;background:url(images/interface/splash.png);left:61px;top:" + (g.height - 88) + "px;width:97px;height:88px;over-flow:hidden", 0, b);
                    ImgSpriter(a, c, [
                            ["0 0", 9, 1],
                            ["-97px 0", 9, 2],
                            ["-194px 0", 9, 3],
                            ["-291px 0", 9, 4],
                            ["-388px 0", 9, 5],
                            ["-485px 0", 9, 6],
                            ["-582px 0", 9, 7],
                            ["-679px 0", 9, -1]
                        ], 0,
                        function(i, j) {
                            ClearChild($(i))
                        });
					g.intowater=true;
					g.EleBody.src = g.PicArr[g.NormalGif = g.WalkGif1];
            }
            e ? oSym.addTask(e,
                function(j, i) {
                    var k = $Z[j];
                    k && (k.FreeSetbodyTime = 0, SetBlock(i))
                },
                [c, b]) : SetBlock(b)
        },
        ChkActsL1: function(f, e, g, d) {
            var c, a, b = f.id;
            !(f.FreeFreezeTime || f.FreeSetbodyTime) && (f.AttackedRX -= (c = f.Speed), LX = f.ZX = f.AttackedLX -= c, f.Ele.style.left = Math.floor(f.X -= c) + "px");
            f.AttackedLX < GetX(9) && (PlayAudio("zombie_entering_water"), f.WalkStatus = 1, f.EleBody.src = f.PicArr[f.NormalGif = f.WalkGif1], SetHidden(f.EleShadow), NewEle(a = b + "_splash", "div", "position:absolute;background:url(images/interface/splash.png);left:61px;top:" + (f.height - 88) + "px;width:97px;height:88px;over-flow:hidden", 0, f.Ele), f.ChkActs = f.ChkActsL2, ImgSpriter(a, b, [
                    ["0 0", 9, 1],
                    ["-97px 0", 9, 2],
                    ["-194px 0", 9, 3],
                    ["-291px 0", 9, 4],
                    ["-388px 0", 9, 5],
                    ["-485px 0", 9, 6],
                    ["-582px 0", 9, 7],
                    ["-679px 0", 9, -1]
                ], 0,
                function(h, i) {
                    ClearChild($(h))
                }));
			f.PrivateAct && f.PrivateAct(f)
            return 1
        },
        ChkActsL2: function(d, c, e, b) {
            var a;
            !(d.FreeFreezeTime || d.FreeSetbodyTime) && (d.beAttacked && !d.isAttacking && d.JudgeAttack(), !d.isAttacking && (d.AttackedRX -= (a = d.Speed), d.ZX = d.AttackedLX -= a, d.Ele.style.left = Math.floor(d.X -= a) + "px"));
            d.AttackedLX < GetX(0) && (d.WalkStatus = 0, d.EleBody.src = d.Ornaments?d.PicArr[d.NormalGif = d.WalkGif0]:oDuckyTubeZombie1.prototype.PicArr[d.NormalGif = oDuckyTubeZombie1.prototype.WalkGif0],SetVisible(d.EleShadow), d.ChkActs = d.ChkActsL3);
			d.PrivateAct && d.PrivateAct(d);
            return 1
        },
        ChkActsL3: CZombies.prototype.ChkActs,
        ChkActs1: function(d, c, e, b) {
            var a;
            !(d.FreeFreezeTime || d.FreeSetbodyTime) && (d.beAttacked && !d.isAttacking && d.JudgeAttack(), !d.isAttacking && (d.AttackedLX += (a = d.Speed), d.ZX = d.AttackedRX += a, d.Ele.style.left = Math.ceil(d.X += a) + "px"));
            d.AttackedLX > GetX(9) && (d.WalkStatus = 0, d.EleBody.src = d.Ornaments?d.PicArr[d.NormalGif = d.WalkGif0]:oDuckyTubeZombie1.prototype.PicArr[d.NormalGif = oDuckyTubeZombie1.prototype.WalkGif0], SetVisible(d.EleShadow), d.ChkActs = d.ChkActs2);
			d.PrivateAct && d.PrivateAct(d);
            return 1
        },
        ChkActs2: function(e, c, f, b) {
            var a, d;
            !(e.FreeFreezeTime || e.FreeSetbodyTime) ? (e.beAttacked && !e.isAttacking && e.JudgeAttack(), !e.isAttacking ? (e.AttackedLX += (a = e.Speed)) > oS.W ? (f.splice(b, 1), e.DisappearDie(), d = 0) : (e.ZX = e.AttackedRX += a, e.Ele.style.left = Math.ceil(e.X += a) + "px", d = 1) : d = 1) : d = 1;
			d.PrivateAct && d.PrivateAct(d);
            return d
        },
		Ornaments:-1,
        ExchangeLR: function(d, b) {
            var c = d.width,
                f = d.beAttackedPointL,
                a = d.beAttackedPointR,
                e = d.Ele;
            e.style.left = (d.X = d.AttackedLX - (d.beAttackedPointL = c - a)) + "px";
            d.beAttackedPointR = c - f;
            d.EleShadow.style.cssText = "visibility:hidden;left:" + (d.beAttackedPointL - 10) + "px;top:" + (d.height - 22) + "px";
            d.ExchangeLR2(d, d.EleBody, b)
        },
        GoingDie: function() {
            var b = this,
                c = b.id,
                a = b.PicArr;
            b.EleBody.src = a[7] + Math.random();
            b.GoingDieHead(c, a, b);
            b.beAttacked = 0;
            b.FreeFreezeTime = b.FreeSetbodyTime = b.FreeSlowTime = 0;
            b.AutoReduceHP(c)
        },
        AutoReduceHP: function(a) {
            oSym.addTask(100,
                function(c) {
                    var b = $Z[c];
                    b && ((b.HP -= 60) < 1 ? (b.NormalDie(), oSym.addTask(50, ClearChild, [b.Ele])) : oSym.addTask(100, arguments.callee, [c]))
                },
                [a])
        },
        ExplosionDie: function() {
            ClearChild(this.Ele);
            this.HP = 0;
            delete $Z[this.id];
            this.PZ && oP.MonPrgs()
        },
        DisappearDie: function() {
            ClearChild(this.Ele);
            this.HP = 0;
            delete $Z[this.id];
            this.PZ && oP.MonPrgs()
        },
        CrushDie: function() {
            ClearChild(this.Ele);
            this.HP = 0;
            delete $Z[this.id];
            this.PZ && oP.MonPrgs()
        },
        NormalDie: function() {
            this.HP = 0;
            delete $Z[this.id];
            this.PZ && oP.MonPrgs()
        }
    }),
    oDuckyTubeZombie1 = InheritO(oAquaticZombie, {
        EName: "oDuckyTubeZombie1",
        CName: "鸭子救生圈僵尸",
        beAttackedPointR: 130,
        GetDY: function() {
            return 5
        },
        Produce: '鸭子救生圈能让僵尸能浮在水面上<br><font color="#FF0000">水路铁桶无精英</font><br>韧性：<font color="#FF0000">低</font><br>只在水池关卡出现</font></p>只有特定的僵尸才能成为救生圈僵尸。并不是每个僵尸都能胜任的。有些救生圈有点漏气，但他们没能注意到，所以他们离开并放弃了对脑子的渴求。',
        PicArr: (function() {
            var a = "images/Zombies/DuckyTubeZombie1/";
            return ["images/Card/Zombies/DuckyTubeZombie1.png", a + "0.gif", a + "Walk1.gif", a + "Walk2.gif", a + "1.gif", a + "Attack.gif", "images/Zombies/Zombie/ZombieHead.gif" + $Random, a + "Die.gif" + $Random]
        })(),
        AudioArr: ["zombie_entering_water"]
    }),
oDuckyTubeZombie2 = InheritO(oDuckyTubeZombie1, {
  EName: "oDuckyTubeZombie2",
  CName: "路障鸭子救生圈僵尸",
  OrnHP: 370,
  Lvl: 2,
  SunNum: 75,
  CanDisplay: 0,
  OrnLostNormalGif: 9,
  OrnLostAttackGif: 10,
  Ornaments: 1,
  PlayNormalballAudio: function() {
    PlayAudio("plastichit")
  },
  jinyinWalkGif1: 11,
  jinyinGif: 12,
  jinyinAttackGif: 13,
  PicArr: (function() {
    var b = "images/Zombies/DuckyTubeZombie2/",
      a = "images/Zombies/DuckyTubeZombie1/";
    return ["images/Card/Zombies/DuckyTubeZombie1.png", b + "0.gif", b + "Walk1.gif", b + "Walk2.gif", b + "1.gif", b + "Attack.gif", "images/Zombies/Zombie/ZombieHead.gif" + $Random, a + "Die.gif" + $Random, a + "Walk1.gif", a + "Walk2.gif", a + "Attack.gif", b + "jinyinWalk1.gif", b + "jinyinWalk2.gif", b + "jinyinAttack.gif"]
  })(),
  jinyinAct: function(a) {
    a.WalkGif1 = a.jinyinGif;
    a.WalkGif0 = a.jinyinWalkGif1;
    oConeheadZombie.prototype.jinyinAct(a);
    a.EleBody.src = a.PicArr[a.intowater ? a.jinyinGif : a.jinyinWalkGif1]
  },
  AudioArr: ["plastichit", "zombie_entering_water"],
  getHit: OrnIZombies.prototype.getHit,
  getHit0: OrnIZombies.prototype.getHit0,
  getHit1: OrnIZombies.prototype.getHit1,
  getHit2: OrnIZombies.prototype.getHit2,
  getHit3: OrnIZombies.prototype.getHit3
}),
    oDuckyTubeZombie3 = InheritO(oDuckyTubeZombie2, {
        EName: "oDuckyTubeZombie3",
        CName: "铁桶鸭子救生圈僵尸",
        OrnHP: 1100,
        Lvl: 3,
        SunNum: 125,
        PlayNormalballAudio: function() {
            PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)])
        },
        AudioArr: ["shieldhit", "shieldhit2", "zombie_entering_water"],
		jinyinAct:function(){},
        PicArr: (function() {
            var b = "images/Zombies/DuckyTubeZombie3/",
                a = "images/Zombies/DuckyTubeZombie1/";
            return ["images/Card/Zombies/DuckyTubeZombie1.png", b + "0.gif", b + "Walk1.gif", b + "Walk2.gif", b + "1.gif", b + "Attack.gif", "images/Zombies/Zombie/ZombieHead.gif" + $Random, a + "Die.gif" + $Random, a + "Walk1.gif", a + "Walk2.gif", a + "Attack.gif", b + "Walk1.gif", b + "Walk2.gif", b + "Attack.gif"]
        })()
    }),
    oSnorkelZombie = InheritO(oDuckyTubeZombie1, {
        EName: "oSnorkelZombie",
        CName: "潜水僵尸",
        Lvl: 2,
        SunNum: 100,
        width: 143,
        height: 200,
		HP:270,
        beAttackedPointL: 40,
        beAttackedPointR: 100,
        OSpeed: 3.2,
        Speed: 3.2,
        Altitude: 1,
        Produce: '潜水僵尸可以在水下前行。<p>韧性：<font color="#FF0000">低</font><br>特点：<font color="#FF0000">潜泳以避免遭到攻击，啃食时每秒回30血<br>精英形态：入水后不抬头<br>只在水池关卡出现</font></p>僵尸不呼吸。他们不需要空气。那么为什么潜水僵尸需要一套潜水装置来潜水呢？<br>答案：同行的压力。',
        JumpTime: 40,
		jinyinAct:function(a){
			a.JumpTime=75
		},
        getShadow: function(a) {
            return "left:" + a.beAttackedPointL + "px;top:" + (a.height - 45) + "px"
        },
        PicArr: (function() {
            var a = "images/Zombies/SnorkelZombie/";
            return ["images/Card/Zombies/SnorkelZombie.png", a + "0.gif", a + "Walk1.gif", a + "Walk2.gif", a + "1.gif", a + "Attack.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "Jump.gif" + $Random, a + "Risk.gif" + $Random, a + "Sink.gif" + $Random]
        }()),
        AudioArr: ["zombie_entering_water"],
        BirthCallBack: function(a) {
            oAquaticZombie.prototype.BirthCallBack(a), GetC(this.ZX) <= 9 && this.Jump(this);
        },
        Jump: function(a) {
            a.beAttacked && (PlayAudio("zombie_entering_water"), a.Altitude = 2, SetHidden(a.EleShadow), a.EleBody.src = a.PicArr[8] + Math.random(), oSym.addTask(160,
                function(c, b) {
                    $Z[c] && b.beAttacked && (b.WalkStatus = 1, b.Altitude = 0, b.OSpeed = b.Speed = 2, b.EleBody.src = b.PicArr[b.NormalGif = b.WalkGif1], b.ChkActs = b.ChkActsL2)
                },
                [a.id, a]), a.ChkActs = function() {
                return 1
            })
        },
        ChkActsL1: function(d, c, e, b) {
            if (d.JumpTime <= 0) {
                d.Jump(d);
                return 1
            }
            var a;
            !(d.FreeFreezeTime || d.FreeSetbodyTime) && (d.AttackedRX -= (a = d.Speed), LX = d.ZX = d.AttackedLX -= a, d.Ele.style.left = Math.floor(d.X -= a) + "px", --d.JumpTime);
            return 1
        },
        ChkActsL2: function(d, c, e, b) {
            var a;
            !(d.FreeFreezeTime || d.FreeSetbodyTime) && (d.AttackedLX > GetX(0) ? (!d.jinyin&&d.beAttacked && !d.isAttacking && d.JudgeAttack(), !d.isAttacking && (d.AttackedRX -= (a = d.Speed), d.ZX = d.AttackedLX -= a, d.Ele.style.left = Math.floor(d.X -= a) + "px")) : (d.beAttacked && (d.WalkStatus = 0, d.Altitude = 1, d.EleBody.src = d.PicArr[d.NormalGif = d.WalkGif0], SetVisible(d.EleShadow), d.ChkActs = d.ChkActsL3)));
            return 1
        },
        JudgeAttack: function() {
            var e = this,
                b = e.ZX,
                c = e.R + "_",
                d = GetC(b),
                g = oGd.$,
                a,
                f = e.id;
            (a = e.JudgeLR(e, c, d, b, g) || e.JudgeSR(e, c, d, b, g)) ? !e.isAttacking ? (e.isAttacking = 1, e.EleBody.src = e.PicArr[9] + Math.random(), oSym.addTask(50,
                function(i, h) {
                    $Z[i] && h.beAttacked && (h.EleBody.src = h.PicArr[h.AttackGif], h.Altitude = 1,h.NormalAttack(a[0], a[1]))
				},
                [f, e])) : e.NormalAttack(a[0], a[1]): e.isAttacking && (e.EleBody.src = e.PicArr[10] + Math.random(), e.Altitude = 0, oSym.addTask(70,
                function(i, h) {
                    $Z[i] && h.beAttacked && (h.isAttacking = 0, h.EleBody.src = h.PicArr[h.NormalGif])
                },
                [f,e]))
        },
        NormalAttack: function(b, a) {
            oSym.addTask(100,
                function(d, c) {
                    var f = $Z[d],
                        e;
                    f && f.beAttacked && !f.FreeFreezeTime && !f.FreeSetbodyTime && ((e = $P[c]) && e.getHurt(f, 0, f.Attack),f.HP<500&&(f.HP+=30),f.JudgeAttack())
                },
                [b, a])
        },
        JudgeAttackH: function() {
            var c = this,
                b = oZ.getZ0(c.ZX, c.R),
                d = c.id,
                a;
            b && b.beAttacked && b.AttackedLX < 900 && b.Altitude < 2 ? (!c.isAttacking ? (c.isAttacking = 1, c.EleBody.src = c.PicArr[9] + Math.random(),a=b.id,oSym.addTask(50,
                function(g, h, f, e) {
                    $Z[h] && g.beAttacked && ($Z[e] && f.beAttacked ? (g.EleBody.src = g.PicArr[g.AttackGif], g.Altitude = 1, g.AttackZombie(g,h,e)) : g.JudgeAttackH())
                },
                [c, d, b, a])) : c.AttackZombie(c,d,b.id)) : c.isAttacking && (c.EleBody.src = c.PicArr[10] + Math.random(), c.Altitude = 0, oSym.addTask(70,
                function(f, e) {
                    $Z[f] && e.beAttacked && (e.isAttacking = 0, e.EleBody.src = e.PicArr[e.NormalGif])
                },
                [d, c]))
        },
        AttackZombie: function(c, b, a) {
            c.isAttacking = 1;
            c.EleBody.src = c.PicArr[9] + Math.random();
            oSym.addTask(50,
                function(g, e, d, f) {
                    $Z[e] && g.beAttacked && ((f = $Z[d]) && f.beAttacked ? (g.EleBody.src = g.PicArr[g.AttackGif], g.Altitude = 1, oSym.addTask(10,
                        function(k, i, j, h) {
                            $Z[i] && k.beAttacked && !k.FreeFreezeTime && !k.FreeSetbodyTime && ($Z[h] && j.beAttacked ? (j.getHit0(j, 10, 0), k.HP<500&&(k.HP+=3),oSym.addTask(10, arguments.callee, [k, i, j, h])) : (k.EleBody.src = k.PicArr[10] + Math.random(), k.Altitude = 0, oSym.addTask(70,
                                function(l, m) {
                                    $Z[l] && m.beAttacked && (m.isAttacking = 0, m.EleBody.src = m.PicArr[m.NormalGif])
                                },
                                [i, k])))
                        },
                        [g, e, f, d])) : (g.EleBody.src = g.PicArr[10] + Math.random(), g.Altitude = 0, oSym.addTask(70,
                        function(h, i) {
                            $Z[h] && i.beAttacked && (i.isAttacking = 0, i.EleBody.src = i.PicArr[i.NormalGif])
                        },
                        [e, g])))
                },
                [c, b, a])
        },
        AutoReduceHP: function(a) {
            oSym.addTask(100,
                function(c) {
                    var b = $Z[c];
                    b && ((b.HP -= 60) < 1 ? (b.NormalDie(), oSym.addTask(200, ClearChild, [b.Ele])) : oSym.addTask(100, arguments.callee, [c]))
                },
                [a])
        }
    }),
    oSmallZombie = InheritO(oZombie, {
        EName: "oSmallZombie",
        CName: "小领带僵尸",
        HP: 67,
        SunNum: 15,
        width: 83,
        height: 72,
        beAttackedPointL: 41,
        beAttackedPointR: 78,
        BreakPoint: 25,
        Init: function(e, g, c, b) {
            var a = 0,
                f = this,
                d = [];
            g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) + g.beAttackedPointR;
            while (--b) {
                g.CanPass(b, c[b]) && (d[a++] = b)
            }
            g.ArR = d;
            g.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + g.getShadow(g) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);width:83px;height:72px;top:", 'px" src="', '"></div>']
        },
        GoingDieHead: function(c, a, b) {
            oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "width:75px;height:93px;left:" + b.AttackedLX + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
        },
        getShadow: function(a) {
            return "width:43px;height:18px;left:" + (a.beAttackedPointL - 5) + "px;top:" + (a.height - 15) + "px"
        }
    }),
    oSmallFlagZombie = InheritO(oFlagZombie, {
        EName: "oSmallFlagZombie",
        CName: "小旗帜僵尸",
        HP: 67,
        SunNum: 15,
        width: 83,
        height: 72,
        beAttackedPointL: 41,
        beAttackedPointR: 78,
        BreakPoint: 25,
        Init: function(e, g, c, b) {
            var a = 0,
                f = this,
                d = [];
            g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) + g.beAttackedPointR;
            while (--b) {
                g.CanPass(b, c[b]) && (d[a++] = b)
            }
            g.ArR = d;
            g.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + g.getShadow(g) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);width:83px;height:72px;top:", 'px" src="', '"></div>']
        },
        GoingDieHead: function(c, a, b) {
            oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "width:75px;height:93px;left:" + b.AttackedLX + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
        },
        getShadow: function(a) {
            return "width:43px;height:18px;left:" + (a.beAttackedPointL - 5) + "px;top:" + (a.height - 15) + "px"
        }
    }),
    oSmallDuckyTubeZombie1 = InheritO(oDuckyTubeZombie1, {
        EName: "oSmallDuckyTubeZombie1",
        CName: "小鸭子救生圈僵尸",
        HP: 67,
        SunNum: 15,
        width: 83,
        height: 72,
        beAttackedPointL: 41,
        beAttackedPointR: 73,
        BreakPoint: 25,
        Init: function(e, g, c, b) {
            var a = 0,
                f = this,
                d = [];
            g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) + g.beAttackedPointR;
            while (--b) {
                g.CanPass(b, c[b]) && (d[a++] = b)
            }
            g.ArR = d;
            g.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + g.getShadow(g) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);width:83px;height:72px;top:", 'px" src="', '"></div>']
        },
        GoingDieHead: function(c, a, b) {
            oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "width:75px;height:93px;left:" + b.AttackedLX + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
        },
        getShadow: function(a) {
            return "width:43px;height:18px;left:" + (a.beAttackedPointL - 5) + "px;top:" + (a.height - 15) + "px"
        }
    }),
    oSmallConeheadZombie = InheritO(oConeheadZombie, {
        EName: "oSmallConeheadZombie",
        CName: "小路障僵尸",
        OrnHP: 92,
        HP: 67,
        SunNum: 25,
        width: 83,
        height: 72,
        beAttackedPointL: 41,
        beAttackedPointR: 78,
        BreakPoint: 25,
        Init: function(e, g, c, b) {
            var a = 0,
                f = this,
                d = [];
            g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) + g.beAttackedPointR;
            while (--b) {
                g.CanPass(b, c[b]) && (d[a++] = b)
            }
            g.ArR = d;
            g.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + g.getShadow(g) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);width:83px;height:72px;top:", 'px" src="', '"></div>']
        },
        GoingDieHead: function(c, a, b) {
            oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "width:75px;height:93px;left:" + b.AttackedLX + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
        },
        getShadow: function(a) {
            return "width:43px;height:18px;left:" + (a.beAttackedPointL - 5) + "px;top:" + (a.height - 15) + "px"
        }
    }),
    oSmallFootballZombie = InheritO(oFootballZombie, {
        EName: "oSmallFootballZombie",
        CName: "小橄榄球僵尸",
        OrnHP: 350,
        HP: 67,
        SunNum: 55,
        width: 77,
        height: 80,
        beAttackedPointL: 20,
        beAttackedPointR: 77,
        BreakPoint: 25,
        Init: function(e, g, c, b) {
            var a = 0,
                f = this,
                d = [];
            g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) + g.beAttackedPointR;
            while (--b) {
                g.CanPass(b, c[b]) && (d[a++] = b)
            }
            g.ArR = d;
            g.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + g.getShadow(g) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);width:77px;height:80px;top:", 'px" src="', '"></div>']
        },
        GoingDieHead: function(c, a, b) {
            oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "width:75px;height:93px;left:" + b.AttackedLX + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
        },
        getShadow: function(a) {
            return "width:43px;height:18px;left:" + (a.beAttackedPointL + 15) + "px;top:" + (a.height - 22) + "px"
        }
    }),
    oSmallSnorkelZombie = InheritO(oSnorkelZombie, {
        EName: "oSmallSnorkelZombie",
        CName: "小潜水僵尸",
        HP: 67,
        SunNum: 20,
        width: 71,
        height: 100,
        beAttackedPointL: 20,
        beAttackedPointR: 50,
        BreakPoint: 25,
        Init: function(e, g, c, b) {
            var a = 0,
                f = this,
                d = [];
            g.AttackedRX = (g.X = (g.ZX = g.AttackedLX = e) - g.beAttackedPointL) + g.beAttackedPointR;
            while (--b) {
                g.CanPass(b, c[b]) && (d[a++] = b)
            }
            g.ArR = d;
            g.ArHTML = ['<div id="', '" style="position:absolute;display:', ";left:", "px;top:", "px;z-index:", '"><img src="' + ShadowPNG + '" style="' + g.getShadow(g) + '"><img style="position:absolute;clip:rect(0,auto,', ",0);width:71px;height:100px;top:", 'px" src="', '"></div>']
        },
        GoingDieHead: function(c, a, b) {
            oSym.addTask(200, ClearChild, [NewImg(0, a[b.HeadGif] + Math.random(), "width:71px;height:105px;left:" + b.AttackedLX + "px;top:" + (b.pixelTop - 20) + "px;z-index:" + b.zIndex, EDPZ)])
        },
        getShadow: function(a) {
            return "width:43px;height:18px;left:" + a.beAttackedPointL + "px;top:" + (a.height - 45) + "px"
        }
    }),
    oZomboni = function() {
        var a = function(d, b) {
            var c = d.HP;
            switch (true) {
                case (d.HP = c -= b) < 60:
                    d.GoingDie();
                    d.getHit0 = d.getHit1 = d.getHit2 = d.getHit3 = function(d,b) {(d.HP-=b)<0&&d.NormalDie()};
                    return;
                case c < 391:
					d.num&&(d.OSpeed=d.Speed=4.8,$(d.Ele.FumeDoor).src="images/Plants/PB10.gif");
                    d.EleBody.src = "images/Zombies/Zomboni/3.gif";
                    break;
                case c < 871:
                    d.EleBody.src = "images/Zombies/Zomboni/2.gif"
            }
            d.SetAlpha(d, d.EleBody, 50, 0.5);
            oSym.addTask(10,
                function(f, e) {
                    (e = $Z[f]) && e.SetAlpha(e, e.EleBody, 100, 1)
                },
                [d.id])
        };
        return InheritO(OrnNoneZombies, {
            EName: "oZomboni",
            CName: "冰车僵尸",
            HP: 1350,
            Lvl: 4,
            StandGif: 2,
            DieGif: 6,
            BoomDieGif: 7,
            BookHandPosition: "40% 35%",
            width: 464,
            height: 364,
            GetDTop: 104,
            beAttackedPointL: 140,
            beAttackedPointR: 290,
            BreakPoint: 200,
            SunNum: 225,
            GetDY: function() {
                return 0
            },
			getSlow:function(){},
            OSpeed: 2.5,
            Speed: 2.5,
            AKind: 2,
            Attack: 50,
			tasktime:40,
            Produce: '冰车僵尸运用冰雪，碾过你的植物。<br>韧性：<font color="#FF0000">高</font><br>特点：<font color="#FF0000">碾压植物，留下条冰道</font><br>精英形态一：<font color="#FF0000">辣椒冰车，重度损伤时加速</font><br>精英形态二：<font color="#FF0000">寒冰菇冰车，每隔10s冻结周围植物5s并对其造成伤害，有20%减伤</font><br>经常被误以为是在驾驶着冰车的僵尸，但事实上冰车僵尸是种完全不同的生物形式，他与太空兽人联系更紧密而不是僵尸。',
            PicArr: (function() {
                var b = "images/Zombies/Zomboni/";
                return ["images/Card/Zombies/Zomboni.png", b + "0.gif", b + "1.gif", b + "2.gif", b + "3.gif", b + "4.gif", b + "5.gif" + $Random, b + "BoomDie.gif" + $Random, b + "ice.png", b + "ice_cap.png"]
            })(),
            AudioArr: ["zamboni", "explosion"],
            BirthCallBack: function(h) {
                var g = h.delayT,
                    e = h.id,
                    c = h.Ele = $(e),
                    d = h.R,
                    f,
                    b = oGd.$Ice;
                h.EleShadow = c.firstChild;
                h.EleBody = c.childNodes[1];
                !b[d] ? (f = NewEle("dIceCar" + d, "div", "position:absolute;z-index:1;left:145px;top:" + (GetY(d) - 65) + "px;width:800px;height:72px", 0, EDPZ), NewImg("", "images/interface/blank.png", "position:absolute;clip:rect(0,auto,auto,800px);width:800px;height:72px;left:5px;background:url(images/Zombies/Zomboni/ice.png) repeat-x", f), NewImg("", "images/Zombies/Zomboni/ice_cap.png", "position:absolute;display:none;left:0", f), b[d] = [1, 11, h.AttackedLX]) : ++b[d][0];
                g ? oSym.addTask(g,
                    function(j, i) {
                        var k = $Z[j];
                        k && (k.FreeSetbodyTime = 0, SetBlock(i), PlayAudio("zamboni"))
                    },
                    [e, c]) : (SetBlock(c), PlayAudio("zamboni"))
            },
            ChkActs: function(e, j, q, k) {
                var b, r, m, g, n = oGd.$Ice[j],
                    d, h, f, c, l = $("dIceCar" + j); 
                if (l == null) { // 对没有冰道的情况下特判
                    l = NewEle("dIceCar" + j, "div", "position:absolute;z-index:1;left:145px;top:" + (GetY(e.R) - 65) + "px;width:800px;height:72px", 0, EDPZ); // 生成新的冰道
                    NewImg("", "images/interface/blank.png", "position:absolute;clip:rect(0,auto,auto,800px);width:800px;height:72px;left:5px;background:url(images/Zombies/Zomboni/ice.png) repeat-x", l);
                    NewImg("", "images/Zombies/Zomboni/ice_cap.png", "position:absolute;display:none;left:0", l);
                    n = oGd.$Ice[j] = [1, 11, e.AttackedLX];
                } 
                e.JudgeAttack();
                (r = e.AttackedRX -= (b = e.Speed)) < -50 ? (q.splice(k, 1), e.DisappearDie(), m = 0) : (r < 100 && !e.PointZombie && (e.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), e.ChangeR({
                    R: j,
                    ar: [oS.R - 1],
                    CustomTop: 400 - e.height + e.GetDY()
                })), e.ZX = e.AttackedLX -= b, e.Ele.style.left = Math.floor(e.X -= b) + "px", m = 1);
                d = e.X;
                h = d + 250;
                f = d + 100;
                c = GetC(h);
                c > -1 && c < n[1] && (oGd.$Crater[j + "_" + c] = 1, n[1] = c);
                h > 120 && h < n[2] && (n[2] = h, l.firstChild.style.clip = "rect(0,auto,auto," + f + "px)", l.childNodes[1].style.left = Math.max(0, f) + "px");
				e.PrivateAct(e);
                return m
            },
			PrivateAct:function(){},
            ChkActs1: function(f, d, g, c) {
                var b, e;
                f.JudgeAttack();
                (f.AttackedLX += (b = f.Speed)) > oS.W ? (g.splice(c, 1), f.DisappearDie(), e = 0) : (f.ZX = f.AttackedRX += b, f.Ele.style.left = Math.ceil(f.X += b) + "px", e = 1);
				f.PrivateAct(f);
                return e
            },
			check:1,
			jinyinAct:function(a){
				a.num=Math.round(Math.random()*1+0)||a.Privatenum;
				var z=$(a.id);
    z.FumeDoor = "Fume" + Math.random();
    var Sh = NewImg(z.FumeDoor, a.num ? "images/Plants/Jalapeno/Jalapeno.gif" : "images/Plants/IceShroom/IceShroom.gif", "position:absolute;transform:" + (a.PZ ? "rotateY(180deg);" : "rotateY(0deg);") + "left:125px;top:280px;", 0);
    z.appendChild(Sh);
    !a.num && (a.jianshang=0.8,oSym.addTask(500, function(a) {
		var LR=Math.max(a.R-1,1);
		do{
        let A = oZ["getAr" + (a.PZ ? "HZ" : "Z")](a.ZX - 120,a.ZX + 120, LR),
          Tz = A.length;
        for (let i = GetC(a.ZX) - 1; i <= GetC(a.ZX)+1; i++) {
          for (let l = 0; l <= 3; l++) {
            var m = oGd.$[LR + "_" + i + "_" + l];
            a.PZ&&a.canWalk(a,a.id)&&(m && (m.getFreeze(m, m.id,500),m.getHurt(m,3,50*a.level),a.SetAlpha(m,$(m.id),50,0.5)),
			oSym.addTask(500, function(a,m) {m&&a.SetAlpha(m,$(m.id),100,1)},[a,m]));
          }
        }
        while (Tz--) {
          (t = A[Tz])&&a.canWalk(a,a.id)&& (t.getFreeze(t,t.id,500),t.getHit2(t,50*a.level))
        }
	}while(LR++ < Math.min(a.R+1,oS.R))
      $Z[a.id]&&oSym.addTask(1000, arguments.callee, [a])
    }, [a]));
	a.PrivateAct=function(a){
		var P=$(a.id);
		!(a.PZ == a.check) && (
     EditImg($(P.FumeDoor), 0, a.num ? "images/Plants/Jalapeno/Jalapeno.gif" : "images/Plants/IceShroom/IceShroom.gif", {
            transform: a.PZ ? "rotateY(180deg)" : "rotateY(0deg)",
            left: a.PZ ? "125px" : "270px"
          }, 0),a.check = a.PZ);
	}
			},
            getPea: function(c, b) {
                PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
                c.getHit0(c, b)
            },
            getFirePea: function(c, b) {
                PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
                c.getHit0(c, b)
            },
            getSnowPea: function(c, b) {
                PlayAudio(["shieldhit", "shieldhit2"][Math.floor(Math.random() * 2)]);
                c.getHit0(c, b)
            },
            getFirePeaSputtering: function() {},
            getFreeze: function(c, b) {
                c.getHit0(c, 20)
            },
            getShadow: function(b) {
                return "left:" + (b.beAttackedPointL - 10) + "px;top:" + (b.height - 22) + "px"
            },
            getHit: a,
            getHit0: a,
            getHit1: a,
            getHit2: a,
            getHit3: a,
            GoingDie: function() {
                var b = this;
                b.beAttacked = 0;
                b.AutoReduceHP(b.id)
            },
            NormalDie: function() {
                var b = this;
                PlayAudio("explosion");
				b.Ele.FumeDoor&&ClearChild($(b.Ele.FumeDoor));
                b.EleBody.src = b.PicArr[b.DieGif] + Math.random();
                oSym.addTask(70, ClearChild, [b.Ele]);
                b.HP = 0;
                delete $Z[b.id];
                b.JudgeIce();
                b.PZ && oP.MonPrgs()
            },
            DisappearDie: function() {
                var b = this;
				b.Ele.FumeDoor&&ClearChild($(b.Ele.FumeDoor));
                ClearChild(b.Ele);
                b.HP = 0;
                delete $Z[b.id];
                b.JudgeIce();
                b.PZ && oP.MonPrgs()
            },
            ExplosionDie: function() {
                var b = this;
				b.Ele.FumeDoor&&ClearChild($(b.Ele.FumeDoor));
                b.EleBody.src = b.PicArr[b.BoomDieGif] + Math.random();
                oSym.addTask(300, ClearChild, [b.Ele]);
                b.HP = 0;
                delete $Z[b.id];
                b.JudgeIce();
                b.PZ && oP.MonPrgs()
            },
            CrushDie: function() {
                this.NormalDie()
            },
            JudgeIce: function() {
                var d = this,
                    b = d.R,
                    e = $("dIceCar" + b),
                    c = oGd.$Ice[b];
 
                if (d.PointZombie) return; // 如果冰车已经进入家门，则不产冰
 
                e && e.childNodes[1] && SetBlock(e.childNodes[1]);
                (--c[0]) <= 0 && oSym.addTask(3000,
                    function(k, h) {
                        var j = oGd.$Ice[h],
                            g,
                            f = oGd.$Crater;
                        if (j && j[0] <= 0 && k) {
                            ClearChild(k);
                            g = j[1];
                            while (g < 11) {
                                delete f[h + "_" + g++];
                                delete oGd.$Ice[h]
                            }
                        }
                    },
                    [e, b])
            },
            flatTire: function() {
                var b = this;
                b.EleBody.src = "images/Zombies/Zomboni/4.gif";
                b.beAttacked = 0;
                b.HP = 0;
                b.getHit0 = b.getHit1 = b.getHit2 = b.getHit3 = function() {};
                b.ChkActs = b.ChkActs1 = function() {};
                oSym.addTask(290,
                    function(e, c) {
                        var d = $Z[e];
                        d && d.NormalDie()
                    },
                    [b.id, b.EleBody])
            },
            JudgeAttack: function() {
                var f = this,
                    c = f.ZX,
                    d = f.R + "_",
                    e = GetC(c),
                    g = oGd.$,
					a,
                    b;
                f.JudgeAttackH1()||(b = f.JudgeLR(f, d, e, c, g) || f.JudgeSR(f, d, e, c, g))&&!a&&f.NormalAttack(b[0], b[1])
            },
            JudgeLR: function(e, c, d, b, f) {
                return d > 10 || d < 1 ? false : function() {
                    c += --d + "_";
                    var g = 3,
                        h;
                    while (g--) {
                        if (h = f[c + g]) {
                            return h.AttackedRX >= b && h.AttackedLX <= b ? [e.id, h.id] : false
                        }
                    }
                }()
            },
            JudgeSR: function(e, c, d, b, f) {
                return d > 9 ? false : function() {
                    c += d + "_";
                    var g = 3,
                        h;
                    while (g--) {
                        if (h = f[c + g]) {
                            return h.AttackedRX >= b && h.AttackedLX <= b ? [e.id, h.id] : false
                        }
                    }
                }()
            },
            NormalAttack: function(c, b) {
                var d = $Z[c];
                $P[b].getHurt(d, 2, d.Attack)
            },
            getThump: function() {
                this.NormalDie()
            },
            prepareBirth: function(f, R) {
                var h = this,
                    e = h.ArR,
                    d = R || e[Math.floor(Math.random() * e.length)],
                    g = GetY(d) + h.GetDY(),
                    c = g - h.height,
                    j = 3 * d + 1,
                    i = h.id = "Z_" + Math.random();
 
                h.R = d, h.pixelTop = c, h.zIndex = j, h.delayT = 0; // 设置其本身不受 delayT 影响
 
                return h.getHTML(i, h.X, c, j, "none", "auto", h.GetDTop, h.PicArr[h.NormalGif]);
            }
        })
    }(),
    oDolphinRiderZombie = InheritO(oAquaticZombie, {
        EName: "oDolphinRiderZombie",
        CName: "海豚骑士僵尸",
        HP: 500,
        Lvl: 2,
        BreakPoint: 167,
        width: 282,
        height: 210,
        Lvl: 2,
        getShadow: function(a) {
            return ("left:105px;top:175px")
        },
        GetDX: function() {
            return -137
        },
        GetDY: function() {
            return 0
        },
        GetDTop: 0,
        Altitude: 1,
        haveDolphin: 1,
        JumpTime: 45,
        beAttackedPointL: 110,
        beAttackedPointR: 190,
        SunNum: 75,
        OSpeed: 3.2,
        Speed: 3.2,
        PicArr: (function() {
            var a = "images/Zombies/DolphinRiderZombie/";
            return ["images/Card/Zombies/DolphinRiderZombie.png", a + "0.gif", a + "Walk1.gif", a + "Walk2.gif", a + "1.gif", a + "Attack.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "Jump.gif" + $Random, a + "Jump2.gif" + $Random, a + "Walk3.gif", a + "Walk4.gif", a + "Die2.gif" + $Random, a + "Jump3.gif" + $Random]
        })(),
        AudioArr: ["dolphin_before_jumping", "dolphin_appears", "zombie_entering_water"],
        Produce: '海豚骑士僵尸善于利用你水池防御的弱点。<p>韧性：<font color="#FF0000">中</font><br>速度：<font color="#FF0000">快，慢（跳越后）</font><br>特点：<font color="#FF0000">跃过他所遇到的第一株植物，出场时有5秒无敌</font><br>精英形态：<font color="#FF0000">跳跃距离更远</font><br>只在水池关卡出现</font></p>那海豚其实也是个僵尸。',
        BirthCallBack: function(a) {
            PlayAudio("dolphin_appears");
			a.jianshang=0;
			oSym.addTask(500,function(a){a.jianshang=1},[a]);
            oAquaticZombie.prototype.BirthCallBack(a), GetC(this.ZX) <= 9 && this.Jump(this);
        },
        Jump: function(a) {
            a.beAttacked && (PlayAudio("zombie_entering_water"), a.Altitude = 2, SetHidden(a.EleShadow), a.EleBody.src = a.PicArr[8] + Math.random(), oSym.addTask(240,
                function(d, b) {
                    var c;
                    $Z[d] && b.beAttacked && (b.WalkStatus = 1, b.Altitude = 1, b.OSpeed = b.Speed = 16.2, SetStyle(b.Ele, {
                        left: (c = b.X -= 140) + "px"
                    }), b.AttackedLX = c + (b.beAttackedPointL = 185), b.AttackedRX = c + (b.beAttackedPointR = 265), b.EleBody.src = b.PicArr[b.NormalGif = b.WalkGif1], b.ChkActs = b.ChkActsL2)
                },
                [a.id, a]), a.ChkActs = function() {
                return 1
            })
        },
        ChkActsL1: function(d, c, e, b) {
            if (d.JumpTime <= 0) {
                d.Jump(d);
                return 1
            }
            var a;
            !(d.FreeFreezeTime || d.FreeSetbodyTime) && (d.AttackedRX -= (a = d.Speed), LX = d.ZX = d.AttackedLX -= a, d.Ele.style.left = Math.floor(d.X -= a) + "px", --d.JumpTime);
            return 1
        },
        getCrushed: function(a) {
            this.NormalAttack(this.id, a.id, a.AttackedLX);
            this.getCrushed = function() {
                return false
            };
            a.Stature > 0 && oSym.addTask(50,
                function(c) {
                    var b = $Z[c];
                    b && b.CrushDie()
                },
                [this.id]);
            return false
        },
        getRaven: function(a) {
            return !this.isAttacking && this.NormalAttack(this.id, a, $P[a].AttackedLX),
                0
        },
        JudgeAttack: function() {
            var f = this,
                b = f.ZX,
                d = f.R + "_",
                c = GetC(b),
                g = oGd.$,
                e,
                a;
            for (e = c - 2; e <= c; e++) {
                if (e > 9) {
                    continue
                }
                for (a = 2; a > -1;
                    (p = g[d + e + "_" + a--]) && (p.EName != "oBrains" ? p.AttackedRX >= b && p.AttackedLX < b && (a = -1, f.JudgeAttack = CZombies.prototype.JudgeAttack, f.NormalAttack(f.id, p.id, p.AttackedLX)) : p.AttackedRX >= b && p.AttackedLX < b && (a = -1, f.JudgeAttack = CZombies.prototype.JudgeAttack, (f.NormalAttack = CZombies.prototype.NormalAttack)(f.id, p.id)))) {}
            }
        },
        AttackZombie2: function(c, b, a) {
            c.NormalAttack(b, a, $Z[a].AttackedLX)
        },
        NormalAttack: function(d, b, g) {
            var f = $Z[d],
                a = f.Ele,
                c = f.EleShadow,
                e = f.EleBody;
            e.src = f.PicArr[9] + Math.random();
            SetHidden(c);
            f.isAttacking = 1;
            f.Altitude = 2;
            f.haveDolphin = 0;
            PlayAudio("dolphin_before_jumping");
            f.getFreeze = function() {
                f.getSnow(f, 20, 0)
            };
            oSym.addTask(50,
                function(m, j, i, l, q) {
                    var h = $Z[m],
                        k,
                        r,
                        s,
                        n = function() {
                            q.src = h.PicArr[10];
                            h.isAttacking = 0;
                            h.Altitude = 1;
                            h.OSpeed = h.Speed = 1.6;
                            h.WalkGif0 = 11;
                            h.NormalGif = h.WalkGif1 = 10;
                            h.LostHeadGif = h.DieGif = 12;
                            h.NormalAttack = (s = CZombies.prototype).NormalAttack;
                            h.getCrushed = s.getCrushed;
                            h.getFreeze = s.getFreeze;
                            h.getRaven = s.getRaven;
                            h.AttackZombie= s.AttackZombie
                        };
                    h && ((k = $P[j]) && k.Stature > 0 ? (h.AttackedRX = (h.X = (h.AttackedLX = h.ZX = r = k.AttackedRX) - (h.beAttackedPointL = 45)) + (h.beAttackedPointR = 100), SetStyle(i, {
                        left: h.X + "px"
                    }), h.EleShadow.style.left = "45px", n()) : (h.ZX = h.AttackedLX = (h.X = (h.AttackedRX = g-(h.jinyin?100:0)) - (h.beAttackedPointR = 100)) + (h.beAttackedPointL = 45), SetStyle(i, {
                        left: h.X + "px"
                    }), h.EleShadow.style.left = "45px", q.src = h.PicArr[13] + Math.random(), oSym.addTask(170,
                        function(t, w) {
                            var v = $Z[t],
                                u;
                            v && n()
                        },
                        [m, q])))
                },
                [d, b, a, c, e])
        },
        GoingDie: function() {
            var b = this,
                c = b.id,
                a = b.PicArr;
            b.EleBody.src = a[b.haveDolphin ? 7 : 12] + Math.random();
            b.GoingDieHead(c, a, b);
            b.beAttacked = 0;
            b.FreeFreezeTime = b.FreeSetbodyTime = b.FreeSlowTime = 0;
            b.AutoReduceHP(c)
        }
    }),
oImp = InheritO(OrnNoneZombies, {
  EName: "oImp",
  CName: "小鬼僵尸",
  HP: 180,
  BreakPoint: 23,
  beAttackedPointL: 30,
  beAttackedPointR: 60,
  width: 81,
  check: 1,
  height: 110,
  StandGif: 5,
  NormalGif: 5,
  DieGif: 3,
  BoomDieGif: 4,
  AttackGif: 2,
  OSpeed: 3.6,
  Speed: 3.6,
  GetDX: function() {
    return -50
  },
  GetDY: function() {
    return 0
  },
  jinyinAct: function(a) {
    var z = a.Ele;
    z.JaHead = "Ja" + Math.random();
	a.JudgeAttack=function(){};
    var Ja = NewImg(z.JaHead, "images/Plants/PotatoMine/PotatoMine.gif", "position:absolute;transform:rotateY(180deg);left:0px;top:20px;", 0);
    z.appendChild(Ja);
    a.PrivateAct = function(a) {
      var p = a.Ele;
      if (!a.bool && a.beAttacked&&$Z[a.id]) {
        for (i = 3; i >= 1; i--) {
          var tp = oGd.$[a.R + "_" + GetC(a.ZX) + "_" + i];
          var tz = oZ[a.PZ ? "getArHZ" : "getArZ"](a.ZX - 40, a.ZX + 40, a.R);
          var tzl = tz.length;
          if (tp && tp.canEat && a.PZ) {
            let l = GetX(tp.C) - 80,
              t = GetY(tp.R) - 80;
            oSym.addTask(200, ClearChild, [NewImg(0, "images/Plants/PotatoMine/PotatoMine_mashed.gif", "left:" + l + "px;top:" + t + "px;height:93px;width:132px;z-index:25;", EDPZ)]);
            a.bool = 1;
            tp.getHurt(a, 3, 1000*a.level);
          }
          while (tzl--) {
            if (tz[tzl] && (tz[tzl].Altitude == 1) && tz[tzl].beAttacked) {
              a.bool = 1;
              oSym.addTask(200, ClearChild, [NewImg(0, "images/Plants/PotatoMine/PotatoMine_mashed.gif", "left:" + (a.ZX - 80) + "px;top:" + (a.pixelTop + 40) + "px;height:93px;width:132px;z-index:25;", EDPZ)]);
              tz[tzl].getHit0(tz[tzl], 500*a.level, 0);
            }
          }
        }
		a.bool&&(ClearChild($(p.JaHead)),PlayAudio("potato_mine"),a.JudgeAttack=CZombies["prototype"][a.PZ?"JudgeAttack":"JudgeAttackH"]);
      }!a.PZ == a.check && !a.bool && a.beAttacked && (
        EditImg($(p.JaHead), 0, "images/Plants/PotatoMine/PotatoMine.gif", {
          transform: a.PZ ? "rotateY(180deg)" : "rotateY(0deg)",
          left: a.PZ ? "20px" : "0px"
        }, 0),
        a.check = a.PZ);
      !a.beAttacked && ClearChild($(p.JaHead));
    }
  },
  getShadow: function(a) {
    return "left:" + (a.beAttackedPointL - 20) + "px;top:" + (a.height - 32) + "px"
  },
  Produce: '小淘气们是一群小型僵尸，他们被伽刚特尔用来投掷进你的防御体系。<br>精英形态：携带土豆雷，对植物或敌对僵尸造成1000范围伤害<p>韧性：<font color="#FF0000">低</font><br>小淘气虽然瘦小，却很结实。他精通僵尸柔道，僵尸空手道和僵尸关节技。另外，他还会吹口琴。',
  GoingDie: function() {
    var b = this,
      c = b.id,
      a = b.PicArr;
    b.EleBody.src = a[3] + Math.random();
    b.beAttacked = 0;
    b.FreeFreezeTime = b.FreeSetbodyTime = b.FreeSlowTime = 0;
    b.AutoReduceHP(c)
  },
  NormalDie: function() {
    var a = this;
    oSym.addTask(250, ClearChild, [a.Ele]);
    a.HP = 0;
    delete $Z[a.id];
    a.PZ && oP.MonPrgs()
  },
  CrushDie: function() {
    var a = this;
    ClearChild(a.Ele);
    a.HP = 0;
    delete $Z[a.id];
    a.PZ && oP.MonPrgs()
  },
  PicArr: (function() {
    var a = "images/Zombies/Imp/";
    return ["images/Card/Zombies/Imp.png", a + "0.gif", a + "Attack.gif", a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "1.gif"]
  })()
}),
oJackinTheBoxZombie = InheritO(OrnNoneZombies, {
  EName: "oJackinTheBoxZombie",
  CName: "小丑僵尸",
  SunNum: 100,
  HP: 500,
  BreakPoint: 167,
  Lvl: 3,
  Status: 1,
  BookHandPosition: "30% 70%",
  width: 196,
  height: 181,
  beAttackedPointL: 120,
  beAttackedPointR: 170,
  StandGif: 5,
  NormalGif: 6,
  DieGif: 3,
  BoomDieGif: 4,
  HeadGif: 11,
  LostHeadGif: 9,
  LostHeadAttackGif: 10,
  AttackGif: 2,
  OSpeed: 3.6,
  Speed: 3.6,
  Produce: '这种僵尸带着个会爆炸的潘多拉盒子，开盒时不无敌<br>精英形态一：樱桃炸弹，残血必开盒<br>精英形态二：毁灭菇，爆炸范围扩大至5×5并且在原地留坑<br>韧性：<font color="#FF0000">中</font><br>速度：<font color="#FF0000">快</font><br>特点：<font color="#FF0000">打开玩偶匣会爆炸</font><br>弱点：<font color="#FF0000">磁力菇</font><br>这种僵尸令人不寒而栗，不是因为他的冰冷身躯而是因为他的疯狂。',
  AudioArr: ["jackinthebox", "jack_surprise", "explosion"],
  PicArr: (function() {
    var a = "images/Zombies/JackinTheBoxZombie/";
    return ["images/Card/Zombies/JackboxZombie.png", a + "0.gif", a + "Attack.gif", a + "Die.gif" + $Random, a + "BoomDie.gif" + $Random, a + "1.gif", a + "Walk.gif", a + "OpenBox.gif", a + "Boom.gif" + $Random, a + "LostHead.gif", a + "LostHeadAttack.gif", "images/Zombies/Zombie/ZombieHead.gif" + $Random]
  })(),
  check: 1,
  jinyinAct: function(a) {
    a.num=Math.round(Math.random()*1+0)||a.Privatenum;
    var z = a.Ele;
    z.JaHead = "Ja" + Math.random();
    var Ja = NewImg(z.JaHead, a.num ? "images/Plants/DoomShroom/DoomShroom.gif" : "images/Plants/CherryBomb/CherryBomb.gif", "position:absolute;transform:" + (a.PZ ? "rotateY(180deg);" : "rotateY(0deg);") + "left:60px;top:30px;", 0);
    z.appendChild(Ja);
    a.PrivateAct = function(a) {
      var p = a.Ele;
      !(a.PZ == a.check) && (
        EditImg($(p.JaHead), 0, a.num ? "images/Plants/DoomShroom/DoomShroom.gif" : "images/Plants/CherryBomb/CherryBomb.gif", {
          transform: a.PZ ? "rotateY(180deg)" : "rotateY(0deg)",
          left: a.PZ ? "60px" : "20px"
        }, 0),
        a.check = a.PZ);
		!a.beAttacked&&$Z[a.id]&&ClearChild($(p.JaHead));
      if (!a.num&&a.jinyin&& !a.opennum) {
        a.canWalk(a, a.id) && $Z[a.id].beAttacked && ($Z[a.id].HP < 240) && (a.OpenBox(a.id), a.opennum = 1)
      }
    }
  },
  PrivateDie: function(a) {
    var z = a.Ele;
    z.JaHead && ClearChild($(z.JaHead))
  },
  RandomOpenBox: function(a) {
    oSym.addTask(Math.floor(Math.random() * 100) > 4 ? Math.floor(1325 + Math.random() * 976) : Math.floor(450 + Math.random() * 301),
      function(c) {
        var b = $Z[c];
        b && b.beAttacked && b.OpenBox(c)
      },
      [a])
  },
  OpenBox: function(b) {
    var a = $Z[b];
    a.EleBody.src = a.PicArr[7];
    a.HP = 400;
    a.GoingDie = a.NormalDie;
    a.ChkActs = a.ChkActs1 = function() {
      return 1
    };
    a.JudgeAttack = function() {
      var g = this,
        d = g.ZX,
        e = g.R + "_",
        f = GetC(d),
        h = oGd.$,
        c;
      (c = g.JudgeLR(g, e, f, d, h) || g.JudgeSR(g, e, f, d, h)) ? (!g.isAttacking && (g.isAttacking = 1, g.EleBody.src = g.PicArr[g.AttackGif]), g.NormalAttack(c[0], c[1])) : g.isAttacking && (g.isAttacking = 0)
    };
    a.JudgeAttackH = function() {
      var e = this,
        d = oZ.getZ0(e.ZX, e.R),
        f = e.id,
        c;
      d && d.beAttacked && d.AttackedLX < oS.W && d.Altitude == 1 ? (!e.isAttacking ? (e.isAttacking = 1, e.EleBody.src = e.PicArr[e.AttackGif], e.AttackZombie(f, c = d.id), !d.isAttacking && d.AttackZombie2(d, c, f)) : e.AttackZombie(f, d.id, 1)) : e.isAttacking && (e.isAttacking = 0)
    };
    oSym.addTask(50,
      function(c) {
        $Z[c] && (a.Status = 0, !--oGd.$JackinTheBox && StopAudio("jackinthebox"), PlayAudio("jack_surprise"), oSym.addTask(90,
          function(f) {
            var e = $Z[f],
              d;
            e && (PlayAudio("explosion"),e.num ? (oGd.$Crater[e.R + "_" + Math.max(GetC(e.ZX),1)] = 2,
              NewEle(f + "_Boom", "div", "position:absolute;overflow:hidden;z-index:" + (e.zIndex + 2) + ";width:283px;height:324px;left:" + (e.ZX - 60) + "px;top:" + (e.pixelTop - 100) + "px;background:url(images/Plants/DoomShroom/Boom.png) no-repeat", 0, EDPZ),
              oSym.addTask(20,
                function(i) {
                  ClearChild(i)
                },
                [NewEle(f + "_Boom", "div", "position:absolute;z-index:20;width:900px;height:600px;left:0;top:0;background:#FFF;*filter:alpha(opacity=50);opacity:.5", 0, EDPZ)]),
              ImgSpriter(f + "_Boom", f, [
                  ["0 0", 10, 1],
                  ["-283px 0", 10, 2],
                  ["-566px 0", 10, 3],
                  ["-849px 0", 10, 4],
                  ["-1132px 0", 10, 5],
                  ["-1415px 0", 10, 6],
                  ["-1698px 0", 10, 7],
                  ["-1981px 0", 10, 8],
                  ["-2264px 0", 10, 9],
                  ["-2547px 0", 10, -1]
                ], 0,
                function(i, p) {
                  ClearChild($(i));
                  oDoomShroom.prototype.setCrater(f + "_crater", e.R, Math.max(GetC(e.ZX),1), f.pixelLeft + 3, f.pixelTop + 100)
                })) : (d = NewImg("", "images/interface/blank.png", "width:306px;height:300px;left:" + (e.X - 16) + "px;top:" + (e.pixelTop - 90) + "px;z-index:20"),
              d.src = e.PicArr[8] + Math.random(), EDPZ.appendChild(d), oSym.addTask(70, ClearChild, [d])), (function(k, g) {
              var q = Math.max(1, e.num ? k - 2 : k - 1),
                o = Math.min(oS.R, e.num ? k + 2 : k + 1),
                n = Math.max(1, e.num ? g - 2 : g - 1),
                h = Math.min(oS.C, e.num ? g + 2 : g + 1),
                r = oGd.$,
                l,
                j = "",
                m;
              do {
                g = n;
                do {
                  j = q + "_" + g + "_";
                  for (l = 0; l < 4; l++) {
                    (m = r[j + l]) && m.BoomDie()
                  }
                } while (g++ < h)
              } while (q++ < o)
            })(e.R, GetC(e.ZX)), (function(j, l) {
              var m = e.num ? j - 240 : j - 120,
                o = e.num ? j+240 : j+120,
                h = Math.max(1, e.num ? l - 2 : l - 1),
                g = Math.min(oS.R, e.num ? l + 2 : l + 1),
                n,
                k;
              do {
                k = (n = oZ["getAr" + (e.PZ ? "HZ" : "Z")](m, o, h)).length;
                while (k--) {
                  n[k].getExplosion(1600)
                }
              } while (h++ < g)
            })(e.ZX, e.R), e.ExplosionDie())
          },
          [c]))
      },
      [b])
  },
  getShadow: function(a) {
    return "left:" + (a.beAttackedPointL - 8) + "px;top:" + (a.height - 32) + "px"
  },
  BirthCallBack: function(d) {
    var c = d.delayT,
      b = d.id,
      a = d.Ele = $(b);
    d.EleShadow = a.firstChild;
    d.EleBody = a.childNodes[1];
    c ? oSym.addTask(c,
      function(f, e) {
        var g = $Z[f];
        g && (PlayAudio("jackinthebox", true), ++oGd.$JackinTheBox, g.FreeSetbodyTime = 0, SetBlock(e), g.RandomOpenBox(f))
      },
      [b, a]) : (PlayAudio("jackinthebox", true), ++oGd.$JackinTheBox, SetBlock(a), d.RandomOpenBox(b))
  },
  NormalDie: function() {
    var a = this;
    a.PrivateDie && a.PrivateDie(a);
    a.Status && !--oGd.$JackinTheBox && StopAudio("jackinthebox");
    a.EleBody.src = a.PicArr[a.DieGif] + Math.random();
    oSym.addTask(250, ClearChild, [a.Ele]);
    a.HP = 0;
    delete $Z[a.id];
    a.PZ && oP.MonPrgs()
  },
  ExplosionDie: function() {
    var a = this;
    a.PrivateDie && a.PrivateDie(a);
    a.Status && !--oGd.$JackinTheBox && StopAudio("jackinthebox");
    a.EleBody.src = a.PicArr[a.BoomDieGif] + Math.random();
    oSym.addTask(300, ClearChild, [a.Ele]);
    a.HP = 0;
    delete $Z[a.id];
    a.PZ && oP.MonPrgs()
  },
  DisappearDie: function() {
    this.PrivateDie && this.PrivateDie(this);
    this.Status && !--oGd.$JackinTheBox && StopAudio("jackinthebox");
    ClearChild(this.Ele);
    this.HP = 0;
    delete $Z[this.id];
    this.PZ && oP.MonPrgs()
  },
  CrushDie: function() {
    var a = this;
    a.PrivateDie && a.PrivateDie(a);
    a.Status && !--oGd.$JackinTheBox && StopAudio("jackinthebox");
    a.GoingDieHead(a.id, a.PicArr, a);
    ClearChild(a.Ele);
    a.HP = 0;
    delete $Z[a.id];
    a.PZ && oP.MonPrgs()
  }
}),
    oBalloonZombie = InheritO(OrnIZombies, {
        EName: "oBalloonZombie",
        CName: "气球僵尸",
        OrnHP: 40,
        SunNum: 150,
        width: 207,
        height: 197,
        beAttackedPointL: 30,
        beAttackedPointR: 85,
        OSpeed: 4,
        Speed: 4,
        Altitude: 3,
        OrnLostNormalGif: 9,
        OrnLostAttackGif: 3,
        BreakBall: false, // 气球是否被戳破
        MulBallNum: function() { // 减去气球数
            if (!this.BreakBall) this.BreakBall = true, oGd.$Balloon[this.R] |= 0, --oGd.$Balloon[this.R];
        },
        getShadow: function(a) {
            return "left:" + (a.beAttackedPointL - 10) + "px;top:" + (a.height - 32) + "px"
        },
        CanPass: function(d, c) {
            return c
        },
		jinyinAct:function(a){
			    a.JudgeLR=function(f, d, e, c, g) {
                    return e > 10 || e < 1 ? false : function() {
                        d += --e + "_";
                        var h = 3,
                            i;
                        while (h--) {
                            if ((i = g[d + h]) && i.canEat&&(i.getHurt==CPlants.prototype.getHurt)) {
                                return i.AttackedRX >= c && i.AttackedLX <= c ? [f.id, i.id] : false
                            }
                        }
                    }()
                };
                a.JudgeSR=function(f, d, e, c, g) {
                    return e > 9 ? false : function() {
                        d += e + "_";
                        var h = 3,
                            i;
                        while (h--) {
                            if ((i = g[d + h]) && i.canEat&&(i.getHurt==CPlants.prototype.getHurt)) {
                                return i.AttackedRX >= c && i.AttackedLX <= c ? [f.id, i.id] : false
                            }
                        }
                    }()
                };
			a.ChkActs=CZombies.prototype.ChkActs;
		},
        AudioArr: ["ballooninflate", "balloon_pop"],
        BookHandPosition: "80% 80%",
        PicArr: (function() {
            var a = "images/Zombies/BalloonZombie/";
            return ["images/Card/Zombies/Balloonzombie.png", a + "0.gif", a + "1.gif", a + "Attack.gif", a + "Walk2.gif", a + "Attack2.gif", a + "Head.gif" + $Random, a + "Die.gif" + $Random, a + "Boom.gif", a + "Walk.gif", a + "Drop.gif", a + "Boom2.gif"]
        })(),
        Produce: '气球僵尸漂浮在空中，躲过大多数攻击。<p>韧性：<font color="#FF0000">低</font><br>精英形态：<font color="#FF0000">飞行时仍能啃食部分植物</font><br>特点：<font color="#FF0000">飞行</font><br>弱点：<font color="#FF0000">仙人掌和三叶草</font></p>气球僵尸真幸运。气球有很多功效，而其他僵尸都不曾捡到过。',
        BirthCallBack: function(e) {
            var d = e.delayT,
                c = e.id,
                a = e.Ele = $(c),
                f = oGd.$Balloon,
                b = e.R;
            e.EleShadow = a.firstChild;
            e.EleBody = a.childNodes[1];
            d ? oSym.addTask(d, function(i, g, c) {
                var j = $Z[i],
                    k = oGd.$Balloon;
                j && (j.FreeSetbodyTime = 0, SetBlock(g));
                k[c] |= 0, ++k[c]; // 增加数量
                PlayAudio("ballooninflate");
            }, [c, a, b]) : (SetBlock(a), f[b] == undefined ? f[b] = 1 : ++f[b], PlayAudio("ballooninflate"));
        },
        ChkActs: function(f, d, g, c) {
            var b, a, e;
            if (f.Altitude == 3 && f.AttackedRX < GetX(1)) { // 气球掉落
				f.getHit0(f,f.OrnHP);
                f.Drop();
                return 1;
            }!(f.FreeFreezeTime || f.FreeSetbodyTime) ? ((a = f.AttackedRX -= (b = f.Speed)) < -50 ? (g.splice(c, 1), f.DisappearDie(), e = 0) : (a < 100 && !f.PointZombie && (f.PointZombie = 1, !oS.CardKind && (StopMusic(), PlayAudio("losemusic", false)), f.ChangeR({
                R: d,
                ar: [oS.R - 1],
                CustomTop: 400 - f.height + f.GetDY()
            })), f.ZX = f.AttackedLX -= b, f.Ele.style.left = Math.floor(f.X -= b) + "px", e = 1)) : e = 1;
            return e
        },
        Drop: function() {
            var a = this;
			if(a.OrnHP>0){return}
            PlayAudio("balloon_pop");
            a.EleBody.src = "images/Zombies/BalloonZombie/Drop.gif" + $Random + Math.random();
            a.ChkActs = function() {
                return 1
            };
            a.Altitude = 4;
            a.MulBallNum();
            oSym.addTask(120,
                function(b) {
                    var c = $Z[b];
                    if (c) {
                        c.BoomDieGif = 11;
                        c.Altitude = 1;
                        c.OSpeed = c.Speed = 1.6;
                        c.getFreeze = OrnIZombies.prototype.getFreeze;
                        c.EleBody.src = "images/Zombies/BalloonZombie/Walk.gif";
                        c.ChkActs = OrnIZombies.prototype.ChkActs;
                        c.ExplosionDie = function() {
                            var d = this;
                            d.EleBody.src = d.PicArr[d.BoomDieGif];
                            oSym.addTask(200, ClearChild, [d.Ele]);
                            d.HP = 0;
                            delete $Z[d.id];
                            d.PZ && oP.MonPrgs();
                            d.MulBallNum();
                        };
                        c.DisappearDie = function() {
                            ClearChild(this.Ele);
                            this.HP = 0;
                            delete $Z[this.id];
                            this.PZ && oP.MonPrgs();
                            this.MulBallNum();
                        };
                        c.CrushDie = function() {
                            var d = this;
                            d.GoingDieHead(d.id, d.PicArr, d);
                            ClearChild(d.Ele);
                            d.HP = 0;
                            delete $Z[d.id];
                            d.PZ && oP.MonPrgs();
                            d.MulBallNum();
                        }
                    }
                },
                [a.id])
        },
        getFreeze: function(b, a) {
            b.Attack = 50;
            b.Speed = 0.5 * b.OSpeed;
            oSym.addTask(1500,
                function(d, c) {
                    var e = $Z[d];
                    e && e.FreeSlowTime == c && (e.FreeSlowTime = 0, e.Attack = 100, e.Speed = e.OSpeed)
                },
                [a, b.FreeSlowTime = oSym.Now + 1500])
        },
        NormalDie: function() {
            var a = this;
            a.EleBody.src = a.PicArr[a.DieGif] + Math.random();
            oSym.addTask(250, ClearChild, [a.Ele]);
            a.HP = 0;
            delete $Z[a.id];
            a.PZ && oP.MonPrgs();
            a.MulBallNum();
        },
        ExplosionDie: function() {
            var a = this;
            a.EleBody.src = a.PicArr[a.BoomDieGif];
            oSym.addTask(200, ClearChild, [a.Ele]);
            a.HP = 0;
            delete $Z[a.id];
            a.PZ && oP.MonPrgs();
            a.MulBallNum();
        },
        DisappearDie: function() {
            ClearChild(this.Ele);
            this.HP = 0;
            delete $Z[this.id];
            this.PZ && oP.MonPrgs();
            this.MulBallNum();
        },
        CrushDie: function() {
            this.DisappearDie()
        },
        getDispelled: function() {
            if (this.Altitude != 3 || this.AttackedRX < GetX(0)) {
                return;
            };
            this.ChkActs = function() {
                return 1
            };
            (function(id) {
                var o = $Z[id];
                if (!o) return;
                var d = o.WalkDirection = 1,
                    R = o.R,
                    C = GetC(o.AttackedLX),
                    sx = 50;
                o.AttackedLX += sx;
                o.ZX += sx;
                o.X += sx;
                if (o.AttackedLX > oS.W) {
                    o.DisappearDie();
                    return;
                };
                SetStyle($(id), {
                    left: o.X + 'px'
                });
                oSym.addTask(2, arguments.callee, [id]);
            })(this.id);
        },
        getFirePeaSputtering: function() {
            (this.Altitude == 1) && (this.getHit0(this, 13));
        },
        prepareBirth: oZomboni.prototype.prepareBirth
    });
