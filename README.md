日历插件<br>
使用方法如下<br>
$('.calendarCon').calendar({<br>
    &nbsp selectDate: new Date(), //默认选中日期<br>
   &nbsp nowMonth: '.calNow', //月份展示<br>
   &nbsp nextMonth: '.calnext', //下月绑定<br>
  &nbsp  preMonth: '.calpre', //上月绑定<br>
   &nbsp isWeek: true, //是否展示星期<br>
  &nbsp  minDate: new Date(1970, 01, 01), //最小可选日期<br>
  &nbsp  callBack:function(that){alert(that.attr('data-date'));}//点击回调函数,支持当前选中<br>
});
