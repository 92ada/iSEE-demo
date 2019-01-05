/**
 *
 * Blog
 *
 */

import React from 'react';
import Rebloggr from 'rebloggr';

// import Rebloggr from 'components/Rebloggr';
import ConsoleLine from 'mdi-material-ui/ConsoleLine';
import Forum from 'mdi-material-ui/Forum';
import Typist from 'react-typist';
import Skeleton from 'react-loading-skeleton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import BackgroundAvatar from 'components/BackgroundAvatar';

import BlogWrapper from './BlogWrapper';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const styles = {
  bookOpenPageVariant: {
    marginBottom: '0.5rem',
  },
  input: {
    background: '#fff',
    width: '60%',
    float: 'right',
  },
};

/* eslint-disable react/prefer-stateless-function */
export default class Blog extends React.Component {
  state = { paragraph: null, question: null, answer: null };

  handleParagraph = event => {
    this.setState({ paragraph: event.target.value });
  };

  handleQuestion = event => {
    this.setState({ question: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(
      `http://10.20.77.71:5000/?para=${this.state.paragraph}&q=${
        this.state.question
      }`,
    )
      .then(response => response.text())
      .then(answer =>
        this.setState({ answer }, () => console.log(this.state.answer)),
      );
  };

  render() {
    return (
      <div>
        <BackgroundAvatar />
        <div className="display-flex">
          <div className="flex" />
          <h1>
            <div className="grid-x">
              <Typist className="medium-6 auto cell">
                try to question the computer
              </Typist>
              <div className="shrink cell">
                <Forum
                  className="titleIcon"
                  style={styles.bookOpenPageVariant}
                />
              </div>
            </div>
          </h1>
        </div>
        <br />
        <br />
        <br />
        <div className="display-flex">
          <div className="flex" />
          <div className="medium-8 cell">
            <form onSubmit={this.handleSubmit}>
              <TextField
                multiline
                label="Paragraph"
                variant="filled"
                onChange={this.handleParagraph}
                error
                style={styles.input}
              />
              <TextField
                label="Question"
                variant="filled"
                onChange={this.handleQuestion}
                error
                style={styles.input}
              />
              <br />
              <br />
              <br />
              <br />
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                float="right"
              >
                Submit
              </Button>
              <br />
              <br />
              <br />
              <br />
            </form>
          </div>
        </div>
        Answer: {this.state.answer}
      </div>
    );
  }
}
