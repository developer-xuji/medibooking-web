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

  render() {
    const { category, data, handleSelectorChange } = this.props;
    const { allOptions, loading } = this.state;
    console.log("DATA: ", data);
    if (!loading) {
      const currentSelectedValue =
        category === "languages"
          ? data.map((value) => value.languageName)
          : data.map((value) => value.specializationName);

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

export default MultiSelector;
