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
        <input
          type="file"
          name="image-file"
          id="image-file"
          onChange={e => handleChange(e)}
        />

        <div className="d-flex flex-column align-items-center">
          <FormText color="muted">
            Make sure the image being uploaded is a supported format.
          </FormText>
          <ButtonWithLoader type="submit" color="primary">
            Upload
          </ButtonWithLoader>
        </div>
      </FormGroup>
    </Form>
  );
};

export default UploadForm;
