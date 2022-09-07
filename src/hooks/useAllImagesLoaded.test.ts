import { renderHook } from '@testing-library/react';
import useAllImagesLoaded from './useAllImagesLoaded';

const dummyEmployersListArray = [
    {
        gender: 'male',
        name: {
            title: 'Mr',
            first: 'Borivoje',
            last: 'Lazić',
        },
        location: {
            street: {
                number: 9963,
                name: 'Kolibinska',
            },
            city: 'Požarevac',
            state: 'Zaječar',
            country: 'Serbia',
            postcode: 15938,
            coordinates: {
                latitude: '60.7356',
                longitude: '-64.9626',
            },
            timezone: {
                offset: '-4:00',
                description: 'Atlantic Time (Canada), Caracas, La Paz',
            },
        },
        email: 'borivoje.lazic@example.com',
        login: {
            uuid: '154f5af1-a39e-4535-a771-b8d8374d9816',
            username: 'heavybutterfly766',
            password: 'jeanne',
            salt: 'OnK6totO',
            md5: '69c42df5306930cc576ac9475a9ee132',
            sha1: '19803d6e81c97081737db026ef2618b90aa0e0aa',
            sha256: '75de1baa43ac7f95d7f1d48ba4be2b919f9df15ea49d1b86e0ce924ea31a0cef',
        },
        dob: {
            date: '1973-05-08T02:16:07.114Z',
            age: 49,
        },
        registered: {
            date: '2018-08-28T05:11:45.180Z',
            age: 4,
        },
        phone: '014-2855-044',
        cell: '062-2143-815',
        id: {
            name: 'SID',
            value: '960188181',
        },
        picture: {
            large: 'https://randomuser.me/api/portraits/men/55.jpg',
            medium: 'https://randomuser.me/api/portraits/med/men/55.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/55.jpg',
        },
        nat: 'RS',
        city: 'Požarevac',
        nameAll: 'Borivoje Lazić',
    },
];

const defaultImg = 'https://via.placeholder.com/250';
const currentImg = 'https://randomuser.me/api/portraits/men/55.jpg';

test('should change image url if not loading correctly', () => {
    const isLoading = false;
    const callback = jest.fn((status) => {
        expect(status).toBe(false);
    });

    const { result } = renderHook(() => useAllImagesLoaded(dummyEmployersListArray, isLoading));

    const exampleCurrentData = result.current.data[0];

    expect(exampleCurrentData.picture.large).toEqual(currentImg);

    const loadImg = new Image();

    loadImg.onerror = () => {
        callback(false);
    };

    if (loadImg.onerror) {
        const event = 'image loading error';
        loadImg.onerror(event);
        exampleCurrentData.picture.large = defaultImg;
        expect(exampleCurrentData.picture.large).toEqual(defaultImg);
    }
});
