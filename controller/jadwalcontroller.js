
//import jadwalmodel
const Jadwal = require('../models/jadwalmodel');

//deskripsi = tampil semua jadwal
//route = GET/api/jadwal
//akses = public


exports.allJadwal = async (req, res, next)=>{
    const jadwals = await Jadwal.findAll();
    res.status(200).json({
        success:true,
        message:'data jadwal berhasil tampil',
        jadwal: jadwals
    });
};


//deskripsi = tambah jadwal
//route = POST/api/jadwal
//akses = public

exports.createJadwal = async (req, res, next)=>{

   const jadwal = await Jadwal.create(req.body);
    res.status(200).json({
        success:true,
        message:'data jadwal berhasil ditambahkan',
    });
};



//deskripsi = tampil jadwal berdasarkan idjadwal
//route = PUT/api/jadwal
//akses = public


exports.updateJadwal = async (req, res, next)=>{
    try {
    const jadwal = await Jadwal.findByPk(req.params.idjadwal);

    if(!jadwal){
        return res.status(404).json({
            success:false,
            message : 'Data tidak ditemukan',
        });
    }

    await jadwal.update(req.body);
    res.status(200).json({
        success:true,
        message:'data jadwal berhasil diupdate',
        data:jadwal,
    });
}catch(error){
    res.status(400).json({
        success:false,
        message:error.message,
    });
}
}


//deskripsi = tampil jadwal berdasarkan idjadwal
//route = DELETE/api/jadwal
//akses = public


exports.deleteJadwal = async (req, res, next)=>{
    try {
        const jadwal = await Jadwal.findByPk(req.params.idjadwal);
        if (!jadwal){
            return res.status(404).json({
                success:false,
                message:'jadwal tidak ada'
            });
        }

        await jadwal.destroy()
         res.status(200).json({
        success:true,
        message:'data jadwal berhasil dihapus',
    });
    } catch (error) {
        res.status(500).json({
            success:false,
            message :'terjadi kesalahan',
        });
    }
   
};

