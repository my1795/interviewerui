import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
export class Candidates    extends Component {
    state = {
        candidate: [],
        columns: [
            {
                dataField: 'firstName',
                text: 'First Name',
                filter: textFilter()
            }, {
                dataField: 'lastName',
                text: 'Last Name',
                filter: textFilter(),
                sort: true
            },
            {
                dataField: 'email',
                text: 'Email',
                filter: textFilter(),
                sort: true
            },
            {
                dataField: 'position',
                text: 'Position',
                filter: textFilter(),
                sort: true
            },
            {
                dataField: 'score',
                text: 'Score',
                filter: textFilter(),
                sort: true
            }]
    }

    componentWillMount() {
        axios.get(`hruser/candidatesList?position=software engineer`).then(response => {
            console.log(response.data);
            this.setState({
                candidate: response.data
            });
        });
    }
    render() {
        const options = {
            page: 2,
            sizePerPageList: [ {
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }, {
                text: 'All', value: this.state.candidate.length
            } ],
            sizePerPage: 5,
            pageStartIndex: 0,
            paginationSize: 3,
            prePage: 'Prev',
            nextPage: 'Next',
            firstPage: 'First',
            lastPage: 'Last',

        };
        return (
            <div className="container">
                <div class="row" className="hdr">
                    <div class="col-sm-12 btn btn-info">
                        Candidates
                    </div>
                </div>
                <div  style={{ marginTop: 20 }}>
                    <BootstrapTable
                        striped
                        hover
                        keyField='email'
                        data={ this.state.candidate }
                        columns={ this.state.columns }
                        filter={ filterFactory() }
                        pagination={ paginationFactory(options) }
                    />
                </div>
            </div>
        )
    }
}

export default Candidates