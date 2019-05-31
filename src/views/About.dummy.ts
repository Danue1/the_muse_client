import { AlbumModel } from '@/Models';
import { TrackModel } from '@/Models/Track';

const audioLink = require('../assets/wave_0.mp3');

export const album = new AlbumModel('Lost and Found (EP)', '아이유', [
  new TrackModel(1, '미운 오리', '아이유', audioLink),
  new TrackModel(2, '미아', '아이유', audioLink),
  new TrackModel(3, '있잖아 (feat. 마리오)', '아이유', audioLink),
  new TrackModel(4, 'Feel So Good', '아이유', audioLink),
  new TrackModel(5, 'Every Sweet Day', '아이유', audioLink),
  new TrackModel(6, '미아 (Instrumental)', '아이유', audioLink),
]);
