// SPDX-License-Identifier: MIT

import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  className?: string;
}

function ButtonRow ({ children, className }: Props): React.ReactElement<Props> {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default React.memo(styled(ButtonRow)`
  margin: 0.5rem 0;
  text-align: right;

  button+button {
    margin-left: 0.5rem;
  }

  & + .ui--Section {
    margin-top: 0.5rem;
  }
`);
