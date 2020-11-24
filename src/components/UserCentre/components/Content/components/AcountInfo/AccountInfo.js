import React from "react";
import { Layout, FormItem, Label, FormInput, Title, Submit } from "../styling";

class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      password: "123456",
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ healthCondition: event.target.value });
  // }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Layout onSubmit={this.handleSubmit}>
        <Title>Account Information</Title>

        <FormItem>
          <Label>Username:</Label>
          <FormInput type="text" defaultValue={this.state.username} />
        </FormItem>
        <FormItem>
          <Label>Password:</Label>
          <FormInput type="text" defaultValue={this.state.password} />
        </FormItem>

        <Submit type="submit" value="Save" />
      </Layout>
    );
  }
}

export default AccountInfo;

// import React from "react";
// import { Upload, message } from "antd";
// import "antd/dist/antd.css";
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => callback(reader.result));
//   reader.readAsDataURL(img);
// }

// function beforeUpload(file) {
//   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//   if (!isJpgOrPng) {
//     message.error("You can only upload JPG/PNG file!");
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error("Image must smaller than 2MB!");
//   }
//   return isJpgOrPng && isLt2M;
// }

// class AccountInfo extends React.Component {
//   state = {
//     loading: false,
//   };

//   handleChange = (info) => {
//     if (info.file.status === "uploading") {
//       this.setState({ loading: true });
//       return;
//     }
//     if (info.file.status === "done") {
//       // Get this url from response in real world.
//       getBase64(info.file.originFileObj, (imageUrl) =>
//         this.setState({
//           imageUrl,
//           loading: false,
//         })
//       );
//     }
//   };

//   render() {
//     const { loading, imageUrl } = this.state;
//     const uploadButton = (
//       <div>
//         {loading ? <LoadingOutlined /> : <PlusOutlined />}
//         <div style={{ marginTop: 8 }}>Upload</div>
//       </div>
//     );
//     return (
//       <Upload
//         name="avatar"
//         listType="picture-card"
//         className="avatar-uploader"
//         showUploadList={false}
//         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//         beforeUpload={beforeUpload}
//         onChange={this.handleChange}
//       >
//         {imageUrl ? (
//           <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
//         ) : (
//           uploadButton
//         )}
//       </Upload>
//     );
//   }
// }

// export default AccountInfo;
