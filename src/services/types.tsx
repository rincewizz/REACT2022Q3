import { ICard } from 'components/Cards/types';

export type OneApiType = {
  getCharacters: (params: { limit?: string; name?: string }) => Promise<{ docs: ICard[] }>;
};
