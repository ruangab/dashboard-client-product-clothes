// components/Content.js
function Content ({ children }){
    return (
        <div className="flex-grow p-6">
            {children}
        </div>
    );
};

export default Content;
