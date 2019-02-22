jQuery(document).ready(function () {
    var zone_top,
        card_semi_height = parseInt(jQuery('.card_solis').css('height')) / 2;
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

    if (moon_day == 1 || moon_day == 2 || moon_day == 29) {
        zone_top = parseInt(jQuery('.draggable_v5_1').css('top') + 50);
        jQuery('.card_ghost_devil').css('top', (zone_top - card_semi_height) +'px');
    } else if (moon_day == 3 || moon_day == 25 || moon_day == 26 || moon_day == 27 || moon_day == 28) {

    } else if (moon_day == 4 || moon_day == 24) {

    } else if (moon_day == 5 || moon_day == 6 || moon_day == 23) {

    } else if (moon_day == 7 || moon_day == 22) {

    } else if (moon_day == 8 || moon_day == 21) {

    } else if (moon_day == 9 || moon_day == 20) {

    } else if (moon_day == 10 || moon_day == 19) {

    } else if (moon_day == 11 || moon_day == 18) {
        zone_top = parseInt(jQuery('.draggable_v5').css('top') + 50);
        jQuery('.card_ghost_devil').css('top', (zone_top - card_semi_height) +'px');
    } else if (moon_day == 12 || moon_day == 17) {

    } else if (moon_day == 13 || moon_day == 16) {

    } else if (moon_day == 14 || moon_day == 15) {

    }


    console.log("Лунный день по ф. Харви на "+hm.Day+'.'+hm.Month+'.'+hm.Year+' - '+moon_day);
});
