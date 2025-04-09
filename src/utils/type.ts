export interface CarouselType {
    id: number,
    title: string,
    category: string,
    author: string,
    date: string,
    thumbnail: string,
}

export interface MainMenuItemType {
    slug: string,
    title: string,
    description: string,
    thumbnail: string,
}

interface Author {
    name: string,
    profile: string,
}

export interface ItemType {
    id: number,
    title: string,
    category: string,
    category_slug?: string,
    author: Author,
    date: string,
    view: number,
    thumbnail: string,
    detail?: any,
    noShadow?: boolean
}

export interface ProfileType {
    id?: number,
    name?: string,
    profile?: string,
}