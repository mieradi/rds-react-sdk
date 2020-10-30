/**
 * @name Details
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { Button } from '../button/Button';
import { DetailsStyles } from './DetailsStyles';

interface DetailsProps {}

export const Details: React.FC<DetailsProps> = ({}): JSX.Element => {
  return (
    <DetailsStyles>
      <div className="b-details b-details--figure">
        <div className="details__aside">
          <figure>
            <img
              src="https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg"
              alt=""
            />
            <figcaption>
              Danny Brown
              <br />
              Director, Enterprise Applications
            </figcaption>
          </figure>
        </div>
        <div className="details__meta">
          <dl className="u-link">
            <dt>Phone</dt>
            <dd>x8998</dd>

            <dt>Mobile</dt>
            <dd>613-218-7373</dd>

            <dt>Email</dt>
            <dd>
              <a href="mailto:danny.brown@carleton.ca">
                danny.brown@carleton.ca
              </a>
            </dd>

            <dt>Office</dt>
            <dd>401k RO</dd>

            <dt>Pronouns</dt>
            <dd>Him / His</dd>
          </dl>
        </div>
      </div>
      <footer>
        <Button title={`Edit Profile`} url="/" grey center full />
      </footer>
    </DetailsStyles>
  );
};
