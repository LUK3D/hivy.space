export interface IAnimeResult {
    pagination?: IPagination;
    data?:       IAnime[];
}

export interface IAnime {
    mal_id?:          number;
    url?:             string;
    images?:          IImageTypes;
    trailer?:         ITrailer;
    approved?:        boolean;
    titles?:          ITitle[];
    title?:           string;
    title_english?:   null | string;
    title_japanese?:  null | string;
    title_synonyms?:  string[];
    type?:            string;
    source?:          ISource;
    episodes?:        number | null;
    status?:          IStatus;
    airing?:          boolean;
    aired?:           IAired;
    duration?:        string;
    rating?:          IRating | null;
    score?:           number | null;
    scored_by?:       number | null;
    rank?:            number;
    popularity?:      number;
    members?:         number;
    favorites?:       number;
    synopsis?:        null | string;
    background?:      null | string;
    season?:          null | string;
    year?:            number | null;
    broadcast?:       IBroadcast;
    producers?:       IDemographic[];
    authors?:       IDemographic[];
    licensors?:       IDemographic[];
    studios?:         IDemographic[];
    genres?:          IDemographic[];
    explicit_genres?: any[];
    themes?:          IDemographic[];
    demographics?:    IDemographic[];
    characters?:      ICharacterResult;
}

export interface IAired {
    from?:   Date;
    to?:     Date | null;
    prop?:   IProp;
    string?: string;
}

export interface IProp {
    from?: IDate;
    to?:   IDate;
}

export interface IDate {
    day?:   number | null;
    month?: number | null;
    year?:  number | null;
}

export interface IBroadcast {
    day?:      null | string;
    time?:     null | string;
    timezone?: null | string;
    string?:   null | string;
}

export interface IDemographic {
    mal_id?: number;
    type?:   IDemographicType;
    name?:   string;
    url?:    string;
}

export enum IDemographicType {
    Anime = "anime",
}

export interface IImage {
    image_url?:       string;
    small_image_url?: string;
    large_image_url?: string;
}

export interface IImageTypes {
    jpg?:       IImage;
    webp?:IImage;
}


export enum IRating {
    GAllAges = "G - All Ages",
    PG13Teens13OrOlder = "PG-13 - Teens 13 or older",
}

export enum ISource {
    Game = "Game",
    Manga = "Manga",
    Original = "Original",
    Other = "Other",
}

export enum IStatus {
    CurrentlyAiring = "Currently Airing",
    FinishedAiring = "Finished Airing",
}

export interface ITitle {
    type?:  ITitleType;
    title?: string;
}

export enum ITitleType {
    Default = "Default",
    English = "English",
    French = "French",
    German = "German",
    Japanese = "Japanese",
    Spanish = "Spanish",
    Synonym = "Synonym",
}

export interface ITrailer {
    youtube_id?: null | string;
    url?:        null | string;
    embed_url?:  null | string;
    images?:     IImages;
}

export interface IImages {
    image_url?:         null | string;
    small_image_url?:   null | string;
    medium_image_url?:  null | string;
    large_image_url?:   null | string;
    maximum_image_url?: null | string;
}

export interface IPagination {
    last_visible_page?: number;
    has_next_page?:     boolean;
    current_page?:      number;
    items?:             Items;
}

export interface Items {
    count?:    number;
    total?:    number;
    per_page?: number;
}




export interface ICharacterResult {
    data?: ICharacter[];
}

export interface ICharacter {
    character?: Character;
    role?:      Role;
}

export interface Character {
    mal_id?: number;
    url?:    string;
    images?: ICharacterImageTypes;
    name?:   string;
}

export interface ICharacterImageTypes {
    jpg?:  Jpg;
    webp?: Webp;
}

export interface Jpg {
    image_url?: string;
}

export interface Webp {
    image_url?:       string;
    small_image_url?: string;
}

export enum Role {
    Main = "Main",
    Supporting = "Supporting",
}

