import {Dispatch} from 'redux'
import {authAPI} from '../api/todolists-api'
import {login, setIsLoggedInAC} from '../features/Login/auth-reducer'
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

export const initializeApp = createAsyncThunk('app/initializeApp', async (param, thunkAPI) => {
        const result = await authAPI.me()
        if (result.data.resultCode === 0) {
            thunkAPI.dispatch(setIsLoggedInAC({value: true}))
        } else {
        }
        return
})

const slice = createSlice({
    name: 'app',
    initialState: {
        status: 'idle',
        error: null,
        isInitialized: false
    } as InitialStateType,
    reducers: {
        setAppStatusAC: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
            state.status = action.payload.status
        },
        setAppErrorAC: (state, action: PayloadAction<{ error: string | null }>) => {
            state.error = action.payload.error
        }
    },
    extraReducers: builder => {
        builder.addCase(initializeApp.fulfilled, (state, action) => {
            state.isInitialized = true
        })
    }
})

export const appReducer = slice.reducer

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
    // true когда приложение проинициализировалось (проверили юзера, настройки получили и т.д.)
    isInitialized: boolean
}

export const {setAppErrorAC, setAppStatusAC} = slice.actions

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>

