export type TStringifyOptions = {
  stringify: {
  addQueryPrefix?: boolean | undefined;
  arrayFormat?: "comma" | "indices" | "brackets" | "repeat"| undefined;
  encode?: boolean| undefined;
  }
}

export type TParseOptions = {
  parse: {
    ignoreQueryPrefix?: boolean | undefined;
    comma?: boolean | undefined;
 }
}

export type TCatalogStore = {
  page: number,
  limit: number,
  sort: any, 
  query: any
}