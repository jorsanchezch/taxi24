import Filter from "./filter";
import { Geometry } from "geojson";

export interface GetDriversFilter extends Filter {
    amount?: number;
    isAvailable?: boolean;
    radius?: number;
    point?: Geometry;
  }