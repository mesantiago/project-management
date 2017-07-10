'use strict';
const angular = require('angular');

export class EpicFormComponent {
  /*@ngInject*/
  $onInit() {
    this.epic = this.resolve.epic;
    this.viewMode = this.resolve.viewMode;
  }

  save(form) {
    if(form.$valid) {
      this.close({ $value: this.epic });
    }
  }
}

export default angular.module('epicsApp.epics.form', [])
  .component('epicForm', {
    template: require('./epic-form.component.html'),
    bindings: {
      resolve: '<',
      dismiss: '&',
      close: '&'
    },
    controller: EpicFormComponent,
    controllerAs: 'vm'
  })
  .name;