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
            
            return res.status(200).json({code: 500, operation: 'createbooking', err: 'Validation error. please provide all param values except offerid.', status: 0});
            
        }
        let sql = 'insert into booking_orders SET ?';
        con.query(sql, obj, (err, result) => {
        if(err){
            return res.status(200).json({code: 500, operation: 'createbooking', err: err, status: 0});
        }
        return res.json({code: 200, operation: 'createbooking', status: 1});
        });
    }

    getRestaurantBookingDetails(req, res){
        let restaurant_id = req.body.restaurantid;
        let datevalue = req.body.datevalue;
        
        if(restaurant_id && datevalue){
            var d = new Date(datevalue);
            var day = d.getDay();
            con.query(`SELECT * FROM booking_orders WHERE restaurant_id= ${restaurant_id} AND booking_time LIKE '${datevalue}%'`, function(err, results, fields){
                if(err){
                    return res.status(200).json({code: 500, err: err});
                }
                con.query(`SELECT * FROM restaurant_timings WHERE restaurant_id= ${restaurant_id} AND day= ${day}`, function(err1, result2, fields){
                    if(err1){
                        return res.status(200).json({code: 500, err: err1});
                    }
                    res.json({code: 200, data: {
                        booking: results, timings : result2[0]
                    }});
                });
                
            });
        }
        else{
            res.status(200).json({code: 400, message: "Please select restaurant id & date (YYYY-MM-DD)."});
        }
    }


}
module.exports = BookingController;