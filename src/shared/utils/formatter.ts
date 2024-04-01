import { Geometry } from "geojson";

export class Formatter {
    static toPoint(longitude: number, latitude: number): Geometry {
        return {
            type: 'Point',
            coordinates: [ longitude, latitude ]
        }
    }
}