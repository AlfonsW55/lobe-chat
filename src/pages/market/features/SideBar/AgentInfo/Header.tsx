import { Avatar, Tag } from '@lobehub/ui';
import { Button, Typography } from 'antd';
import { startCase } from 'lodash-es';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Center } from 'react-layout-kit';

import { useGlobalStore } from '@/store/global';
import { agentMarketSelectors, useMarketStore } from '@/store/market';
import { useSessionStore } from '@/store/session';
import { AgentsMarketItem } from '@/types/market';

import { useStyles } from './style';

const { Link } = Typography;

const Header = memo<AgentsMarketItem>(({ meta, createAt, author, homepage }) => {
  const { t } = useTranslation('market');
  const { styles, theme } = useStyles();

  const { avatar, title, description, tags, backgroundColor } = meta;

  const createSession = useSessionStore((s) => s.createSession);
  const switchSideBar = useGlobalStore((s) => s.switchSideBar);
  const agentItem = useMarketStore(agentMarketSelectors.currentAgentItem);

  return (
    <Center className={styles.container} gap={16}>
      <Avatar
        avatar={avatar}
        background={backgroundColor || theme.colorFillTertiary}
        className={styles.avatar}
        size={100}
      />
      <div className={styles.title}>{title}</div>
      <Center gap={6} horizontal style={{ flexWrap: 'wrap' }}>
        {(tags as string[]).map((tag: string, index) => (
          <Tag
            key={index}
            onClick={() => useMarketStore.setState({ searchKeywords: tag })}
            style={{ margin: 0 }}
          >
            {startCase(tag).trim()}
          </Tag>
        ))}
      </Center>
      <div className={styles.desc}>{description}</div>
      <Link className={styles.author} href={homepage} target={'_blank'}>
        @{author}
      </Link>
      <Button
        block
        onClick={() => {
          if (!agentItem) return;

          createSession({ config: agentItem.config, meta: agentItem.meta });
          switchSideBar('chat');
        }}
        type={'primary'}
      >
        {t('addAgent')}
      </Button>
      <div className={styles.date}>{createAt}</div>
    </Center>
  );
});

export default Header;
