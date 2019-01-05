/**
 *
 * Contact
 *
 */

import React from 'react';
import BookOpenPageVariant from 'mdi-material-ui/BookOpenPageVariant';
import Typist from 'react-typist';

import { backgroundContrastLight } from 'static/Colors';

import SocialMediaButtons from './SocialMediaButtons';
import ContactOptionContainer from './ContactOptionContainer';

const styles = {
  forum: {
    color: backgroundContrastLight,
  },
};

/* eslint-disable react/prefer-stateless-function */
export default class Contact extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="display-flex">
          <div className="flex" />
          <h1>
            <div className="grid-x">
              <Typist className="medium-6 auto cell flex">Reference</Typist>
              <div className="shrink cell">
                <BookOpenPageVariant
                  className="titleIcon"
                  style={styles.bookOpenPageVariant}
                />
              </div>
            </div>
          </h1>
        </div>
        <div className="grid-x">
          <div className="auto cell" />
          <span className="text-align-right medium-10 cell grid-x">
            <div className="cell">
              <br />
              <br />
            </div>
            <ContactOptionContainer className="large-6 cell">
              <div>
                <ul dir="rtl">
                  <li>Blitab, [Online]. Available: http://blitab.com</li>
                  <br />
                  <li>
                    Apple, Voiceover, [Online]. Available:
                    https://www.apple.com/cn /accessibility/iphone/vision
                  </li>
                  <br />
                  <li>
                    Tri Nguyen, Mir Rosenberg, et al. MS MARCO: A Human
                    Generated MAchine Reading COmprehension Dataset. arXiv
                    preprint arXiv:1611.09268v2. 2016
                  </li>
                  <br />
                  <li>
                    Pranav Rajpurkar, Robin Jia, Percy Liang. Know What You Dont
                    Know: Unanswerable Questions for SQuAD. arXiv preprint
                    arXiv:1806.03822v1. 2018
                  </li>
                  <br />
                  <li>
                    Natural Language Computing Group, Microsoft Research Asia.
                    R-NET: MACHINE READING COMPREHENSION WITH SELF-MATCHING
                    NETWORKS/. 2017
                  </li>
                  <br />
                  <li>
                    Yizhong Wang, Kai Liu, et al. Multi-Passage Machine Reading
                    Comprehension with Cross-Passage Answer Verification. arXiv
                    preprint arXiv:1805.02220v2. 2018
                  </li>
                  <br />
                </ul>
              </div>
            </ContactOptionContainer>
            <ContactOptionContainer className="large-6 cell">
              <div>
                <ul dir="rtl">
                  <li>
                    Google, Talkback, [Online]. Available:
                    https://github.com/google/talkback
                  </li>
                  <br />
                  <li>
                    Chin-Yew Lin and Eduard Hovy. Automatic Evaluation of
                    Summaries Using N-gram Co-Occurrence Statistics. Proceedings
                    of HLT-NAACL. 2003
                  </li>
                  <br />
                  <li>
                    Mikolov, Tomas, et al. Efficient Estimation of Word
                    Representations in Vector Space.
                  </li>
                  <br />
                  <li>
                    {' '}
                    R. Jeffrey Pennington and C. Manning. Glove: Global vectors
                    for word representation.
                  </li>
                  <br />
                  <li>
                    {' '}
                    Ilya Sutskever, et al. Sequence to Sequence Learning with
                    Neural Networks. arXiv preprint arXiv:1409.3215. 2014
                  </li>
                  <br />
                  <li>
                    {' '}
                    Xiang Zhang, et al. Character-level Convolutional Networks
                    for Text Classification. arXiv preprint arXiv:1509.01626v3.
                    2016
                  </li>
                  <br />
                  <li>
                    {' '}
                    Minjoon Seo, et al. Bidirectional Attention Flow for Machine
                    Comprehension. arXiv preprint arXiv:1611.01603. 2016
                  </li>
                  <br />
                </ul>
              </div>
            </ContactOptionContainer>
          </span>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
