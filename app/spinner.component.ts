import {Component, Input} from '@angular/core';

@Component({
    selector: 'spinner',
    template: `
    	<div *ngIf="visible">Loading ... </div>
    `
})
export class SpinnerComponent {
    @Input() visible = true;
}
