var { con } = require('./../server/mysql_connect');
const validator = require('validator');

class BookingController{
    constructor(){

    }

    createBooking(req, res){

        let username = req.body.username;
        let phone = req.body.phone;
        let restaurant_id = req.body.restaurantid;
        let offer_availed_id = req.body.offerid;
        let guest_count = req.body.guestcount;
        let booking_time = req.body.bookingtime;
        let bill_amount = req.body.billamount;

        let obj = {
            username,
            phone,
            restaurant_id,
            offer_availed_id,
            guest_count,
            booking_time,
            created_at: new Date(),
            bill_amount
        }
        // console.log(JSON.stringify(obj, undefined, 2));
    
        if(validator.isEmpty(username) || validator.isEmpty(phone) || validator.isEmpty(restaurant_id) || validator.isEmpty(guest_count)  || validator.isEmpty(booking_time) || validator.isEmpty(bill_amount)){
            
            return res.status(200).json({code: 500, operation: 'createbooking', err: 'Validation error. please provide all param values except offerid.'});
            
        }
        let sql = 'insert into booking_orders SET ?';
        con.query(sql, obj, (err, result) => {
        if(err){
            return res.status(200).json({code: 500, operation: 'createbooking', err: err});
        }
        return res.json({code: 200, operation: 'createbooking', data: 1});
        });
    }


}
module.exports = BookingController;