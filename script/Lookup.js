$(document).ready(function () {
    $('#data').DataTable({
        responsive: true,
        "lengthMenu": [[100, 250, 500, -1], [100, 250, 500, "ALL"]],
        "ajax": {
            "url": "../User/GetUsers/",
            "dataSrc": "",
        },
        "order": [[0, "asc"]],





        "columns": [
               //{
               //    data: 'ServerId',
               //    render: function (data, type, full, meta) {
               //        return '<div align="center"> <a class="fa fa-info-circle" href="/Servers/Details/' + data + '"></a> </div>';
               //    }
               //},
             {
                 data: 'User_ID',

             },
             { data: 'FirstName' },
             //{ data: 'SerialNumber' },
             //{ data: 'Make' },
             { data: 'LastName' },
             { data: 'Team' }

        ],

    });
});