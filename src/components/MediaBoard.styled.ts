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

    ${({ $iconActive }) =>
        $iconActive
            ? css`
                  opacity: 1;
                  top: -25px;
              `
            : css`
                  opacity: 0;
                  top: 30px;
              `};
`;

export const MediaLinkStyled = styled.div`
    opacity: 0.2;
`;
