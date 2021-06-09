import React from 'react';
import { Button } from 'antd';

const _Button = (props: { children: any }) => {
  const { ...antdProps } = props;

  return <Button {...antdProps} />;
};

export default _Button;
