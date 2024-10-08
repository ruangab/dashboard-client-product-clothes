// components/Layout.js
import Menu from '../Menu/Menu';
import Content from '../Content/Content';

function Layout ({ children }) {
    return (
        <div className="flex h-screen">
            <Menu />
            <Content>{children}</Content>
        </div>
    );
};

export default Layout;
