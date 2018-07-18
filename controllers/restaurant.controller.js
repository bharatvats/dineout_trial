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
            con.query(`SELECT r.id, r.name, r.features, r.contact, r.address, r.price, o.* FROM restaurants r LEFT JOIN offers o ON o.restaurant_id = r.id WHERE r.id= ${req.params.restaurantId}`, function(err, results, fields){
                if(err){
                    return res.status(200).json({code: 500, err: err});
                }
                console.log(results);
                let restaurant = {};
                
                restaurant.id = results[0].id;
                restaurant.name = results[0].name;
                restaurant.features = results[0].features;
                restaurant.contact = results[0].contact;
                restaurant.price = results[0].price;
                restaurant.id = results[0].id;
                restaurant.offers = [];
                for(let result of results){
                    restaurant.offers.push({
                        offer_id: result.offer_id,
                        oofer_name: result.offer_name,
                        discount: result.discount_val,
                        start_time: result.start_time,
                        end_time: result.end_time
                    });
                }
                res.json({code: 200, data: restaurant});
            });
        }
        else{
            res.status(200).json({code: 400, message: "Please select restaurant id"});
        }
    }

}
module.exports = RestaurantController;