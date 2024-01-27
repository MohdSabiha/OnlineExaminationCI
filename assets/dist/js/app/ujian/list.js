var table;

$(document).ready(function () {

    ajaxcsrf();

    table = $("#test").DataTable({
        initComplete: function () {
            var api = this.api();
            $('#test_filter input')
                .off('.DT')
                .on('keyup.DT', function (e) {
                    api.search(this.value).draw();
                });
        },
        oLanguage: {
            sProcessing: "loading..."
        },
        processing: true,
        serverSide: true,
        ajax: {
            "url": base_url+"test/list_json",
            "type": "POST",
        },
        columns: [
            {
                "data": "id_test",
                "orderable": false,
                "searchable": false
            },
            { "data": 'nama_test' },
            { "data": 'nama_matkul' },
            { "data": 'nama_dosen' },
            { "data": 'jumlah_soal' },
            { "data": 'waktu' },
            {
                "searchable": false,
                "orderable": false
            }
        ],
        columnDefs: [
            {
                "targets": 7,
                "data": {
                    "id_test": "id_test",
                    "ada": "ada"
                },
                "render": function (data, type, row, meta) {
                    var btn;
                    if (data.ada > 0) {
                        btn = `
								<a class="btn btn-xs btn-success" href="${base_url}hasiltest/detail/${data.id_test}" target="_blank">
									<i class="fa fa-print"></i> Print Results
								</a>`;
                    } else {
                        btn = `<a class="btn btn-xs btn-primary" href="${base_url}test/token/${data.id_test}">
								<i class="fa fa-pencil"></i> Take Exam
							</a>`;
                    }
                    return `<div class="text-center">
									${btn}
								</div>`;
                }
            },
        ],
        order: [
            [1, 'asc']
        ],
        rowId: function (a) {
            return a;
        },
        rowCallback: function (row, data, iDisplayIndex) {
            var info = this.fnPagingInfo();
            var page = info.iPage;
            var length = info.iLength;
            var index = page * length + (iDisplayIndex + 1);
            $('td:eq(0)', row).html(index);
        }
    });
});