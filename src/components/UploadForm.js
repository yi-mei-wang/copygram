import React from "react";
import { Form, FormGroup, FormText, Input } from "reactstrap";
import { ButtonWithLoader } from "../styled/ButtonWithLoader";

const UploadForm = ({ handleFile, handleSubmitFile }) => {
  const handleChange = e => {
    e.target.files[0] ? handleFile(e.target.files[0]) : handleFile(null);
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
      <ButtonWithLoader type="submit" color="primary">
        Upload
      </ButtonWithLoader>
    </Form>
  );
};

export default UploadForm;
