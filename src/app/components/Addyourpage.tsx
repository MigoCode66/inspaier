'use client';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { viewContext } from './context';
import Image from 'next/image';

const Addyourpage: React.FC = () => {
  const [isButtonDisabled, SetIsbuttonDisabled] = useState<boolean>(true);
  const buttonRef = useRef<null | HTMLButtonElement>(null);
  const authorInputRef = useRef<null | HTMLInputElement>(null);
  const CheckboxRef = useRef<null | HTMLInputElement>(null);
  const linkInputRef = useRef<null | HTMLInputElement>(null);
  const fileInputRef = useRef<null | HTMLInputElement>(null);
  const [view, setView] = useContext(viewContext);
  const isValidUrl = (urlString: string) => {
    var urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // validate protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // validate fragment locator
    return !urlPattern.test(urlString);
  };

  useEffect(() => {
    if (isButtonDisabled) {
      if (buttonRef.current) {
        buttonRef.current.style.background = '#e0d07f';
      }
    } else {
      if (buttonRef.current) {
        buttonRef.current.style.background = '#fadc46';
      }
    }
  }, [isButtonDisabled]);

  const buttonAtivation = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    if (
      authorInputRef.current?.value.replaceAll(' ', '') == '' ||
      isValidUrl(linkInputRef.current?.value as string) ||
      !CheckboxRef.current?.checked ||
      fileInputRef.current?.value === ''
    ) {
      SetIsbuttonDisabled(true);
    } else {
      SetIsbuttonDisabled(false);
    }
  };
  const clickHandler = async (e: React.MouseEvent) => {
    if (typeof setView === 'function') {
      setView('none');
      console.log(view);
    }
  };
  console.log(view);

  const buttonClickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isButtonDisabled) {
      return;
    }
    const formData = new FormData();
    formData.append('name', authorInputRef.current?.value || '');
    formData.append('link', linkInputRef.current?.value || '');
    if (fileInputRef.current?.files) {
      formData.append('image', fileInputRef.current.files[0]);
    }

    try {
      const response = await axios.post(
        'http://localhost:2030/sendData',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div
      className="Addyourpage"
      style={{ display: typeof view === 'string' ? view : 'none' }}
    >
      <form action="">
        <Image
          className="Close"
          src={'/images/Group 4.png'}
          width={20}
          height={20}
          alt="Close"
          onClick={clickHandler}
        ></Image>
        <b>Add Your page</b>
        <section className="Imagesection">
          <input
            type="file"
            ref={fileInputRef}
            id="fileInput"
            onChange={buttonAtivation}
          />
          <label htmlFor="fileInput">Add images</label>
        </section>
        <section className="Authorsection">
          <label htmlFor="" className="">
            Author
          </label>
          <input
            type="text"
            placeholder="@Author"
            className=""
            ref={authorInputRef}
            onKeyUp={buttonAtivation}
          />
          <label htmlFor="" className="">
            Link
          </label>
          <input
            type="text"
            placeholder="/Link"
            className=""
            ref={linkInputRef}
            onKeyUp={buttonAtivation}
          />
          <div className="leagalCases">
            <label htmlFor="" className="custom-checkbox">
              <input
                type="checkbox"
                className="checkbox"
                ref={CheckboxRef}
                onChange={buttonAtivation}
              />
              <span className="checkmark"></span>
            </label>
            <p>
              I agree to using this image under your name written in Author
              input. I have copy right laws to this image and agree to give copy
              right laws to owner of this webside. And gathered this information
              in database{' '}
            </p>
          </div>
          <button
            className="ConfirmButton"
            ref={buttonRef}
            onClick={buttonClickHandler}
          >
            Confirm
          </button>
        </section>
      </form>
    </div>
  );
};

export default Addyourpage;
