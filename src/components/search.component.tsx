import { Component } from "react";
import { Input, Card, Space, Button } from "antd";
import { contactData } from "../constants/contact";

type Props = {
  setContactData: (data: any) => void;
};

type State = {
  searchText: string;
};

export default class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  /**
   * Event handle when click on search button
   * 
   * @param e : React.FormEvent
   */
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    var filterData = contactData.filter(
      (x) =>
        (x.first_name + " " + x.last_name)
          .toLowerCase()
          .indexOf(this.state.searchText.toLowerCase()) >= 0 ||
        x.company_name
          .toLowerCase()
          .indexOf(this.state.searchText.toLowerCase()) >= 0 ||
        x.address.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0 ||
        x.email.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0
    );
    this.props.setContactData(filterData);
  };

  /**
   * Event handle when Enter text for input
   * 
   * @param e React.ChangeEvent<HTMLInputElement>
   */
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      this.setState({ searchText: e.target.value });
      this.props.setContactData(contactData);
    } else {
      this.setState({ searchText: e.target.value });
    }
  };

  render() {
    return (
      <Card title="Filter">
        <form onSubmit={this.handleSubmit}>
          <Space.Compact style={{ width: "50%" }}>
            <Input
              type="text"
              placeholder="Enter First Name, Last Name, Company,..."
              value={this.state.searchText}
              onChange={this.handleInputChange}
              allowClear={true}
            />
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Space.Compact>
        </form>
      </Card>
    );
  }
}
