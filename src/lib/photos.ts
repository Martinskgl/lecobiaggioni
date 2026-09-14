const u = (id: string, w = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  hero: u("photo-1519741497674-611481863552", 2400),
  picnic: u("photo-1519741497674-611481863552", 1600),
  vows: u("photo-1606800052052-a08af7148866", 1600),
  table: u("photo-1519225421980-715cb0215aed", 1600),
  flowers: u("photo-1460978816454-eb22ce39c7d8", 1400),
  dance: u("photo-1520854221256-17451cc331bf", 1600),
  rings: u("photo-1520854221256-17451cc331bf", 1400),
  rio: u("photo-1483728642387-6c3bdd6c93e5", 2000),
  christ: u("photo-1483729558449-99ef03a8ba58", 1600),
  garden: u("photo-1464366400600-7168b8af9bc3", 1600),
  terrace: u("photo-1507525428034-b723cf961d3e", 1600),
  hotel: u("photo-1551882547-ff40c63ea294", 1600),
  suite: u("photo-1566073771259-6a8506099945", 1600),
  boutique: u("photo-1582719478250-c89cae4dc85b", 1600),
  portrait: u("photo-1515934751635-c81c6bc9a2d8", 1400),
  hands: u("photo-1520854221256-17451cc331bf", 1400),
  dinner: u("photo-1470337458703-46ad1756a187", 1600),
  dress: u("photo-1515934751635-c81c6bc9a2d8", 1400),
  suit: u("photo-1507679799987-c73779587ccf", 1400),
  kiss: u("photo-1583939003579-730e3918a45a", 1800),
  aisle: u("photo-1460978816454-eb22ce39c7d8", 1600),
} as const;

export const venuePhotos = {
  xian: photos.rio,
  "cristo-redentor": photos.christ,
  zefira: photos.garden,
  "outros-lugares": photos.terrace,
} as const;

export const chapterPhotos = [
  photos.picnic,
  photos.vows,
  photos.flowers,
  photos.rio,
  photos.table,
  photos.kiss,
] as const;
