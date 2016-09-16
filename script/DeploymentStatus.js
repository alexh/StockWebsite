$(document).ready(function () {
    $('#data').DataTable({
        responsive: true,
        "lengthMenu": [[-1, 100, 250, 500], ["All", 100, 250, 500]],
        "ajax": {
            "url": "/Deployments/GetDeploymentStatusData/",
            "dataSrc": "",
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


        ],

        "columns": [

             {
                 data: 'ProjectName',
                 render: function (data, type, full, meta) {
                     return '<a  href="../Applications/Index/?p=' + data + '">' + data + '</a>';
                 }
             },
             {
                 data: 'DevReleaseDate',
                 "render": function (data, type, row) {
                     if (data == "1/1/2000 12:00:00 AM") {
                         return "";
                     } else {
                         return row["DevRelease"] + "<hr id=\"bar\"/>" + data;
                     }
                 }, "orderable": false,

                 //Switch to true when dev env is added to octopus
                 visible: false
             },
             //{ data: 'DevRelease', "visible": false },
             {
                 data: 'QAReleaseDate',
                 "render": function (data, type, row) {
                     if (data == "1/1/2000 12:00:00 AM") {
                         return "";
                     } else {
                         return row["QARelease"] + "<hr id=\"bar\"/>" + data;
                     }
                 }, "orderable": false
             },
             //{ data: 'QARelease', "visible": false },
              {
                  data: 'QTSReleaseDate',
                  "render": function (data, type, row) {
                      if (data == "1/1/2000 12:00:00 AM") {
                          return "";
                      } else {
                          return row["QTSRelease"] + "<hr id=\"bar\"/>" + data;
                      }
                  }, "orderable": false
              },
             //{ data: 'QTSRelease', "visible": false },
              {
                  data: 'BetaReleaseDate',
                  "render": function (data, type, row) {
                      if (data == "1/1/2000 12:00:00 AM") {
                          return "";
                      } else {
                          return row["BetaRelease"] + "<hr id=\"bar\"/>" + data;
                      }
                  }, "orderable": false

              },
             //{ data: 'BetaRelease', "visible": false },
              {
                  data: 'ProductionReleaseDate',
                  "render": function (data, type, row) {
                      if (data == "1/1/2000 12:00:00 AM") {
                          return "";
                      } else {
                          return row["ProductionRelease"] + "<hr id=\"bar\"/>" + data;
                      }
                  }, "orderable": false
              },
             //{ data: 'ProductionRelease', "visible": false }

        ],

    });
});

