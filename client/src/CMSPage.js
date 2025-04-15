import React, { useEffect, useState } from 'react';

export default function CMSPage() {
  const [heading, setHeading] = useState('');
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/heading')
      .then(res => res.json())
      .then(data => setHeading(data.heading));
  }, []);

  const handleSave = async () => {
    await fetch('http://localhost:5000/heading', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: heading }),
    });
    setEditable(false);
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f0ea', minHeight: '100vh' }}>
      <button style={{ marginBottom: '1rem' }}>Heading</button>
      <br />
      <textarea
        rows="4"
        cols="60"
        value={heading}
        disabled={!editable}
        onChange={(e) => setHeading(e.target.value)}
        style={{ fontSize: '16px' }}
      />
      <br />
      <button onClick={() => setEditable(true)} style={{ marginRight: '1rem' }}>Edit</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
