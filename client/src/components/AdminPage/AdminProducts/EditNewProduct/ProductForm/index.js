import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


export default props => {

    // const{productId} = props;

    // let [state, setState] = useState('something');

    // useEffect(()=> {
    //     if(productId === 'newProduct') {
    //         setState('another');
    //     } else {
    //         setState('hmmmm...');
    //     }
    // },[])


    console.log(state);

    return (
        <>
            <h1> THIS IS FORM FOR PRODUCT</h1>
            <div className='container product-form'>

                <form className="text-center border border-light p-5" action="#">

                    <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Title"/>

                    <div className="form-group">
                                <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Description"/>
                    </div>

                    <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Price"/>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01">Upload photo</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01"
                                    aria-describedby="inputGroupFileAddon01" />
                                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>

                    <button className="btn btn-info btn-block" type="submit">Save product</button>

                </form>

            </div>
        </>
    )
}
