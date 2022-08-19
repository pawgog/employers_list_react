import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { EmployerDetailsStyled, EmployerDetailsBoardStyled, SocialMediaBoardStyled } from './EmployerDetails.styled';
import { IEmployerObject } from '../utils/types';
import { staticText } from '../utils/staticText';

const defaultImg = 'https://via.placeholder.com/250';

interface IProps {
    data: IEmployerObject;
}

const EmployerDetails: FC<IProps> = ({ data }) => {
    const { imagePortraitUrl, name, office, linkedIn, gitHub, twitter } = data;

    return (
        <EmployerDetailsStyled>
            {imagePortraitUrl !== null ? (
                <img src={imagePortraitUrl} alt={name} />
            ) : (
                <img src={defaultImg} alt={name} />
            )}
            <EmployerDetailsBoardStyled>
                <div>
                    <p>{name}</p>
                    <p>
                        {staticText.office}
                        {office}
                    </p>
                </div>
                <SocialMediaBoardStyled>
                    <a href={linkedIn}>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href={gitHub}>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href={twitter}>
                        <FontAwesomeIcon icon={faSquareTwitter} size="2x" />
                    </a>
                </SocialMediaBoardStyled>
            </EmployerDetailsBoardStyled>
        </EmployerDetailsStyled>
    );
};

export default EmployerDetails;
