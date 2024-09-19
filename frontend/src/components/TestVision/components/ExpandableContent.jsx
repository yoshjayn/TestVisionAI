import useToggleStore from "../../../store/useStore";

const ExpandableContent = ({ icon, heading, content, index }) => {
    const { currentIndex, toggleIndex } = useToggleStore();

    const isExpanded = currentIndex === index;

    const handleClick = () => {
        toggleIndex(index);
    };

    return (
        <div className="relative px-6 py-4 rounded-md w-full min-w-[100px]" onClick={handleClick}>
            <div className={`absolute left-0 top-0 h-full w-2 rounded-xl ${isExpanded ? "bg-[#09C0A1]" : "bg-[#D9D9D9]"}`}>
            </div>

            <div className={`flex justify-between items-center ${isExpanded ? "text-[#09C0A1]" : "text-black"} cursor-pointer`}>
                <div className="flex items-center">
                    {/* Fixed width for the icon container */}
                    <span className="mr-2" style={{ width: '30px' }}>
                        {icon && <span className="icon">{icon}</span>}
                    </span>
                    <span className="font-medium text-2xl font-inter">{heading}</span>
                </div>
            </div>

            <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="mt-2 text-gray-700 break-words ml-[40px]">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default ExpandableContent;

