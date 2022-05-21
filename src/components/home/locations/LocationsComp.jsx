import LocationCard from './LocationCard';
import SeeMoreComp from './SeeMoreComp';

import './LocationsComp.css'

let LocationsComp = () => {
    return <div className='LocationComp'>
        <div className='locationBody'>
            <div className='locationCompTitle'>Popular localities in and around <span className='cityName'>Hyderabad</span></div>
            <div className='locationCards'>
                <LocationCard locationName="Hyderabad" count="20" link="https://www.koushilmankali.com/" />
                <LocationCard locationName="Hyderabad" count="20" link="https://www.koushilmankali.com/" />
                <LocationCard locationName="Hyderabad" count="20" link="https://www.koushilmankali.com/" />
                <LocationCard locationName="Hyderabad" count="20" link="https://www.koushilmankali.com/" />
                <LocationCard locationName="Hyderabad" count="20" link="https://www.koushilmankali.com/" />
                <LocationCard locationName="Hyderabad" count="20" link="https://www.koushilmankali.com/" />
                <LocationCard locationName="Hyderabad" count="20" link="https://www.koushilmankali.com/" />
                <LocationCard locationName="Hyderabad" count="20" link="https://www.koushilmankali.com/" />
                <SeeMoreComp />
            </div>
        </div>
    </div>
}
export default LocationsComp;