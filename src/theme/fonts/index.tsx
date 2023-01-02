import { createGlobalStyle } from 'styled-components';

import OpenSansRegular from './OpenSans-Regular.ttf'

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'OpenSans-Regular';
        url(${OpenSansRegular}) format('truetype');
    }
`;

export default FontStyles;
