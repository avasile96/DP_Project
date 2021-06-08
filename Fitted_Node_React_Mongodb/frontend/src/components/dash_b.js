import Chart from "react-google-charts";
import Component from "react-component-component";

import { Link } from "react-router-dom";
import React from "react";

function Dash_comp() {
    return(
        <div className="main">
            <div className="container">
                <div className="justify-content-md-center">
                    <div className="col col-lg-6" class="chart">
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
                    <div className="col col-lg-6" className="chart">
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
                <div className="row align-items-center">
                    <div className="col col-lg-2" className="chart">
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
                    <div className="col">
                        <div className="main__content">
                            <h2>Register a Patient</h2>
                            <p>This information is anonymous and in strict concordance with
                                doctor-patient confidentiality laws and regulations</p>
                            <button className="main__btn"><Link to = "/pat_reg">Register a Patient</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dash_comp;