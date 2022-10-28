import "../styles/globals.css"
import nProgress from "nprogress"
import Router from "next/router"
import { Provider as StateProvider } from "react-redux"
import { store } from "../store/index"
nProgress.configure({ showSpinner: false })
Router.events.on("routeChangeStart", () => {
  nProgress.start()
})
Router.events.on("routeChangeComplete", () => {
  nProgress.done()
})
Router.events.on("routeChangeError", () => {
  nProgress.done()
})

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider store={store}>
      <Component {...pageProps} />
    </StateProvider>
  )
}

export default MyApp
