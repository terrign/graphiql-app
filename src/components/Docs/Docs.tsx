import { Space } from 'antd';
import './docs.css';

const Docs = ({ visibility }: { visibility: boolean }) => {
  return <Space className={visibility ? 'docs-visible' : 'docs-invisible'}>Button</Space>;
};

export default Docs;
