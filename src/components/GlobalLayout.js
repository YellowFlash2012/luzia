import Footer from "./Footer";
import Navbar from "./Navbar";

const GlobalLayout = (props) => {
    return <>
        <header>
            <Navbar />
        </header>

        <main className="content">{props.children}</main>

        <footer>
            <Footer />
        </footer>
    </>;
};
export default GlobalLayout;
