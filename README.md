[![Build Status](https://secure.travis-ci.org/ghafran/milli-epoch.png)](http://travis-ci.org/ghafran/milli-epoch)
[![NSP Status](https://nodesecurity.io/orgs/ghafran/projects/c7b23114-8465-47d4-8afa-2f421c9b9bb7/badge)](https://nodesecurity.io/orgs/ghafran/projects/c7b23114-8465-47d4-8afa-2f421c9b9bb7)

milli-epoch
==============

Utility module for epoch based time functions in milliseconds

## Installation

    $ npm install milli-epoch

## Simple Usage

code example:

```js
var milli-epoch = require('milli-epoch');

var now = milli-epoch.now();
var then = milli-epoch.addMinutes(5);
var date = new Date(then);

console.log('now in milli-epoch ' + now + ' and 5 minutes from now is ' + then);
console.log('which is ' + date.toString());
```

## Functions

  * now
  * addMinutes
  * addSeconds
  * addDays
  * subtractDays
  * subtractMinutes
  * addYears
  * isInFuture
  * isInPast
  * getMillisecondsSince
  * getSecondsSince
  * getMinutesSince
  * getHoursSince
  * getDaysSince
  * getYearsSince
  * getMinDate
  * getMaxDate
  * fromEpoch
  * toEpoch
  * getEpochBeforeMinutes
