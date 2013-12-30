process.env.NODE_ENV = 'test';

var expect = require('chai').expect,
should = require('chai').should;

var epoch = require('../lib/milliepoch');

describe('milli-epoch', function() {

    describe('functions', function() {
        
        it('addMinutes', function(done){
        
            var now = 0;
            var thenShould = now + (60000 * 2);
            var then = epoch.addMinutes(now, 2);
            expect(then).to.be.equal(thenShould);
            done();
        });
        
        it('addYears', function(done){
        
            var now = 0;
            var thenShould = now + (31536000000 * 2);
            var then = epoch.addYears(now, 2);
            expect(then).to.be.equal(thenShould);
            done();
        });
        
        it('isInFuture', function(done){
        
            var now = new Date().getTime();
            var then = now + 6000000;
            var result = epoch.isInFuture(then);
            expect(result).to.be.equal(true);
            
            then = now - 6000000;
            result = epoch.isInFuture(then);
            expect(result).to.be.equal(false);
            
            done();
        });
        
        it('isInPast', function(done){
        
            var now = new Date().getTime();
            var then = now + 6000000;
            var result = epoch.isInPast(then);
            expect(result).to.be.equal(false);
            
            then = now - 6000000;
            result = epoch.isInPast(then);
            expect(result).to.be.equal(true);
            
            done();
        });
        
        it('getSecondsSince', function(done){
        
            var now = new Date().getTime();
            var then = now - (1000 * 2);
            var seconds = epoch.getSecondsSince(then);
            expect(seconds).to.be.equal(2);
            done();
        });
            
        it('getMinutesSince', function(done){
            
            var now = new Date().getTime();
            var then = now - (60000 * 2);
            var years = epoch.getMinutesSince(then);
            expect(years).to.be.equal(2);
            done();
        });
        
        it('getHoursSince', function(done){
            
            var now = new Date().getTime();
            var then = now - (3600000 * 2);
            var hours = epoch.getHoursSince(then);
            expect(hours).to.be.equal(2);
            done();
        });
        
        it('getDaysSince', function(done){
        
            var now = new Date().getTime();
            var then = now - (86400000 * 2);
            var days = epoch.getDaysSince(then);
            expect(days).to.be.equal(2);
            done();
        });
        
        it('getDaysSince', function(done){
        
            var now = new Date().getTime();
            var then = now - (31536000000 * 2);
            var years = epoch.getYearsSince(then);
            expect(years).to.be.equal(2);
            done();
        });

        it('testAddSubtractDays', function(done){
            var now = new Date().getTime();
            var future = epoch.addDays(now, 365);
            var alternateNow = epoch.subtractDays(future, 365);
            expect(now).to.be.equal(alternateNow);
            done();
        });

        it('testAddSubtractMinutes', function(done){
            var now = new Date().getTime();
            var future = epoch.addMinutes(now, 1440*365);
            expect(now).to.be.equal(epoch.subtractMinutes(future, 1440*365));
            done();
        });

        it('testAddSubtractYears', function(done){
            var now = new Date().getTime();
            var future = epoch.addYears(now, 5);
            expect(now).to.be.equal(epoch.addYears(future, -5));
            done();
        });

    });
});



