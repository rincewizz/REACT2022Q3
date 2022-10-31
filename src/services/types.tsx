import { ICard } from 'components/Cards/types';

export type OneApiType = {
  getCharacters: (params: {
    limit?: string;
    name?: string;
    sort?: string;
    page?: string;
  }) => Promise<{ docs: ICard[]; total: number; pages: number; page: number }>;
};
