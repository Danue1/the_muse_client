import { TrackModel } from './Track';

export class AlbumModel {
  public constructor(
    public readonly name: string,
    public readonly artist: string,
    public readonly tracks: readonly TrackModel[],
  ) {}
}
