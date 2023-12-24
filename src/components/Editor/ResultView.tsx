import { useAppSelector } from '../../store/hooks';
import Editor from './Editor';

const ResultView = ({ className }: { className: string }) => {
  const query = useAppSelector((state) => state.editor.query);

  return <Editor readOnly isJson value={query} className={className} />;
};

export default ResultView;
