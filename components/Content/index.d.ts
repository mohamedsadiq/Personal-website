import type { FC } from 'react';

// Type declaration for the JS component at components/Content/index.js
// Allows passing an optional valueOfMode prop from TSX without type errors.
declare const Content: FC<{ valueOfMode?: string }>
export default Content;
