日历插件<br>
使用方法如下<br>
$('.calendarCon').calendar({<br>
    selectDate: new Date(), //默认选中日期<br>
    nowMonth: '.calNow', //月份展示<br>
    nextMonth: '.calnext', //下月绑定<br>
    preMonth: '.calpre', //上月绑定<br>
    isWeek: true, //是否展示星期<br>
    minDate: new Date(1970, 01, 01), //最小可选日期<br>
    callBack:function(that){alert(that.attr('data-date'));}//点击回调函数,支持当前选中<br>
});
