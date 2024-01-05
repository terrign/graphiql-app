import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const DocsHeader = ({
  showBtnBack,
  valueBtnBack,
  handleClickBack,
}: {
  showBtnBack: boolean;
  valueBtnBack: string;
  handleClickBack: () => void;
}) => {
  return (
    showBtnBack && (
      <Button onClick={handleClickBack} icon={<ArrowLeftOutlined />}>
        {valueBtnBack}
      </Button>
    )
  );
};

export default DocsHeader;
