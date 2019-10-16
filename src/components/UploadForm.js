import React, { useState } from "react";
import { Form, FormGroup, FormText, Input } from "reactstrap";
import { ButtonWithLoader } from "../styled/ButtonWithLoader";

const UploadForm = ({ handleFile, handleSubmitFile }) => {
  const [disabled, setDisabled] = useState(true);

  const handleChange = e => {
    let file = e.target.files[0];

    if (file) {
      handleFile(file);
      setDisabled(false);
    } else {
      handleFile(null);
    }
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
          <ButtonWithLoader type="submit" color="primary" disabled={disabled}>
            Upload
          </ButtonWithLoader>
        </div>
      </FormGroup>
    </Form>
  );
};

export default UploadForm;
