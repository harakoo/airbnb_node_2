const express = require('express')
const router = express.Router();

// Import  DB
const roomModel = require("../models/Room");

// Show all products
router.get("General/about", (req,res) => {
    
    res.render("listing", {
        title:"Rental Listing",
        headingInfo: "Rental Listings Page",
        dynamicContent: "something",
        room: roomModel.getallRooms()
    });
});

module.exports=router;
