import React from 'react'; // ES6 js
import alex from '../dunno.jpg';
import manuel from '../manuel.jpg';



function Abt() {
    return(
        <div className="main" id="about">
            <div className="main__container">
                <div className="main__img--container">
                    <div className="main__img--card"><img src={alex} alt="alex" /></div>
                </div>
                <div className="main__content">
                    <h2>Alexandru Vasile</h2>
                    <p>An explorer, a tinkerer and a team player, always in search of good questions and good answers.
                       Everything that led me up to here has been a wild journey.</p>
                </div>

                <div className="main__img--container">
                    <div className="main__img--card"><img src={manuel} alt="manuel" /></div>
                </div>
                <div className="main__content">
                    <h2>Manuel Ojeda </h2>
                    <p>The Aztec armed forces were typically composed of "those who have gone to war" who possessed
                        only basic military training, and a smaller but still considerable number of
                        professional warriors belonging to the nobility, Manuel is one of them.</p>
                </div>

                <div className="main__img--container">
                    <div className="main__img--card"><img src={manuel} alt="alexandra" /></div>
                </div>
                <div className="main__content">
                    <h2>Alexandra Albu</h2>
                    <p>Isten, áldd meg a magyart
                        Jó kedvvel, bőséggel,
                        Nyújts feléje védő kart,
                        Ha küzd ellenséggel;
                        Bal sors akit régen tép,
                        Hozz rá víg esztendőt,
                        Megbűnhődte már e nép
                        A múltat s jövendőt!</p>
                </div>

            </div>
        </div>
    );
}

export default Abt;