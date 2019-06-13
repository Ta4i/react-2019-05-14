import { Record, Map } from "immutable";

export const ResourceRecord = Record({
  loading: {}, // restaurantId : true|false
  loaded: {}, // restaurantId : true|false
  error: null,
  entities: Map({})
});

export const arrToMap = (arr, baseMap) => {
  return Map(
    arr.reduce((map, item) => {
      map[item.id] = item;
      return map;
    }, baseMap || {})
  );
};
