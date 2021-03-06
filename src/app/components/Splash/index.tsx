import React from 'react';
import { Button } from 'antd';
import { browser } from 'webextension-polyfill-ts';
import './style.less';

interface Props {
  handleContinue(): void;
}

export default class Splash extends React.Component<Props> {
  render() {
    return (
      <div className="Splash">
        <div className="Splash-inner">
          <h2>Joule</h2>
          <h3>Lightning-charge your browser</h3>
          {/* <Logo /> */}
          <ul>
            <li>Send payments in-browser</li>
            <li>Manage channels & transactions</li>
            <li>Auth with a decentralized identity</li>
          </ul>
          <div className="Splash-controls">
            <Button block size="large" type="primary" onClick={this.handleContinue}>
              Get started
            </Button>
          </div>
        </div>
      </div>
    );
  }

  private handleContinue = () => {
    if (process.env.APP_CONTAINER === 'page') {
      this.props.handleContinue();
    } else {
      browser.runtime.openOptionsPage();
    }
  };
}
