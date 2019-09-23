import React from 'react';
import './style/Search.css';

function CompanySearch(props) {
    return (
        <section className="search">
            <div className="search-input">
                <input type="text" value={props.filter} onChange={props.onSearchChanged}
                       placeholder={'Search by Company Name'}/>
            </div>
        </section>
    );
}

export default CompanySearch;