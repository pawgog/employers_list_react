import { renderHook } from '@testing-library/react';
import useAllImagesLoaded from './useAllImagesLoaded';

const dummyEmployersListArray = [
    {
        email: 'agron.kabashi@1337.tech',
        gitHub: 'AgronKabashi',
        highlighted: false,
        imagePortraitUrl: 'https://i.1337co.de/profile/agron-kabashi',
        imageWallOfLeetUrl: 'https://i.1337co.de/wallofleet/agron-kabashi',
        linkedIn: '/pub/agron-kabashi/54/6a8/4a6',
        mainText:
            '<p>I have been working in the software industry for over 10 years now, and even though the road has been bumpy, I don’t regret a single second of it! My experiences have been quite varied, from creating games to full blown web-based intranet platforms.</p><p>Because of this variation and these experiences I’ve found that I’ve acquired a thirst for front-end development and anything web related, which can range from mobile apps to web-based SaaS solutions. The fact that you can create ANYTHING with almost nothing is an exhilarating feeling. It’s one of the major reasons that keeps me going; the only limit is my imagination.</p><p>I absolutely love to travel and experience new cultures (and food!) when the opportunity presents itself. My goal in life is to visit as many places and experience as many different cultures as I possibly can. So far I can cross off Europe and half of Asia from my list, and I look forward to many more exciting adventures to come.</p>  ',
        manager: 'lotta.wennolf@1337.tech',
        name: 'Agron Kabashi',
        office: 'Lund',
        orgUnit: '/Employees',
        phoneNumber: '+46725133736',
        published: true,
        stackOverflow: '',
        twitter: '_agronkabashi',
    },
    {
        email: 'alexander.danson@1337.tech',
        gitHub: 'alexanderdanson',
        highlighted: false,
        imagePortraitUrl: 'https://i.1337co.de/profile/alexander-danson',
        imageWallOfLeetUrl: 'https://i.1337co.de/wallofleet/alexander-danson',
        linkedIn: '/in/alexdanson/',
        mainText:
            "<p>I'm originally from the heart of Lancashire, in Northern England before moving to Sweden in 2014 after meeting my wife Caroline. I really enjoy the feeling of creating something new with the help of the latest technology, with a healthy portion of team spirit. What I love about being a project manager and scrum master is the mutual sense of accomplishment when the team succeeds, and also the opportunity to overcome and learn from a variety of challenges along the way. I also enjoy coding where possible, exploring new technologies to provide me with inspiration and insights which could be applied in my work.</p><p>When I'm not working, I love playing the guitar (electric or acoustic depending on mood!), so let me know if you want to jam! I also enjoy keeping fit and have a new-found interest in cross-country skiing after moving to Sweden, and have since completed En Svensk Klassiker and 2 Vasalopp. Let's see what the next challenge will be!</p><p>As an Englishman I obviously enjoy a day of watching Premier League (Liverpool is my team), accompanied by a slightly warm ale. I also like good dose of British Comedy, such as The Office (UK), Alan Partridge, Hot Fuzz or Stewart Lee to name a few. I might drop in a few random quotes in conversation, so don't be surprised if I start laughing inexplicably at something I've just said.</p>       ",
        manager: 'johan.lundborg@1337.tech',
        name: 'Alexander Danson',
        office: 'Stockholm',
        orgUnit: '/Employees',
        phoneNumber: '+46727133766',
        published: true,
        stackOverflow: '',
        twitter: 'alexsdanson',
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
        email: 'ziga.vajdic@1337.tech',
        gitHub: 'zigav',
        highlighted: false,
        imagePortraitUrl: 'https://i.1337co.de/profile/ziga-vajdic',
        imageWallOfLeetUrl: 'https://i.1337co.de/wallofleet/ziga-vajdic',
        linkedIn: '/in/zigavajdic/',
        mainText:
            '<p>I have an overly curious personality that is enamored by technology, futurism, and above all, unique and unconfined people that inspire me to change, and better myself and those around me.</p><p>I\'ve set my journey into the bytes and pieces of tech at the age of 15, starting a web-design business and selling my first website to a non-suspecting family friend, then launching and going viral with an e-commerce project later that same year. Following this passion for problem-solving and entrepreneurship led me to pursue work focused on software development and product management, where I am especially excited in re-thinking paradigms in business or tackling challenging ideas that have the potential to shape industries as a whole.</p><p>Through my years of experience, equally divided between work in my two startups, various development studios, and as a freelance consultant, I have amassed a multitude of valuable business, development and leadership abilities. Today, this expertise matched with a great team give me the confidence and stubbornness required to take on the hardest challenges.</p><p>When I am not tinkering with computers, you will most likely find me cooking for my girlfriend and friends; reading books; planning my next adventure in Azeroth; or dancing away the night to deep and ambient techno. I share life goals with a stranger whose quote I found on the internet: "Work hard now, so later in life, your dog can have the backyard he deserves.</p>  ',
        manager: 'erik.forsberg@1337.tech',
        name: 'Žiga Vajdič',
        office: 'Ljubljana',
        orgUnit: '/Employees',
        phoneNumber: '+38651343456',
        published: true,
        stackOverflow: '',
        twitter: '',
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
