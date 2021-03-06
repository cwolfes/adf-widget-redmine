'use strict';

angular.module('adf.widget.redmine')
  .controller('editController', function(projects, config){
    var vm = this;
    vm.possibleColumns = {
      "id":{"name":"ID", "show": true},
      "tracker":{"name":"Tracker","show": true},
      "status":{"name":"Status","show": true},
      "subject":{"name":"Subject","show": true}
    };

    if(angular.equals({},config)) {
      config.columns=vm.possibleColumns;
      config.project="";
      config.assigned_to_id="me";
      config.showClosed=false;
    }

    vm.projects = projects;
  });
