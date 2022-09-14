import { FC, useState, useEffect } from 'react';
import MediaBoard from './MediaBoard';
import {
    EmployerDetailsStyled,
    EmployerDetailsBoardStyled,
    EmployerDetailsTextStyled,
    MediaBoardStyled,
} from './EmployerDetails.styled';
import { IEmployerObject } from '../utils/types';
import { staticText } from '../utils/staticText';

const defaultImg = 'https://via.placeholder.com/250';

interface IProps {
    data: IEmployerObject;
}

interface IMedia {
    email: string;
    phone: string;
}

const EmployerDetails: FC<IProps> = ({ data }) => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const { picture, nameAll, city, email, phone } = data;

    const media: IMedia = {
        email,
        phone,
    };

    useEffect(() => {
        setImageUrl(picture.large);
    }, [picture]);

    return (
        <EmployerDetailsStyled>
            {imageUrl ? <img src={picture.large} alt={nameAll} /> : <img src={defaultImg} alt={nameAll} />}
            <EmployerDetailsBoardStyled>
                <div>
                    <EmployerDetailsTextStyled>
                        <span>{nameAll}</span>
                    </EmployerDetailsTextStyled>
                    <EmployerDetailsTextStyled>
                        <span>
                            {staticText.city}
                            {city}
                        </span>
                    </EmployerDetailsTextStyled>
                </div>
                <MediaBoardStyled>
                    {Object.keys(media).map((value) => (
                        <MediaBoard key={value} media={media} value={value} />
                    ))}
                </MediaBoardStyled>
            </EmployerDetailsBoardStyled>
        </EmployerDetailsStyled>
    );
};

export default EmployerDetails;
