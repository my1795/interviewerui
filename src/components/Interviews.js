import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
export class Interviews extends Component {
    state = {
        interviews: [],
        columns: [
            {
                dataField: 'candidateAnswer',
                text: 'Candidate Answer',
                filter: textFilter()
            }, {
                dataField: 'questionScore',
                text: 'Question Score ',
                filter: textFilter(),
                sort: true
            },
            {
                dataField: 'candidateEmail',
                text: 'Email',
                filter: textFilter(),
                sort: true
            },
            {
                dataField: 'questionID',
                text: 'Question ID',
                filter: textFilter(),
                sort: true
            },
            {
                dataField: 'sentiment',
                text: 'Candidate Emotion',
                filter: textFilter(),
                sort: true
            }]
    }

    componentWillMount() {
        axios.get(`hruser/candidateinterviewsAll`).then(response => {
            console.log(response.data);
            this.setState({
                interviews: response.data
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
                text: 'All', value: this.state.interviews.length
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
                        keyField='candidateEmail'
                        data={ this.state.interviews }
                        columns={ this.state.columns }
                        filter={ filterFactory() }
                        pagination={ paginationFactory(options) }
                    />
                </div>
            </div>
        )
    }
}

export default Interviews