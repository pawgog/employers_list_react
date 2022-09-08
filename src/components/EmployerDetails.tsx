import { FC, useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import {
    EmployerDetailsStyled,
    EmployerDetailsBoardStyled,
    EmployerDetailsTextStyled,
    MediaBoardStyled,
    MediaStyled,
    MediaLinkStyled,
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

const mediaBoard = (media: IMedia, value: string) => {
    const mediaValue = media[value as keyof IMedia];

    return (
        <MediaStyled key={mediaValue}>
            {mediaValue ? (
                <Tooltip title={mediaValue}>
                    <FontAwesomeIcon icon={value === 'email' ? faEnvelopeOpenText : faSquarePhone} />
                </Tooltip>
            ) : (
                <MediaLinkStyled>
                    <Tooltip title={mediaValue}>
                        <FontAwesomeIcon icon={value === 'email' ? faEnvelopeOpenText : faSquarePhone} />
                    </Tooltip>
                </MediaLinkStyled>
            )}
        </MediaStyled>
    );
};

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
                            {staticText.office}
                            {city}
                        </span>
                    </EmployerDetailsTextStyled>
                </div>
                <MediaBoardStyled>{Object.keys(media).map((value) => mediaBoard(media, value))}</MediaBoardStyled>
            </EmployerDetailsBoardStyled>
        </EmployerDetailsStyled>
    );
};

export default EmployerDetails;
