import { FC, useState, useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import MediaBoard from './MediaBoard';
import {
    EmployerDetailsStyled,
    EmployerDetailsBoardStyled,
    EmployerDetailsButtonStyled,
    EmployerDetailsTextStyled,
    MediaBoardStyled,
} from './EmployerDetails.styled';
import { IEmployerObject, IMedia } from '../utils/types';
import { staticText } from '../utils/staticText';

const defaultImg = 'https://via.placeholder.com/250';

interface IProps {
    data: IEmployerObject;
}

const EmployerDetails: FC<IProps> = ({ data }) => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const { speak } = useSpeechSynthesis();
    const { picture, nameAll, city, email, phone } = data;

    const media: IMedia = {
        email: {
            mediaDetails: email,
            isActive: false,
        },
        phone: {
            mediaDetails: phone,
            isActive: false,
        },
    };

    const [mediaNew, setMedia] = useState(media);
    const [valueDesc, setValueDesc] = useState('');
    const [iconActive, setIconActive] = useState(true);

    useEffect(() => {
        setImageUrl(picture.large);
    }, [picture]);

    const handleIcon = (iconValue: string) => {
        setValueDesc(iconValue);

        if (valueDesc === iconValue) {
            media[iconValue as keyof IMedia].isActive = iconActive;
            setIconActive((prevVal) => !prevVal);
        } else {
            Object.keys(media).forEach((val) => {
                return val === iconValue
                    ? (media[val as keyof IMedia].isActive = true)
                    : (media[val as keyof IMedia].isActive = false);
            });
            setIconActive((prevVal) => !prevVal);
        }
        setMedia(media);
    };

    const speakElement = (...props: Array<string>) => {
        const message = [...props].join(', ');
        speak({ text: message });
    };

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
                    <EmployerDetailsButtonStyled onClick={() => speakElement(nameAll, city)}>
                        <FontAwesomeIcon icon={faVolumeHigh} />
                    </EmployerDetailsButtonStyled>
                </div>
                <MediaBoardStyled>
                    {Object.keys(media).map((value) => (
                        <MediaBoard key={value} media={mediaNew} value={value} handleIconFn={() => handleIcon(value)} />
                    ))}
                </MediaBoardStyled>
            </EmployerDetailsBoardStyled>
        </EmployerDetailsStyled>
    );
};

export default EmployerDetails;
