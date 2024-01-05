const VALID_PASSWORD_MATCHER = /^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\d)(?=.*[\W_~!@#$%^&*+]).{8,}$/;

const FORM_STYLE = {
  maxWidth: 700,
  width: '100%',
  margin: '10dvh auto 0',
};

const FORM_ITEM_LAYOUT = {
  labelCol: {
    sm: { span: 8 },
    xs: { span: 24 },
  },
  wrapperCol: {
    sm: { span: 16 },
    xs: { span: 24 },
  },
};

const TAIL_FORM_ITEM_LAYOUT = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export { FORM_ITEM_LAYOUT, FORM_STYLE, TAIL_FORM_ITEM_LAYOUT, VALID_PASSWORD_MATCHER };
