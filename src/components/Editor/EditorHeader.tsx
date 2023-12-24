import { Button, Flex, Input, Tooltip } from 'antd';
import Compact from 'antd/es/space/Compact';
import { SyncOutlined } from '@ant-design/icons';
import { usePrettify } from '../../utils/prettify';
import { useLazyGetDataQuery } from '../../store/api';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setUrl, setQueryCacheKey } from '../../store/editor.slice';

const EditorHeader = () => {
  const prettyHandler = usePrettify();
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.editor.query);
  const variables = useAppSelector((state) => state.editor.variables);
  const headers = useAppSelector((state) => state.editor.headers);
  const url = useAppSelector((state) => state.editor.url);
  const [fetch] = useLazyGetDataQuery();

  const handcleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUrl(event.target.value));
  };

  const runHandler = () => {
    const { queryCacheKey } = fetch({
      document: query,
      variables: JSON.parse(variables),
      headers: JSON.parse(headers),
    });

    dispatch(setQueryCacheKey(queryCacheKey));
  };

  return (
    <Flex gap={10}>
      <Button type="default" onClick={runHandler}>
        Run
      </Button>
      <Button type="default" onClick={prettyHandler}>
        Prettify
      </Button>
      <Compact style={{ width: '100%' }}>
        <Input value={url} onChange={handcleChange} placeholder="https://graphql-endpoint.com" />
        <Tooltip placement="topLeft" title="Re-fetch schema">
          <Button type="default" icon={<SyncOutlined />} />
        </Tooltip>
      </Compact>
    </Flex>
  );
};

export default EditorHeader;
