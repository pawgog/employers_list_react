import styled from 'styled-components';
import { FormControl } from '@mui/material';

export const FormControlStyled = styled(FormControl)`
    width: 33%;
`;

export const SelectFilterFadeAnimation = styled.div<{ $fade: boolean }>`
    width: 66%;
    display: inline-block;
    visibility: ${({ $fade }) => ($fade ? 'visible' : 'hidden')};
    opacity: ${({ $fade }) => ($fade ? 1 : 0)};
    transition: opacity 500ms ease-in;

    & > .MuiFormControl-root {
        width: 50%;
    }
`;
