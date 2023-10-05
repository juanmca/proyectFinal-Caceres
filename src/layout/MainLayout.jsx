
import  "../App.css"
import "bootstrap/dist/css/bootstrap.min.css";


const MainLayout = ({ children }) => {
    return (
        <div className="appContainer"> 
        <main> {children}</main>
        </div>
    );
};

export default MainLayout;