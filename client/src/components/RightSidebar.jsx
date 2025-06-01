import assets from "../assets/assets";

const RightSidebar = ({selectedUser, setSelectedUser}) => {
    return selectedUser && (
        <div>
            <div>
                <img src={selectedUser?.profilePic || assets.avatar_icon} alt="" 
                className="w-20 aspect-[1/1] rounded-full" />
                <h1 className="px-10 text-xl font-medium mx-auto flex items-center gap-2">{selectedUser?.fullName}</h1>
            </div>
        </div>
    );
};

export default RightSidebar;