import { useState, useEffect } from "react"

import detectEthereumProvider from "@metamask/detect-provider"
import Head from "next/head"
import {
  setDashboard,
  setUnAuth,
  setNoMetaMask,
  setDifferentChain,
} from "../../store/dashboardSlice/index"

import { useDispatch, useSelector } from "react-redux"
import UnAuth from "../../components/UnAuth"
import DifferentChain from "../../components/DifferentChain"
import Dashboard from "../../components/Dashboard"
import NoMetamask from "../../components/NoMetamask"

const Manger = () => {
  const [metaMask, setMetaMask] = useState("")

  const status = useSelector((state) => {
    status: state.dashboard.status
  })

  const dispatch = useDispatch()

  //To check whether their is metamask is installed or not
  useEffect(() => {
    async function detectProvider() {
      const provider = await detectEthereumProvider()
      return provider
    }

    detectProvider()
      .then((provider) => {
        if (provider) setMetaMask(provider)
      })
      .catch((err) => {
        console.log(err.message)
        dispatch(setNoMetaMask())
      })
  }, [])

  // to handle the account change

  useEffect(() => {
    const accountsChangedHandler = (accounts) => {
      if (!accounts.length) dispatch(setUnAuth())
      else {
        if (metaMask.chainId === "0x5") {
          dispatch(setDashboard())
        } else {
          dispatch(setDifferentChain())
        }
      }
    }

    const chainChangedHandler = (chainId) => {
      if (metaMask.selectedAddress) {
        if (chainId != "0x5") {
          dispatch(setDifferentChain())
        } else {
          dispatch(setDashboard())
        }
      } else {
        dispatch(setUnAuth())
      }
    }

    if (metaMask) {
      metaMask.on("accountsChanged", accountsChangedHandler)
      metaMask.on("chainChanged", chainChangedHandler)
    } else {
      dispatch(setNoMetaMask())
    }

    return () => {
      metaMask?.removeListener("accountsChanged", accountsChangedHandler)
      metaMask?.removeListener("chainChanged", chainChangedHandler)
    }
  }, [metaMask])

  // user state mangement

  useEffect(() => {
    if (metaMask) {
      if (metaMask.selectedAddress) {
        if (metaMask.chainId != "0x5") {
          dispatch(setDifferentChain())
        } else {
          dispatch(setDashboard())
        }
      } else {
        dispatch(setUnAuth())
      }
    } else {
      dispatch(setNoMetaMask())
    }
  }, [metaMask])

  return (
    <div>
      <Head>
        <title>
          {status === "unAuth"
            ? "Connect to E-census"
            : status === "differentChain"
            ? "Switch Network"
            : "Dashboard"}
        </title>

        {/* Project Icon  */}

        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      {status === "unAuth" ? (
        <UnAuth metaMask={metaMask} />
      ) : status === "differentChain" ? (
        <DifferentChain metaMask={metaMask} />
      ) : status === "dashboard" ? (
        <Dashboard metaMask={metaMask} />
      ) : (
        <NoMetamask metaMask={metaMask} />
      )}
    </div>
  )
}

export default Manger
