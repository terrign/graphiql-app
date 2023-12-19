import { Divider, Layout, Typography } from 'antd';
import Link from 'antd/es/typography/Link';
import Paragraph from 'antd/es/typography/Paragraph';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import githubSVG from '../assets/github.svg';
import { developersInfo } from '../utils/developersInfo';

const Welcome = () => {
  return (
    <Layout>
      <Typography />
      <Title>Welcome Page</Title>
      <Paragraph>
        This is final task for course React Rs School. GraphiQL is a frontend application for GraphQL that allows
        developers to query and manipulate data from their backend server through an intuitive user interface.
      </Paragraph>
      <Paragraph>
        We are looking for new technologies and ready to use them on the go in our projects. We used workload
        segregation by tasks instead of segregation by areas therefore everyone made his own income to every feature in
        this project.
        <Paragraph>
          <Text strong>
            We are ready to help each other on demand. We can spread out to investigate as much as possible and get
            together to share our knowledge.
          </Text>
        </Paragraph>
      </Paragraph>
      <Divider />
      <Title level={2}>Our team</Title>
      <Paragraph>
        <ul>
          {developersInfo.map((dev, ind) => {
            return (
              <li key={`dev-info${ind}`}>
                <Text code>{dev.name}</Text>
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
