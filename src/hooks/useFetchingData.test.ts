import { act, waitFor, renderHook, RenderHookResult } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useFetchingData from './useFetchingData';
import { IEmployerObject } from '../utils/types';

let renderedHook: RenderHookResult<{ data: Array<IEmployerObject>; isLoading: boolean; isError: boolean }, unknown>;

const dummyEmployersListArray = [
    {
        email: 'abdallah.safarini@1337.tech',
        gitHub: '',
        highlighted: false,
        imagePortraitUrl: '',
        imageWallOfLeetUrl: '',
        linkedIn: '',
        mainText: '',
        manager: 'andreas.nilsson@1337.tech',
        name: 'Abdallah Safarini',
        office: 'Lund',
        orgUnit: '/Incoming',
        phoneNumber: '0760494170',
        published: false,
        stackOverflow: '',
        twitter: '',
    },
    {
        email: 'therese.gustafsson@1337.tech',
        gitHub: '',
        highlighted: false,
        imagePortraitUrl: '',
        imageWallOfLeetUrl: '',
        linkedIn: '',
        mainText: '',
        manager: 'oskar@1337.tech',
        name: 'Therese Gustafsson',
        office: 'Lund',
        orgUnit: '/Incoming',
        phoneNumber: '+46706847715',
        published: false,
        stackOverflow: '',
        twitter: '',
    },
    {
        email: 'matic.lokovsek@1337.tech',
        gitHub: '',
        highlighted: false,
        imagePortraitUrl: 'https://i.1337co.de/profile/matic-lokovsek',
        imageWallOfLeetUrl: 'https://i.1337co.de/wallofleet/matic-lokovsek',
        linkedIn: '',
        mainText:
            '<p>I’m a positive person, always trying to look for the good in every situation. I constantly try to humble myself by knowing how much there is to know about the world (and beyond), which makes me hungry for knowledge.</p><p>So the things that fascinate me the most & I am most interested in learning are how our mind and body works, psychology, mindset, health, nutrition, functional fitness, etc.My mission in life for the last decade has been (and still is) helping people reach their goals. I happily did that in my previous working positions, hoping to be able to continue doing so here in any way possible.</p><p>A good 8 years ago, I found myself accepting the opportunity to work for a company that deals with sports nutrition. In my 8 year experience where I worked closely with the CEO as his right-hand and in almost all the possible positions and fields I learned a lot about the business, retail, problem-solving, customers, myself and helping people. I also had the chance to meet a lot of fascinating and the smartest people that I still have the honour of knowing. So I guess all of these steps in life have led me here - to 13|37.</p><p>My way to put my mind at ease is by working out, with crossfit & hiking - where I can see & appreciate beautiful landscapes that we are surrounded with. I also like to relax and enjoy myself by listening to music, watching a good movie or a TV show, having a good meal, seeing new places and reading books.</p> ',
        manager: 'asa.lilja@1337.tech',
        name: 'Matic Lokovšek',
        office: 'Ljubljana',
        orgUnit: '/Admins',
        phoneNumber: '',
        published: true,
        stackOverflow: '',
        twitter: '',
    },
    {
        email: 'vladimir.santillana@1337.tech',
        gitHub: '',
        highlighted: false,
        imagePortraitUrl: 'https://i.1337co.de/profile/vladimir-santillana',
        imageWallOfLeetUrl: 'https://i.1337co.de/wallofleet/vladimir-santillana',
        linkedIn: '/in/vladimir-santillana-192558134/',
        mainText:
            '<p>I have been interested in problem-solving and technology since I was a child.Whenever there was a problem with electronic devices at home, I was very much interested in repairing them.I wanted to understand how they work, why the problem occurred, and how to repair them.I got my first computer in the late 90s and became not only interested in hardware but even in software, graphic design, and gaming.From that moment on I knew that software development was something I wanted to do when I grow up.</p><p>Since I have been working as a fullstack developer for years I got more into backend development.My passion for IT derives from a genuine desire to learn more and have the possibility to influence and maybe even transform the world.</p><p>Besides work, I like to work out, spend time with family and friends, do some mountain biking, watch cyberpunk movies and play drums.</p>   ',
        manager: 'christoffer.hydling@1337.tech',
        name: 'Vladimir Santillana',
        office: 'Stockholm',
        orgUnit: '/Employees',
        phoneNumber: '+46761337345',
        published: true,
        stackOverflow: '',
        twitter: '',
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
                expect.objectContaining({ name: 'Abdallah Safarini' }),
                expect.objectContaining({ name: 'Matic Lokovšek' }),
            ]),
        );
    });
    it('should array length be grather than 0', async () => {
        expect(renderedHook.result.current.data).toHaveLength(4);
    });
    it('should loading value be falsy', async () => {
        expect(renderedHook.result.current.isLoading).toBeFalsy();
    });
    it('should error value be falsy', async () => {
        expect(renderedHook.result.current.isError).toBeFalsy();
    });
});
