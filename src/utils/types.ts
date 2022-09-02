type IAddress = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
};

type ICompany = {
    name: string;
    catchPhrase: string;
    bs: string;
};

export interface IEmployerObject {
    address: IAddress;
    company: ICompany;
    email: string;
    id: number;
    imagePortraitUrl: string;
    name: string;
    phone: string;
    username: string;
    website: string;
    city: string;
}

export interface ISortByValues {
    name: string;
    city: string;
}
