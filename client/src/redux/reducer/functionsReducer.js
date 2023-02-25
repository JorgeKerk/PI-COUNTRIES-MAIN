const applyOrderCountries = ( order, countries )=>{
    const typeOrder = [order[0]]

    return order[1] === 'ascending'
            ? [...countries.sort( ( country, nextCountry )=> {
                if( country[ typeOrder ] > nextCountry[ typeOrder ] ) return 1
                if( country[ typeOrder ] < nextCountry[ typeOrder ] ) return -1
                return 0
            })]
            : [...countries.sort( ( country, nextCountry )=> {
                if( country[ typeOrder ] > nextCountry[ typeOrder ] ) return -1
                if( country[ typeOrder ] < nextCountry[ typeOrder ] ) return 1
                return 0
            })]
}

const applyFilterAndOrderCountries = ( { continents, activity, order }, activities, countries )=>{
    let countriesFiltered = countries

    if( continents.length )
        countriesFiltered = countriesFiltered.filter( country => continents.includes( country.continent ) )
    
    if( activity !== 'All' ) {
        const countriesActivity = activities
            .find( activityFinded => activityFinded.name === activity )
            .Countries.map( countryActivity => countryActivity.id ) 
        
        countriesFiltered = countriesFiltered.filter( country => countriesActivity.includes( country.id ) )
    }
    
    return applyOrderCountries( order, countriesFiltered )
}

const applyFiltersInCountries = ( newfilter, state, payload )=> {
    if( newfilter ){
        let msgError = ''
        const newCountriesFilterSettings = { 
            ...state.countriesFilterSettings, 
            [ newfilter ]: payload 
        }

        const newCountriesFiltered =applyFilterAndOrderCountries( 
            newCountriesFilterSettings, 
            state.activities, 
            state.countries 
        )

        if( !newCountriesFiltered.length ) msgError = 'Countries not found'

        return { 
                ...state,
                error: msgError, 
                currentPageCountries: 0,
                countriesFilter: newCountriesFiltered, 
                countriesFilterSettings: newCountriesFilterSettings
            } 
    }

    let msgError = ''
    
    const countriesFiltered = applyFilterAndOrderCountries( 
        state.countriesFilterSettings, 
        state.activities, 
        payload 
    )

    if( !countriesFiltered.length ) msgError = 'Countries not found'
    return {
            ...state,
            error: msgError,
            countries: payload, 
            currentPageCountries: 0,
            countriesFilter: countriesFiltered
        }

}

export default applyFiltersInCountries