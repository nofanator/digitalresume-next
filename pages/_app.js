import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga'

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter()
    useEffect(() => {
        if (typeof window === undefined) return

        const handleRouteChange = (url) => {
            ReactGA.pageview(url)
        }

        if (!window.GA_INITIALIZED) {
            ReactGA.initialize(`${process.env.NEXT_PUBLIC_GATRACKINGID}`)
            window.GA_INITIALIZED = true
        }

        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            if (typeof window === undefined) return
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    useEffect(() => {}, [])

    return <Component {...pageProps} />
}

export default MyApp
