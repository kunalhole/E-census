import { createSlice } from "@reduxjs/toolkit"

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    status: "NoMetamask",
  },
  reducers: {
    setDashboard: () => ({ status: "dashboard" }),
    setUnAuth: () => ({ status: "unAuth" }),
    setDifferentChain: () => ({ status: "differentChain" }),
    setNoMetaMask: () => ({ status: "noMetamask" }),
  },
})

export const { setDashboard, setDifferentChain, setUnAuth, setNoMetaMask } =
  dashboardSlice.actions
export default dashboardSlice.reducer
