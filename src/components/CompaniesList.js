import React from 'react';
import './style/CompaniesList.css';

const CompaniesList = React.memo(props => {
    return (
        <section className="companies-list">
            <h2>Companies</h2>
            <hr />
            <ul>
                {props.companies.map(company => (
                    <li key={company.id}>
                        <img src={company.logo} alt={company.name}/>
                        <span>{company.name}</span>
                        <span>{company.type}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
});

export default CompaniesList;
