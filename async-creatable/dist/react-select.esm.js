import 'react';
import 'memoize-one';
import '@emotion/core';
import 'react-dom';
import 'prop-types';
import '../../dist/index-d7e9a1c0.esm.js';
import { S as Select } from '../../dist/Select-090f83c2.esm.js';
import '@emotion/css';
import 'react-input-autosize';
import { m as manageState } from '../../dist/stateManager-149692c5.esm.js';
import { makeAsyncSelect } from '../../async/dist/react-select.esm.js';
import { makeCreatableSelect } from '../../creatable/dist/react-select.esm.js';

var SelectCreatable = makeCreatableSelect(Select);
var SelectCreatableState = manageState(SelectCreatable);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

export default AsyncCreatable;
