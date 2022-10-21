export interface IMarker {
  id?: number;
  name?: string;
  geolocation?: IGeolocation
}

export interface IGeolocation {
  latitude?: number;
  longitude?: number;
}

export class Geolocation implements IGeolocation {
  constructor(
    public latitude?: number,
    public longitude?: number,
  ) {
  }
}

export class Marker implements IMarker {
  constructor(
    public id?: number,
    public name?: string,
    public geolocation?: IGeolocation
  ) {
  }
}


