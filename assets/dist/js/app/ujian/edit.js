$(document).ready(function () {
    $('#tgl_mulai').datetimepicker({
        format: 'YYYY-MM-DD HH:mm:ss',
        date: tgl_mulai
    });
    $('#tgl_selesai').datetimepicker({
        format: 'YYYY-MM-DD HH:mm:ss',
        date: terlambat
    });


    $('#formtest input, #formtest select').on('change', function () {
        $(this).closest('.form-group').eq(0).removeClass('has-error');
        $(this).nextAll('.help-block').eq(0).text('');
    });

    $('#formtest').on('submit', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        $.ajax({
            url: $(this).attr('action'),
            data: $(this).serialize(),
            type: 'POST',
            success: function (data) {
                console.log(data);
                if (data.status) {
                    Swal({
                        "title": "Successful",
                        "type": "success",
                        "text": "Data saved successfully"
                    }).then(result => {
                        window.location.href = base_url+"test/master";
                    });
                } else {
                    if (data.errors) {
                        $.each(data.errors, function (key, val) {
                            $('[name="' + key + '"]').closest('.form-group').eq(0).addClass('has-error');
                            $('[name="' + key + '"]').nextAll('.help-block').eq(0).text(val);
                            if (val === '') {
                                $('[name="' + key + '"]').closest('.form-group').eq(0).removeClass('has-error');
                                $('[name="' + key + '"]').nextAll('.help-block').eq(0).text('');
                            }
                        });
                    }
                }
            }
        });
    });
});