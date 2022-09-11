import { act, waitFor, renderHook, RenderHookResult } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useFetchingData from './useFetchingData';
import { IEmployerObject } from '../utils/types';

let renderedHook: RenderHookResult<{ data: Array<IEmployerObject>; isLoading: boolean; isError: boolean }, unknown>;

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
    {
        gender: 'female',
        name: {
            title: 'Miss',
            first: 'Apoorva',
            last: 'Thampy',
        },
        location: {
            street: {
                number: 880,
                name: "Coaker's Walk",
            },
            city: 'Kirari Suleman Nagar',
            state: 'Arunachal Pradesh',
            country: 'India',
            postcode: 47290,
            coordinates: {
                latitude: '-4.0059',
                longitude: '-153.1171',
            },
            timezone: {
                offset: '-7:00',
                description: 'Mountain Time (US & Canada)',
            },
        },
        email: 'apoorva.thampy@example.com',
        login: {
            uuid: '277c8ab1-b58b-4780-8ab4-b7a27b3d4c8d',
            username: 'greenbear851',
            password: 'commando',
            salt: 'EVfZvWFD',
            md5: '120cb039926849195f3f8542d7c19867',
            sha1: 'a87ccba2fc5487cb5932646f6132ccb1f8eaa35b',
            sha256: '15b846e39ef0ba4b92839fe646deab978d60e243477d220c6e7f632136b578da',
        },
        dob: {
            date: '1976-03-11T00:41:15.177Z',
            age: 46,
        },
        registered: {
            date: '2008-08-01T07:15:17.471Z',
            age: 14,
        },
        phone: '8299389580',
        cell: '9064019674',
        id: {
            name: 'UIDAI',
            value: '429237996626',
        },
        picture: {
            large: 'https://randomuser.me/api/portraits/women/64.jpg',
            medium: 'https://randomuser.me/api/portraits/med/women/64.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/64.jpg',
        },
        nat: 'IN',
        city: 'Kirari Suleman Nagar',
        nameAll: 'Apoorva Thampy',
    },
    {
        gender: 'male',
        name: {
            title: 'Mr',
            first: 'Mihailo',
            last: 'Bekić',
        },
        location: {
            street: {
                number: 2795,
                name: 'Jovana Valente ',
            },
            city: 'Mali Iđoš',
            state: 'West Bačka',
            country: 'Serbia',
            postcode: 31473,
            coordinates: {
                latitude: '81.6918',
                longitude: '-32.7413',
            },
            timezone: {
                offset: '+9:30',
                description: 'Adelaide, Darwin',
            },
        },
        email: 'mihailo.bekic@example.com',
        login: {
            uuid: 'd697ae3e-88e5-4978-89b7-911ad0794d43',
            username: 'orangetiger280',
            password: 'heynow',
            salt: 'oRMYDiUU',
            md5: 'a81ab0b750a17af221a961c6ed2be904',
            sha1: '24feed3144495cd39fe94f2a017c15fee7c765e9',
            sha256: '79a7bb84e50703d28cbe6d11fca7956099b08019be9bf4b371cc3c2559f39852',
        },
        dob: {
            date: '1962-03-14T07:30:36.209Z',
            age: 60,
        },
        registered: {
            date: '2013-04-13T12:20:35.287Z',
            age: 9,
        },
        phone: '027-9569-062',
        cell: '069-5768-720',
        id: {
            name: 'SID',
            value: '485875809',
        },
        picture: {
            large: 'https://randomuser.me/api/portraits/men/68.jpg',
            medium: 'https://randomuser.me/api/portraits/med/men/68.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/68.jpg',
        },
        nat: 'RS',
        city: 'Mali Iđoš',
        nameAll: 'Mihailo Bekić',
    },
];

describe('useFetchingData has GET request', () => {
    beforeEach(async () => {
        const mock = new MockAdapter(axios);
        const apiUrl = 'https://mockUrl';
        mock.onGet(apiUrl).reply(200, dummyEmployersListArray);

        await act(async () => {
            renderedHook = await waitFor(() => renderHook(() => useFetchingData(apiUrl)));
        });
    });

    it('should contain object with employer details in array', async () => {
        expect(renderedHook.result.current.data).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ nameAll: 'Borivoje Lazić' }),
                expect.objectContaining({ nameAll: 'Mihailo Bekić' }),
            ]),
        );
    });
    it('should array length be grather than 0', async () => {
        expect(renderedHook.result.current.data).toHaveLength(3);
    });
    it('should loading value be falsy', async () => {
        expect(renderedHook.result.current.isLoading).toBeFalsy();
    });
    it('should error value be falsy', async () => {
        expect(renderedHook.result.current.isError).toBeFalsy();
    });
});
