import styled, { css } from 'styled-components';

export const MediaStyled = styled.div`
    & svg {
        font-size: 1.6rem;
        cursor: pointer;
    }
`;

export const MediaValueStyled = styled.span<{ $iconActive: boolean }>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    left: 0;
    transition: all 0.3s;
    cursor: pointer;

    ${({ $iconActive }) =>
        $iconActive
            ? css`
                  transform: scale(1);
                  top: -25px;
              `
            : css`
                  transform: scale(0);
                  top: 10px;
              `};
`;

export const MediaLinkStyled = styled.div`
    opacity: 0.2;
`;
