import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faSquarePhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { MediaStyled, MediaValueStyled, MediaLinkStyled } from './MediaBoard.styled';

interface IMedia {
    email: string;
    phone: string;
}

interface IProps {
    media: IMedia;
    value: string;
}

const MediaBoard: FC<IProps> = ({ media, value }) => {
    const [iconActive, setIconActive] = useState(false);
    const mediaValue = media[value as keyof IMedia];
    let mediaIcon = faXmark;

    switch (value) {
        case 'email':
            mediaIcon = faEnvelopeOpenText;
            break;
        case 'phone':
            mediaIcon = faSquarePhone;
            break;
        default:
            break;
    }

    const handleIcon = () => {
        setIconActive((prevVal) => !prevVal);
    };

    return (
        <MediaStyled key={mediaValue}>
            {mediaValue ? (
                <>
                    <MediaValueStyled $iconActive={iconActive}>{mediaValue}</MediaValueStyled>
                    <FontAwesomeIcon onClick={handleIcon} icon={mediaIcon} />
                </>
            ) : (
                <MediaLinkStyled>
                    <FontAwesomeIcon onClick={handleIcon} icon={mediaIcon} />
                </MediaLinkStyled>
            )}
        </MediaStyled>
    );
};

export default MediaBoard;
