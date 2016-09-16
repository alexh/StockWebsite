// Read a page's GET URL variables and return them as an associative array.
//function getUrlVars() {
//    var vars = {};
//    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
//        vars[key] = value;
//    });
//    return vars;

//}



$(document).ready(function () {

    //var env = getUrlVars()['e'];
    //var team = getUrlVars()['t'];
    //var prog = getUrlVars()['p']

    var Table = $('#data').DataTable({
        "scrollX": false,
        "lengthMenu": [[100, 250, 500, -1], [100, 250, 500, "ALL"]],
        "ajax": {
            "url": "/Deployments/GetDeployments/",
            "dataSrc": ""
        },


        dom: 'Bfrtip',
        "buttons": [
            'pageLength',
            {
                extend: 'collection',
                text: 'Column Toggle',
                buttons: ['columnsToggle']
            },
            {
                extend: 'collection',
                text: 'Export',
                buttons: ['copy', 'excel', 'pdf']
            },

            {
                extend: 'collection',
                text: 'Environment Filtering',
                buttons: [
                             {
                                 text: 'All',
                                 action: function (e, dt, node, config) {
                                     dt.columns(1).search('').draw();
                                 }

                             },
                             {
                                 text: 'Production',
                                 action: function (e, dt, node, config) {
                                     dt.columns(1).search('Production').draw();
                                 }

                             },

                            {
                                text: 'QTS',
                                action: function (e, dt, node, config) {
                                    dt.columns(1).search('QTS').draw();
                                }

                            },
                            {
                                text: 'QA',
                                action: function (e, dt, node, config) {
                                    dt.columns(1).search('QA').draw();
                                }

                            },

                           {
                               text: 'Beta',
                               action: function (e, dt, node, config) {
                                   dt.columns(1).search('Beta').draw();
                               }

                           },
                           {
                               text: 'Dev',
                               action: function (e, dt, node, config) {
                                   dt.columns(1).search('Dev').draw();
                               }

                           }]
            },
        ],


        "order": [[4, "desc"]],
        "columns": [
             //{
             //    data: 'DeploymentId',
             //    render: function (data, type, full, meta) {
             //        return '<div align="center"> <a class="fa fa-info-circle" href="/Deployments/Details/' + data + '"></a> </div>';
             //    }
             //},

             //{ data: 'DeploymentName' },
             {
                 data: 'ProjectName',
                 render: function (data, type, row) {
                     return '<a href="../Deployments/Details/' + row.DeploymentId + '" >' + data + '</a>';
                 }
             },
             { data: 'EnvironmentName' },
             { data: 'ReleaseVersion' },
             { data: 'TaskState' },
             //{ data: 'Created' },
             //{ data: 'QueueTime' },
             //{ data: 'StartTime' },
             { data: 'CompletedTime' },
             { data: 'DurationSeconds' },
             { data: 'DeployedBy' },
             {
                 data: 'DeploymentName',
                 visible: false
             },
             {
                 data: 'Created',
                 visible: false
             },
             {
                 data: 'QueueTime',
                 visible: false
             },
             {
                 data: 'StartTime',
                 visible: false
             },
             {
                 data: 'CompletedTime',
                 visible: false
             }

        ],


    });



});