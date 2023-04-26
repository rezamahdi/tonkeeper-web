import { useMutation, useQuery } from '@tanstack/react-query';
import {
  ConnectItem,
  ConnectRequest,
  DAppManifest,
} from '@tonkeeper/core/dist/entries/tonConnect';
import { walletVersionText } from '@tonkeeper/core/dist/entries/wallet';
import {
  getManifest,
  getTonConnectParams,
  toTonAddressItemReply,
} from '@tonkeeper/core/dist/service/tonConnect/connectService';
import { saveAccountConnection } from '@tonkeeper/core/dist/service/tonConnect/connectionService';
import { toShortAddress } from '@tonkeeper/core/dist/utils/common';
import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import { useWalletContext } from '../../hooks/appContext';
import { useAppSdk } from '../../hooks/appSdk';
import { useTranslation } from '../../hooks/translation';
import { CheckmarkCircleIcon, ExclamationMarkCircleIcon } from '../Icon';
import { Notification, NotificationBlock } from '../Notification';
import { Body2, Body3, H2, Label2 } from '../Text';
import { Button } from '../fields/Button';
import { ResultButton } from '../transfer/common';

const useConnectMutation = (
  request: ConnectRequest,
  manifest: DAppManifest,
  webViewUrl?: string
) => {
  const wallet = useWalletContext();
  const sdk = useAppSdk();

  return useMutation<ConnectItem[], Error>(async () => {
    const params = await getTonConnectParams(request);

    await saveAccountConnection({
      storage: sdk.storage,
      wallet,
      manifest,
      params,
      webViewUrl,
    });
    const result = [] as ConnectItem[];

    for (let item of request.items) {
      if (item.name === 'ton_addr') {
        result.push(toTonAddressItemReply(wallet));
      }
      if (item.name === 'ton_proof') {
      }
    }
    return result;
  });
};

const Title = styled(H2)`
  text-align: center;
  user-select: none;
`;
const SubTitle = styled(Body2)`
  margin-ton: 4px;
  display: block;
  color: ${(props) => props.theme.textSecondary};
  text-align: center;
  user-select: none;
`;

const Notes = styled(Body3)`
  display: block;
  color: ${(props) => props.theme.textTertiary};
  text-align: center;
  user-select: none;
  max-width: 300px;
`;

const Address = styled.span`
  color: ${(props) => props.theme.textTertiary};
`;

const ImageRow = styled.div`
  display: flex;
  width: 100%;
  gap: 3rem;
  justify-content: center;
`;

const Image = styled.img`
  width: 72px;
  height: 72px;

  border-radius: ${(props) => props.theme.cornerMedium};
`;

const ConnectContent: FC<{
  origin?: string;
  params: ConnectRequest;
  manifest: DAppManifest;
  handleClose: (result?: ConnectItem[]) => void;
}> = ({ params, manifest, origin, handleClose }) => {
  const [done, setDone] = useState(false);

  const wallet = useWalletContext();

  const { t } = useTranslation();

  const { mutateAsync, isLoading, error } = useConnectMutation(
    params,
    manifest,
    origin
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const result = await mutateAsync();
    setDone(true);
    setTimeout(() => handleClose(result), 300);
  };

  return (
    <NotificationBlock onSubmit={onSubmit}>
      <ImageRow>
        <Image src="https://tonkeeper.com/assets/tonconnect-icon.png" />
        <Image src={manifest.iconUrl} />
      </ImageRow>

      <div>
        <Title>{t('ton_login_title').replace('%{name}', manifest.name)}</Title>
        <SubTitle>
          {t('ton_login_caption').replace('%{name}', manifest.url)}{' '}
          <Address>{toShortAddress(wallet.active.friendlyAddress)}</Address>{' '}
          {walletVersionText(wallet.active.version)}
        </SubTitle>
      </div>

      <>
        {done && (
          <ResultButton done>
            <CheckmarkCircleIcon />
            <Label2>{t('send_screen_steps_done_done_label')}</Label2>
          </ResultButton>
        )}
        {error && (
          <ResultButton>
            <ExclamationMarkCircleIcon />
            <Label2>{t('send_publish_tx_error')}</Label2>
          </ResultButton>
        )}
        {!done && !error && (
          <Button
            size="large"
            fullWidth
            primary
            loading={isLoading}
            disabled={isLoading}
            type="submit"
          >
            {t('ton_login_connect_button')}
          </Button>
        )}
      </>
      <Notes>{t('ton_login_notice')}</Notes>
    </NotificationBlock>
  );
};

const useManifest = (params: ConnectRequest | null) => {
  const sdk = useAppSdk();
  const { t } = useTranslation();

  return useQuery(
    ['manifest', params],
    () => {
      sdk.uiEvents.emit('copy', {
        method: 'copy',
        params: t('loading'),
      });

      return getManifest(params!);
    },
    {
      enabled: params != null,
    }
  );
};

export const TonConnectNotification: FC<{
  origin?: string;
  params: ConnectRequest | null;
  handleClose: (result?: ConnectItem[]) => void;
}> = ({ params, handleClose }) => {
  const { data: manifest } = useManifest(params);

  const Content = useCallback(() => {
    if (!params || !manifest) return undefined;
    return (
      <ConnectContent
        origin={origin}
        params={params}
        manifest={manifest}
        handleClose={handleClose}
      />
    );
  }, [origin, params, manifest, handleClose]);

  return (
    <Notification isOpen={manifest != null} handleClose={() => handleClose()}>
      {Content}
    </Notification>
  );
};
