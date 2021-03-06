/**
 * Beasiswa Kita API service
 */

import { create } from 'apisauce';

import { File } from './File';
import { Authentication } from './Authentication';
import { StudentBoard } from './StudentBoard';
import { ScholarshipService } from './Scholarship';

const baseURL = 'http://basisdatalab.com:8061/';

export const apiCreate = () => {
  const api = create({
    baseURL,
    headers: {},
  });

  return {
 		File: File(api),
 		Authentication: Authentication(api),
 		StudentBoard: StudentBoard(api),
    Scholarship: ScholarshipService(api),

    setHeader: (key, value) => api.setHeader(key, value)
  };
};

// src/services/index.js

