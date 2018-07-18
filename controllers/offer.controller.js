var { con } = require('./../server/mysql_connect');

class OfferController{
    constructor(){

    }

    getAllOffers(req, res){
        if(req.params.restaurantId){
            con.query(`SELECT * from offers where restaurant_id = ${req.params.restaurantId};`, function(err, results, fields){
                if(err){
                    return res.status(200).json({code: 500, err: err});
                }
                return res.json({code: 200, data: results});
            });
        }
        else{
            return res.json({code: 400, message: "Please enter restaurant id"});
        }
        
    }
    getOfferDetail(req, res){
        if(req.params.offerId){
            con.query(`SELECT * FROM offers WHERE offer_id= ${req.params.offerId}`, function(err, results, fields){
                if(err){
                    return res.status(200).json({code: 500, err: err});
                }
                
                res.json({code: 200, data: results});
            });
        }
        else{
            res.status(200).json({code: 400, message: "Please select offer id"});
        }
    }

}
module.exports = OfferController;