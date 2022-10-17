import { ICard } from 'types/types';

export type OneApiType = {
  getCharacters: (params: { limit?: string; name?: string }) => Promise<{ docs: ICard[] }>;
};
