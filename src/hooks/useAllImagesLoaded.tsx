import { useEffect } from 'react';
import { IEmployerObject } from '../utils/types';

const defaultImg = 'https://via.placeholder.com/250';

const useAllImagesLoaded = (data: Array<IEmployerObject>, isLoading: boolean) => {
    const arrayImages = data.filter((employer: IEmployerObject) => employer);
    const arrayImagesLength = arrayImages.length;

    useEffect(() => {
        if (isLoading && arrayImagesLength > 0) return;
        [].forEach.call(arrayImages, (employer: IEmployerObject) => {
            const loadImg = new Image();
            loadImg.src = employer.picture.large;
            loadImg.onerror = () => {
                employer.picture.large = defaultImg;
            };
        });
    }, [data]);

    return { data };
};

export default useAllImagesLoaded;
