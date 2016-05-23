import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'selector',
    templateUrl: 'templateUrl',
    directives: [],
    providers: [],
    styleUrls: [],
    pipes: []
})

export class NameComponent implements OnInit, OnDestroy {
  @Input() name: any;
  @Output() eventName: EventEmitter<string>;

  constructor(
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
