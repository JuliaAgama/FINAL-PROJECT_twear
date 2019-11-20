import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as topCatActions from '../../../../store/actions/topCats';
import * as categoriesActions from '../../../../store/actions/categories';
import {Link} from "react-router-dom";
import CategoryForm from './CategoryForm';

export default props => {

    const categoryName = props.match.params.categoryName;
    console.log('props: ', props);
    console.log('categoryName from props: ', categoryName);

    const dispatch = useDispatch();
    const topCatsList = useSelector(state => state.topCats.topCats);
    const categoriesList = useSelector(state => state.categories.categories);
    console.log(topCatsList);
    console.log(categoriesList);

    useEffect(() => {
        topCatActions.getAllTopCats()(dispatch);
        categoriesActions.getAllCategories()(dispatch);
    }, [dispatch]);

    const topCats = [
        {
            _id: "5dc075c91c9d4400005a4e9b",
            name: "footwear",
            img: "https://pmcfootwearnews.files.wordpress.com/2018/03/heels.jpg?w=700&h=437&crop=1"
        },
        {
            _id: "5dc075d81c9d4400005a4e9d",
            name: "clothes",
            img: "http://www.asiaone.com/sites/default/files/original_images/May2019/110419_clothes_pixabay.jpg"
        },
        {
            _id: "5dc0766c1c9d4400005a4ea1",
            name: "accessories",
            img: "https://www.brighton.com/photos/product/giant/369560S196912/-/size-os.jpg"
        },
    ];

    const cats = [
        {
            _id:"5dc076a11c9d4400005a4ea3",
            name:"dresses",
            topCatId:"5dc075d81c9d4400005a4e9d",
            img:"https://gloimg.rglcdn.com/rosegal/pdm-product-pic/Clothing/2019/08/08/goods-img/1566435426656227786.jpg"
        },
        {
            _id:"5dc077691c9d4400005a4ea5",
            name:"tops",
            topCatId:"5dc075d81c9d4400005a4e9d",
            img:"https://www.lidl.de/media/product/0/2/6/6/6/5/7/crivit-damen-merino-funktionsshirt-zoom.jpg",
        },
        {
            _id:"5dc077891c9d4400005a4ea7",
            name:"trousers",
            topCatId:"5dc075d81c9d4400005a4e9d",
            img:"https://s7d5.scene7.com/is/image/UrbanOutfitters/43708932_010_b?$medium$&qlt=80&fit=constrain"
        },
        {
            _id:"5dc077cd1c9d4400005a4ea9",
            name:"outwear",
            topCatId:"5dc075d81c9d4400005a4e9d",
            img:"http://ru.coldker.com/uploads/201712550/winter-warm-womens-long-coat-fur-collar35397043762.jpg"
        },
        {
            _id:"5dc077e21c9d4400005a4eab",
            name:"underwear",
            topCatId:"5dc075d81c9d4400005a4e9d",
            img:"https://gd.image-gmkt.com/li/727/030/1236030727.g_400-w-st_g.jpg"
        },
        {
            _id:"5dc078321c9d4400005a4eaf",
            name:"sweatshirts",
            topCatId:"5dc075d81c9d4400005a4e9d",
            img:"https://mens-hoodies-sweatshirts.stayhere.review/img.php?img=aHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTg5ekxhdWo4NXVKalNaRnVxNkF3eUZYYXovVkVSU01BLUphcGFuZXNlLUhhcmFqdWt1LUxldHRlci1FbWJyb2lkZXItZm9udC1iLVBhdGNod29yay1iLWZvbnQtSG9vZGllLWZvbnQtYi1Td2VhdHNoaXJ0LWItZm9udC5qcGc="
        },
        {
            _id:"5dc078951c9d4400005a4eb1",
            name:"boots",
            topCatId:"5dc075c91c9d4400005a4e9b",
            img:"https://i.ebayimg.com/images/g/KQcAAOSwU5NdU2sw/s-l300.jpg"
        },
        {
            _id:"5dc078a91c9d4400005a4eb3",
            name:"sneakers",
            topCatId:"5dc075c91c9d4400005a4e9b",
            img:"https://www.dhresource.com/0x0/f2/albu/g6/M01/8F/F3/rBVaSFukymqAV6GQAAOlXgtoLi0042.jpg"
        },
        {
            _id:"5dc078b81c9d4400005a4eb5",
            name:"sandals",
            topCatId:"5dc075c91c9d4400005a4e9b",
            img:"https://lavishluxe.s3.amazonaws.com/product-images/600-600/GREY-STUD-GLADIATOR-SANDALS-2.jpg"
        },
        {
            _id:"5dc079221c9d4400005a4eb7",
            name:"pumps",
            topCatId:"5dc075c91c9d4400005a4e9b",
            img:"https://www.fsjshoes.com/media/catalog/product/cache/1/image/600x600/602f0fa2c1f0d1ba5e241f914e856ff9/b/u/burgundy_peep_toe_heels_pumps_t_strap_stiletto_heel_sandals.jpg"
        },
        {
            _id:"5dc079491c9d4400005a4eb9",
            name:"caps",
            topCatId:"5dc0766c1c9d4400005a4ea1",
            img:"https://static.zumiez.com/skin/frontend/delorum/default/images/ripndip-adidas-carhartt-mens-hats-091919-444x500.jpg"
        },
        {
            _id:"5dc079c61c9d4400005a4ebb",
            name:"scarves",
            topCatId:"5dc0766c1c9d4400005a4ea1",
            img:"https://www.bamboosocksonline.com.au/wp-content/uploads/2018/01/267A7302-Scarves-Group-Web-Resolution-JPEG_preview.jpeg"
        },
        {
            _id:"5dc07a231c9d4400005a4ebd",
            name:"bags",
            topCatId:"5dc0766c1c9d4400005a4ea1",
            img:"https://rukminim1.flixcart.com/image/332/398/jwtkk280/hand-messenger-bag/h/k/4/fsnk107nt-fsnnv001hn-hand-held-bag-speed-x-fashion-original-imafgpzjp9hsfeh3.jpeg?q=50"
        }
    ]


    return (
        <>
        <div className="m-5">
            <CategoryForm
                categoryName={categoryName}
                topCats={topCats}
                cats={cats}
            />
            <Link to={`/admin/categories`}>
                <button className="btn btn-secondary text-uppercase m-5">Back</button>
            </Link>
        </div>
        </>
    )
}
