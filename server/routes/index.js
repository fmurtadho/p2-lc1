const router = require('express').Router()

router.get('/',(req,res)=>{
    res.status(200).json({
        message : 'Halo dari server p2-lc1'
    })
})

module.exports = router