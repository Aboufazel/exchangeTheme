import '@/styles/globals.css'
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import {Provider} from "react-redux";
import store from "@/Features/Store";


export default function App({Component, pageProps}) {
    return (
        <Provider store={store}>
                <div className={"container mx-auto"}>
                    <Header/>
                    <Component {...pageProps} />
                    <Footer/>
                </div>
        </Provider>
    )
}
