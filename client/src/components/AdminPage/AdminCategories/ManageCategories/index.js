import React from 'react';
import {Link} from "react-router-dom";

import CategoryItem from './CategotyItem';


export default props => {

    const items = [
        {
            _id:"5dc076a11c9d4400005a4ea3",
            title:"dresses",
            topCatId:"5dc075d81c9d4400005a4e9d",
            img:"https://gloimg.rglcdn.com/rosegal/pdm-product-pic/Clothing/2019/08/08/goods-img/1566435426656227786.jpg"
        },
        {
            _id:"5dc077691c9d4400005a4ea5",
            title:"tops",
            topCatId:"5dc075d81c9d4400005a4e9d",
            img:"https://www.lidl.de/media/product/0/2/6/6/6/5/7/crivit-damen-merino-funktionsshirt-zoom.jpg",
        },
        {
            _id:"5dc077891c9d4400005a4ea7",
            title:"trousers",
            topCatId:"5dc075d81c9d4400005a4e9d",
            img:"https://s7d5.scene7.com/is/image/UrbanOutfitters/43708932_010_b?$medium$&qlt=80&fit=constrain"
        },
        {
            _id:"5dc077cd1c9d4400005a4ea9",
            title:"outwear",
            topCatId:"5dc075d81c9d4400005a4e9d",
            img:"http://ru.coldker.com/uploads/201712550/winter-warm-womens-long-coat-fur-collar35397043762.jpg"
        },
        {
            _id:"5dc077e21c9d4400005a4eab",
            title:"underwear",
            topCatId:"5dc075d81c9d4400005a4e9d",
            img:"https://gd.image-gmkt.com/li/727/030/1236030727.g_400-w-st_g.jpg"
        },
        {
            _id:"5dc078321c9d4400005a4eaf",
            title:"sweatshirts",
            topCatId:"5dc075d81c9d4400005a4e9d",
            img:"https://mens-hoodies-sweatshirts.stayhere.review/img.php?img=aHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTg5ekxhdWo4NXVKalNaRnVxNkF3eUZYYXovVkVSU01BLUphcGFuZXNlLUhhcmFqdWt1LUxldHRlci1FbWJyb2lkZXItZm9udC1iLVBhdGNod29yay1iLWZvbnQtSG9vZGllLWZvbnQtYi1Td2VhdHNoaXJ0LWItZm9udC5qcGc="
        },
        {
            _id:"5dc078951c9d4400005a4eb1",
            title:"boots",
            topCatId:"5dc075c91c9d4400005a4e9b",
            img:"https://i.ebayimg.com/images/g/KQcAAOSwU5NdU2sw/s-l300.jpg"
        },
        {
            _id:"5dc078a91c9d4400005a4eb3",
            title:"sneakers",
            topCatId:"5dc075c91c9d4400005a4e9b",
            img:"https://www.dhresource.com/0x0/f2/albu/g6/M01/8F/F3/rBVaSFukymqAV6GQAAOlXgtoLi0042.jpg"
        },
        {
            _id:"5dc078b81c9d4400005a4eb5",
            title:"sandals",
            topCatId:"5dc075c91c9d4400005a4e9b",
            img:"https://lavishluxe.s3.amazonaws.com/product-images/600-600/GREY-STUD-GLADIATOR-SANDALS-2.jpg"
        },
        {
            _id:"5dc079221c9d4400005a4eb7",
            title:"pumps",
            topCatId:"5dc075c91c9d4400005a4e9b",
            img:"https://www.fsjshoes.com/media/catalog/product/cache/1/image/600x600/602f0fa2c1f0d1ba5e241f914e856ff9/b/u/burgundy_peep_toe_heels_pumps_t_strap_stiletto_heel_sandals.jpg"
        },
        {
            _id:"5dc079491c9d4400005a4eb9",
            title:"caps",
            topCatId:"5dc0766c1c9d4400005a4ea1",
            img:"https://static.zumiez.com/skin/frontend/delorum/default/images/ripndip-adidas-carhartt-mens-hats-091919-444x500.jpg"
        },
        {
            _id:"5dc079c61c9d4400005a4ebb",
            title:"scarves",
            topCatId:"5dc0766c1c9d4400005a4ea1",
            img:"https://www.bamboosocksonline.com.au/wp-content/uploads/2018/01/267A7302-Scarves-Group-Web-Resolution-JPEG_preview.jpeg"
        },
        {
            _id:"5dc07a231c9d4400005a4ebd",
            title:"bags",
            topCatId:"5dc0766c1c9d4400005a4ea1",
            img:"https://rukminim1.flixcart.com/image/332/398/jwtkk280/hand-messenger-bag/h/k/4/fsnk107nt-fsnnv001hn-hand-held-bag-speed-x-fashion-original-imafgpzjp9hsfeh3.jpeg?q=50"
        }
    ]

    const {topCategoryId} = props;

    return (
        <>
        <ul className="list-group m-3">
            {items
                .map(item => {
                    if(item.topCatId === topCategoryId) {
                        return <CategoryItem
                            item={item}
                            key={item._id}
                        />
                    }
                }
                )
            }
            <li className="list-group-item">
                <Link to={`/admin/categories/newCategory`}>
                    <button
                        className="btn btn-block btn-lg btn-success text-uppercase"
                        >ADD MORE CATEGORIES
                    </button>
                </Link>
            </li>
        </ul>
        </>
    )
};
