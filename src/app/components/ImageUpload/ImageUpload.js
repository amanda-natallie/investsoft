import React, { useEffect, useRef, useState, memo } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import {getFile} from "../../helpers/helpers"

const ImageUpload = ({
  handleAvatarClick,
  optionsOpen,
  loading,
  setLoading,
  picture,
  setPicture,
}) => {
  const [openModal, openModalView] = useState(false);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          handleAvatarClick(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleFileUpload = async (event) => {
    setLoading(true);
    handleAvatarClick(false);
    const file = await getFile(event.target.files[0])
    setPicture(file)
    setLoading(false)
  };

  return (
    <>
      <label htmlFor="upload-button" className="avatar-wrap">
      <strong className="mb-2 d-block">Logotipo </strong>
        <div
          className={`user-avatar ${optionsOpen && "open"}`}
          ref={wrapperRef}
          onClick={() => handleAvatarClick(!optionsOpen)}
          style={{
            backgroundImage: `url(${picture})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {loading && <BeatLoader color="gray" />}
        </div>
        
      </label>
      <input
        type="file"
        accept="image/*"
        id="upload-button"
        style={{ display: "none" }}
        onChange={(event) => {
          handleFileUpload(event);
          event.target.value = "";
        }}
      />
    </>
  );
};

export default memo(ImageUpload);
