import { ConfigProvider } from 'antd';
import React from 'react';

export const withAntdProvider = (component: () => React.ReactNode) => () =>
  <ConfigProvider>{component()}</ConfigProvider>;
