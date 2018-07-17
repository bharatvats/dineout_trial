var { con } = require('./../server/mysql_connect');
var Restaurant = {
    RestaurantsList: function(req, res){
        con.query('SELECT id, name, features, contact, address, price FROM restaurants;', function(err, results, fields){
            if(err){
                return res.status(200).json({code: 500, err: err});
            }
            res.json({code: 200, data: results});
        });
    },

    getRestaurantDetails: function(req, res){
        if(req.params.restaurantId){
            con.query(`SELECT id, name, features, contact, address, price FROM restaurants WHERE id= ${req.params.restaurantId}`, function(err, results, fields){
                if(err){
                    return res.status(200).json({code: 500, err: err});
                }
                res.json({code: 200, data: results});
            });
        }
        else{
            res.status(200).json({code: 400, message: "Please select restaurant id"});
        }
    }
};

module.exports = Restaurant;