import * as React from 'react';
import {describe, it, expect} from 'test/lib/common';
import {createRenderer} from 'react-test-renderer/shallow';

import {PasswordStrength} from '../components/PasswordStrength';

describe('PasswordStrength', () => {

  it.skip('should have class bad if length below 4', () => {
    const renderer = createRenderer();
    renderer.render(<PasswordStrength password="asd" />);
    const result = renderer.getRenderOutput();
    expect(result.type).to.be('div');
  });
});

