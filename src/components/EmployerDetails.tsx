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
                    <Tooltip title="email">
                        <FontAwesomeIcon icon={faPager} />
                    </Tooltip>
                </a>
            ) : (
                <SocialMediaLinkStyled>
                    <Tooltip title="email">
                        <FontAwesomeIcon icon={faPager} />
                    </Tooltip>
                </SocialMediaLinkStyled>
            )}
        </SocialMediaStyled>
    );
};

const EmployerDetails: FC<IProps> = ({ data }) => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const { picture, nameAll, city, email } = data;

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
                <SocialMediaBoardStyled>{socialMediaBoard(email)}</SocialMediaBoardStyled>
            </EmployerDetailsBoardStyled>
        </EmployerDetailsStyled>
    );
};

export default EmployerDetails;
