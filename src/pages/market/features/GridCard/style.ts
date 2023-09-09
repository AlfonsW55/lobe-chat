import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => ({
  avatar: css`
    box-shadow: 0 0 0 8px ${token.colorBgContainer};
  `,
  banner: css`
    overflow: hidden;
    height: 64px;
    margin-bottom: -32px;
    background: ${token.colorFill};
  `,
  bannerImg: css`
    filter: blur(40px) saturate(3.2);
  `,
  container: css`
    position: relative;
    overflow: hidden;
    border-radius: 11px;
  `,
  desc: css`
    color: ${token.colorTextDescription};
  `,
  inner: css`
    padding: 16px;
  `,
  title: css`
    overflow: hidden;
    width: 288px;
    font-size: 16px;
    font-weight: 600;
  `,
}));
