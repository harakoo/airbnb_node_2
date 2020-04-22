const express = require('express')
const router = express.Router();
// Import  DB
const roomModel = require("../models/Room");

router.get("/",(req,res)=>
{
    res.render("General/index");
});

// Show all products
router.get("/about", (req,res) => {
    
    res.render("General/about", {
        title:"Rental Listing",
        headingInfo: "Rental Listings Page",
        dynamicContent: "something",
        room: roomModel.getallRooms()
    });
});
module.exports=router;