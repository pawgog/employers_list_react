import { FC, useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPager } from '@fortawesome/free-solid-svg-icons';
import {
    EmployerDetailsStyled,
    EmployerDetailsBoardStyled,
    EmployerDetailsTextStyled,
    SocialMediaBoardStyled,
    SocialMediaStyled,
    SocialMediaLinkStyled,
} from './EmployerDetails.styled';
import { IEmployerObject } from '../utils/types';
import { staticText } from '../utils/staticText';

const defaultImg = 'https://via.placeholder.com/250';

interface IProps {
    data: IEmployerObject;
}

const socialMediaBoard = (socialMedia: string) => {
    return (
        <SocialMediaStyled key={Math.random()}>
            {socialMedia ? (
                <a href={socialMedia}>
                    <Tooltip title="website">
                        <FontAwesomeIcon icon={faPager} />
                    </Tooltip>
                </a>
            ) : (
                <SocialMediaLinkStyled>
                    <Tooltip title="website">
                        <FontAwesomeIcon icon={faPager} />
                    </Tooltip>
                </SocialMediaLinkStyled>
            )}
        </SocialMediaStyled>
    );
};

const EmployerDetails: FC<IProps> = ({ data }) => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const { imagePortraitUrl, name, city, website } = data;

    useEffect(() => {
        setImageUrl(imagePortraitUrl);
    }, [imagePortraitUrl]);

    return (
        <EmployerDetailsStyled>
            {imageUrl ? <img src={imagePortraitUrl} alt={name} /> : <img src={defaultImg} alt={name} />}
            <EmployerDetailsBoardStyled>
                <div>
                    <EmployerDetailsTextStyled>
                        <span>{name}</span>
                    </EmployerDetailsTextStyled>
                    <EmployerDetailsTextStyled>
                        <span>
                            {staticText.office}
                            {city}
                        </span>
                    </EmployerDetailsTextStyled>
                </div>
                <SocialMediaBoardStyled>{socialMediaBoard(website)}</SocialMediaBoardStyled>
            </EmployerDetailsBoardStyled>
        </EmployerDetailsStyled>
    );
};

export default EmployerDetails;
