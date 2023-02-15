const { Country, Activity } = require( '../db' )

const getAllCountries = async ( name )=> {
    let allCountries
    
    allCountries = await Country.findAll()

    if( name ){
        allCountries = allCountries.filter( country => 
            country.name.toLowerCase().includes(name.toLowerCase())
        )
    }
    if( !allCountries.length ) throw Error( `No existe ningún país que en su nombre contenga la palabra '${ name }'.` )

    return allCountries
}

const getCountryById = async ( idPais )=>{
   idPais = idPais.toUpperCase()
    
    if( idPais.length !== 3 ) throw Error( `El id de país '${ idPais }' es incorrecto.`)
    
    const countryById = await Country.findByPk( idPais, 
        { include: { 
            model: Activity,            
            attributes: [ "id","name", "dificulty", "duration", "season" ],
            through: { attributes: [] }
        } } 
        )

    if( !countryById ) throw Error( `El país con id '${ idPais }' no existe.` )
    
    return countryById
}

module.exports = { getAllCountries, getCountryById }