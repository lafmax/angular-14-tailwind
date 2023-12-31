import { createStore, select, withProps } from '@ngneat/elf';

export interface UserStoreProps {
    id: number;
    data: {
        nombre: string,
        edad: number
    }
}

export const store = createStore({ name: 'userStore' }, withProps<UserStoreProps>({id: 2, data: {nombre: 'jaime', edad: 34
} }));

export const user = store.pipe(select((state) => state.data));

export function updateUser(data: UserStoreProps['data']) {
    store.update((state) => ({
        ...state,
        data,
    }));
}

