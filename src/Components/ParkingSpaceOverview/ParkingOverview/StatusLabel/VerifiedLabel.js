import React from 'react'

const styles = {
    width: 100,
    height: 40,
    backgroundImage: 'linear-gradient(to right, #00A8B0, #78BE20)',
    padding: '2px 12px',
    fontSize: 10,
}

export default function VerifiedLabel() {
    return (
        <div>
            <span style={styles}>Verified</span>
        </div>
    )
}
