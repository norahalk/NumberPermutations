import React from 'react';
import Title from './Title';

const References = () => {
    return (
        <React.Fragment>
            <section className="pb_100" id="ref">
                <div className="container">
                    <Title Title="References" TitleP="Searching for the best solution for a problem is a skill every coder should have" />

                    <div className="centered">
                        <div style={{ display: "inline-block" }} className="col-lg-3">
                            <h4>React Theme:</h4>
                            <p><a href="http://saaslandreact.droitthemes.com/" target="_blank">Saasland React by DroitThemes</a></p>

                        </div>

                        <div style={{ display: "inline-block" }} className="col-lg-6">
                            <h4>Permutations Algorithm:</h4>
                            <p><a href="https://initjs.org/all-permutations-of-a-set-f1be174c79f8" target="_blank">InitJs</a></p>

                        </div>
                        <div style={{ display: "inline-block" }} className="col-lg-3">
                            <h4>Field Validation:</h4>
                            <p><a href="https://stackoverflow.com/questions/58677952/show-min-and-max-length-form-validation-error-in-react" target="_blank">StackOverflow</a></p>
                        </div>



                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}

export default References;