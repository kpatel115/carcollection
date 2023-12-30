import {createSlice} from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        model: "Model",
        year: "Year",
        color: "Color",
        engineType: "Engine Type",
        transmissionType: "Transmission Type",
        fuelType: "Fuel Type",
        sellerContact: "Seller Contact",
        pic: "Picture",
    }, 
    reducers: {
        // functions that say what are we allowed to do to the data
        // state
        // information from the website 
        // funciton that takes data as a parameter and does something

        // action is submitted somewhere - written to state.name
        chooseMake: (state, action) => { state.make  = action.payload },
        chooseModel: (state, action) => { state.model  = action.payload }, 
        chooseYear: (state, action) => { state.year  = action.payload },
        chooseColor: (state, action) => { state.color  = action.payload },
        chooseEngineType: (state, action) => { state.engineType  = action.payload },
        chooseTransmissionType: (state, action) => { state.transmissionType  = action.payload },
        chooseFuelType: (state, action) => { state.fuelType  = action.payload }, 
        chooseSellerContact: (state, action) => { state.sellerContact  = action.payload },
        choosePic: (state, action) => { state.pic = action.payload },


    }

})

export const reducer = rootSlice.reducer;

export const { chooseMake, chooseModel, chooseYear, chooseColor, chooseEngineType, chooseTransmissionType, chooseFuelType, chooseSellerContact, choosePic} = rootSlice.actions