import icon from "../../assets/logo.svg";

function Header() {
    return (
        <div className="bg-[#000] flex justify-between items-center">
            <div className="flex items-center gap- p-4">
                <div className="w-[40px] h-[40px] mr-2">
                    <img src={icon} alt="Logo" width={100} height={100} />
                </div>
                <h4 className="text-[#fff] text-[24px]">Tailwind</h4>
            </div>
            <div>
                <ul className="text-[#fff] flex gap-6">
                    <li>Docs</li>
                    <li>Components</li>
                    <li>Blog</li>
                    <li>GitHub</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
