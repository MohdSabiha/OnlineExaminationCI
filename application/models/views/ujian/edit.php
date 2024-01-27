<div class="box">
    <div class="box-header with-border">
        <h3 class="box-title"><?=$subjudul?></h3>
        <div class="box-tools pull-right">
            <a href="<?=base_url()?>test/master" class="btn btn-sm btn-flat btn-warning">
                <i class="fa fa-arrow-left"></i> Cancel
            </a>
        </div>
    </div>
    <div class="box-body">
        <div class="row">
            <div class="col-sm-4">
                <div class="alert bg-purple">
                    <h4>Course <i class="fa fa-book pull-right"></i></h4>
                    <p><?=$matkul->nama_matkul?></p>
                </div>
                <div class="alert bg-purple">
                    <h4>Lecturer <i class="fa fa-address-book-o pull-right"></i></h4>
                    <p><?=$dosen->nama_dosen?></p>
                </div>
            </div>
            <div class="col-sm-4">
                <?=form_open('test/save', array('id'=>'formtest'), array('method'=>'edit','dosen_id'=>$dosen->id_dosen, 'matkul_id'=>$matkul->matkul_id, 'id_test'=>$test->id_test))?>
                <div class="form-group">
                    <label for="nama_test">Exam Name</label>
                    <input value="<?=$test->nama_test?>" autofocus="autofocus" onfocus="this.select()" placeholder="Nama test" type="text" class="form-control" name="nama_test">
                    <small class="help-block"></small>
                </div>
                <div class="form-group">
                    <label for="jumlah_soal">Number of Questions</label>
                    <input value="<?=$test->jumlah_soal?>" placeholder="Number of Questions" type="number" class="form-control" name="jumlah_soal">
                    <small class="help-block"></small>
                </div>
                <div class="form-group">
                    <label for="tgl_mulai">Start Date</label>
                    <input id="tgl_mulai" name="tgl_mulai" type="text" class="datetimepicker form-control" placeholder="Start Date">
                    <small class="help-block"></small>
                </div>
                <div class="form-group">
                    <label for="tgl_selesai">Completion Date</label>
                    <input id="tgl_selesai" name="tgl_selesai" type="text" class="datetimepicker form-control" placeholder="Completion Date">
                    <small class="help-block"></small>
                </div>
                <div class="form-group">
                    <label for="waktu">Time</label>
                    <input value="<?=$test->waktu?>" placeholder="In Minute" type="number" class="form-control" name="waktu">
                    <small class="help-block"></small>
                </div>
                <div class="form-group">
                    <label for="jenis">Question Pattern</label>
                    <select name="jenis" class="form-control">
                        <option value="" disabled selected>--- Choose ---</option>
                        <option <?=$test->jenis==="Random"?"selected":"";?> value="Random">Random Question</option>
                        <option <?=$test->jenis==="Sort"?"selected":"";?> value="Sort">Sort Question</option>
                    </select>
                    <small class="help-block"></small>
                </div>
                <div class="form-group pull-right">
                    <button type="reset" class="btn btn-default btn-flat">
                        <i class="fa fa-rotate-left"></i> Reset
                    </button>
                    <button id="submit" type="submit" class="btn btn-flat bg-purple"><i class="fa fa-save"></i> Save</button>
                </div>
                <?=form_close()?>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    var tgl_mulai = '<?=$test->tgl_mulai?>';
    var terlambat = '<?=$test->terlambat?>';
</script>

<script src="<?=base_url()?>assets/dist/js/app/test/edit.js"></script>