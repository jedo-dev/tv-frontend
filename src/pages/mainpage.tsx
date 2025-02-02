import { Col, Layout, Row ,Statistic } from "antd";
import type { StatisticProps } from 'antd';
import { Content, Footer, Header } from "antd/es/layout/layout";
import CountUp from 'react-countup';
const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);
export const MainPage = () => {

  return (
    <Layout >
      <Header className="header" >Header</Header>
      <Content >
        <Row>
          <Col span={8}>
          <Statistic title="Активных пользователей" value={3} formatter={formatter} />
          </Col>
          <Col span={8}>
          <Statistic title="Телеканалов в избранном" value={20} formatter={formatter} />
          </Col>
          <Col span={8}>
          <Statistic title="Телеканалов доступно" value={3700} formatter={formatter} />
          </Col>
        </Row>
      </Content>
      <Footer >Footer</Footer>
    </Layout>
  );
};
