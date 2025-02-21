import { useState } from "react";
import useScreenSize from "./screen-size.hook";

const useSignUp = () => {
  const [profilePic, setProfilePic] = useState<string | ArrayBuffer | null>(
    null
  );
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [gender, setGender] = useState<string>("Male");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [linkedIn, setLinkedIn] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [approach, setApproach] = useState<string>("");
  const [journey, setJourney] = useState<string>("");
  const [findOutAnswer, setFindOutAnswer] = useState<string>("");

  const { isMobile } = useScreenSize();
  const { isTablet } = useScreenSize();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const formData = {
      profilePic,
      fullName,
      email,
      phone,
      location,
      gender,
      dateOfBirth,
      linkedIn,
      instagram,
      approach,
      journey,
      findOutAnswer,
    };
    console.log("Form Data:", formData);
  };

  return {
    profilePic,
    setFullName,
    fullName,
    setEmail,
    email,
    setPhone,
    phone,
    setLocation,
    location,
    setGender,
    gender,
    setDateOfBirth,
    dateOfBirth,
    setLinkedIn,
    linkedIn,
    setInstagram,
    instagram,
    setApproach,
    approach,
    setJourney,
    journey,
    setFindOutAnswer,
    findOutAnswer,
    handleImageUpload,
    handleSubmit,
    isMobile,
    isTablet,
  };
};

export default useSignUp;
