/**
 * Beasiswa Kita API service
 */

import { create } from 'apisauce';

import { ScholarshipService } from './Scholarship';

const baseURL = 'http://basisdatalab.com:8061/';

export const apiCreate = () => {
  const api = create({
    baseURL,
    headers: {},
  });

  return {
    Scholarship: ScholarshipService(api),
  };
};

// src/services/index.js

