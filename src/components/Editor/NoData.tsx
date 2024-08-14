import { Empty } from 'antd';
import './style.css';
import { useLocalization } from '../../store/localization.context';

interface NoDataProps {
  style?: React.CSSProperties;
  className?: string;
}

export const NoData = ({ style, className }: NoDataProps) => {
  const { t } = useLocalization();
  return (
    <div style={style} className={className} data-testid="noData">
      <Empty description={t.noData} />
    </div>
  );
};
