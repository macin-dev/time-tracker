import "./Profile.scss";

const Profile = () => {
  return (
    <div className="container-avatar">
      <img
        className="topbar-avatar"
        src="/src/assets/users/avatar.png"
        alt="user image"
      />

      <div className="topbar-user">
        <span className="topbar-user__name">John Doe</span>
        <span className="topbar-user__role">Administrator</span>
      </div>

      <button className="topbar-user__btn">
        <img
          className="topbar-user__dropdown"
          src="/src/assets/chevron-down.svg"
          alt="down arrow"
        />
      </button>
    </div>
  );
};

export default Profile;
