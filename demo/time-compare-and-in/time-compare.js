(function (gloable, moment) {
	/*
	* 有若干个时间集合，判断时间集合是否有交集
	* @arguments {start: 时间戳,end: 时间戳, type: "day", value: 2 }, ...
	* type
		* all：从开始到时间的所有时间
		* day：时间间隔为固定的天数, value 为间隔的天数的值
		* week: 时间间隔为固定的天数, value的值为一个数组，其值的 0-6对应为周日，周一,...周六
	* @return
	* {
		hasIntersection: Boolean 是否有交集
		* intersection: [index1, index2] 有交集的两个时间集合的下标
	* }
	*/
	function timeCompare(){
		var times = [].splice.call(arguments, 0);
		var timeRanges = times.map(function(time){
			return new TimeRange(time);
		});
	}

	/*
	* @param timeObj
	* {
		type: 'day',
		value: 2,
		start: 'YYYY-MM-DD  HH:mm:ss',
		end: 'YYYY-MM-DD  HH:mm:ss'

	}
	* @return [[start, end],...] start,end 均为时间戳
	*/
	function TimeRange(timeObj){
		var timeRange = [];
		var start = new moment(timeObj.start);
		var end;
		var endDayInfo;
		if(timeObj.type === 'all'){
			end = new moment(timeObj.end);
		} else {
			end = toDefaultEndTime(timeObj.end);
			endDayInfo = {
				hour: end.hour(),
				minute: end.minute(),
				second: end.second()
			};
			if(timeObj.value === undefined){
				throw 'value needed';
			}
		}
		// debugger;
		switch(timeObj.type){
			case 'all':
				timeRange.push([start.valueOf(), end.valueOf()]);
				break;
			case 'day':
				while(start.valueOf() < end.valueOf()){
					timeRange.push([start.valueOf(), toDayEndTime(start, endDayInfo)]);
					start.add(timeObj.value, 'day');
					debugger;
				}
				break;
			case 'week':
				break;
		}
		return timeRange;

	}

	/*
	* 如果结束时间未设置结束的时，分，秒（即时，分，秒均未0），则设置为当天的结束值
	*/
	function toDefaultEndTime(time){
		var end = new moment(time);
		if(end.hour() === 0 && end.minute() === 0 && end.second() === 0){
			end.hour(23).minute(59).second(59);
			// end.endOf('day'); // 精度到毫米的，没必要
		}
		return end;
	}

	/*
	* 当天的日期，结束的时，分，秒 为 endDayInfo的值
	*/
	function toDayEndTime(start, endDayInfo){
		var end = new moment(start);
		end.startOf('day').hour(endDayInfo.hour).minute(endDayInfo.minute).second(endDayInfo.second);
		return end;
	}




	// http://momentjs.com/docs/
	// .format('YYYY-MM-DD')
	// .add('day', 1)
	// moment().endOf('day').valueOf()
	gloable.timeCompare = timeCompare;
	// http://philipwalton.com/articles/how-to-unit-test-private-functions-in-javascript/
	// 私有方法，上线时删除,暴露出来用于测试
	gloable._toDefaultEndTime = toDefaultEndTime;
	gloable._toDayEndTime = toDayEndTime;
	gloable._TimeRange = TimeRange;
})(this, moment);