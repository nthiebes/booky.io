import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';

import { ButtonLargeBlue } from '../../../atoms/button';
import P from '../../../atoms/paragraph';
import Checkbox from '../../../atoms/checkbox';
import { ErrorMessage, SuccessIllustration } from '../../../atoms/messages';
import Icon from '../../../atoms/icon';
import Link from '../../../atoms/link';
import Form from '../../../molecules/form';

class AccountImport extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    importBookmarks: PropTypes.func.isRequired
  };

  state = {
    files: null,
    error: null,
    success: false,
    pending: false,
    importAsCollections: true,
    bookmarksCount: 0
  };

  handleCheckboxChange = () => {
    this.setState({
      importAsCollections: !this.state.importAsCollections
    });
  };

  handleAccepted = (files) => {
    this.setState({
      file: files[0]
    });
  };

  readFile = (file, callback) => {
    const reader = new FileReader();

    reader.onload = (event) => callback(event.target.result);

    reader.onerror = () => {
      this.setState({
        pending: false,
        error: 'error.default'
      });
    };

    reader.readAsText(file);
  };

  handleSubmit = () => {
    const { importBookmarks } = this.props;
    const { file, importAsCollections } = this.state;

    if (!file) {
      return;
    }

    this.setState({
      pending: true,
      error: false
    });

    this.readFile(file, (html) => {
      importBookmarks({
        params: {
          importAsCollections,
          bookmarks: html
        },
        onSuccess: ({ count }) => {
          this.setState({
            pending: false,
            success: true,
            bookmarksCount: count
          });
        },
        onError: (error) => {
          this.setState({
            pending: false,
            error
          });
        }
      });
    });
  };

  render() {
    const { intl } = this.props;
    const {
      error,
      success,
      pending,
      importAsCollections,
      bookmarksCount
    } = this.state;

    if (success) {
      return (
        <SuccessIllustration illustration="import">
          <FormattedMessage
            id="account.importSuccess"
            values={{
              home: (
                <Link to="/">
                  <FormattedMessage id="account.importSuccessHome" />
                </Link>
              ),
              count: bookmarksCount
            }}
          />
        </SuccessIllustration>
      );
    }

    return (
      <>
        <Form className="account__form" onSubmit={this.handleSubmit}>
          <P className="import__step">
            <Icon icon="file-download" className="import__step-icon" />
            <FormattedMessage
              id="account.importStep1"
              values={{ strong: (msg) => <strong>{msg}</strong> }}
            />
          </P>
          <div className="import__step">
            <Icon icon="file" className="import__step-icon" />
            <Dropzone
              onDropAccepted={this.handleAccepted}
              accept="text/html"
              maxFiles={1}
              multiple={false}
              disabled={pending}
            >
              {({
                getRootProps,
                getInputProps,
                isDragActive,
                acceptedFiles,
                fileRejections
              }) => (
                <div
                  {...getRootProps({
                    'aria-label': intl.formatMessage({
                      id: 'account.importStep2'
                    }),
                    className: classNames(
                      'import__drop-area',
                      isDragActive && 'import__drop-area--active',
                      acceptedFiles.length > 0 && 'import__drop-area--accepted'
                    )
                  })}
                >
                  <input {...getInputProps()} />
                  {fileRejections.length > 0 && (
                    <ErrorMessage
                      message={`error.${fileRejections[0].errors[0].code}`}
                      className="import__error"
                      hasIcon
                      noAnimation
                    />
                  )}
                  {acceptedFiles.length > 0 ? (
                    <>
                      <Icon size="large" icon="check" color="green" />
                      <P noPadding className="import__file">
                        <Icon icon="file" />
                        <b>{acceptedFiles[0].name}</b>
                      </P>
                    </>
                  ) : (
                    <P noPadding>
                      <FormattedMessage
                        id="account.importStep2"
                        values={{ strong: (msg) => <strong>{msg}</strong> }}
                      />
                    </P>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
          <P className="import__step">
            <Icon icon="upload" className="import__step-icon" />
            <FormattedMessage id="account.importStep3" />
          </P>
          <Checkbox
            label={intl.formatMessage({ id: 'account.importAsCollections' })}
            id="import-as-collections"
            onChange={this.handleCheckboxChange}
            checked={importAsCollections}
            disabled={pending}
          />
          <P>
            <i>
              <FormattedMessage id="account.importNote" />
            </i>
          </P>
          <ButtonLargeBlue
            icon="upload"
            type="submit"
            pending={pending}
            disabled={pending}
            contentBefore
          >
            <FormattedMessage id="account.import" />
          </ButtonLargeBlue>
          {error && <ErrorMessage message={error} hasIcon />}
        </Form>
      </>
    );
  }
}

export default injectIntl(AccountImport);
