import { Flex, Space } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import Title from 'antd/es/typography/Title';
import githubSVG from '../../assets/github.svg';
import rsLogo from '../../assets/rs_school_js.svg';

const info = [
  {
    name: 'Alexey Filipovich',
    githubLink: 'https://github.com/terrign',
  },
  {
    name: 'Andrei Zetsmanis',
    githubLink: 'https://github.com/anderskambenders',
  },
  {
    name: 'Yuliya Chekan',
    githubLink: 'https://github.com/juliabel5',
  },
];

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: '#fff' }}>
      <Flex justify="space-between">
        <Space>
          {info.map((dev, ind) => {
            return (
              <Link key={ind} href={dev.githubLink}>
                <img src={githubSVG} alt="github-logo" style={{ width: 23, paddingLeft: 10 }} />
              </Link>
            );
          })}
        </Space>
        <Title level={5}>React RSS 2023</Title>
        <Link href="https://rs.school/react/">
          <img src={rsLogo} alt="rs-logo" style={{ width: 100 }} />
        </Link>
      </Flex>
    </Footer>
  );
};

export default AppFooter;
