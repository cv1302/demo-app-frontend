import { Component } from "react";
import { Space } from "antd";
import { contactData } from "../constants/contact";
import Search from "./search.component";
import Result from "./result.component";
import Details from "./detail.component";

type Props = {};

type State = {
  searchText: string;
  contactData: any;
  contactDetails: any;
};

export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: "",
      contactData: contactData,
      contactDetails: {},
    };
  }

  /**
   * Set detail data when click on row
   * 
   * @param record row data
   */
  handleRowClick = (record: any) => {
    this.setState({ contactDetails: record });
  };

  /**
   * Set data for result table
   * 
   * @param data result data
   */
  setContactData = (data: any) => {
    this.setState({ contactData: data });
  };

  render() {
    const popsSearch = { setContactData: this.setContactData };
    const popsResult = {
      handleRowClick: this.handleRowClick,
      contactData: this.state.contactData,
    };
    const popsDetails = { contactDetails: this.state.contactDetails };
    return (
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Search {...popsSearch} />
        <Result {...popsResult} />
        <Details {...popsDetails} />
      </Space>
    );
  }
}
