/*
 * @Author: your name
 * @Date: 2021-06-01 17:27:06
 * @LastEditTime: 2021-06-03 13:37:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lerna_demo/packages/button/src/button.tsx
 */
import React from 'react';

import './index.less';

const Button = (props: { children: any }) => {
  const { children } = props;

  return <button className="md-button">{children}</button>;
};

export default Button;
