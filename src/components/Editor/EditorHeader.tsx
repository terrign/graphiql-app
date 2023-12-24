import { Button, Flex, Input, Tooltip } from 'antd';
import Compact from 'antd/es/space/Compact';
import { SyncOutlined } from '@ant-design/icons';
import { usePrettify } from '../../utils/prettify';

const EditorHeader = () => {
  const prettyHandler = usePrettify();

  const runHandler = () => {};

  return (
    <Flex gap={10}>
      <Button type="default" onClick={runHandler}>
        Run
      </Button>
      <Button type="default" onClick={prettyHandler}>
        Prettify
      </Button>
      <Compact style={{ width: '100%' }}>
        <Input placeholder="https://graphql-endpoint.com" />
        <Tooltip placement="topLeft" title="Re-fetch schema">
          <Button type="default" icon={<SyncOutlined />} />
        </Tooltip>
      </Compact>
    </Flex>
  );
};

export default EditorHeader;
