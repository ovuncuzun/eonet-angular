export interface EonetRoot {
    title: string;
    description: string;
    link: string;
    events?: (Events)[] | null;
}

export interface Events {
    id: string;
    title: string;
    description: string;
    link: string;
    categories?: (Categories)[] | null;
    sources?: (Sources)[] | null;
    geometries?: (Geometries)[] | null;
}

export interface Categories {
    id: number;
    title: string;
    description: string;
    link: string;
}

export interface Sources {
    id: string;
    url: string;
}

export interface Geometries {
    date: string;
    type: string;
    coordinates?: (number | ((number)[] | null)[] | null)[] | null;
}

