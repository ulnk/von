import { createSlice } from "@reduxjs/toolkit";

const fetchLinkedFiles = (): Application[] => {
    const localLinkedFiles = localStorage.getItem("linkedFiles");
    if (localLinkedFiles) return JSON.parse(localLinkedFiles);

    return [];
}

export const linkedFilesSlice = createSlice({
    name: 'linkedFiles',
    initialState: {
        all: fetchLinkedFiles(),
    },
    reducers: {
        addLinkedFile: (state, action) => {
            if (state.all.find(x => x.path === action.payload.path)) return;
            state.all.push(action.payload);
            localStorage.setItem("linkedFiles", JSON.stringify(state.all));
        },
        removeLinkedFile: (state, action) => {
            if (!state.all.find(x => x.path === action.payload)) return;
            state.all = state.all.filter(app => app.path !== action.payload);
            localStorage.setItem("linkedFiles", JSON.stringify(state.all));
        },
        addArtwork: (state, action) => {
            const found = state.all.find(x => x.path === action.payload.path);
            if (!found) return;
            found.artwork = action.payload.artwork;
            found.artworkPath = action.payload.artworkPath;
            found.gradient = true;
            localStorage.setItem("linkedFiles", JSON.stringify(state.all));
        },
        removeArtwork: (state, action) => {
            const found = state.all.find(x => x.path === action.payload.path);
            if (!found) return;
            found.artwork = undefined;
            found.artworkPath = undefined;
            found.gradient = false;
            localStorage.setItem("linkedFiles", JSON.stringify(state.all));
        },
        gradientArtwork: (state, action) => {
            const found = state.all.find(x => x.path === action.payload.path);
            if (!found) return;
            console.log(action.payload);
            found.artwork = '';
            found.artworkPath = '';
            found.gradient = true;
            localStorage.setItem("linkedFiles", JSON.stringify(state.all));
        },
        removeGradientArtwork: (state, action) => {
            const found = state.all.find(x => x.path === action.payload.path);
            if (!found) return;
            found.gradient = false;
            localStorage.setItem("linkedFiles", JSON.stringify(state.all));
        }
    }
});

export const { addLinkedFile, removeLinkedFile, addArtwork, removeArtwork, gradientArtwork, removeGradientArtwork } = linkedFilesSlice.actions;
export default linkedFilesSlice.reducer;