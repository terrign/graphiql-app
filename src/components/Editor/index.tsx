import { Button } from 'antd';
import EditorHeader from './EditorHeader';
import HeadersEditor from './HeadersEditor';
import QueryEditor from './QueryEditor';
import ResultView from './ResultView';
import VariablesEditor from './VariablesEditor';
import './style.css';
import Compact from 'antd/es/space/Compact';
import { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { useLocalization } from '../../store/localization.context';

export const GraphqlEditor = () => {
  const { t } = useLocalization();
  const [showHeaders, setShowHeaders] = useState<boolean>(false);
  const [showVariables, setShowVariables] = useState<boolean>(false);
  const showHeadersHandler = () => {
    setShowHeaders(true);
    setShowVariables(false);
  };
  const showVariablesHandler = () => {
    setShowHeaders(false);
    setShowVariables(true);
  };

  const closeHandler = () => {
    setShowHeaders(false);
    setShowVariables(false);
  };
  return (
    <div data-testid="graphqlEditor" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <EditorHeader />
      <div className="editor">
        <QueryEditor className="editor__query" />
        <Compact style={{ position: 'absolute', top: 'calc(100% - 37px)', zIndex: 0 }}>
          <Button type="link" onClick={showVariablesHandler}>
            {t.variables}
          </Button>
          <Button type="link" onClick={showHeadersHandler}>
            {t.headers}
          </Button>
        </Compact>
        <div style={{ display: showVariables ? 'flex' : 'none' }} className="editor__variables-container">
          <Button type="text" icon={<CloseOutlined />} className="close-button" onClick={closeHandler} />
          <VariablesEditor />
        </div>
        <div style={{ display: showHeaders ? 'flex' : 'none' }} className="editor__variables-container">
          <Button type="text" icon={<CloseOutlined />} className="close-button" onClick={closeHandler} />
          <HeadersEditor />
        </div>
        <ResultView className="editor__result" />
      </div>
    </div>
  );
};

export default GraphqlEditor;
