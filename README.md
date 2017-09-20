日历插件
使用方法如下
$('.calendarCon').calendar({
    selectDate: new Date(), //默认选中日期
    nowMonth: '.calNow', //月份展示
    nextMonth: '.calnext', //下月绑定
    preMonth: '.calpre', //上月绑定
    isWeek: true, //是否展示星期
    minDate: new Date(1970, 01, 01), //最小可选日期
    callBack:function(that){alert(that.attr('data-date'));}//点击回调函数,支持当前选中
});
