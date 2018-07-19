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
        console.log(JSON.stringify(obj, undefined, 2));
    
        if(validator.isEmpty(username.toString()) || validator.isEmpty(restaurant_id.toString()) || validator.isEmpty(guest_count.toString())  || validator.isEmpty(booking_time.toString())){
            
            return res.status(200).json({code: 500, operation: 'createbooking', message: 'Validation error. please provide all param values except offerid.', status: 0});
            
        }
        let sql = 'insert into booking_orders SET ?';
        con.query(sql, obj, (err, result) => {
        if(err){
            return res.status(200).json({code: 500, operation: 'createbooking', message: err, status: 0});
        }
        return res.json({code: 200, operation: 'createbooking', data: {
            status: 1, lastId : result.insertId
        }});
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
                    return res.status(200).json({code: 500, message: err});
                }
                con.query(`SELECT * FROM restaurant_timings WHERE restaurant_id= ${restaurant_id} AND day= ${day}`, function(err1, result2, fields){
                    if(err1){
                        return res.status(200).json({code: 500, message: err1});
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
    getBookingDetails(req, res){
        let order_id = req.body.orderid;
        
        if(order_id){
            con.query(`SELECT a.*, b.name, c.offer_name FROM booking_orders a INNER JOIN  restaurants b ON a.restaurant_id = b.id INNER JOIN offers c ON c.offer_id = a.offer_availed_id WHERE order_id= ${order_id}`, function(err, results, fields){
                if(err){
                    return res.status(200).json({code: 500, message: err});
                }
                res.json({code: 200, data: results[0]});
                
            });
        }
        else{
            res.status(200).json({code: 400, message: "Please select orderid."});
        }
    }

}
module.exports = BookingController;