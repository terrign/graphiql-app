import { Divider, Layout, Typography } from 'antd';
import Link from 'antd/es/typography/Link';
import Paragraph from 'antd/es/typography/Paragraph';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import githubSVG from '../assets/github.svg';
import { developersInfo } from '../utils/developersInfo';
import { useLocalization } from '../store/context';

const Welcome = () => {
  const localization = useLocalization();
  return (
    <Layout>
      <Typography />
      <Title>{localization.text['welcome-page/title']}</Title>
      <Paragraph>{localization.text['welcome-page/paragraph1']}</Paragraph>
      <Paragraph>
        {localization.text['welcome-page/paragraph2']}
        <Paragraph>
          <Text strong>{localization.text['welcome-page/paragraph3']}</Text>
        </Paragraph>
      </Paragraph>
      <Divider />
      <Title level={2}>{localization.text['welcome-page/team-title']}</Title>
      <Paragraph>
        <ul>
          {developersInfo.map((dev, ind) => {
            return (
              <li key={`dev-info${ind}`}>
                <Text code>{localization.text['dev-names'][ind]}</Text>
                <Link href={dev.githubLink} style={{ margin: 0 }}>
                  <img src={githubSVG} alt="github-logo" style={{ width: 23, paddingLeft: 10 }} />
                </Link>
              </li>
            );
          })}
        </ul>
      </Paragraph>
      <Divider />
      <Typography />
    </Layout>
  );
};

export default Welcome;
