import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { fillProfileInfo, getProfileInfo } from "../supabase/account";
import { FillProfileInfoPayload } from "../supabase/account/index.type";
import { userAtom } from "../store/auth";
import { useAtomValue } from "jotai";

const ProfileView: React.FC = () => {
  const user = useAtomValue(userAtom);

  console.log(user);

  const [profilePayload, setProfilePayload] = useState<FillProfileInfoPayload>({
    avatar_url: "",
    full_name_en: "",
    full_name_ka: "",
    username: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      getProfileInfo(user?.user.id).then((res) => console.log(res));
    }
  }, [user]);

  const { mutate: handleFillProfileInfo } = useMutation<
    void,
    unknown,
    FillProfileInfoPayload
  >({
    mutationKey: ["fill-profile-info"],
    mutationFn: fillProfileInfo,
  });

  const handleChange = (field: keyof FillProfileInfoPayload, value: string) => {
    setProfilePayload((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    handleFillProfileInfo({ ...profilePayload, id: user?.user?.id });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <label>Username</label>
      <input
        className="border border-black"
        name="username"
        value={profilePayload.username}
        onChange={(e) => handleChange("username", e.target.value)}
      />

      <label>Avatar URL</label>
      <input
        className="border border-black"
        name="avatar"
        value={profilePayload.avatar_url}
        onChange={(e) => handleChange("avatar_url", e.target.value)}
      />

      <label>Full Name Ka</label>
      <input
        className="border border-black"
        name="fullnameka"
        value={profilePayload.full_name_ka}
        onChange={(e) => handleChange("full_name_ka", e.target.value)}
      />

      <label>Full Name En</label>
      <input
        className="border border-black"
        value={profilePayload.full_name_en}
        name="fullnameen"
        onChange={(e) => handleChange("full_name_en", e.target.value)}
      />

      <label>Phone</label>
      <input
        className="border border-black"
        value={profilePayload.phone}
        name="phone"
        onChange={(e) => handleChange("phone", e.target.value)}
      />

      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default ProfileView;
