import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import LoginButton from '@app/features/auth/ui/LoginButton';
import type { MenuProps, StatisticProps } from 'antd';
import { Card, Flex, Layout, Menu, Statistic, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useState } from 'react';
import CountUp from 'react-countup';
import test from '../assets/test.svg';
import ListChannel from '@app/features/listChannel/ui/ListChannel';
const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Главная',
    key: 'main',
    icon: <SettingOutlined />,

  },
  {
    label: 'Телеканалы',
    key: 'channels',
    icon: <MailOutlined />,
  },
  {
    label: 'Релизы',
    key: 'versions',
    icon: <AppstoreOutlined />,
  },


];
export const MainPage = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Layout className='layout'  >
      <Header className="header"  >
        <div className='menu'>
          <div>Tv-programms</div>
          <Menu onClick={onClick} selectedKeys={[current]} className='menu-items' mode="horizontal" items={items} />
        </div>
        <LoginButton />
      </Header>
      <Content className='body' >
        <div className='banner'>
          <Flex justify="center">

            <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
              <div>
                <Typography.Title level={3}>
                  Сервис по парсингу телепрограмм.
                </Typography.Title>
                <Typography.Text >
                  Авторизуйтесь для добавления своих любимых телеканалов. Бэкенд собирает все избранные телеканалы пользователей и сохраняет телепередачи для дальнейшего просмотра.
                </Typography.Text>
              </div>
              <LoginButton />
            </Flex>
            <img
              alt="avatar"
              src={test}


            />
          </Flex>
        </div>
        <div className='statistic-wrapper'>
          <Typography.Title className='statistic-title'> Статистика</Typography.Title>
          <div className='statistic-divider'></div>
          <div className='statistic'>
            <Card style={{ width: 300 }}>
              <Statistic title="Активных пользователей" value={3} formatter={formatter} />
            </Card>
            <Card style={{ width: 300 }}>
              <Statistic title="Телеканалов в избранном" value={20} formatter={formatter} />
            </Card>
            <Card style={{ width: 300 }}>
              <Statistic title="Телеканалов доступно" value={3700} formatter={formatter} />
            </Card>
          </div>
        </div>
        <div className='list-channel'>
          <ListChannel/>
        </div>
      </Content>
      <Footer >Footer</Footer>
    </Layout>
  );
};
