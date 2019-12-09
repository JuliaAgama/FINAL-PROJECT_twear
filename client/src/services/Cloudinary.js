import axios from "axios";

const cloudinary_cfg = {
  cloud_name: "twear",
  upload_preset: "upload-uns"
};

export default class Cloudinary {
  getCategories() {
    return super.get(`categories`).then(res => res.data);
    // .catch(err => err.response.data);
  }
  postUpload(data) {
    console.log("Img changed");
    console.log("File", event.target.files[0]);
    console.log(event.target);
    const dataForm = new FormData();
    dataForm.append("file", data);
    dataForm.append("upload_preset", cloudinary_cfg.upload_preset);
    dataForm.append("tags", "unsorted");

    axios({
      method: "post",
      url: `https://api.cloudinary.com/v1_1/${cloudinary_cfg.cloud_name}/image/upload/`,
      data: dataForm,
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then(r => {
        console.log("Response", r);
        let imgTest = r.data.public_id;
        let imgUrl = r.data.url;
        console.log(imgTest);
        console.log(imgUrl);
        return ({r.data.public_id,
                r.data.url})
      })
      //.catch(err => console.log("Error", err));
  }
}
