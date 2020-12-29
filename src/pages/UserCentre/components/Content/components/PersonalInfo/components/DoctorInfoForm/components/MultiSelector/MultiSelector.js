import { Select } from "antd";
import React from "react";
import styled from "styled-components";
import getLanguages from "../../../../../../../../../../utils/getLanguages";
import getSpecializations from "../../../../../../../../../../utils/getSpecializations";
const Wrappper = styled.div`
  width: 50%;
`;
const Selector = styled(Select)`
  .ant-select-selector {
    border: 1px solid gray !important;
    border-radius: 5px !important;
    padding: 10px;

    :hover {
      border: 1px solid #01a4b7 !important;
    }
  }
`;

// const allLanguages = [
//   "Mandarin Chinese",
//   "Spanish",
//   "English",
//   "Hindi",
//   "Bengali",
//   "Portuguese",
//   "Russian",
//   "Japanese",
//   "Korean",
//   "French",
//   "German",
//   "Vietnamese",
//   "Italian",
// ];
// const allSpecializations = [
//   "Addiction medicine",
//   "Anaesthesia",
//   "Dermatology",
//   "Emergency medicine",
//   "General practice",
//   "Intensive care medicine",
//   "Medical administration",
//   "Obstetrics and gynaecology",
//   "Occupational and environmental medicine",
//   "Ophthalmology",
//   "Paediatrics and child health",
//   "Pain medicine",
//   "Palliative medicine",
//   "Pathology",
//   "Physician",
//   "Psychiatry",
//   "Public health medicine",
//   "Radiation oncology",
//   "Radiology",
//   "Rehabilitation medicine",
//   "Sexual health medicine",
//   "Sport and exercise medicine",
//   "Surgery",
// ];

// console.log(allLanguages2);
const { Option } = Select;

class MultiSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allOptions: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    const getOptionsFunction =
      this.props.category === "languages" ? getLanguages : getSpecializations;
    getOptionsFunction().then((data) => {
      this.setState({
        allOptions: data,
        loading: false,
      });
    });
  }

  // handleChange(value) {
  //   const { category, handleSelectorChange } = this.state;
  //   console.log(this.state);
  //   handleSelectorChange(value, category);
  // }

  render() {
    const { category, data, handleSelectorChange } = this.props;
    const { allOptions, loading } = this.state;
    console.log("DATA: ", data);
    if (!loading) {
      const currentSelectedValue =
        category === "languages"
          ? data.map((value) => value.languageName)
          : data.map((value) => value.specializationName);

      // const children =
      //   category === "languages"
      //     ? allLanguages.map((language) => (
      //         <Option key={language}>{language}</Option>
      //       ))
      //     : allSpecializations.map((specialization) => (
      //         <Option key={specialization}>{specialization}</Option>
      //       ));

      const children =
        category === "languages"
          ? allOptions.map((language) => (
              <Option key={language.languageName}>
                {language.languageName}
              </Option>
            ))
          : allOptions.map((specialization) => (
              <Option key={specialization.specializationName}>
                {specialization.specializationName}
              </Option>
            ));

      // console.log("category & state: ", category, this.state);

      return (
        <Wrappper>
          <Selector
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder={`Please select your ${category}`}
            defaultValue={currentSelectedValue}
            onChange={(value) => {
              const outputValue =
                category === "languages"
                  ? value.map((currentOption) =>
                      allOptions.find(
                        (language) => language.languageName === currentOption
                      )
                    )
                  : value.map((currentOption) =>
                      allOptions.find(
                        (specialization) =>
                          specialization.specializationName === currentOption
                      )
                    );

              handleSelectorChange(outputValue, category);
            }}
          >
            {children}
          </Selector>
        </Wrappper>
      );
    } else {
      return <></>;
    }
  }
}

// const MultiSelector = ({ category, data, handleSelectorChange }) => {
//   const { Option } = Select;
//   const currentSelectedValue =
//     category === "languages"
//       ? data.map((value) => value.languageName)
//       : data.map((value) => value.specializationName);

//   const children =
//     category === "languages"
//       ? allLanguages.map((language) => (
//           <Option key={language}>{language}</Option>
//         ))
//       : allSpecializations.map((specialization) => (
//           <Option key={specialization}>{specialization}</Option>
//         ));

//   function handleChange(value) {
//     handleSelectorChange(value, category);
//     // console.log(value);
//   }

//   return (
//     <Wrappper>
//       <Selector
//         mode="multiple"
//         allowClear
//         style={{ width: "100%" }}
//         placeholder={`Please select your ${category}`}
//         defaultValue={currentSelectedValue}
//         onChange={handleChange}
//       >
//         {children}
//       </Selector>
//     </Wrappper>
//   );
// };

export default MultiSelector;
