const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const room =
{

    fakeDB : [],

    init()
    {

        this.fakeDB.push({
            id:101,
            name: `Spacious&Family Friendly! Hot-tub & Lake View!`,
            image: `https://odis.homeaway.com/odis/listing/9ae72d05-efae-4904-80e8-8dd5ae06b0e5.f10.jpg`,
            category: `Entire place`,
            price: 285,
            review: 5,
            host: `super`,
            featured: true});
    
        this.fakeDB.push({
            id:102,
            name: `Two bedrooms with ensuite bathroom & parking at YorkU`,
            image: `https://odis.homeaway.com/odis/listing/362ddd92-ada9-45e1-869f-d76a90dabae9.f10.jpg`,
            category: `Private room`,
            price: 60,
            review: 4,
            host: `general`,
            featured: true});
    
        this.fakeDB.push({
            id:103,
            name: `Master bedroom with ensuite bathroom & parking`,
            image: `https://odis.homeaway.com/odis/listing/060df9ea-5baa-4e52-9e4b-9982304b97ee.f10.jpg`,
            category: `Shared room`,
            price: 40,
            review: 3,
            host: `general`,
            featured: true
        });

        this.fakeDB.push({
            id:104,
            name: `A cozy home minutes walk from Eaton Centre`,
            image: `https://odis.homeaway.com/odis/listing/5a837c15-7891-4909-aab4-662ce7b45351.f10.jpg`,
            category: `Entire place`,
            price: 400,
            review: 4,
            host: `plus`,
            featured: true
        });

        this.fakeDB.push({
            id:105,
            name: `Spacious Room near Downtown`,
            image: `https://odis.homeaway.com/odis/listing/7f65eb6a-0adb-4810-ae7d-8671f7f5ad2f.f10.jpg`,
            category: `Private room`,
            price: 75,
            review: 2,
            host: `plus`,
            featured: false
        });

        this.fakeDB.push({
            id:106,
            name: `Walk to the EX and Entertainment District`,
            image: `https://odis.homeaway.com/odis/listing/25343abb-46c3-4d04-8135-8c49201c1125.f10.jpg`,
            category: `Entire place`,
            price: 175,
            review: 3,
            host: `super`,
            featured: false
        });

    },
    getallRooms()
    {
        return this.fakeDB;
    }

}

room.init();
module.exports=room;