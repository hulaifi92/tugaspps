//import express
const express = require('express');

//import controller
const jadwalcontroller = require('../controller/jadwalcontroller');

const router = express.Router();

//router untuk tampil semua jadwal
router.get('/',jadwalcontroller.allJadwal);


//router untuk tambah jadwal
router.post('/',jadwalcontroller.createJadwal);



//router untuk update jadwal berdasar id
router.put('/:idjadwal',jadwalcontroller.updateJadwal);


//router untuk delete jadwal berdasar id
router.delete('/:idjadwal',jadwalcontroller.deleteJadwal);

module.exports = router;