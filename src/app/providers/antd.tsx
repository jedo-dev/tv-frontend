import { ConfigProvider } from 'antd';
import React from 'react';

export const withAntdProvider = (component: () => React.ReactNode) => () =>
  <ConfigProvider theme={{
    "token": {
      "colorPrimary": "#0D2231",
    }
  }}>{component()}</ConfigProvider>;
