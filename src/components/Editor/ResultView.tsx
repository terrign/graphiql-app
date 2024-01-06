import { NoData } from './NoData';
import { Hourglass } from 'react-loader-spinner';
import { useAppSelector } from '../../store/hooks';
import Editor from './Editor';

export const ResultView = ({ className }: { className: string }) => {
  const queryCacheKey = useAppSelector((state) => state.editor.queryCacheKey);
  const error = useAppSelector((state) => state.editor.response);
  const api = useAppSelector((state) => state.api);

  const response = api.queries[queryCacheKey];
  const isLoading = useAppSelector((state) => state.isLoading);
  const query = (error || response?.error || response?.data || '') as string | null;
  if (isLoading) {
    return (
      <div
        style={{
          width: ' calc(50% - 10px)',
          backgroundColor: '#2e3235',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Hourglass />
      </div>
    );
  }
  if (!query || response?.error?.message === 'Rejected') {
    return (
      <NoData
        style={{
          width: ' calc(50% - 10px)',
          backgroundColor: '#2e3235',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    );
  }
  return <Editor readOnly isJson value={query} className={className} />;
};

export default ResultView;
