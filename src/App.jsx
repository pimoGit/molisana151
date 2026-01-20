import MainHeader from "./components/MainHeader"
import MainContent from "./components/MainContent"
import MainFooter from "./components/MainFooter"
import Alert from "./components/Alert"

function App() {
    return (
        <>
            <MainHeader />
            <Alert type="succes">
                <ul>
                    <li>hai sbagliato questo</li>
                    <li>ma anche questo</li>
                    <li>per non parlare di questo</li>
                </ul>
            </Alert>
            <MainContent />
            <MainFooter />
        </>
    )
}

export default App
