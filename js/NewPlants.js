oUmbrellaLeaf = InheritO(CPlants, {
        EName: "oUmbrellaLeaf",
        CName: "叶子保护伞",
        width: 290,
        height: 200,
        beAttackedPointR: 53,
        SunNum: 100,
        HP:500,
        PicArr: ["images/Card/Plants/UmbrellaLeaf.png", "images/Plants/UmbrellaLeaf/UmbrellaLeaf.gif", "images/Plants/UmbrellaLeaf/UmbrellaLeaf.gif","images/Plants/UmbrellaLeaf/Protect.gif"],
        Tooltip: "抵御天上的攻击",
        Produce: '叶子保护伞可以抵御空中的攻击<p>特点：<font color="#FF0000">弹走篮球和蹦极僵尸</font><br>精英形态：无</p>只是一个叶子保护伞',
getTriggerRange:oSpikeweed.prototype.getTriggerRange,
getTriggerR:oGatlingPea.prototype.getTriggerR,
getPea:function(){},
getSnowPea:function(){},
  TriggerCheck: function(a) {
    !this.FreeFreezeTime&&this.AttackCheck2(a) && this.NormalAttack(this.id, a.id)
  },
  AttackCheck2: function(a) {
    return a.Altitude == 1 && a.FallDownZombie
  },
NormalAttack:function(a,b){
var c=$Z[b];
c&&oBungeeZombie.prototype.Move(c.EleBody,parseInt(c.EleBody.style.top),-900);
$P[a] && ($(a).childNodes[1].src = $P[a].PicArr[3]);
oSym.addTask(50,function(a){
$P[a] && ($(a).childNodes[1].src = $P[a].PicArr[$P[a].NormalGif]);
},[a]);
oSym.addTask(110,function(c){
c&&c.DisappearDie();
},[c]);
}
    })
