import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { GetPasswordType, IAppSdk } from '@tonkeeper/core/dist/AppSdk';
import { AppKey } from '@tonkeeper/core/dist/Keys';
import { AuthState, defaultAuthState } from '@tonkeeper/core/dist/entries/password';
import { useStorage } from '../hooks/storage';
import { QueryKey } from '../libs/queryKey';
import { getPasswordByNotification } from '../pages/home/UnlockNotification';

export const useAuthState = () => {
    const storage = useStorage();
    return useQuery([QueryKey.password], async () => {
        const auth = await storage.get<AuthState>(AppKey.PASSWORD);
        return auth ?? defaultAuthState;
    });
};

export const useMutateAuthState = () => {
    const storage = useStorage();
    const client = useQueryClient();
    return useMutation<void, Error, AuthState>(async state => {
        await storage.set(AppKey.PASSWORD, state);
        await client.invalidateQueries([QueryKey.password]);
    });
};

export const useLookScreen = () => {
    const storage = useStorage();
    return useQuery([QueryKey.lock], async () => {
        const lock = await storage.get<boolean>(AppKey.LOCK);
        return lock ?? false;
    });
};

export const useMutateLookScreen = () => {
    const storage = useStorage();
    const client = useQueryClient();
    return useMutation<void, Error, boolean>(async value => {
        await storage.set(AppKey.LOCK, value);
        await client.invalidateQueries([QueryKey.lock]);
    });
};

export const getWalletPassword = async (sdk: IAppSdk, type?: GetPasswordType) => {
    const auth = await sdk.storage.get<AuthState>(AppKey.PASSWORD);
    if (!auth) {
        throw new Error('Auth not defined');
    }
    const password = await getPasswordByNotification(sdk, auth, type);
    return password;
};
