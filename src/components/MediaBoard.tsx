import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faSquarePhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { MediaStyled, MediaValueStyled, MediaLinkStyled } from './MediaBoard.styled';

interface IMedia {
    email: {
        mediaDetails: string;
        isActive: boolean;
    };
    phone: {
        mediaDetails: string;
        isActive: boolean;
    };
}

interface IProps {
    media: IMedia;
    value: string;
    handleIconFn: React.MouseEventHandler<SVGSVGElement> | undefined;
}

const MediaBoard: FC<IProps> = ({ media, value, handleIconFn }) => {
    const { mediaDetails, isActive } = media[value as keyof IMedia];
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

    return (
        <MediaStyled key={value}>
            {mediaDetails ? (
                <>
                    <MediaValueStyled $iconActive={isActive}>{mediaDetails}</MediaValueStyled>
                    <FontAwesomeIcon onClick={handleIconFn} icon={mediaIcon} />
                </>
            ) : (
                <MediaLinkStyled>
                    <FontAwesomeIcon onClick={handleIconFn} icon={mediaIcon} />
                </MediaLinkStyled>
            )}
        </MediaStyled>
    );
};

export default MediaBoard;
