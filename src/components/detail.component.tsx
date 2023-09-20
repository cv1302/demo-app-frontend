import { Component } from "react";
import { Col, Row, Input, Card } from "antd";

type Props = {
  contactDetails: any;
};

type State = {};

export default class Details extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card title="Detail">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div>
              <span>First Name</span>
              <Input
                type="text"
                value={this.props.contactDetails["first_name"]}
                contentEditable={false}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <span>Last Name</span>
              <Input
                type="text"
                value={this.props.contactDetails["last_name"]}
                contentEditable={false}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <span>Company Name</span>
              <Input
                type="text"
                value={this.props.contactDetails["company_name"]}
                contentEditable={false}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <span>Address</span>
              <Input
                type="text"
                value={this.props.contactDetails["address"]}
                contentEditable={false}
              />
            </div>
          </Col>
        </Row>
        <br />
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div>
              <span>City</span>
              <Input
                type="text"
                value={this.props.contactDetails["city"]}
                contentEditable={false}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <span>Country</span>
              <Input
                type="text"
                value={this.props.contactDetails["county"]}
                contentEditable={false}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <span>State</span>
              <Input
                type="text"
                value={this.props.contactDetails["state"]}
                contentEditable={false}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <span>Zip</span>
              <Input
                type="text"
                value={this.props.contactDetails["zip"]}
                contentEditable={false}
              />
            </div>
          </Col>
        </Row>
        <br />
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div>
              <span>Phone Number 1</span>
              <Input
                type="text"
                value={this.props.contactDetails["phone1"]}
                contentEditable={false}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <span>Phone Number 2</span>
              <Input
                type="text"
                value={this.props.contactDetails["phone2"]}
                contentEditable={false}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <span>Email</span>
              <Input
                type="text"
                value={this.props.contactDetails["email"]}
                contentEditable={false}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div>
              <span>Website</span>
              <Input
                type="text"
                value={this.props.contactDetails["web"]}
                contentEditable={false}
              />
            </div>
          </Col>
        </Row>
      </Card>
    );
  }
}
