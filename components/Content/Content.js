// components/Content.js
function Content ({ children }){
    return (
        <div className="flex-grow p-6 class-content">
            <div className="pl-2">
                {children}
            </div>
        </div>
    );
};

export default Content;
