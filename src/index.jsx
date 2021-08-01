import {checkYoutubeAuth} from './checkYoutubeAuth';
import {doLocalAuth} from './doLocalAuth';
import {ACCESS_SCOPE} from './settings';
import React from 'react';
import {render} from 'react-dom';
import {App} from './app';
import './main.css';

function bootstrap() {
  if (!checkYoutubeAuth()) {
    doLocalAuth(ACCESS_SCOPE);
  }
}

bootstrap();

render(<App/>, document.querySelector('#root'));
