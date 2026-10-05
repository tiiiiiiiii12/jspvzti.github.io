oUmbrellaLeaf = InheritO(CPlants, {
        EName: "oUmbrellaLeaf",
        CName: "叶子保护伞",
        width: 320,
        height: 210,
        beAttackedPointL: 100,
        beAttackedPointR: 183,
        power:0,
        SunNum: 100,
        HP:500,
        IngoreFallDown:false,
        PicArr: ["images/Card/Plants/UmbrellaLeaf.png", "images/Plants/UmbrellaLeaf/UmbrellaLeaf.gif", "images/Plants/UmbrellaLeaf/UmbrellaLeaf.gif","images/Plants/UmbrellaLeaf/Protect.gif"],
        Tooltip: "抵御天上的攻击",
        Produce: '叶子保护伞可以抵御空中的攻击<p>特点：<font color="#FF0000">弹走篮球和蹦极僵尸</font><br>精英形态：每隔一段时间发动一次强力弹击，弹走保护范围内的一只小体型僵尸</p>只是一个叶子保护伞',
getTriggerRange:function(a, b, c) {
            return [
                [this.AttackedLX-60, this.AttackedRX+60, 0]
            ]
        },
getTriggerR:oGatlingPea.prototype.getTriggerR,
getPea:function(){},
getSnowPea:function(){},
LoadingComplete: function(a) {
a.IngoreFallDown=true;
$(a.id).style.opacity = 0.7
},
jinyinAct:function(b){
var B = NewEle("dskill"+b.id,"div", "position:absolute;color:white;top:200px;left:100px;width:100px;font-size:16px;z-index:50", "", $(b.id));
    var C = $("dskill"+b.id);
    oSym.addTask(100, function(C, B, b) {
      b.HP > 1 && (b.power < 40 ? (b.power += 1) : (b.LoadingComplete(b)));
      B.innerHTML = b.power < 40 ? (40 - b.power) : "就绪";
      b.HP > 1 && oSym.addTask(100, arguments.callee, [C, B, b])
    }, [C, B, b])
},
  TriggerCheck: function(a) {
    !this.FreeFreezeTime&&this.AttackCheck2(a) && this.NormalAttack(this.id, a.id,this.IngoreFallDown)
  },
  AttackCheck2: function(a) {
    return a.Altitude == 1 && (a.FallDownZombie||this.IngoreFallDown) &&!a.BodyType&&a.canWalk(a,a.id)
  },
NormalAttack:function(a,b,t){
var c=$Z[b];
c&&(c.FreeSetbodyTime=1,c.beAttacked=0,oBungeeZombie.prototype.Move(c.EleBody,0,-600));
$P[a] && (t&&($P[a].power=0,$P[a].IngoreFallDown=false,$(a).style.opacity=1),$(a).childNodes[1].src = $P[a].PicArr[3]);
oSym.addTask(80,function(a){
$P[a] && ($(a).childNodes[1].src = $P[a].PicArr[$P[a].NormalGif]);
},[a]);
oSym.addTask(110,function(c){
c&&c.DisappearDie();
},[c]);
}
})
