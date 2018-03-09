var Class = {
  create: function() {
    return function() {
      this.initialize.apply(this, arguments);
    }
  }
}

Object.extend = function(destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
    return destination;
}

var Calendar = Class.create();
Calendar.prototype = {
  initialize: function(container, options) {
    this.Container =  document.getElementById(container);//ÈÝÆ÷(table½á¹¹)
    this.Days = [];//ÈÕÆÚ¶ÔÏóÁÐ±í
   
    this.SetOptions(options);
   
    this.Year = this.options.Year;
    this.Month = this.options.Month;
    this.SelectDay = this.options.SelectDay ? new Date(this.options.SelectDay) : null;
    this.onSelectDay = this.options.onSelectDay;
    this.onToday = this.options.onToday;
    this.onFinish = this.options.onFinish;   
   
    this.Draw();
  },
  SetOptions: function(options) {
    this.options = {//Ä¬ÈÏÖµ
        Year:            new Date().getFullYear(),//ÏÔÊ¾Äê
        Month:            new Date().getMonth() + 1,//ÏÔÊ¾ÔÂ
        SelectDay:        null,//Ñ¡ÔñÈÕÆÚ
    };
    Object.extend(this.options, options || {});
  },
  PreMonth: function() {
    //ÏÈÈ¡µÃÉÏÒ»¸öÔÂµÄÈÕÆÚ¶ÔÏó
    var d = new Date(this.Year, this.Month - 2, 1);
    //ÔÙÉèÖÃÊôÐÔ
    this.Year = d.getFullYear();
    this.Month = d.getMonth() + 1;
    //ÖØÐÂ»­ÈÕÀú
    this.Draw();
  }, 
  NextMonth: function() {
    var d = new Date(this.Year, this.Month, 1);
    this.Year = d.getFullYear();
    this.Month = d.getMonth() + 1;
    this.Draw();
  },
  Draw: function() {
    //ÓÃÀ´±£´æÈÕÆÚÁÐ±í
    var arr = [];
    //ÓÃµ±ÔÂµÚÒ»ÌìÔÚÒ»ÖÜÖÐµÄÈÕÆÚÖµ×÷Îªµ±ÔÂÀëµÚÒ»ÌìµÄÌìÊý
    for(var i = 1, firstDay = new Date(this.Year, this.Month - 1, 1).getDay(); i <= firstDay; i++){ arr.push("&nbsp;"); }
    //ÓÃµ±ÔÂ×îºóÒ»ÌìÔÚÒ»¸öÔÂÖÐµÄÈÕÆÚÖµ×÷Îªµ±ÔÂµÄÌìÊý
    for(var i = 1, monthDay = new Date(this.Year, this.Month, 0).getDate(); i <= monthDay; i++){ arr.push(i); }
   
    var frag = document.createDocumentFragment();
   
    this.Days = [];
   
    while(arr.length > 0){
        var row = document.createElement("tr");
        for(var i = 1; i <= 7; i++){
            var cell = document.createElement("td");
            cell.innerHTML = "&nbsp;";
           
            if(arr.length > 0){
                var d = arr.shift();
                cell.innerHTML = d;
                if(d > 0){
                	//cell.onclick = function(){this.className = "onSelect";};
                    this.Days[d] = cell;
                    if(this.IsSame(new Date(this.Year, this.Month - 1, d), new Date())){ this.onToday(cell); }
                    if(this.SelectDay && this.IsSame(new Date(this.Year, this.Month - 1, d), this.SelectDay)){ this.onSelectDay(cell); }
                }
            }
            row.appendChild(cell);
        }
        frag.appendChild(row);
    }				   
    while(this.Container.hasChildNodes()){ this.Container.removeChild(this.Container.firstChild); }
    this.Container.appendChild(frag);
   
    this.onFinish();
  },
  IsSame: function(d1, d2) {
    return (d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate());
  }
};
var cale = new Calendar("idCalendar", {
    SelectDay: new Date().setDate(),
    onSelectDay: function(o){ o.className = "onSelect"; },
    onToday: function(o){ o.className = "onToday"; },
    onFinish: function(){
         document.getElementById("idCalendarYear").innerHTML = this.Year;  document.getElementById("idCalendarMonth").innerHTML = this.Month;
    }
});
document.getElementById("idCalendarPre").onclick = function(){ cale.PreMonth(); }
document.getElementById("idCalendarNext").onclick = function(){ cale.NextMonth(); }