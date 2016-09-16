$(document).ready(function () {
    $('#data').DataTable({
        responsive: true,
        "lengthMenu": [[100, 250, 500, -1], [100, 250, 500, "ALL"]],
        "ajax": {
            "url": "/Servers/GetServers/",
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
               //{
               //    data: 'ServerId',
               //    render: function (data, type, full, meta) {
               //        return '<div align="center"> <a class="fa fa-info-circle" href="/Servers/Details/' + data + '"></a> </div>';
               //    }
               //},
             {
                 data: 'ComputerName',
                 render: function (data, type, row) {
                     return '<a href="../Servers/Details/' + row.ServerId + '" >' + data + '</a>';
                 }
             },
             { data: 'IPAddress' },
             //{ data: 'SerialNumber' },
             //{ data: 'Make' },
             { data: 'Model' },
             { data: 'OS' }

        ],

    });
});