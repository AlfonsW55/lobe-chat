import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { PluginRenderProps } from '@/plugins/type';

import { Result } from './type';

const useStyles = createStyles(({ css, token, cx }) => {
  const title = css`
    margin-top: 4px;
    font-size: 16px;
  `;
  return {
    container: css`
      :not(:last-child) {
        border-bottom: 1px solid ${token.colorBorder};
      }
    `,
    desc: css`
      color: ${token.colorTextTertiary};
    `,
    displayLink: css`
      color: ${token.colorTextQuaternary};
    `,
    favicon: css`
      border-radius: 50%;
    `,
    link: css`
      &:hover {
        .${cx(title)} {
          text-decoration: underline;
        }
      }
    `,
    title,
  };
});

const Render = memo<PluginRenderProps<Result>>(({ content }) => {
  const { styles } = useStyles();
  return (
    <Flexbox gap={8}>
      <Flexbox>
        {content.map((item) => (
          <Flexbox
            className={styles.container}
            distribution={'space-between'}
            horizontal
            key={item.link}
            padding={12}
          >
            <Flexbox>
              <Link className={styles.link} href={item.link!} target={'_blank'}>
                <Flexbox>
                  <Flexbox align={'center'} gap={12} horizontal>
                    {item.favicon && (
                      <img
                        alt={item.title || item.link}
                        className={styles.favicon}
                        height={24}
                        src={item.favicon}
                        width={24}
                      />
                    )}
                    <Flexbox>
                      <Flexbox className={styles.desc}>{item.source}</Flexbox>
                      <Flexbox className={styles.displayLink}>{item.displayed_link}</Flexbox>
                    </Flexbox>
                  </Flexbox>
                  <Flexbox className={styles.title}>{item.title}</Flexbox>
                </Flexbox>
              </Link>
              <Flexbox className={styles.desc}>
                {item.date ? `${item.date} - ${item.content}` : item.content}
              </Flexbox>
            </Flexbox>
          </Flexbox>
        ))}
      </Flexbox>
    </Flexbox>
  );
});
export default Render;
