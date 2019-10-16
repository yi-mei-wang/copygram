import React from "react";
import { Form, FormGroup, FormText, Button, Input } from "reactstrap";

class UploadForm extends React.Component {
  handleChange = e => {
    this.props.handleFile(e.target.files[0]);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmitFile();
  };

  render() {
    return (
      <Form onSubmit={e => this.handleSubmit(e)}>
        <FormGroup>
          <Input
            type="file"
            name="image-file"
            onChange={e => this.handleChange(e)}
          />
          <FormText color="muted">
            Make sure the image being uploaded is a supported format.
          </FormText>
        </FormGroup>
        <Button type="submit" color="primary">
          Upload
        </Button>
      </Form>
    );
  }
}

export default UploadForm;
