/* External dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

/* Internal dependencies */
import styles from './LoginPage.module.scss';
import PollList from 'components/PollList';
import Login from 'components/Login';

const cx = classNames.bind(styles);

function SignupPage() {
  return (
    <div className={cx('main-layout')}>
      <h1 className={cx('title')}>로그인</h1>
      <Login />
      <Switch>
        <Route path="/poll" component={PollList} />
      </Switch>
    </div>
  );
}

export default SignupPage;