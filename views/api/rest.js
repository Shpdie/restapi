__path = process.cwd()
var express = require('express');
var router = express.Router()


var dev = "Md."
var apikey = "MdApikey"


router.get('/gombalMaut', async (req, res, next) => {
if (!req.query.apikey) return res.json({ status: "false", result: "Masukkan apikey"})
if (req.query.apikey !== apikey) return res.json({ status: "false", result: "Apikey salah"})
  try {
    var gombalMaut = [
      "Pada heboh Bela Negara. Pokoknya kalau masalah belain kamu, aku rela jadi yang terdepan dan bakal maju duluan",
      "Tahu nggak kenapa donat selalu bolong tengahnya? Karena yang utuh dan bulat hanya cintaku untukmu.",
      "Sayang, kayaknya kita udah nggak butuh basa basi. Sekarang kita butuhnya cepat-cepat resepsi."
    ]
    var gombalMautResult = gombalMaut[Math.floor(Math.random() * gombalMaut.length)]
    res.json({
      status: "true",
      result: gombalMautResult,
      by: dev
    })
  } catch(e) {
    res.json({ status: "false", result: "Terjadi kesalahan" })
  }
})
router.get('/gombalLucu', async (req, res, next) => {
if (!req.query.apikey) return res.json({ status: "false", result: "Masukkan apikey"})
if (req.query.apikey !== apikey) return res.json({ status: "false", result: "Apikey salah"})
  try {
    var gombalLucu = [
      "Demi kamu aku rela kesamber petir sampe 20 kali asalkan nggak kena",
      "Orang kaya mati, orang miskin mati, orang aku sukanya kamu",
      "Mukamu kok kayak orang susah. Susah dilupain"
    ]
    var gombalLucuResult = gombalLucu[Math.floor(Math.random() * gombalLucu.length)]
    res.json({
      status: "true",
      result: gombalLucuResult,
      by: dev
    })
  } catch(e) {
    res.json({ status: "false", result: "Terjadi kesalahan" })
  }
})
router.get('/gombalRandom', async (req, res, next) => {
if (!req.query.apikey) return res.json({ status: "false", result: "Masukkan apikey"})
if (req.query.apikey !== apikey) return res.json({ status: "false", result: "Apikey salah"})
  try {
    var gombalRandom = [
      "Kenal kamu kayak kenal jelangkung. Sekali datang nggak pernah bisa pergi dari hidupku",
      "Apakah kamu seorang pesulap? Karena setiap kali aku melihatmu, semua orang menghilang!",
      "Aku mencintaimu dengan seluruh perutku. Aku akan mengatakan hati, tetapi perutku lebih besar."
    ]
    var gombalRandomResult = gombalRandom[Math.floor(Math.random() * gombalRandom.length)]
    res.json({
      status: "true",
      result: gombalRandomResult,
      by: dev
    })
  } catch(e) {
    res.json({ status: "false", result: "Terjadi kesalahan" })
  }
})
router.get('/pantunCinta', async (req, res, next) => {
if (!req.query.apikey) return res.json({ status: "false", result: "Masukkan apikey"})
if (req.query.apikey !== apikey) return res.json({ status: "false", result: "Apikey salah"})
  try {
    var pantunCinta = [
      "Naik mobil sambil bernyanyi\nPenyanyinya Rhoma Irama\nSaat kau berada di sini\nAku bisa tersenyum lebih lama",
      "Beli buku di Gramedia\nBeli dua dapat tiga\nAku dan kamu hidup bersama\nSekarang esok dan slamanya",
      "Ketemu macan di dalam hutan\nLangsung lari takut dimakan\nWalau cinta banyak rintangan\nKu jaga kau dengan kesetiaan"
    ]
    var pantunCintaResult = pantunCinta[Math.floor(Math.random() * pantunCinta.length)]
    res.json({
      status: "true",
      result: pantunCintaResult,
      by: dev
    })
  } catch(e) {
    res.json({ status: "false", result: "Terjadi kesalahan" })
  } 
})
router.get('/pantunLucu', async (req, res, next) => {
if (!req.query.apikey) return res.json({ status: "false", result: "Masukkan apikey"})
if (req.query.apikey !== apikey) return res.json({ status: "false", result: "Apikey salah"})
  try {
    var pantunLucu = [
      "Jangan takut\njangan khawatir\nitu kentut\nbukan petir",
      "Bread is roti\nshadow is bayang\nbefore you mati\nbetter you sembahyang",
      "Burung perkutut\nburung kuthilang\nkamu kentut\nenggak bilang bilang"
    ]
    var pantunLucuResult = pantunLucu[Math.floor(Math.random() * pantunLucu.length)]
    res.json({
      status: "true",
      result: pantunLucuResult,
      by: dev
    })
  } catch(e) {
    res.json({ status: "false", result: "Terjadi kesalahan" })
  } 
})
router.get('/pantunRandom', async (req, res, next) => {
if (!req.query.apikey) return res.json({ status: "false", result: "Masukkan apikey"})
if (req.query.apikey !== apikey) return res.json({ status: "false", result: "Apikey salah"})
  try {
    var pantunRandom = [
      "Orang ganteng\nsuka sama si Rini\ngak seneng\nmaju sini",
      "Kan bandeng\nmakan kawat\norang ganteng\nnumpang lewat",
      "Duduk santai membaca koran\nMembacanya sambil makan petisan\nSeenak-enaknya makan di restoran\nLebih enak makan gratisan"
    ]
    var pantunRandomResult = pantunRandom[Math.floor(Math.random() * pantunRandom.length)]
    res.json({
      status: "true",
      result: pantunRandomResult,
      by: dev
    })
  } catch(e) {
    res.json({ status: "false", result: "Terjadi kesalahan" })
  }
})
module.exports = router
