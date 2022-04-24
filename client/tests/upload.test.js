import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';

import AppWrapper from '../App';
// import Upload from '../Screens/UploadScreen/';

describe('temp', () => {
  it ('should pass', () => {
    expect(1).toBe(1);
  })
})
