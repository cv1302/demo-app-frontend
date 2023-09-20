import { Component } from "react";
import { Card, Table } from "antd";
import { contactColumns } from "../constants/table-column";

type Props = {
  contactData: any;
  handleRowClick: (record: any) => void;
};

type State = {};

export default class Result extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card title="Result">
        <Table
          onRow={(record) => ({
            onClick: () => this.props.handleRowClick(record),
          })}
          dataSource={this.props.contactData}
          columns={contactColumns}
          tableLayout="fixed"
        />
      </Card>
    );
  }
}
