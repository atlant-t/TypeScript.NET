/*
 * @author electricessence / https://github.com/electricessence/
 * Originally based upon .NET source but with many additions and improvements.
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE
 */

///<reference path="ITimeMeasurement.ts"/>
///<reference path="../IEquatable.ts"/>
///<reference path="../IComparable.ts"/>
///<reference path="../IFormattable.ts"/>
import System = require('../System');
import TimeSpan = require('TimeSpan');

const
	ticksPerMillisecond = 10000,
	msPerSecond = 1000;

class ClockTime implements ITimeMeasurement, IEquatable<ClockTime>, IComparable<ClockTime>, IFormattable
{
	private _totalMilliseconds:number;
	get totalMilliseconds():number
	{
		return this._totalMilliseconds;
	}

	// Could be in reverse or negative...
	get direction():number
	{
		return System.compare(this._totalMilliseconds, 0);
	}

	constructor(milliseconds:number);
	constructor(hours:number, minutes:number, seconds?:number, milliseconds?:number);
	constructor(...args:number[])
	{
		this._totalMilliseconds =
			args.length>1
				? TimeSpan.millisecondsFromTime(
				args[0] || 0,
				args[1] || 0,
				args.length>2 && args[2] || 0,
				args.length>3 && args[3] || 0
			)
				: (args.length>0 && args[0] || 0);
	}


	equals(other:ClockTime):boolean
	{
		return System.areEqual(this._totalMilliseconds, other.totalMilliseconds);
	}

	compareTo(other:ClockTime):number
	{
		if(other==null) return 1 | 0;

		return System.compare(this._totalMilliseconds, other.totalMilliseconds);
	}


	private _ticks:number;
	get ticks():number
	{
		var _ = this, r = _._ticks;
		if(r===undefined) {
			var ms = Math.abs(_._totalMilliseconds);
			_._ticks = r = (ms - Math.floor(ms))*ticksPerMillisecond;
		}
		return r;
	}

	private _ms:number;

	get milliseconds():number
	{
		var _ = this, r = _._ms;
		if(r===undefined)
			_._ms = r =
				(this._totalMilliseconds%msPerSecond) | 0;
		return r;
	}


	private _seconds:number;
	get seconds():number
	{
		var _ = this, r = _._seconds;
		if(r===undefined)
			_._seconds = r =
				((this._totalMilliseconds/msPerSecond)%secondsPerMinute) | 0;
		return r;
	}

	private _minutes:number;
	get minutes():number
	{
		var _ = this, r = _._minutes;
		if(r===undefined)
			_._minutes = r =
				((this._totalMilliseconds
				/msPerSecond
				/secondsPerMinute)%minutesPerHour) | 0;

		return r;
	}

	private _hours:number;
	get hours():number
	{
		var _ = this, r = _._hours;
		if(r===undefined)
			_._hours = r =
				((this._totalMilliseconds
				/msPerSecond
				/secondsPerMinute
				/minutesPerHour)%earthHoursPerDay) | 0;
		return r;

	}

	private _days:number;
	get days():number
	{
		var _ = this, r = _._days;
		if(r===undefined)
			_._days = r =
				(this._totalMilliseconds
				/msPerSecond
				/secondsPerMinute
				/minutesPerHour
				/earthHoursPerDay) | 0;
		return r;
	}

	toTimeSpan():TimeSpan
	{
		return new TimeSpan(this._totalMilliseconds);
	}

	// Static version for relative consistency.  Constructor does allow this format.
	static from(hours:number, minutes:number, seconds:number = 0, milliseconds:number = 0):ClockTime
	{
		return new ClockTime(hours, minutes, seconds, milliseconds);
	}

	toString(format?:string, formatProvider?:System.IFormatProvider):string
	{
		/* INSERT CUSTOM FORMATTING CODE HERE */


		var _ = this, a:string[] = [];

		if(_.days)
			a.push(pluralize(_.days, "day"));

		if(_.hours)
			a.push(pluralize(_.hours, "hour"));

		if(_.minutes)
			a.push(pluralize(_.minutes, "minute"));

		if(_.seconds)
			a.push(pluralize(_.seconds, "second"));

		if(a.length>1)
			a.splice(a.length - 1, 0, "and");

		return a.join(", ").replace(", and, ", " and ");
	}

}

export = ClockTime;