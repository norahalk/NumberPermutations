import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Permutations from '../components/Permutations';
import References from '../components/References';

const Home = () => {
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(async () => {

        setTimeout(() => {
            setPageLoaded(true)
        }, 2000)

    }, []);

    return (
        <div className="body_wrapper">
            {
                pageLoaded ?
                    <>
                        <Menu cClass="custom_container p0" hbtnClass="new_btn" />
                        <Permutations />
                        <References />
                    </> :
                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center" }}>
                        <div style={{ position: "absolute", top: "45%", textAlign: "center" }}>
                            <img src={require('../img/boubyanLogo.png')} width="60%" className="loaderAnimation" />
                        </div>

                    </div>

            }

        </div>
    );
}
export default Home;
