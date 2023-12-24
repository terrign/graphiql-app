import { Flex, Space } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import Title from 'antd/es/typography/Title';
import githubSVG from '../../assets/github.svg';
import rsLogo from '../../assets/rs_school_js.svg';
import { developersInfo } from '../../utils/developersInfo';

const AppFooter = () => {
  return (
    <Footer>
      <Flex justify="space-between">
        <Space>
          {developersInfo.map((dev, ind) => {
            return (
              <Link key={ind} href={dev.githubLink} target="blank" data-testid="link">
                <img src={githubSVG} alt="github-logo" style={{ width: 23, paddingLeft: 10 }} />
              </Link>
            );
          })}
        </Space>
        <Title className="footer-title" level={5} style={{ margin: 'auto' }}>
          React RSS 2023
        </Title>
        <Link data-testid="link" target="blank" href="https://rs.school/react/">
          <img src={rsLogo} alt="rs-logo" style={{ width: 100 }} />
        </Link>
      </Flex>
    </Footer>
  );
};

export default AppFooter;
