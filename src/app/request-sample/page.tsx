import React from 'react';
import { Metadata } from 'next';
import { RequestSampleClient } from './RequestSampleClient';

export const metadata: Metadata = {
  title: 'Request Sample - Experience THINDOWN® Technology',
  description: 'Request a sample kit of THINDOWN® revolutionary down fabric. Experience the technology firsthand with customized samples for your application.',
};

export default function RequestSamplePage() {
  return <RequestSampleClient />;
}
