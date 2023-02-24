import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../../components/card/Card";
import { SpinnerImg } from "../../components/loader/Loader";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
import { getUser } from "../../services/authService";
import "./Profile.scss";
import ChangePassword from "../../components/changePassword/ChangePassword"

const Profile = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Getting use");
    setIsLoading(true);
    async function getUserData() {
      const data = await getUser();
      console.log(data);

      setProfile(data);
      setIsLoading(false);
      await dispatch(SET_USER(data));
      await dispatch(SET_NAME(data.name));
    }
    getUserData();
  }, [dispatch]);

  return (
    <div>
      <div className="profile --my2">
      {isLoading && <SpinnerImg />}
      <>
        {!isLoading && profile === null ? (
          <p>Something went wrong, please reload the page...</p>
        ) : (
          <Card cardClass={"card --flex-dir-column"}>
            
            <span className="profile-data">
              <p>
                <b>Name : </b> {profile?.name}
              </p>
              <p>
                <b>Email : </b> {profile?.email}
              </p>
              
                
              <div>
                
              </div>
            </span>
          </Card>
        )}
      </>
    </div>
    <div>
    <ChangePassword />
    </div>
    </div>
  );
};

export default Profile;
