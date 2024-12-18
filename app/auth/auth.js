// auth/auth.js
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const signup = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log('User signed up');
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('Email is already registered');
    }
    console.error('Error signing up: ', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in');
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      console.error('Email not found');
      throw new Error('Email not found');
    } else if (error.code === 'auth/wrong-password') {
      console.error('Incorrect password');
      throw new Error('Incorrect password');
    } else {
      // console.error('Error logging in: ', error);
      throw error;
    }
  }
};