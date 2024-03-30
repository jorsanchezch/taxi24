import Filter from './filter';

export interface GetDriversFilter extends Filter {
    radius?: number;
    isAvailable?: boolean;
  }