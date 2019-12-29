const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomePageProductsGallerySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        checkedProduct: [{
            itemNo : {
                type: String,
                required: true
            },
            checked : {
                type: Boolean,
                required: true
            }
        }],
        links : {
            womenLinkID: {
                type: String,
                required: true
            },
            menLinkID: {
                type: String,
                required: true
            },
        },
        isShow: {
            type: Boolean,
            default: false,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    { strict: false }
);

module.exports = HomePageProductsGallery = mongoose.model("homePageProductsGallery", HomePageProductsGallerySchema, "homePageProductsGallery");