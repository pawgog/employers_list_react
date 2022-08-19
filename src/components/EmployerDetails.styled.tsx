import styled from 'styled-components';

export const EmployerDetailsStyled = styled.div`
    width: 23%;
    margin: 10px 5px;
    padding: 10px 5px;
    background: #fff;

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
    font-size: 11px;
    margin-top: 10px;
`;

export const SocialMediaBoardStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;
