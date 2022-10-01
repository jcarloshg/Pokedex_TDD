// Generated by https://quicktype.io

// prettier-ignore
export interface PokemonPaginationResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

// prettier-ignore
export interface Result {
    name: string;
    url:  string;
}

// prettier-ignore
export interface Pokemon {
    id:         string,
    name:       string,
    picture:    string,
    color?:     string,
}