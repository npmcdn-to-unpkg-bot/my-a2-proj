/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OnChanges, SimpleChanges } from '@angular/core';
import { EventEmitter } from '../../facade/async';
import { Control } from '../model';
import { ControlValueAccessor } from './control_value_accessor';
import { NgControl } from './ng_control';
import { AsyncValidatorFn, ValidatorFn } from './validators';
export declare const formControlBinding: any;
/**
 * Binds an existing {@link Control} to a DOM element.
 *
 * ### Example ([live demo](http://plnkr.co/edit/jcQlZ2tTh22BZZ2ucNAT?p=preview))
 *
 * In this example, we bind the control to an input element. When the value of the input element
 * changes, the value of the control will reflect that change. Likewise, if the value of the
 * control changes, the input element reflects that change.
 *
 *  ```typescript
 * @Component({
 *   selector: 'my-app',
 *   template: `
 *     <div>
 *       <h2>NgFormControl Example</h2>
 *       <form>
 *         <p>Element with existing control: <input type="text"
 * [ngFormControl]="loginControl"></p>
 *         <p>Value of existing control: {{loginControl.value}}</p>
 *       </form>
 *     </div>
 *   `,
 *   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
 * })
 * export class App {
 *   loginControl: Control = new Control('');
 * }
 *  ```
 *
 * ### ngModel
 *
 * We can also use `ngModel` to bind a domain model to the form.
 *
 * ### Example ([live demo](http://plnkr.co/edit/yHMLuHO7DNgT8XvtjTDH?p=preview))
 *
 *  ```typescript
 * @Component({
 *      selector: "login-comp",
 *      directives: [FORM_DIRECTIVES],
 *      template: "<input type='text' [ngFormControl]='loginControl' [(ngModel)]='login'>"
 *      })
 * class LoginComp {
 *  loginControl: Control = new Control('');
 *  login:string;
 * }
 *  ```
 *
 *  @experimental
 */
export declare class NgFormControl extends NgControl implements OnChanges {
    private _validators;
    private _asyncValidators;
    form: Control;
    update: EventEmitter<{}>;
    model: any;
    viewModel: any;
    constructor(_validators: any[], _asyncValidators: any[], valueAccessors: ControlValueAccessor[]);
    ngOnChanges(changes: SimpleChanges): void;
    path: string[];
    validator: ValidatorFn;
    asyncValidator: AsyncValidatorFn;
    control: Control;
    viewToModelUpdate(newValue: any): void;
    private _isControlChanged(changes);
}
