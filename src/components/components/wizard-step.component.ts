import {Component, Input, Output, EventEmitter, HostBinding} from '@angular/core';
import {MovingDirection} from '../util/MovingDirection';

@Component({
  selector: 'wizard-step',
  templateUrl: 'wizard-step.component.html',
  styleUrls: ['wizard-step.component.css']
})
export class WizardStepComponent {
  /**
   * This is the visible title of this step in the navigation bar of this wizard.
   */
  @Input()
  public title: string;

  /**
   * This EventEmitter is called when this step is entered.
   * The bound method should do initializing work.
   * @type {EventEmitter<void>}
   */
  @Output()
  public stepEnter = new EventEmitter<MovingDirection>();

  /**
   * This EventEmitter is called when this step is exited.
   * The bound method should do cleanup work.
   * @type {EventEmitter<void>}
   */
  @Output()
  public stepExit = new EventEmitter<MovingDirection>();

  /**
   * True if this step has been completed.
   * All steps previous to the currently selected step must be completed.
   * @type {boolean}
   */
  @HostBinding('class.done')
  public completed = false;

  /**
   * True if this step is currently selected and therefore currently visible to the user.
   * Always one step is selected at any time.
   * @type {boolean}
   */
  @HostBinding('class.current')
  public selected = false;

  @HostBinding('hidden')
  public get hidden(): boolean {
    return !this.selected;
  }

  /**
   * True if this step is optional.
   * @type {boolean}
   */
  public optional = false;

  constructor() { }
}