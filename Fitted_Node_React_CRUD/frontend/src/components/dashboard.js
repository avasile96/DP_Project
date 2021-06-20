import Chart from "react-google-charts";
import Component from "react-component-component";
import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";

function Dash_comp() {
    return(
        <section>
            <div className="form">
                <div className="row">
                    <div className="col-lg-6">
                        <Component
                            initialState={{dataLoadingStatus: 'loading', chartData: []}}
                            didMount={async function (component) {
                                const response = await fetch('/dash');
                                const json = await response.json()
                                const chartData = [['Patient\'s Name', 'Body Mass Index']]
                                for (let i = 0; i < json.length; i += 1) {
                                    chartData.push([json[i].name, json[i].bodyMassIndex])
                                }
                                component.setState({
                                    chartData: chartData,
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
                                            title: 'Patient\'s Body Mass Index',
                                            fontSize: 20,
                                            backgroundColor: '#131313',
                                            colors: ['#efff1f'],
                                            titleTextStyle: {color: '#efff1f',
                                                            fontSize: 30},
                                            legend: {textStyle: {color: '#efff1f'},
                                                position: 'none' },
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
                                    <div>Fetching data from database...</div>
                                )
                            }}
                        </Component>
                    </div>
                    <div className="col-lg-6">
                        <Component
                            initialState={{dataLoadingStatus: 'loading', chartData: []}}
                            didMount={async function (component) {
                                const response = await fetch('/dash');
                                const json = await response.json()
                                const chartData = [['Patient\'s Name', 'Blood Pressure']]
                                for (let i = 0; i < json.length; i += 1) {
                                    chartData.push([json[i].name, json[i].bloodPressure])
                                }
                                component.setState({
                                    chartData: chartData,
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
                                            title: 'Patient\'s Blood Pressure',
                                            fontSize: 20,
                                            backgroundColor: '#131313',
                                            colors: ['#efff1f'],
                                            titleTextStyle: {color: '#efff1f',
                                                            fontSize: 30},
                                            legend: {textStyle: {color: '#efff1f'},
                                                position: 'none' },

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
                                    <div>Fetching data from database...</div>
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
                                const response = await fetch('/dash');
                                const json = await response.json()
                                const chartData = [['Patient\'s Name', 'Risk']]

                                for (let i = 0; i < json.length; i += 1) {
                                    chartData.push([json[i].name, json[i].__v])
                                }
                                component.setState({
                                    chartData: chartData,
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
                                            title: 'Patient\'s Cardiac Arrest Risk',
                                            fontSize: 20,
                                            backgroundColor: '#131313',
                                            colors: ['#efff1f'],
                                            titleTextStyle: {color: '#efff1f',
                                                            fontSize: 30},
                                            legend: {textStyle: {color: '#efff1f'},
                                                position: 'none' },
                                            hAxis:
                                                {
                                                    baselineColor: '#131313',
                                                    textStyle: {color: '#efff1f'},
                                                    format: 'percent'
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
                                    <div>Waiting for API...</div>
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

                        <div className="main__content">
                            <button className="main__btn"><Link to = "/pat_del">Delete a Patient</Link></button>
                        </div>

                        <div className="main__content">
                            <button className="main__btn"><Link to = "/pat_up">Update a Patient's Data</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dash_comp;