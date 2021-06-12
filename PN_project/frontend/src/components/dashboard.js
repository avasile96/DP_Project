import Chart from "react-google-charts";
import Component from "react-component-component";
import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";

function Dash_comp() {
    useEffect(() =>{
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/dash');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            {items.map(item => (
                <div className="row padding">
                    <div className="alert alert-info rounded-pill" role="alert">
                        <i className="fa fa-user mr-2"/><i>{item.name} have: ({item.bloodPressure}), {item.bodyMassIndex}</i>
                    </div>
                </div>
            ))}
            <div className="form">
                <div className="row">
                    <div className="col-lg-6">
                        <Component
                            initialState={{dataLoadingStatus: 'loading', chartData: []}}
                            didMount={async function (component) {
                                const response = await fetch('/dash');
                                const json = await response.json()
                                const [metadata, data] = json
                                {
                                    console.log(data)
                                }
                                const columns = [
                                    {type: 'string', label: 'name'},
                                ]
                                const rows = [
                                    {type: 'string', label: 'bodyMassIndex'},
                                ]
                                component.setState({
                                    chartData: [columns, ...rows],
                                    dataLoadingStatus: 'ready',
                                })
                            }}
                        >
                            {component => {
                                return component.state.dataLoadingStatus === 'ready' ? (
                                    <Chart
                                        height={400}
                                        chartType="BarChart"
                                        data={component.state.chartData}
                                        options={{
                                            title: 'Debt incurred over time.',
                                            fontSize: 20,
                                            backgroundColor: '#131313',
                                            colors: ['#efff1f'],
                                            titleTextStyle: {color: '#efff1f'},
                                            hAxis:
                                                {
                                                    baselineColor: '#131313',
                                                    textStyle: {color: '#efff1f'}
                                                },
                                            vAxis:
                                                {
                                                    baselineColor: '#2af598',
                                                    gridlines: {color: '#2af598'},
                                                    textStyle: {color: '#efff1f'}
                                                }
                                        }}
                                        rootProps={{'data-testid': '2'}}
                                    />
                                ) : (
                                    <div>Fetching data from API</div>
                                )
                            }}
                        </Component>
                    </div>
                    <div className="col-lg-6">
                        <Component
                            initialState={{dataLoadingStatus: 'loading', chartData: []}}
                            didMount={async function (component) {
                                const COUNTRY_CODE = 'lb'
                                const INDICATOR = 'DT.DOD.DECT.CD'
                                const response = await fetch(
                                    'https://api.worldbank.org/v2/countries/' +
                                    COUNTRY_CODE +
                                    '/indicators/' +
                                    INDICATOR +
                                    '?format=json',
                                )
                                const json = await response.json()
                                const [metadata, data] = json
                                {
                                    /* console.log(data,metadata) */
                                }
                                const columns = [
                                    {type: 'date', label: 'Year'},
                                    {type: 'number', label: 'Debt'},
                                ]
                                let rows = []
                                const nonNullData = data.filter(row => row.value !== null)
                                for (let row of nonNullData) {
                                    const {date, value} = row
                                    rows.push([new Date(Date.parse(date)), value])
                                }
                                component.setState({
                                    chartData: [columns, ...rows],
                                    dataLoadingStatus: 'ready',
                                })
                            }}
                        >
                            {component => {
                                return component.state.dataLoadingStatus === 'ready' ? (
                                    <Chart
                                        height={400}
                                        chartType="BarChart"
                                        data={component.state.chartData}
                                        options={{
                                            title: 'Debt incurred over time.',
                                            fontSize: 20,
                                            backgroundColor: '#131313',
                                            colors: ['#efff1f'],
                                            titleTextStyle: {color: '#efff1f'},
                                            hAxis:
                                                {
                                                    baselineColor: '#131313',
                                                    textStyle: {color: '#efff1f'}
                                                },
                                            vAxis:
                                                {
                                                    baselineColor: '#2af598',
                                                    gridlines: {color: '#2af598'},
                                                    textStyle: {color: '#efff1f'}
                                                }
                                        }}
                                        rootProps={{'data-testid': '2'}}
                                    />
                                ) : (
                                    <div>Fetching data from API</div>
                                )
                            }}
                        </Component>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <Component
                            initialState={{dataLoadingStatus: 'loading', chartData: []}}
                            didMount={async function (component) {
                                const COUNTRY_CODE = 'lb'
                                const INDICATOR = 'DT.DOD.DECT.CD'
                                const response = await fetch(
                                    'https://api.worldbank.org/v2/countries/' +
                                    COUNTRY_CODE +
                                    '/indicators/' +
                                    INDICATOR +
                                    '?format=json',
                                )
                                const json = await response.json()
                                const [metadata, data] = json
                                {
                                    /* console.log(data,metadata) */
                                }
                                const columns = [
                                    {type: 'date', label: 'Year'},
                                    {type: 'number', label: 'Debt'},
                                ]
                                let rows = []
                                const nonNullData = data.filter(row => row.value !== null)
                                for (let row of nonNullData) {
                                    const {date, value} = row
                                    rows.push([new Date(Date.parse(date)), value])
                                }
                                component.setState({
                                    chartData: [columns, ...rows],
                                    dataLoadingStatus: 'ready',
                                })
                            }}
                        >
                            {component => {
                                return component.state.dataLoadingStatus === 'ready' ? (
                                    <Chart
                                        height={400}
                                        chartType="LineChart"
                                        data={component.state.chartData}
                                        options={{
                                            title: 'Debt incurred over time.',
                                            fontSize: 20,
                                            backgroundColor: '#131313',
                                            colors: ['#efff1f'],
                                            titleTextStyle: {color: '#efff1f'},
                                            hAxis:
                                                {
                                                    baselineColor: '#131313',
                                                    textStyle: {color: '#efff1f'}
                                                },
                                            vAxis:
                                                {
                                                    baselineColor: '#2af598',
                                                    gridlines: {color: '#2af598'},
                                                    textStyle: {color: '#efff1f'}
                                                }
                                        }}
                                        rootProps={{'data-testid': '2'}}
                                    />
                                ) : (
                                    <div>Fetching data from API</div>
                                )
                            }}
                        </Component>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-lg-6">
                        <div className="main__content">
                            <h2>Register a Patient</h2>
                            <p>This information is anonymous and in strict concordance with
                                doctor-patient confidentiality laws and regulations</p>
                            <button className="main__btn"><Link to = "/pat_reg">Register a Patient</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dash_comp;