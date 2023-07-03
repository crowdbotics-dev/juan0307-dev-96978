import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_malzhar_list = createAsyncThunk(
  "malzhars/api_v1_malzhar_list",
  async payload => {
    const response = await apiService.api_v1_malzhar_list(payload)
    return response.data
  }
)
export const api_v1_malzhar_create = createAsyncThunk(
  "malzhars/api_v1_malzhar_create",
  async payload => {
    const response = await apiService.api_v1_malzhar_create(payload)
    return response.data
  }
)
export const api_v1_malzhar_retrieve = createAsyncThunk(
  "malzhars/api_v1_malzhar_retrieve",
  async payload => {
    const response = await apiService.api_v1_malzhar_retrieve(payload)
    return response.data
  }
)
export const api_v1_malzhar_update = createAsyncThunk(
  "malzhars/api_v1_malzhar_update",
  async payload => {
    const response = await apiService.api_v1_malzhar_update(payload)
    return response.data
  }
)
export const api_v1_malzhar_partial_update = createAsyncThunk(
  "malzhars/api_v1_malzhar_partial_update",
  async payload => {
    const response = await apiService.api_v1_malzhar_partial_update(payload)
    return response.data
  }
)
export const api_v1_malzhar_destroy = createAsyncThunk(
  "malzhars/api_v1_malzhar_destroy",
  async payload => {
    const response = await apiService.api_v1_malzhar_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const malzharsSlice = createSlice({
  name: "malzhars",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_malzhar_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_malzhar_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_malzhar_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_malzhar_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_malzhar_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_malzhar_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_malzhar_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_malzhar_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_malzhar_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_malzhar_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_malzhar_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_malzhar_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_malzhar_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_malzhar_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_malzhar_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_malzhar_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_malzhar_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_malzhar_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_malzhar_list,
  api_v1_malzhar_create,
  api_v1_malzhar_retrieve,
  api_v1_malzhar_update,
  api_v1_malzhar_partial_update,
  api_v1_malzhar_destroy,
  slice: malzharsSlice
}
