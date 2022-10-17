import { OneApiType } from './types';

const host = 'https://the-one-api.dev/v2/';
const token = 'BBrpzk7_8ohFAPGv-4Wl';

export const theOneApi: OneApiType = {
  getCharacters(params) {
    const newParams = { ...params, name: `/${params.name}/i` };
    return fetch(
      `${host}character?${decodeURIComponent(new URLSearchParams(newParams).toString())}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ).then((res) => {
      if (!res.ok) {
        if (res.status === 429) {
          throw Error(res.statusText + '. Try Later.');
        }
        throw Error('Something went wrong');
      }
      return res.json();
    });
  },
};
