import Chart from "react-google-charts";

import { Link } from "react-router-dom";
import React from "react";

function Dash_comp() {
    return(
        <div className="main" id="about">
            <div className="main__container">
                <div className="main__container">
                    <Chart
                        width={800}
                        height={400}
                        chartType="ColumnChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Name', 'SpO2'],
                            ['Acrocanthosaurus (top-spined lizard)', 12.2],
                            ['Albertosaurus (Alberta lizard)', 9.1],
                            ['Allosaurus (other lizard)', 12.2],
                            ['Apatosaurus (deceptive lizard)', 22.9],
                            ['Archaeopteryx (ancient wing)', 0.9],
                            ['Argentinosaurus (Argentina lizard)', 36.6],
                            ['Baryonyx (heavy claws)', 9.1],
                            ['Brachiosaurus (arm lizard)', 30.5],
                            ['Ceratosaurus (horned lizard)', 6.1],
                            ['Coelophysis (hollow form)', 2.7],
                            ['Compsognathus (elegant jaw)', 0.9],
                            ['Deinonychus (terrible claw)', 2.7],
                            ['Diplodocus (double beam)', 27.1],
                            ['Dromicelomimus (emu mimic)', 3.4],
                            ['Gallimimus (fowl mimic)', 5.5],
                            ['Mamenchisaurus (Mamenchi lizard)', 21.0],
                            ['Megalosaurus (big lizard)', 7.9],
                            ['Microvenator (small hunter)', 1.2],
                            ['Ornithomimus (bird mimic)', 4.6],
                            ['Oviraptor (egg robber)', 1.5],
                            ['Plateosaurus (flat lizard)', 7.9],
                            ['Sauronithoides (narrow-clawed lizard)', 2.0],
                            ['Seismosaurus (tremor lizard)', 45.7],
                            ['Spinosaurus (spiny lizard)', 12.2],
                            ['Supersaurus (super lizard)', 30.5],
                            ['Tyrannosaurus (tyrant lizard)', 15.2],
                            ['Ultrasaurus (ultra lizard)', 30.5],
                            ['Velociraptor (swift robber)', 1.8]
                        ]}
                        options={{
                            fontSize: 20,
                            title: 'Number of Patients by Age (and SpO2 count)',
                            legend: { position: 'none' },
                            backgroundColor: '#131313',
                            colors:['#efff1f'],
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
                        legendToggle
                    />
                </div>
                <div className="main__container">
                    <Chart
                        width={800}
                        height={400}
                        chartType="ColumnChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Name', 'SpO2'],
                            ['Acrocanthosaurus (top-spined lizard)', 12.2],
                            ['Albertosaurus (Alberta lizard)', 9.1],
                            ['Allosaurus (other lizard)', 12.2],
                            ['Apatosaurus (deceptive lizard)', 22.9],
                            ['Archaeopteryx (ancient wing)', 0.9],
                            ['Argentinosaurus (Argentina lizard)', 36.6],
                            ['Baryonyx (heavy claws)', 9.1],
                            ['Brachiosaurus (arm lizard)', 30.5],
                            ['Ceratosaurus (horned lizard)', 6.1],
                            ['Coelophysis (hollow form)', 2.7],
                            ['Compsognathus (elegant jaw)', 0.9],
                            ['Deinonychus (terrible claw)', 2.7],
                            ['Diplodocus (double beam)', 27.1],
                            ['Dromicelomimus (emu mimic)', 3.4],
                            ['Gallimimus (fowl mimic)', 5.5],
                            ['Mamenchisaurus (Mamenchi lizard)', 21.0],
                            ['Megalosaurus (big lizard)', 7.9],
                            ['Microvenator (small hunter)', 1.2],
                            ['Ornithomimus (bird mimic)', 4.6],
                            ['Oviraptor (egg robber)', 1.5],
                            ['Plateosaurus (flat lizard)', 7.9],
                            ['Sauronithoides (narrow-clawed lizard)', 2.0],
                            ['Seismosaurus (tremor lizard)', 45.7],
                            ['Spinosaurus (spiny lizard)', 12.2],
                            ['Supersaurus (super lizard)', 30.5],
                            ['Tyrannosaurus (tyrant lizard)', 15.2],
                            ['Ultrasaurus (ultra lizard)', 30.5],
                            ['Velociraptor (swift robber)', 1.8]
                        ]}
                        options={{
                            fontSize: 20,
                            title: 'Number of Patients by Age (and SpO2 count)',
                            legend: { position: 'none' },
                            backgroundColor: '#131313',
                            colors:['#efff1f'],
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
                        legendToggle
                    />
                </div>
                <div className="main__content">

                </div>
                <div className="main__content">
                    <h2>Register a Patient</h2>
                    <p>This information is anonymous and in strict concordance with
                        doctor-patient confidentiality laws and regulations</p>
                    <button className="main__btn"><Link to = "/pat_reg">Register a Patient</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Dash_comp;