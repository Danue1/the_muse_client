export class TrackModel {
  public constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly artist: string,
    public readonly audioLink: null | string,
  ) {}
}
