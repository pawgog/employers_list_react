import { FC, useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import {
    EmployerDetailsStyled,
    EmployerDetailsBoardStyled,
    EmployerDetailsTextStyled,
    SocialMediaBoardStyled,
    SocialMediaStyled,
    SocialMediaLinkStyled,
} from './EmployerDetails.styled';
import { IEmployerObject, ISocialMedia } from '../utils/types';
import { staticText } from '../utils/staticText';

const defaultImg = 'https://via.placeholder.com/250';

interface IProps {
    data: IEmployerObject;
}

const socialMediaBoard = (socialMedia: ISocialMedia) => {
    const socialMediaIconArray = {
        linkedIn: faLinkedin,
        gitHub: faGithub,
        twitter: faSquareTwitter,
    };
    const socialMediaKey = Object.keys(socialMedia)[0];
    const socialMediaValues = Object.values(socialMedia)[0];
    const socialMediaIcon = socialMediaIconArray[socialMediaKey as keyof ISocialMedia];

    return (
        <SocialMediaStyled key={socialMediaKey}>
            {socialMediaValues !== null ? (
                <a href={socialMediaValues}>
                    <Tooltip title={socialMediaKey}>
                        <FontAwesomeIcon icon={socialMediaIcon} />
                    </Tooltip>
                </a>
            ) : (
                <SocialMediaLinkStyled>
                    <Tooltip title={socialMediaKey}>
                        <FontAwesomeIcon icon={socialMediaIcon} />
                    </Tooltip>
                </SocialMediaLinkStyled>
            )}
        </SocialMediaStyled>
    );
};

const EmployerDetails: FC<IProps> = ({ data }) => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const { imagePortraitUrl, name, office, linkedIn, gitHub, twitter } = data;
    const socialMediaArray = [
        { linkedIn: linkedIn !== null ? `https://www.linkedin.com${linkedIn}` : linkedIn },
        { gitHub: gitHub !== null ? `https://github.com/${gitHub}` : gitHub },
        { twitter: twitter !== null ? `https://twitter.com/${twitter}` : twitter },
    ];

    useEffect(() => {
        setImageUrl(imagePortraitUrl);
    }, [imagePortraitUrl]);

    return (
        <EmployerDetailsStyled>
            {imageUrl !== null ? <img src={imagePortraitUrl} alt={name} /> : <img src={defaultImg} alt={name} />}
            <EmployerDetailsBoardStyled>
                <div>
                    <EmployerDetailsTextStyled>
                        <span>{name}</span>
                    </EmployerDetailsTextStyled>
                    <EmployerDetailsTextStyled>
                        <span>
                            {staticText.office}
                            {office}
                        </span>
                    </EmployerDetailsTextStyled>
                </div>
                <SocialMediaBoardStyled>
                    {socialMediaArray.map((socialMedia) => socialMediaBoard(socialMedia))}
                </SocialMediaBoardStyled>
            </EmployerDetailsBoardStyled>
        </EmployerDetailsStyled>
    );
};

export default EmployerDetails;
