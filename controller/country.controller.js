const conexion = require('../db/config');

const contrySouthAmerica = async (req,res)=>{

    try {
        let sql = 'select Name, Continent, GNP  from country where Region = "South America" '
        await conexion.query(sql,(err,rows,fields) => {
            if (err) throw err;
            res.json(rows);   
       })      
    } catch (error) {
        return res.status(500).json({msg: error});   
    }

  
}

const contrycentralAmerica = async (req,res)=>{

    try {
        let sql = 'select Name, Continent, GNP  from country where Region = "Central America" '
        await conexion.query(sql,(err,rows,fields) => {
            if (err) throw err;
            res.json(rows);   
       })
        
    } catch (error) {
        return res.status(500).json({ msq: error});
        
    }
 
}

module.exports = {
    contrySouthAmerica,
    contrycentralAmerica
}