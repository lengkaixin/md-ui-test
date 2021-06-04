import React from 'react';
import { Button } from 'antd';

// import 'antd/dist/antd.less';
import 'antd/lib/button/style';

import './index.less';

const _Button = (props: { children: any }) => {
  const { children, ...antdProps } = props;

  return <Button {...antdProps}>{children}</Button>;
};

export default _Button;
