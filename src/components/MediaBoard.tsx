import React, { FC } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faSquarePhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { IMedia } from '../utils/types';
import { MediaStyled, MediaValueStyled, MediaLinkStyled } from './MediaBoard.styled';

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

    const copyText = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <MediaStyled key={value}>
            {mediaDetails ? (
                <>
                    <Tooltip title="Copy text">
                        <MediaValueStyled $iconActive={isActive} onClick={() => copyText(mediaDetails)}>
                            {mediaDetails}
                        </MediaValueStyled>
                    </Tooltip>
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
