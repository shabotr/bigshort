import React, { useState } from 'react';

import './style/DomainForm.css';
import Card from "./UI/Card/Card";

const DomainForm = React.memo(props => {

    let [inputState, setInputState] = useState({domain: ''});

    const onDomainChanged = (event) => {
        const domain = event.target.value;
        setInputState({domain: domain});
    };

    const submitHandler = event => {
        event.preventDefault();
        props.onAddDomain(inputState);
    };

    return (
        <section className="domain-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="domain">Domain</label>
                        <input type="text" id="domain" value={inputState.domain} onChange={onDomainChanged}/>
                    </div>
                    <div>
                        <button type="submit" onClick={submitHandler}>Add Domain</button>
                    </div>
                </form>
            </Card>
        </section>
    );
});

export default DomainForm;