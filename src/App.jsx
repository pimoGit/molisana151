import MainHeader from "./components/MainHeader"
import MainContent from "./components/MainContent"
import MainFooter from "./components/MainFooter"
import Alert from "./components/Alert"

function App() {
    return (
        <>
            <MainHeader />
            <Alert
                type=""
                message="Questa è una info generica" />
            <MainContent />
            <MainFooter />
        </>
    )
}

export default App
