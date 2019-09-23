import React, {Component} from 'react';
import DomainForm from './DomainForm';
import CompaniesList from "./CompaniesList";
import CompanySearch from "./CompanySearch";

class Companies extends Component {

    state = {
        companies: [],
        filter: ''
    };

    onAddDomain = ({domain}) => {
        fetch(`https://company-stream.clearbit.com/v2/companies/find?domain=${domain}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer sk_30240e2d1dfc1d73d26ab80390d1fd49'
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            const companies = [...this.state.companies];
            companies.push(data);
            this.setState({companies: companies});

        }).catch(error => {
            console.log(error.message);
        });
    };

    filteredCompaniesHandler = (event) => {
        const filter = event.target.value;
        if(this.state.filter !== filter) {
            this.setState({filter: filter})
        }
    };

    render() {
        const {filter, companies} = this.state;
        const companiesList = filter ?
            companies.filter((company) => {
                return company.name.toLowerCase().includes(filter.toLowerCase());
            }) :
            companies;

        return(
            <div className="App">
                <DomainForm onAddDomain={this.onAddDomain}/>

                <section>
                    <CompanySearch filter={this.state.filter} onSearchChanged={this.filteredCompaniesHandler}/>
                    <CompaniesList companies={companiesList} filter={this.state.filter} onSearchChanged={this.filteredCompaniesHandler}/>
                </section>

            </div>
        );
    }
}

export default Companies;