import { configureStore } from '@reduxjs/toolkit'

import linkedFiles from './slices/linkedFiles';

export default configureStore({
    reducer: { linkedFiles },
});