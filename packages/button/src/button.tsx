import React from 'react';
import { Button, ButtonProps } from 'antd';
// import { ConfigProvider } from 'antd';

interface IButton {}

export type IButtonProps = ButtonProps & IButton;

const _Button = (props: IButtonProps) => {
  const { ...antdProps } = props;

  return (
    // <ConfigProvider prefixCls="md" iconPrefixCls="mdicon">
    <Button {...antdProps} />
    // </ConfigProvider>
  );
};

export default _Button;
