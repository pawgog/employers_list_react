import styled from 'styled-components';
import { Box } from '@mui/material';
import { colors } from '../globalStyle/colors';

export const DashboardStyled = styled.div`
    margin: 20px 40px;
    padding: 5px 15px;
    background-color: ${colors.background};
`;

export const DashboardTopBarStyled = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 1px 1px;
    margin-bottom: 15px;
`;

export const EmployersBoardStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 5px 0 15px;
`;

export const BoxStyled = styled(Box)`
    position: absolute;
    right: 0;
`;
