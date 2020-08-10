import React, { useState } from 'react';
import Title from './Title';
import { Table } from 'react-bootstrap';

const Permutations = () => {
    const [showResult, setShowResult] = useState(false);
    const [input, setInput] = useState([])
    const [len, setLen] = useState(false);
    const [error, setError] = useState(false);

    const renderPerm = (info) => {
        return (
            <td>{info}</td>
        )
    }

    const renderPermIndex = (info, index) => {
        return (
            <td>{index + 1}</td>
        )
    }
    const permute = (string) => {
        var results = [];

        if (string.length === 1) {
            results.push(string);
            return results;
        }

        for (var i = 0; i < string.length; i++) {
            var firstChar = string[i];
            var charsLeft = string.substring(0, i) + string.substring(i + 1);
            var innerPermutations = permute(charsLeft);
            for (var j = 0; j < innerPermutations.length; j++) {
                results.push(firstChar + innerPermutations[j]);
            }
        }
        return results;
    }

    const testlen = (val) => {
        if (val.length === 0) {
            setLen("Please enter a number");
            setError(false);
        }
        else {
            if (val.length < 2) {
                setLen('Minimum length is 2');
                setError(false);

            } else if (val.length > 6) {
                setLen('Maximum length is 6');
                setError(false);

            } else {
                setError(true);
            }
        }
    }


    return (
        <React.Fragment>
            <section className="seo_subscribe_area sec_pad">
                <div className="container">
                    <Title Title="Permutations" TitleP="Enter a number between 2 and 6 digits" />

                    <div className="row seo_subscribe_form">
                        <div className="input-group col-lg-9">
                            <input placeholder="Enter a number..." type="number" maxLength="6" onChange={e => { return testlen(e.target.value), setInput(e.target.value) }} className="form-control" />
                        </div>
                        <div className="input-group1 col-lg-3">
                            <input type="submit" value="Get Permutations" onClick={() => { return setShowResult(true) }} className="check-btn" />
                        </div>

                        {
                            error ?

                                showResult ?
                                    <>
                                        <div className="col-lg-12">
                                            <Title Title="Result" />
                                            <Title TitleP={"Total Permutations: " + permute(input).length} />
                                        </div>
                                        <div style={{ margin: "auto", overflowX: "auto" }}>
                                            {
                                                <>
                                                    <div>
                                                        {
                                                            <Table striped condensed hover >
                                                                <tbody>
                                                                    <tr>
                                                                        <th style={{ position: "sticky", left: "0" }}>#</th>
                                                                        {permute(input).map(renderPermIndex)}
                                                                    </tr>
                                                                    <tr >
                                                                        <th style={{ position: "sticky", left: "0" }}>Permutation</th>
                                                                        {permute(input).map(renderPerm)}

                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        }
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </>
                                    : <div></div>

                                :
                                <div className="centered">
                                    <div className="col-lg-12">{len}</div>
                                </div>
                        }

                    </div>

                </div>
            </section>
        </React.Fragment >
    )
}

export default Permutations;