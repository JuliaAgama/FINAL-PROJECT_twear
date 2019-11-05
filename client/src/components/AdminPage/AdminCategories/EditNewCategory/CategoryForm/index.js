import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


export default props => {

    const{categoryName, topCats, cats} = props;

    let [exists, setExists] = useState(undefined);
    let [displayTops, setDisplayTops] = useState(undefined);
    let [checkedTop, setCheckedTop] = useState(null);

    useEffect(()=> {
        if(categoryName !== 'newTopCategory' && categoryName !== 'newCategory') {
            setExists(categoryName);
        }
    },[categoryName]);

    useEffect(() => {
        if(categoryName === 'newTopCategory' || (topCats.filter((el) => el.title === categoryName).length >0 && categoryName !== 'newCategory')) {
            setDisplayTops('d-none');
        } else{
            setDisplayTops('d-block');
        }
    },[categoryName, cats, topCats]);

    useEffect(() => {
        if (cats.filter((el) => el.title === categoryName).length >0) {
            let topCatToChecked = topCats.filter((el) => el._id === cats.filter((el) => el.title === categoryName)[0].topCatId)[0].title;
            console.log(topCatToChecked);
            setCheckedTop(topCatToChecked)
        }
    }, [categoryName, cats, topCats])
// check defaultChecked (doesn't work properly)

    return (
        <>
            <h1> THIS IS FORM FOR CATEGORY</h1>
            <div className='container product-form'>

                <form className="text-center border border-light p-5">

                    <div className="form-group row">
                        <label htmlFor="inputCategory" className="col-sm-3 col-form-label text-left">Category: </label>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                id="defaultContactFormName"
                                className="form-control text-capitalize"
                                placeholder={categoryName}
                                defaultValue={exists}/>
                        </div>
                    </div>

                    <div className={displayTops}>
                        <fieldset className="form-group">
                            <div className="row">
                                <legend className="col-form-label col-sm-3 pt-0 text-left">In Top Category: </legend>
                                <div className="col-sm-9 text-left">
                                    {topCats.map(topCat =>
                                        <div className="form-check"
                                            key={topCat._id}
                                        >
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="topCategories"
                                                id={topCat.title}
                                                value={topCat.title}
                                                defaultChecked={topCat.title === checkedTop ? 'true' : 'false'}
                                            />
                                            <label className="form-check-label text-capitalize" htmlFor={topCat.title}>
                                                {topCat.title}
                                            </label>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </fieldset>
                    </div>


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

                    <button className="btn btn-info btn-block" type="submit">Save category</button>

                </form>

            </div>
        </>
    )
}
