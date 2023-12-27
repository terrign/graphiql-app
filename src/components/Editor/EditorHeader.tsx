import { Button, Flex, Input, Tooltip } from 'antd';
import Compact from 'antd/es/space/Compact';
import { SyncOutlined } from '@ant-design/icons';
import { usePrettify } from '../../utils/prettify';
import { useLazyGetDataQuery } from '../../store/api';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setUrl, setQueryCacheKey, setResponse } from '../../store/editor.slice';

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
    try {
      const { queryCacheKey } = fetch({
        document: query,
        variables: variables.trim() ? JSON.parse(variables) : {},
        headers: headers.trim() ? JSON.parse(headers) : {},
      });

      dispatch(setResponse(''));
      dispatch(setQueryCacheKey(queryCacheKey));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(
          setResponse(
            JSON.stringify(
              {
                error: {
                  message: error.message,
                },
              },
              null,
              2,
            ),
          ),
        );
      }
    }
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
