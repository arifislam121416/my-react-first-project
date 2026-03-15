import React from 'react';

const Country = ({country}) => {
    console.log(country);
    return (
        <div className='cards'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <h3>Official: {country.name.official} </h3>
            <p>Capital: {country.capital.capital}</p>
           <h2>Region: {country.region.region} </h2>
           <h3>population: {country.population.population} </h3>
        </div>
    );
};

export default Country;