import wretch from 'wretch';

import { configs } from '@/configs';
import { PreviewAlbumModel } from '@/Models';

interface PreviewAlbum {
  readonly id: string;
  readonly title: string;
  readonly imageLink: string;
}

export const loadPreviewAlbums = async () => {
  const albums = await wretch(configs.host)
    .url('albums')
    .get()
    .json<PreviewAlbum[]>();

  return albums
    .slice(0, 4)
    .map(({ id, title, imageLink }) => new PreviewAlbumModel(id, title, imageLink));
};
