
// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;

}
$(document).ready(function () {

    var env = getUrlVars()['e'];
    var team = getUrlVars()['t'];
    var prog = getUrlVars()['p']


    var Table = $('#data').DataTable({
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
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
                                     dt.columns(2).search('').draw();
                                 }

                             },
                             {
                                 text: 'Production',
                                 action: function (e, dt, node, config) {
                                     dt.columns(2).search('Production').draw();
                                 }

                             },

                            {
                                text: 'QTS',
                                action: function (e, dt, node, config) {
                                    dt.columns(2).search('QTS').draw();
                                }

                            },
                            {
                                text: 'QA',
                                action: function (e, dt, node, config) {
                                    dt.columns(2).search('QA').draw();
                                }

                            },

                           {
                               text: 'Beta',
                               action: function (e, dt, node, config) {
                                   dt.columns(2).search('Beta').draw();
                               }

                           },
                           {
                               text: 'Dev',
                               action: function (e, dt, node, config) {
                                   dt.columns(2).search('Dev').draw();
                               }

                           }]
            },

        {
            text: 'Distinct Applications',
            action: function (e, dt, node, config) {

                config.counter++;
                if (config.state == 0) {
                    this.text('All Instances');
                    dt.ajax.url('/Applications/GetDistinctApplications/').load();
                    config.state = 1;
                } else {
                    this.text('Distinct Applications')
                    dt.ajax.url('/Applications/GetApplications/').load();
                    config.state = 0;
                }

            },
            counter: 1,
            state: 0
        },
 ,

        ],
        "lengthMenu": [[100, 250, 500, -1], [100, 250, 500, "ALL"]],
        "ajax": {
            "url": "/Applications/GetApplications/",
            "dataSrc": ""
        },
        "order": [[0, "asc"]],
        "columns": [
             //{
             //    data: 'App_ID',
             //    render: function (data, type, full, meta) {
             //        return '<div align="center"> <a class="fa fa-info-circle" href="/Applications/Details/' + data + '"></a> </div>';
             //    },
             //    visible: false
             //},
            {
                data: 'Program',
                render: function (data, type, row) {
                    return '<a href="/Applications/Details/' + row.App_ID + '"> ' + data + ' </a>';
                }
            },
            { data: 'Environment' },
             { data: 'Machine' },
            { data: 'Team' },
            { data: 'IsAutomated' }
        ],

        "searchCols": [
           { "search": prog, "escapeRegex": false },
            { "search": env, "escapeRegex": false },
                null,
            { "search": team, "escapeRegex": false },
            null
        ]
    });



});