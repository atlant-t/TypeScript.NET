/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE
 */

///<reference path="../Disposable/IDisposable.ts"/>

interface IEventDispatcher extends EventTarget, IDisposable {

	addEventListener(type: string, listener: EventListener, useCapture?: boolean, priority?: number):void;//, useWeakReference?: boolean);
	dispatchEvent(event: Event): boolean;
	hasEventListener(type: string): boolean;
	removeEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
	// willTrigger(type: string);
	// toString(): string;

}