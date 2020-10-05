import React from 'react';
import Menu from '../components/Menu';
import Permutations from '../components/Permutations';
import References from '../components/References';

const Home = () => {
    return (
        <div className="body_wrapper">
            <Menu cClass="custom_container p0" hbtnClass="new_btn" />
            <Permutations />
            <References />
        </div>
    );
}
export default Home;
