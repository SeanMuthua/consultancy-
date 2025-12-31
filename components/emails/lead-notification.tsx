import * as React from 'react';

interface LeadNotificationEmailProps {
    name: string;
    email: string;
    phone: string;
    track: string;
    message: string;
}

export const LeadNotificationEmail: React.FC<Readonly<LeadNotificationEmailProps>> = ({
    name,
    email,
    phone,
    track,
    message,
}) => (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', padding: '20px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px', border: '1px solid #eaeaea' }}>
            <h2 style={{ color: '#b10202', margin: '0 0 20px' }}>New Lead Received</h2>

            <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#fff5f5', borderRadius: '4px', borderLeft: '4px solid #b10202' }}>
                <p style={{ margin: '0', fontWeight: 'bold' }}>Track Selection:</p>
                <p style={{ margin: '5px 0 0', fontSize: '18px', color: '#b10202' }}>
                    {track === 'track1' && 'TRACK 1: Enterprise (Steve)'}
                    {track === 'track2' && 'TRACK 2: Modern Web (You)'}
                    {track === 'collaborative' && 'COLLABORATIVE: Hybrid Model'}
                </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontSize: '14px', textTransform: 'uppercase', color: '#666', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Contact Details</h3>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> <a href={`mailto:${email}`} style={{ color: '#b10202' }}>{email}</a></p>
                <p><strong>Phone:</strong> {phone}</p>
            </div>

            <div>
                <h3 style={{ fontSize: '14px', textTransform: 'uppercase', color: '#666', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>Project Message</h3>
                <p style={{ lineHeight: '1.6', color: '#333' }}>{message}</p>
            </div>

            <div style={{ marginTop: '30px', fontSize: '12px', color: '#999', textAlign: 'center' }}>
                <p>Crimson Forge Digital Auto-Notification</p>
            </div>
        </div>
    </div>
);
