import styled from 'styled-components';
import device from '../globalStyle/devices';
import { colors } from '../globalStyle/colors';

export const EmployerDetailsStyled = styled.div`
    ${device.sm`
        width: 100%;
    `}
    ${device.md`
        width: 47%;
    `}
    ${device.lg`
        width: 31%;
    `}
    ${device.xl`
        width: 23%;
    `}
    margin: 10px 5px;
    padding: 10px 5px;
    background: ${colors.white};

    & img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
`;

export const EmployerDetailsBoardStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 1px 1px;
    gap: 1px 1px;
    margin-top: 10px;
`;

export const EmployerDetailsTextStyled = styled.div`
    margin: 10px 0;
`;

export const MediaBoardStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 8px;
`;

export const MediaStyled = styled.div`
    font-size: 1.6rem;
`;

export const MediaLinkStyled = styled.div`
    opacity: 0.2;
`;
