export default function(req, res){
    let limit = 4;
    if(req.body.limit !== undefined){        
        console.log(`limit present, using limit`);
        limit = req.body.limit;
    }

    let rng = Math.ceil(Math.random()*1000) % limit;
    return res.status(200).json({
        timestamp: new Date().toLocaleString(),
        winner: rng
    });
}