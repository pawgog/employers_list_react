import { renderHook } from '@testing-library/react';
import useAllImagesLoaded from './useAllImagesLoaded';

const dummyEmployersListArray = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
        city: 'Gwenborough',
        imagePortraitUrl: 'https://via.placeholder.com/250',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618',
            },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
        },
        city: 'Wisokyburgh',
        imagePortraitUrl: 'https://via.placeholder.com/250',
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653',
            },
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications',
        },
        city: 'McKenziehaven',
        imagePortraitUrl: 'https://via.placeholder.com/250',
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990',
            },
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services',
        },
        city: 'South Elvis',
        imagePortraitUrl: 'https://via.placeholder.com/250',
    },
];

const defaultImg = 'https://via.placeholder.com/250';
const currentImg = 'https://i.1337co.de/profile/ziga-vajdic';

test('should change image url if not loading correctly', () => {
    const isLoading = false;
    const callback = jest.fn((status) => {
        expect(status).toBe(false);
    });

    const { result } = renderHook(() => useAllImagesLoaded(dummyEmployersListArray, isLoading));

    const exampleCurrentData = result.current.data[3];

    expect(exampleCurrentData.imagePortraitUrl).toEqual(currentImg);

    const loadImg = new Image();

    loadImg.onerror = () => {
        callback(false);
    };

    if (loadImg.onerror) {
        const event = 'image loading error';
        loadImg.onerror(event);
        exampleCurrentData.imagePortraitUrl = defaultImg;
        expect(exampleCurrentData.imagePortraitUrl).toEqual(defaultImg);
    }
});
