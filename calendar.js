(function($) {
		$.fn.extend({
			'calendar': function(options) {
				function isValid(options) {
					return !options || (options && typeof options === 'object') ? true : false;
				}
				if (!isValid(options)) {
					reutrn;
				}
				var defaults = {
					selectDate: new Date(), //默认选中日期
					nowMonth: '.calNow', //月份展示
					nextMonth: '.calnext', //下月绑定
					preMonth: '.calpre', //上月绑定
					isWeek: true, //是否展示星期
					minDate: new Date(1970, 01, 01), //最小可选日期
					callBack:function(that){alert(that.attr('data-date'));}//点击回调函数,支持当前选中
				}
				var opts = $.extend({}, defaults, options);
				return this.each(function() {
					$this = $(this);
					var week = '';
					if (opts.isWeek) {
						week = '<p class="week"><span>日</span><span>一</span><span>二</span>';
						week += '<span>三</span><span>四</span><span>五</span><span>六</span></p>';
					}
					var day = [0, 1, 2, 3, 4, 5, 6];
					function daysShow(str, n, d, y, m) {
						var strs = '';
						var c = 7 - (n + d) % 7;
						for (var i = 0; i < n + d + c; i++) {
							if (i < n || i >= n + d) {
								strs += str;
							} else {
								if (new Date(y, m - 1, i - n + 2).getTime() >= opts.minDate.getTime()) {
									strs += '<li class="canClick" data-date="' + y + '-' + ad(m) + '-' + ad(i - n + 1) + '">' + (i - n + 1) + '</li>';
								} else {
									strs += '<li class="calDisable" data-date="' + y + '-' + ad(m) + '-' + ad(i - n + 1) + '">' + (i - n + 1) + '</li>';
								}
							}
						}
						return strs;
					}
					//闰年判断
					function isLeap(year) {
						return (year % 100 == 0 ? (year % 400 == 0 ? 1 : 0) : (year % 4 == 0 ? 1 : 0));
					}
					//日期更新
					function upDate(year, month) {
						$this.html('');
						var date = opts.selectDate;
						var monthd = date.getMonth() + 1;
						var d = date.getDate();
						var days = [31, 28 + isLeap(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
						var newDate = new Date(year + ',' + month + ',' + 1);
						var startDay = day[newDate.getDay()];
						var monDays = days[newDate.getMonth()];
						var liCon = daysShow('<li></li>', startDay, monDays, year, month);
						$(opts.nowMonth).html(month);
						if (month == monthd) {
							$this.append(week + liCon).children('li').eq(d + startDay - 1).addClass('current');
						} else {
							$this.append(week + liCon).children('li');
						}
					}
					function ad(num) {
						return num < 10 ? '0' + num : num;
					}
					//当前时间
					function show() {
						var date = opts.selectDate;
						var year = date.getFullYear();
						var month = date.getMonth() + 1;
						var d = date.getDate();
						var days = [31, 28 + isLeap(date.getFullYear()), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
						var newDate = new Date(year + ',' + month + ',' + 1);
						var startDay = day[newDate.getDay()];
						var monDays = days[newDate.getMonth()];
						var liCon = daysShow('<li></li>', startDay, monDays, year, month);
						$(opts.nowMonth).html(month);
						$this.append(week + liCon).children('li').eq(d + startDay - 1).addClass('current');
						$(opts.preMonth).on('click', function() {
							if (month == 1) {
								year--;
								month = 13;
							}
							upDate(year, --month);
						})
						$(opts.nextMonth).on('click', function() {
							if (month == 12) {
								year++;
								month = 0;
							}
							upDate(year, ++month);
						})
					}
					$this.on('click', '.canClick', function() {
						$(this).addClass('current').siblings().removeClass('current');
						opts.callBack($(this));
					})
					show();
				})
			}
		})
	})(jQuery)
