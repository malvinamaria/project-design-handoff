/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import MeditationIcon from '../assets/MeditationIcon.svg';
import SelfCareIcon from '../assets/SelfCareIcon.svg';
import VolunteeringIcon from '../assets/VolunteeringIcon.svg';
import { Button } from './Button';

export const Benefits = () => {
  return (
    <div className="benefit-container">
      <h1>Ready to prioritize your well-being?</h1>
      <div className="benefit-cards">
        <div className="self-care-card">
          <svg
            className="self-care-icon"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <SelfCareIcon />
          </svg>
          <h2>
            Whether you're looking to reduce stress, improve your flexibility or
            build strength - there's a yoga class for you.
          </h2>
        </div>
        <div className="meditation-card">
          <svg
            className="meditation-icon"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <MeditationIcon />
          </svg>
          <h2>
            No matter where you are or what your schedule looks like, this
            wellness program is here for you
          </h2>
        </div>
        <div className="volunteering-card">
          <svg
            className="vol-icon"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <VolunteeringIcon />
          </svg>
          <h2>
            Get a nutrient-rich diet with recipes and meal plans for informed
            nutrition decisions from our experts.
          </h2>
          <Button>Start your 7-day FREE trial</Button>
        </div>
      </div>
    </div>
  );
};
