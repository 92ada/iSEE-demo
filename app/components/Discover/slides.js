import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Earth from 'mdi-material-ui/Earth';
import CellphoneText from 'mdi-material-ui/CellphoneText';
import Newspaper from 'mdi-material-ui/Newspaper';
import AccountHeart from 'mdi-material-ui/AccountHeart';

import DiscoverVideo from './DiscoverVideo';
import DiscoverVideoContainer from './DiscoverVideoContainer';
import SlideDescription from './SlideDescription';


import devoteamDiscoveryLoopVideoMp4 from 'videos/devoteam-discovery-loop.mp4';
import dimkastDiscoveryLoopVideoMp4 from 'videos/dimkast-discovery-loop.mp4';
import uxpeakDiscoveryLoopVideoMp4 from 'videos/uxpeak-discovery-loop.mp4';

const slides = [
  {
    title: 'demos on a real machine',
    icon: Earth,
    iconStyleName: 'earth',
    subtitle: '',
    view: (
      <span className="medium-8 cell text-align-right indent">
        We have completed a system that can run on the Android machine. The system can get the text of the current interface of the user's mobile phone and trigger the voice input interface through gestures (get the user's voice input and upload the input to the online recognition API of Baidu voice to complete the speech-to-text conversion) to get the user input questions. Then the system sends the article-question package to the server, the server will return the answer to the question to our system and our system will Use a text-to-speech api(Android.speech.tts.TextToSpeech) to read the answer out. The server uses Glove as the word embadding algorithm, and uses BIDAF to train the model, powered by the TensorﬂowServing framework.
        <br />
        <br />
        <Link
          to={{
            pathname: '/discover/1',
            state: { from: window.location.pathname },
          }}
        >
          <Button color="secondary" variant="contained">
            See what we've done
          </Button>
        </Link>
      </span>
    ),
  },
  {
    title: 'demo question 1',
    icon: AccountHeart,
    iconStyleName: 'accountHeart',
    subtitle: '',
    view: (
      <div className="cell grid-x">
        <SlideDescription className="large-2 cell">
          {/*Some people wait for the future.*/}
          {/*<br />*/}
          {/*At <strong>Devoteam</strong>, we make it.*/}
          {/*<br />*/}
          {/*<br />*/}
          {/*I function as a consultant, a leader, a teacher, and a friend. I*/}
          {/*specialize in JavaScript technologies; specifically React.*/}
          {/*<br />*/}
          {/*<br />*/}
          {/*In addition, I have a strong passion for emerging technologies, so I*/}
          {/*function as a Blockchain specialist and actively study and test new*/}
          {/*tools with my team.*/}
          {/*<br />*/}
          {/*<br />*/}
          {/*<Button*/}
            {/*color="secondary"*/}
            {/*variant="contained"*/}
            {/*href="https://lu.devoteam.com"*/}
            {/*target="_blank"*/}
          {/*>*/}
            {/*Visit Devoteam*/}
          {/*</Button>*/}
        </SlideDescription>
        <DiscoverVideoContainer className="large-8 cell">
          <DiscoverVideo controls loop autoPlay muted>
            {/* <source src={devoteamDiscoveryLoopVideo} type="video/webm" /> */}
            <source src={devoteamDiscoveryLoopVideoMp4} type="video/mp4" />
          </DiscoverVideo>
        </DiscoverVideoContainer>
      </div>
    ),
  },
  {
    title: 'demo question 2',
    icon: CellphoneText,
    iconStyleName: 'cellphoneText',
    subtitle: '',
    view: (
      <div className="cell grid-x">
        <SlideDescription className="large-2 cell">
          {/*Why not do what you love?*/}
          {/*<br />*/}
          {/*<strong>Dimkast</strong> makes nightlife easy for everyone.*/}
          {/*<br />*/}
          {/*<br />*/}
          {/*I built the production version of this app using React Native. It's a*/}
          {/*service that connects passionate freelancers with the jobs they love.*/}
          {/*<br />*/}
          {/*<br />*/}
          {/*You'll be able to find <strong>Dimkast</strong> in the Google Play*/}
          {/*Store and Apple App Store. Currently it is only available in*/}
          {/*Luxembourg.*/}
          {/*<br />*/}
          {/*<br />*/}
          {/*<Button*/}
            {/*variant="contained"*/}
            {/*href="https://dimkast.com"*/}
            {/*target="_blank"*/}
          {/*>*/}
            {/*Try Dimkast*/}
          {/*</Button>*/}
        </SlideDescription>
        <DiscoverVideoContainer className="large-8 cell">
          <DiscoverVideo controls loop autoPlay muted>
            <source src={dimkastDiscoveryLoopVideoMp4} type="video/mp4" />
          </DiscoverVideo>
        </DiscoverVideoContainer>
      </div>
    ),
  },
  {
    title: 'demo question 3',
    icon: Newspaper,
    subtitle: '',
    view: (
      <div className="cell grid-x">
        <SlideDescription className="large-2 cell">
          {/*I like to keep up with the latest tech news.*/}
          {/*<br />*/}
          {/*<strong>UXPeak</strong> is an online magazine where writers share*/}
          {/*their thoughts on design, technology, and programming.*/}
          {/*<br />*/}
          {/*<br />*/}
          {/*I built the site for fun, but it has since become an active hub for*/}
          {/*writers from many different backgrounds.*/}
          {/*<br />*/}
          {/*<br />*/}
          {/*<Button*/}
            {/*color="primary"*/}
            {/*variant="contained"*/}
            {/*href="https://uxpeak.com"*/}
            {/*target="_blank"*/}
          {/*>*/}
            {/*Read UXPeak*/}
          {/*</Button>*/}
        </SlideDescription>
        <DiscoverVideoContainer className="large-8 cell">
          <DiscoverVideo controls loop autoPlay muted>
            <source src={uxpeakDiscoveryLoopVideoMp4} type="video/mp4" />
          </DiscoverVideo>
        </DiscoverVideoContainer>
      </div>
    ),
  },
];

export default slides;
