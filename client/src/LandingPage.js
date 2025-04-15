import React, { useEffect, useState } from 'react';

export default function LandingPage() {
  const [heading, setHeading] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/heading')
      .then(res => res.json())
      .then(data => setHeading(data.heading));
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{heading}</h1>
      <p>Other static content here (from Figma)</p>
    </div>
  );
}
