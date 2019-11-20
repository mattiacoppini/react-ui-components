import React from 'react';
import styled from 'styled-components';

/**
 * Styled component to give a centralized layout.
 */
export const Central = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding: 50px 0;
    flex-wrap: wrap;
`;

/**
 * Decorator for Storybook. 
 * Centralizes the content of each story.
 */
export default storyFn => <Central>{storyFn()}</Central>