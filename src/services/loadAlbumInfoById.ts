import wretch from 'wretch';

import { configs } from '@/configs';
import { AlbumModel, TrackModel } from '@/Models';

interface Album {
  readonly title: string;
  readonly artist: string;
  readonly songTracks: SongTrack[];
}

interface SongTrack {
  readonly id: number;
  readonly name: string;
  readonly artist: string;
  readonly audioLink: null | string;
}

export const loadAlbumInfoById = async (id: number) => {
  const { title, artist, songTracks } = await wretch(configs.host)
    .url(`albums/${id}/tracks`)
    .get()
    .json<Album>();

  const album = new AlbumModel(
    title,
    artist,
    songTracks.map(
      ({ id, name, artist, audioLink }) => new TrackModel(id, name, artist, audioLink),
    ),
  );

  return album;
};
