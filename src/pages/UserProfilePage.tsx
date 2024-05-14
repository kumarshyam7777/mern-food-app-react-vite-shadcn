import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-forms/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <span>Loading......!!!!!!</span>;
  }
  
  if(!currentUser) {
    return <span>unable to load current user...</span>
  }


  return (
    <div>
      <UserProfileForm
       currentUser={currentUser}
      onSave={updateUser} isLoading={isUpdateLoading} />
    </div>
  );
};

export default UserProfilePage;
