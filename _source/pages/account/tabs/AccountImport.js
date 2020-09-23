import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import Dropzone from 'react-dropzone';

import { ButtonLargeBlue } from '../../../atoms/button';
// import P from '../../../atoms/paragraph';
import Checkbox from '../../../atoms/checkbox';
import { ErrorMessage, SuccessIllustration } from '../../../atoms/messages';
import Form from '../../../molecules/form';

class AccountImport extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired
  }

  state = {
    files: [],
    error: null,
    success: false,
    pending: false
  }

  handleDrop = (files) => {
    console.log(files);
    this.setState({files});
  }

  handleSubmit = (data) => {
    console.log(data);
    // const { updateUser } = this.props;

    // this.setState({
    //   pending: true,
    //   error: false,
    //   success: false
    // });
  }

  render() {
    const { intl } = this.props;
    const { error, success, pending } = this.state;
    // const onDrop = useCallback((acceptedFiles) => {
    //   console.log(acceptedFiles);
    // }, []);
    // const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
    // const [success, setSuccess] = useState(false);
    // const [error, setError] = useState(null);
    // const [pending, setPending] = useState(false);
    
  
    if (success) {
      <SuccessIllustration message="resend.success" illustration="join-success" width="400" />;
    }
  
    return (
      <>
        <Checkbox
          label={ intl.formatMessage({ id: 'account.exportFavicons' }) }
          id="show-password"
          // onChange={ this.handleCheckboxChange }
          checked={ true }
        />
        <ol className="account__import-steps">
          <li className="account__import-step">
            <FormattedMessage id="account.importStep1" values={ { strong: (msg) => <strong>{msg}</strong> } } />
          </li>
          <li className="account__import-step">
            <FormattedMessage id="account.importStep2" />
          </li>
          <li className="account__import-step">
            <FormattedMessage id="account.importStep3" />
          </li>
        </ol>
        <Form className="account__form" onSubmit={ this.handleSubmit }>
          <Dropzone onDrop={ this.handleDrop }>
            {({getRootProps, getInputProps, isDragActive}) => (
              <section>
                <div { ...getRootProps({
                  'aria-label': 'dies das label'
                }) }>
                  <input { ...getInputProps({
                    name: 'bookmarks'
                  }) } />
                  <div>{
                    isDragActive
                      ? <p>Drop the files here ...</p>
                      : <p>Drag 'n' drop some files here, or click to select files</p>
                  }</div>
                </div>
              </section>
            )}
          </Dropzone>
          <ButtonLargeBlue
            icon="upload"
            type="submit"
            pending={ pending }
            disabled={ pending }
            contentBefore
          >
            <FormattedMessage id="account.import" />
          </ButtonLargeBlue>
          { error && <ErrorMessage message={ error } hasIcon /> }
        </Form>
      </>
    );
  }
}

export default injectIntl(AccountImport);
