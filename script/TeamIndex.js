$(document).ready(function () {
    $('#data').DataTable({
        "lengthMenu": [[100, 250, 500, -1], [100, 250, 500, "ALL"]],
        "scrollX": true,
        "ajax": {
            "url": "/Teams/GetTeamsWithStaffNames/",
            "dataSrc": "",
        },
        "order": [[0, "asc"]],
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

        ],

        "columns": [

             {
                 data: 'TeamName',
                 "render": function (data, type, row) {
                     return '<a href="/Teams/Details/' + row.Team_ID + '"> ' + data + ' </a>';
                 }
             },
             {
                 data: 'AgileFirst',
                 "render": function (data, type, row) {
                     if (data == null) {
                         return "Not Set";
                     }
                     return '<a href="../User/IDDetails/' + row.AgileLead + '" >' + data + ' ' + row['AgileLast'] + '</a>';
                 },
             },
             //{ data: 'AgileFirst' },

             {
                 data: 'ProductManagerFirst',
                 "render": function (data, type, row) {
                     if (data == null) {
                         return "Not Set";
                     }
                     return '<a href="../User/IDDetails/' + row.ProductManager + '" >' + data + ' ' + row['ProductManagerLast'] + '</a>';
                 },
             },
             {
                 data: 'ORFirst',
                 "render": function (data, type, row) {
                     if (data == null) {
                         return "Not Set";
                     }
                     return '<a href="../User/IDDetails/' + row.OperationReadiness + '" >' + data + ' ' + row['ORLast'] + '</a>';
                 },
             },

             {
                 data: 'ArchFirst',
                 "render": function (data, type, row) {
                     if (data == null) {
                         return "Not Set";
                     }
                     return '<a href="../User/IDDetails/' + row.Architect + '" >' + data + ' ' + row['ArchLast'] + '</a>';
                 },
             },

             {
                 data: 'BAFirst',
                 "render": function (data, type, row) {
                     if (data == null) {
                         return "Not Set";
                     }
                     return '<a href="../User/IDDetails/' + row['BA'] + '" >' + data + ' ' + row['BALast'] + '</a>';
                 },
             },

             {
                 data: 'LeadFirst',
                 "render": function (data, type, row) {
                     if (data == null) {
                         return "Not Set";
                     }
                     return '<a href="../User/IDDetails/' + row.TeamLead + '" >' + data + ' ' + row['LeadLast'] + '</a>';
                 },
             },


             { data: 'QANames' },
             {
                 data: 'Development',
                 visible: false
             },
             { data: 'EmailDistibution' },
             { data: 'StandupTime' },
             { data: 'StandupDays' },

        ],

    });
});