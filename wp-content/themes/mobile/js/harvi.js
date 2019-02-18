jQuery(document).ready(function () {
    var THarviMoon = new Object();
    THarviMoon=function(){
    this.Day=0;
    this.Month=0;
    this.Year=0;
        this.GetMoonDay=function(day,month,year){
            this.Day=day;
            this.Month=month;
            this.Year=year;
        
            if(month<=2){
            month+=12;
            year-=1;
            };
            var nc = Math.floor(year/100);
            var vc = ((Math.floor(nc/3) + Math.floor(nc/4)) +6) - nc;
            var a = (year/19);
            var b = ((a-parseInt(a))*209);
            var c = ( b + month + day + vc )/30;
            var MoonDay=Math.round(((c - parseInt(c))*30)+1);
            return MoonDay;
        };
        
        this.SetNowDate=function(){
            var dNow= new Date();
            this.Day=dNow.getDate();
            this.Month=dNow.getMonth()+1;
            this.Year=dNow.getYear();
            if(this.Year<1000) this.Year+=1900;
        };
        
        this.NowMoonDay=function(){
            this.SetNowDate();
            return this.GetMoonDay(this.Day,this.Month,this.Year);
        };
    };
     
    var hm = new THarviMoon();
    var moon_day = hm.NowMoonDay();
    //var moon_day=hm.GetMoonDay(22,1,2011);
    console.log("Лунный день по ф. Харви на "+hm.Day+'.'+hm.Month+'.'+hm.Year+' - '+moon_day);
});
