import { Empty } from 'antd';
import './style.css';

interface NoDataProps {
  style?: React.CSSProperties;
  className?: string;
}

export const NoData = ({ style, className }: NoDataProps) => {
  return (
    <div style={style} className={className}>
      <Empty />
    </div>
  );
};
