import styled from 'styled-components';
import { FormControl } from '@mui/material';
import device from '../globalStyle/devices';

export const FormControlStyled = styled(FormControl)`
    ${device.sm`
        width: 100%;
    `}
    ${device.md`
        width: 100%;
    `}
    ${device.lg`
        width: 33%;
    `}
`;

export const SelectFilterFadeAnimation = styled.div<{ $fade: boolean }>`
    ${device.sm`
        width: 100%;
    `}
    ${device.md`
        width: 100%;
    `}
    ${device.lg`
        width: 66%;
    `}
    display: inline-block;
    visibility: ${({ $fade }) => ($fade ? 'visible' : 'hidden')};
    opacity: ${({ $fade }) => ($fade ? 1 : 0)};
    transition: opacity 500ms ease-in;

    & > .MuiFormControl-root {
        ${device.sm`
            width: 100%;
        `}
        ${device.md`
            width: 100%;
        `}
        ${device.lg`
            width: 50%;
        `}
    }
`;
