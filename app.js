const express = require('express');
const app = express();
const db = require("./db")
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
const port = process.env.PORT || 8080;

app.get('/vod-ms-upgrade-journey/tmf-api/productCatalogManagement/v4/productSpecification/',(req,res,next)=>{
    let brandName= req.query.brandName
    if (brandName ==='samsung'){
      res.status(200).json(db.modelDetails.samsung)
    }else if(brandName ==='apple'){
      res.status(200).json(db.modelDetails.apple)
    }else if(brandName === ''){
      res.status(200).json(db.modelDetails)
    }else{
      res.status(200).json("No Models Found in Database!")
    }
})
app.get('/vod-ms-upgrade-journey/tmf-api/productCatalogManagement/v4/category/brandNames',(req,res,next)=>{
    res.status(200).json(db.brandDetails);
})
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port);
module.exports = app;