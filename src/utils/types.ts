export interface IEmployerObject {
    email: string;
    gitHub: string;
    highlighted: boolean;
    imagePortraitUrl: string;
    imageWallOfLeetUrl: string;
    linkedIn: string;
    mainText: string;
    manager: string;
    name: string;
    office: string;
    orgUnit: string;
    phoneNumber: string;
    published: boolean;
    stackOverflow: string;
    twitter: string;
}

export interface ISocialMedia {
    linkedIn?: string;
    gitHub?: string;
    twitter?: string;
}

export interface ISortByValues {
    name?: string | null;
    office?: string | null;
}
