import { Geometry } from 'geojson';
import Model from 'src/domain/models/model';
import { faker } from '@faker-js/faker';
import { Formatter } from 'src/shared/utils/formatter';
import { Coord } from 'src/shared/types';
export default abstract class Factory<TModel extends Model> {
    abstract fake(): TModel;

    public static makeMany(ids: number[], factory: { new(): any }) {
        return ids.map(id => { return this.make(id, factory); });
    }

    public static make(id: number, factory: { new(): any }) {
        const instance = new factory();
        instance.id = id;
        return instance;
    }

    protected fakeGeo(options?: {
        origin?: Coord;
        radius?: number;
        isMetric?: boolean;
    }): Geometry {
        const coords: Coord = faker.location.nearbyGPSCoordinate(options);

        return Formatter.toPoint(coords[0], coords[1]);
    }
}