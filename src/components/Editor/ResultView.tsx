import { Empty } from 'antd';
import { useAppSelector } from '../../store/hooks';
import Editor from './Editor';

const ResultView = ({ className }: { className: string }) => {
  const queryCacheKey = useAppSelector((state) => state.editor.queryCacheKey);
  const error = useAppSelector((state) => state.editor.response);
  const api = useAppSelector((state) => state.api);

  const response = api.queries[queryCacheKey];
  const query = (error || response?.error || response?.data || '') as string | null;

  if (!query || response?.error?.message === 'Rejected') {
    return <Empty />;
  }

  return <Editor readOnly isJson value={query} className={className} />;
};

export default ResultView;
