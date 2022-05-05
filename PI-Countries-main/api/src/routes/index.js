const {Router} = require ('express');
const rute = require('./countries');
const ruteA = require('./activities');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', rute);
//va a countries
router.use('/activity', ruteA);
//va a activities
module.exports = router;
