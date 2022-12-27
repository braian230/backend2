const {Router} = require('express');

const router = Router();
const pets=[];


const middleware1 =(req, res, next) =>{

}

const middleware2 =(req, res, next) =>{

}
router.use(middleware1);
router.use(middleware2);

router.get('./')