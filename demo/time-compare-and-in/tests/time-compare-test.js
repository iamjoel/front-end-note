chai.Should();

describe('timeCompare', function() {
    describe('#toDefaultEndTime', function() {
        it('should not change time if set day info', function() {
        	var time = '2015-04-03 15:03:01';
        	_toDefaultEndTime(time).valueOf().should.equal((new Date(time)).valueOf());
        });

        it('should be end of the day if not set day info', function() {
        	var time = '2015-04-03';
        	_toDefaultEndTime(time).valueOf().should.equal((new Date('2015-04-03 23:59:59')).valueOf());
        });
    });

    describe('#toDayEndTime', function() {
        it('should return', function() {
        	var time = '2015-04-03 10:03:01';
        	var endDayInfo = {
				hour: 16,
				minute: 15,
				second: 18
			};
			var endTimeStr = [time.slice(0, '2015-04-03'.length), ' ', [endDayInfo.hour, endDayInfo.minute, endDayInfo.second].join(':')].join('');
        	_toDayEndTime(time, endDayInfo).valueOf().should.equal((new Date(endTimeStr)).valueOf());
        });

    });
    describe('#TimeRange', function() {
    	describe('type is all', function() {
	        var timeObj = {
	            start: '2015-04-03 15:03:01',
	            end: '2015-04-05 15:03:01',
	            type: 'all'
	        }
	        it('should return length equal 1', function() {
	            var timeRange = new _TimeRange(timeObj);
	            timeRange.length.should.equal(1);
	        });
	        it('should return value start,end exact equal start,end', function() {
	            var timeRange = new _TimeRange(timeObj);
	            timeRange[0][0].should.equal((new Date(timeObj.start)).valueOf());
	            timeRange[0][1].should.equal((new Date(timeObj.end)).valueOf());
	        });
    	});

    	describe('type is day', function() {
    		
    	});

    });
});
