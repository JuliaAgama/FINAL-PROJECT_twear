import React, {useState, useEffect} from 'react';

import AdminSideBar from '../../../AdminPage/AdminSideBar';

const manageList = [
    {title: 'products', url: 'products'},
    {title: 'categories', url: 'categories'},
    {title: 'options sets (colors, sizes)', url: 'options'}];

const LayoutAdmin = (props) => {

    let [active, setActive] = useState(false);

    // const onClick = (ind) => {
    //     setActive(true);
    // }

    useEffect((prevActive)=> {
        if (prevActive !== active) {
            setActive(true);
            console.log('' );
        }
    },[active]);

    return (
        <>
        <div className="wrapper pt-5">
            <div className="row">
                <div className="col-lg-3">
                    <AdminSideBar
                        active={active}
                        items={manageList}
                        //items={props.manageList}
                        />
                </div>
                <div className="col-lg-9"></div>
                {/* <div className="col-lg-9">{props.children}</div> */}
            </div>
            <div className="main-content mt-3">{props.children}</div>
        </div>
        </>
    );
}

export default LayoutAdmin;
