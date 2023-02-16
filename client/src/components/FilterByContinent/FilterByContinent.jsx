import styles from './FilterByContinent.module.css';

const FilterByContinent = ()=> {
    return(
        <>
            <h2>Filter by Continent</h2>
            <div className= { styles.subContainer }>
                <div>
                    <input type= 'checkbox' id= 'Africa' name= 'filterByContinent' value= 'Africa' />
                    <label htmlFor= 'Africa'> Africa</label>
                </div>
                <div>
                    <input type= 'checkbox' id= 'Antarctica' name= 'filterByContinent' value= 'Antarctica' />
                    <label htmlFor= 'Antarctica'> Antarctica</label>
                </div>
                <div>
                    <input type= 'checkbox' id= 'Asia' name= 'filterByContinent' value= 'Asia' />
                    <label htmlFor= 'Asia'> Asia</label>
                </div>
                <div>
                    <input type= 'checkbox' id= 'Europe' name= 'filterByContinent' value= 'Europe' />
                    <label htmlFor= 'Europe'> Europe</label>
                </div>
                <div>
                    <input type= 'checkbox' id= 'North America' name= 'filterByContinent' value= 'North America' />
                    <label htmlFor= 'North America'> North America</label>
                </div>
                <div>
                    <input type= 'checkbox' id= 'Oceania' name= 'filterByContinent' value= 'Oceania' />
                    <label htmlFor= 'Oceania'> Oceania</label>
                </div>
                <div>
                    <input type= 'checkbox' id= 'South America' name= 'filterByContinent' value= 'South America' />
                    <label htmlFor= 'South America'> South America</label>
                </div>
            </div>
        </>
    )
}

export default FilterByContinent