import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { materialDark } from '@uiw/codemirror-theme-material';

interface EditorProps {
  isJson?: boolean;
  value: string;
  onChange?: (value: string) => void;
  className?: string;
  readOnly?: boolean;
  isLight?: boolean;
}

function Editor({ onChange, isJson, value, className, readOnly, isLight }: EditorProps) {
  const extensions = [];

  if (isJson) {
    extensions.push(json());
  }
  return (
    <CodeMirror
      value={value}
      className={className}
      extensions={extensions}
      theme={isLight ? 'dark' : materialDark}
      onChange={onChange}
      readOnly={readOnly}
      height="100%"
      style={{ flex: '1 1 auto' }}
    />
  );
}
export default Editor;
