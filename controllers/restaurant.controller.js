var { con } = require('./../server/mysql_connect');

class RestaurantController{
    constructor(){

    }

    RestaurantsList(req, res){
        con.query('SELECT r.id, r.name, r.features, r.contact, r.address, r.price, count(o.restaurant_id) as offer_count FROM restaurants r LEFT JOIN offers o ON r.id = o.restaurant_id GROUP BY o.restaurant_id, r.id ORDER BY offer_count DESC;', function(err, results, fields){
            if(err){
                return res.status(200).json({code: 500, err: err});
            }
            return res.json({code: 200, data: results});
        });
    }
    getRestaurantDetails(req, res){
        if(req.params.restaurantId){
            let date = new Date();
            con.query(`SELECT r.id, r.name, r.features, r.contact, r.address, r.price, o.*, rt.opening_time, rt.closing_time FROM restaurants r 
                LEFT JOIN offers o ON o.restaurant_id = r.id
                JOIN restaurant_timings rt ON r.id = rt.restaurant_id AND rt.day = ${date.getDay()}
                WHERE r.id= ${req.params.restaurantId}`, function(err, results, fields){
                if(err){
                    return res.status(200).json({code: 500, err: err});
                }
                else if(results.length){
                    let restaurant = {};
                    restaurant.id = results[0].id;
                    restaurant.name = results[0].name;
                    restaurant.address = results[0].address;
                    restaurant.features = results[0].features;
                    restaurant.contact = results[0].contact;
                    restaurant.price = results[0].price;
                    restaurant.opening_time = results[0].opening_time;
                    restaurant.closing_time = results[0].closing_time;
                    restaurant.offers = [];
                    for(let result of results){
                        if(result.offer_id){
                            restaurant.offers.push({
                                offer_id: result.offer_id,
                                offer_name: result.offer_name,
                                discount_val: result.discount_val,
                                start_time: result.start_time,
                                end_time: result.end_time
                            });
                        }
                    }
                    return res.json({code: 200, data: restaurant});
                }
                else{
                    return res.json({code: 400, message: "No restaurant found"});    
                }
                
            });
        }
        else{
            res.status(200).json({code: 400, message: "Please select restaurant id"});
        }
    }
    restaurantWithOffer(req, res){
        if(req.params.restaurantId && req.params.offerId){
            let {restaurantId, offerId} = req.params;
            let date = new Date();
            con.query(`SELECT r.id, r.name, r.features, r.contact, r.address, r.price, o.*, rt.opening_time, rt.closing_time FROM restaurants r 
                LEFT JOIN offers o ON o.restaurant_id = r.id AND o.offer_id = ${offerId}
                JOIN restaurant_timings rt ON r.id = rt.restaurant_id AND rt.day = ${date.getDay()}
                WHERE r.id= ${restaurantId}`, function(err, results, fields){
                    console.log(results);
                if(err){
                    return res.status(200).json({code: 500, err: err});
                }
                else if(results.length){
                    let restaurant = {};
                    restaurant.id = results[0].id;
                    restaurant.name = results[0].name;
                    restaurant.address = results[0].address;
                    restaurant.features = results[0].features;
                    restaurant.contact = results[0].contact;
                    restaurant.price = results[0].price;
                    restaurant.opening_time = results[0].opening_time;
                    restaurant.closing_time = results[0].closing_time;
                    restaurant.offer = {
                        offer_id: results[0].offer_id,
                        offer_name: results[0].offer_name,
                        discount: results[0].discount_val,
                        start_time: results[0].start_time,
                        end_time: results[0].end_time
                    };
                    return res.json({code: 200, data: restaurant});
                }
                else{
                    return res.json({code: 400, message: "No restaurant found"});    
                }
                
            });
        }
        else{
            res.status(200).json({code: 400, message: "Please select restaurant & offer id"});
        }
    }

}
module.exports = RestaurantController;