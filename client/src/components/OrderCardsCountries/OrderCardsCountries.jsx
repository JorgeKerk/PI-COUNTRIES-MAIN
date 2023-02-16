import styles from './OrderCardsCountries.module.css';

const OrderCardsCountries = ()=> {
    return(
        <>
            <h2>Order by</h2>
            <div className= { styles.container } >
                <div className= { styles.subContainer } >
                    <div>
                        <input type= 'radio' id= 'name' name= 'orderBy' value= 'name' checked />
                        <label htmlFor= 'name'> Name</label>
                    </div>
                    <div>
                        <input type= 'radio' id= 'population' name= 'orderBy' value= 'population' />
                        <label htmlFor= 'population'> Population</label>
                    </div>
                </div>
                <div className= { styles.subContainer } >
                    <div>
                        <input type= 'radio' id= 'ascending' name= 'orderByDirection' value= 'ascending' checked />
                        <label htmlFor= 'ascending'> Ascending</label>
                    </div>
                    <div>
                        <input type= 'radio' id= 'descending' name= 'orderByDirection' value= 'descending' />
                        <label htmlFor= 'descending'> Descending</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderCardsCountries