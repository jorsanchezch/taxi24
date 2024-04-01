import { TripStatus } from "src/domain/enums";
import Filter from "./filter";

export interface GetTripsFilter extends Filter {
    status?: TripStatus;
  }