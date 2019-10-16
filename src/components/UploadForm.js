import React from "react";
import { Form, FormGroup, FormText, Button, Input } from "reactstrap";

const UploadForm = ({ handleFile, handleSubmitFile }) => {
  const handleChange = e => {
    handleFile(e.target.files[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSubmitFile();
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <FormGroup>
        <Input type="file" name="image-file" onChange={e => handleChange(e)} />
        <FormText color="muted">
          Make sure the image being uploaded is a supported format.
        </FormText>
      </FormGroup>
      <Button type="submit" color="primary">
        Upload
      </Button>
    </Form>
  );
};

export default UploadForm;
