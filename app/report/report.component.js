'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('report').
  component('report', {
    templateUrl: 'report/report.template.html',
    controller: ['Report',
      function ReportController(Report) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
